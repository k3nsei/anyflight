export class DarkModeUserPreference {
  public static readonly STORAGE_KEY = 'af-dark-mode';

  static #instance: DarkModeUserPreference | null = null;

  public get value(): boolean | null {
    return this.#value;
  }

  #observers: ReadonlyArray<(value: boolean | null) => void> = [];

  #value: boolean | null = this.#getValue();

  private constructor() {
    globalThis.addEventListener('storage', ({ storageArea, key, newValue }: StorageEvent) => {
      if (storageArea === globalThis.localStorage && key === DarkModeUserPreference.STORAGE_KEY) {
        const nextValue = this.#parseValue(newValue);

        this.#value = nextValue;

        this.#emit(nextValue);
      }
    });
  }

  public static getInstance(): DarkModeUserPreference {
    this.#instance ??= new DarkModeUserPreference();

    return this.#instance;
  }

  public next(value: boolean | null): void {
    if (value != null) {
      globalThis.localStorage.setItem(DarkModeUserPreference.STORAGE_KEY, JSON.stringify(value));
    } else {
      globalThis.localStorage.removeItem(DarkModeUserPreference.STORAGE_KEY);
    }

    this.#value = value;

    this.#emit(value);
  }

  public subscribe(callback: (value: boolean | null) => void): () => void {
    this.#observers = this.#observers.concat(callback);

    return () => this.unsubscribe(callback);
  }

  public unsubscribe(callback: (value: boolean | null) => void): void {
    this.#observers = this.#observers.filter((cb) => cb !== callback);
  }

  #getValue(): boolean | null {
    return this.#parseValue(globalThis.localStorage.getItem(DarkModeUserPreference.STORAGE_KEY));
  }

  #emit(value: boolean | null): void {
    for (const callback of this.#observers) {
      callback(value);
    }
  }

  #parseValue(value: unknown): boolean | null {
    let result;

    try {
      result = JSON.parse(value as string);
    } catch {
      // Ignore parse errors
    }

    return result != null ? !!result : null;
  }
}
