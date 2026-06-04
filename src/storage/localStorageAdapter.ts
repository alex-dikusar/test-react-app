import type { StorageAdapter } from './StorageAdapter';

export const localStorageAdapter: StorageAdapter = {
  read<T>(key: string, fallback: T): T {
    try {
      const raw = localStorage.getItem(key);
      return raw === null ? fallback : (JSON.parse(raw) as T);
    } catch {
      return fallback;
    }
  },

  write<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  },
};
