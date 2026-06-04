import { useEffect, useState } from 'react';
import { localStorageAdapter } from './localStorageAdapter';
import type { StorageAdapter } from './StorageAdapter';

/**
 * State that is persisted through a StorageAdapter. Defaults to localStorage
 * but accepts any adapter, so swapping the backend is a one-line change.
 */
export function usePersistentState<T>(
  key: string,
  initial: T,
  adapter: StorageAdapter = localStorageAdapter,
) {
  const [value, setValue] = useState<T>(() => adapter.read(key, initial));

  useEffect(() => {
    adapter.write(key, value);
  }, [key, value, adapter]);

  return [value, setValue] as const;
}
