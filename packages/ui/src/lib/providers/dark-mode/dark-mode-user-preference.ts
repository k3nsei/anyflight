import { StorageUtil, StorageUtilEventType } from '@anyflight/utils';

export class DarkModeUserPreference {
  static readonly #storage = StorageUtil.getInstance<boolean>('af-dark-mode-user-preference');

  static #instance: DarkModeUserPreference | null = null;

  public get value(): boolean | undefined {
    return this.#value;
  }

  #value?: boolean = this.#get();

  readonly #observers = new Set<(value?: boolean) => void>();

  private constructor() {
    DarkModeUserPreference.#storage.on(StorageUtilEventType.CHANGE, ({ isExternal, newValue }) => {
      if (isExternal) {
        this.#value = newValue ?? undefined;
      }

      this.#emit();
    });
  }

  public static getInstance(): DarkModeUserPreference {
    this.#instance ??= new DarkModeUserPreference();

    return this.#instance;
  }

  public next(value?: 'dark' | 'light' | null): void {
    this.#set(value);
    this.#persist();
  }

  public subscribe(callback: (value?: boolean) => void): () => void {
    this.#observers.add(callback);

    return () => this.unsubscribe(callback);
  }

  public unsubscribe(callback: (value?: boolean) => void): void {
    this.#observers.delete(callback);
  }

  #emit(): void {
    this.#observers.forEach((callback) => callback(this.#value));
  }

  #get(): boolean | undefined {
    return DarkModeUserPreference.#storage.get() ?? undefined;
  }

  #set(value?: 'dark' | 'light' | null): void {
    this.#value = value != null ? value === 'dark' : undefined;
  }

  #persist(): void {
    this.#value != null ? DarkModeUserPreference.#storage.set(this.#value) : DarkModeUserPreference.#storage.remove();
  }
}
