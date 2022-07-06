import { fromBase64, toBase64 } from './base64';

export enum StorageUtilType {
  PERSISTENT = 'persistent',
  SESSION = 'session',
}

export enum StorageUtilEventType {
  EXTERNAL_CHANGE = 'externalChange',
  CHANGE = 'change',
}

interface StorageUtilEvent<T = unknown> {
  type: `${StorageUtilEventType}`;
  isExternal: boolean;
  newValue: T | null;
  oldValue: T | null;
}

interface StorageUtilEventHandler<T = unknown> {
  (event: StorageUtilEvent<T>): void;
}

export class StorageUtil<T = unknown> {
  static #persistentInstances = new Map<string, StorageUtil>();

  static #sessionInstances = new Map<string, StorageUtil>();

  readonly #storage: Storage;

  readonly #key: string;

  readonly #listeners = new Map<`${StorageUtilEventType}`, Set<StorageUtilEventHandler<T>>>([
    [StorageUtilEventType.EXTERNAL_CHANGE, new Set()],
    [StorageUtilEventType.CHANGE, new Set()],
  ]);

  private constructor(type: `${StorageUtilType}`, key: string) {
    this.#storage = type === StorageUtilType.SESSION ? globalThis.sessionStorage : globalThis.localStorage;
    this.#key = key;

    globalThis.addEventListener('storage', ({ storageArea, key, oldValue, newValue }: StorageEvent) => {
      if (storageArea === this.#storage && key === this.#key) {
        const event = {
          isExternal: true,
          oldValue: this.#parse(oldValue),
          newValue: this.#parse(newValue),
        };

        this.#emitExternalChange(event);
        this.#emitChange(event);
      }
    });
  }

  public static getInstance<T>(key: string, type: `${StorageUtilType}` = StorageUtilType.PERSISTENT): StorageUtil<T> {
    const instances =
      type === StorageUtilType.SESSION ? StorageUtil.#sessionInstances : StorageUtil.#persistentInstances;
    let instance = instances.get(key);

    if (instance == null) {
      instance = new StorageUtil(type, key);
      instances.set(key, instance);
    }

    return instance as StorageUtil<T>;
  }

  get(): T | null {
    return this.#parse(this.#storage.getItem(this.#key));
  }

  set(value: T): void {
    const oldValue = this.get();
    this.#storage.setItem(this.#key, toBase64(JSON.stringify(value)));
    this.#emitChange({ isExternal: false, oldValue, newValue: value });
  }

  remove(): void {
    this.#storage.removeItem(this.#key);
  }

  on(type: `${StorageUtilEventType}`, callback: StorageUtilEventHandler<T>): () => void {
    this.#listeners.get(type)?.add(callback);

    return () => this.off(type, callback);
  }

  off(type: `${StorageUtilEventType}`, callback: StorageUtilEventHandler<T>): void {
    this.#listeners.get(type)?.delete(callback);
  }

  #parse(value: string | null): T | null {
    try {
      return typeof value === 'string' ? JSON.parse(fromBase64(value)) : null;
    } catch {
      return null;
    }
  }

  #emitExternalChange(data: Omit<StorageUtilEvent<T>, 'type'>): void {
    this.#emit(Object.assign(data, { type: StorageUtilEventType.EXTERNAL_CHANGE }));
  }

  #emitChange(data: Omit<StorageUtilEvent<T>, 'type'>): void {
    this.#emit(Object.assign(data, { type: StorageUtilEventType.CHANGE }));
  }

  #emit(event: StorageUtilEvent<T>) {
    this.#listeners.get(event.type)?.forEach((callback) => callback(event));
  }
}
