/**
 * Persistence abstraction. UI/state code depends only on this interface,
 * never on a concrete storage backend, so the backing store (localStorage
 * now, a REST API later) can be swapped without touching consumers.
 */
export interface StorageAdapter {
  read<T>(key: string, fallback: T): T;
  write<T>(key: string, value: T): void;
}
