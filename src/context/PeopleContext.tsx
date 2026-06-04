import { createContext, useCallback, useContext, useMemo } from 'react';
import type { ReactNode } from 'react';
import { usePersistentState } from '@/storage/usePersistentState';
import type { Person } from '@/types';

interface PeopleContextValue {
  people: Person[];
  addPerson: (name: string) => void;
  updatePerson: (id: string, name: string) => void;
  removePerson: (id: string) => void;
}

const PeopleContext = createContext<PeopleContextValue | null>(null);

export function PeopleProvider({ children }: { children: ReactNode }) {
  const [people, setPeople] = usePersistentState<Person[]>('people', []);

  const addPerson = useCallback(
    (name: string) => {
      const trimmed = name.trim();
      if (!trimmed) return;
      setPeople((prev) => [
        ...prev,
        { id: crypto.randomUUID(), name: trimmed },
      ]);
    },
    [setPeople],
  );

  const updatePerson = useCallback(
    (id: string, name: string) => {
      const trimmed = name.trim();
      if (!trimmed) return;
      setPeople((prev) =>
        prev.map((p) => (p.id === id ? { ...p, name: trimmed } : p)),
      );
    },
    [setPeople],
  );

  const removePerson = useCallback(
    (id: string) => {
      setPeople((prev) => prev.filter((p) => p.id !== id));
    },
    [setPeople],
  );

  const value = useMemo(
    () => ({ people, addPerson, updatePerson, removePerson }),
    [people, addPerson, updatePerson, removePerson],
  );

  return (
    <PeopleContext.Provider value={value}>{children}</PeopleContext.Provider>
  );
}

export function usePeople() {
  const ctx = useContext(PeopleContext);
  if (!ctx) {
    throw new Error('usePeople must be used within a PeopleProvider');
  }
  return ctx;
}
