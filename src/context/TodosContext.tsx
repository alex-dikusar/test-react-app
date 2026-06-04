import { createContext, useCallback, useContext, useMemo } from 'react';
import type { ReactNode } from 'react';
import { usePersistentState } from '@/storage/usePersistentState';
import type { Todo } from '@/types';

interface TodosContextValue {
  todos: Todo[];
  addTodo: (title: string, assigneeId: string | null) => void;
  updateTodo: (id: string, changes: Partial<Omit<Todo, 'id'>>) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  /** Clears the assignee on every todo assigned to the given person. */
  unassignPerson: (personId: string) => void;
}

const TodosContext = createContext<TodosContextValue | null>(null);

export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = usePersistentState<Todo[]>('todos', []);

  const addTodo = useCallback(
    (title: string, assigneeId: string | null) => {
      const trimmed = title.trim();
      if (!trimmed) return;
      setTodos((prev) => [
        ...prev,
        { id: crypto.randomUUID(), title: trimmed, done: false, assigneeId },
      ]);
    },
    [setTodos],
  );

  const updateTodo = useCallback(
    (id: string, changes: Partial<Omit<Todo, 'id'>>) => {
      setTodos((prev) =>
        prev.map((t) => (t.id === id ? { ...t, ...changes } : t)),
      );
    },
    [setTodos],
  );

  const toggleTodo = useCallback(
    (id: string) => {
      setTodos((prev) =>
        prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
      );
    },
    [setTodos],
  );

  const removeTodo = useCallback(
    (id: string) => {
      setTodos((prev) => prev.filter((t) => t.id !== id));
    },
    [setTodos],
  );

  const unassignPerson = useCallback(
    (personId: string) => {
      setTodos((prev) =>
        prev.map((t) =>
          t.assigneeId === personId ? { ...t, assigneeId: null } : t,
        ),
      );
    },
    [setTodos],
  );

  const value = useMemo(
    () => ({
      todos,
      addTodo,
      updateTodo,
      toggleTodo,
      removeTodo,
      unassignPerson,
    }),
    [todos, addTodo, updateTodo, toggleTodo, removeTodo, unassignPerson],
  );

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
}

export function useTodos() {
  const ctx = useContext(TodosContext);
  if (!ctx) {
    throw new Error('useTodos must be used within a TodosProvider');
  }
  return ctx;
}
