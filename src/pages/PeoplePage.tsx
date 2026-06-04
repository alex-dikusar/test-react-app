import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { usePeople } from '@/context/PeopleContext';
import { useTodos } from '@/context/TodosContext';
import type { Person } from '@/types';

function PersonRow({ person }: { person: Person }) {
  const { updatePerson, removePerson } = usePeople();
  const { unassignPerson } = useTodos();
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(person.name);

  function save() {
    updatePerson(person.id, draft);
    setEditing(false);
  }

  function remove() {
    unassignPerson(person.id);
    removePerson(person.id);
  }

  return (
    <li className="flex items-center gap-2 py-2">
      {editing ? (
        <>
          <Input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && save()}
            autoFocus
          />
          <Button size="sm" onClick={save}>
            Save
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              setDraft(person.name);
              setEditing(false);
            }}
          >
            Cancel
          </Button>
        </>
      ) : (
        <>
          <span className="flex-1">{person.name}</span>
          <Button size="sm" variant="outline" onClick={() => setEditing(true)}>
            Edit
          </Button>
          <Button size="sm" variant="destructive" onClick={remove}>
            Delete
          </Button>
        </>
      )}
    </li>
  );
}

export function PeoplePage() {
  const { people, addPerson } = usePeople();
  const [name, setName] = useState('');

  function submit() {
    addPerson(name);
    setName('');
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>People</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="New person name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && submit()}
          />
          <Button onClick={submit}>Add</Button>
        </div>

        {people.length === 0 ? (
          <p className="text-muted-foreground text-sm">No people yet.</p>
        ) : (
          <ul className="divide-y">
            {people.map((person) => (
              <PersonRow key={person.id} person={person} />
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
