export interface Person {
  id: string;
  name: string;
}

export interface Todo {
  id: string;
  title: string;
  done: boolean;
  /** id of the assigned person, or null if unassigned */
  assigneeId: string | null;
}
