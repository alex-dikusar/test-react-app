import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { usePeople } from '@/context/PeopleContext';
import { useTodos } from '@/context/TodosContext';
import type { Person, Todo } from '@/types';

const UNASSIGNED = 'none';

function AssigneeSelect({
  value,
  people,
  onChange,
}: {
  value: string | null;
  people: Person[];
  onChange: (assigneeId: string | null) => void;
}) {
  return (
    <Select
      value={value ?? UNASSIGNED}
      onValueChange={(v) => onChange(v === UNASSIGNED ? null : v)}
    >
      <SelectTrigger className="w-40">
        <SelectValue placeholder="Assignee" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={UNASSIGNED}>Unassigned</SelectItem>
        {people.map((p) => (
          <SelectItem key={p.id} value={p.id}>
            {p.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

function TodoRow({ todo }: { todo: Todo }) {
  const { people } = usePeople();
  const { updateTodo, toggleTodo, removeTodo } = useTodos();
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(todo.title);

  function save() {
    updateTodo(todo.id, { title: draft.trim() || todo.title });
    setEditing(false);
  }

  return (
    <li className="flex items-center gap-2 py-2">
      <Checkbox
        checked={todo.done}
        onCheckedChange={() => toggleTodo(todo.id)}
      />
      {editing ? (
        <Input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && save()}
          autoFocus
        />
      ) : (
        <span
          className={
            todo.done ? 'flex-1 text-muted-foreground line-through' : 'flex-1'
          }
        >
          {todo.title}
        </span>
      )}

      <AssigneeSelect
        value={todo.assigneeId}
        people={people}
        onChange={(assigneeId) => updateTodo(todo.id, { assigneeId })}
      />

      {editing ? (
        <Button size="sm" onClick={save}>
          Save
        </Button>
      ) : (
        <Button size="sm" variant="outline" onClick={() => setEditing(true)}>
          Edit
        </Button>
      )}
      <Button
        size="sm"
        variant="destructive"
        onClick={() => removeTodo(todo.id)}
      >
        Delete
      </Button>
    </li>
  );
}

export function TodosPage() {
  const { people } = usePeople();
  const { todos, addTodo } = useTodos();
  const [title, setTitle] = useState('');
  const [assigneeId, setAssigneeId] = useState<string | null>(null);

  function submit() {
    addTodo(title, assigneeId);
    setTitle('');
    setAssigneeId(null);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Todos</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="What needs to be done?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && submit()}
          />
          <AssigneeSelect
            value={assigneeId}
            people={people}
            onChange={setAssigneeId}
          />
          <Button onClick={submit}>Add</Button>
        </div>

        {todos.length === 0 ? (
          <p className="text-muted-foreground text-sm">No todos yet.</p>
        ) : (
          <ul className="divide-y">
            {todos.map((todo) => (
              <TodoRow key={todo.id} todo={todo} />
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
