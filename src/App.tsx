import { useState } from 'react';
import { Button } from '@/components/ui/button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-semibold tracking-tight">test-react-app</h1>
      <p className="text-muted-foreground">Vite + React + shadcn/ui starter</p>
      <Button onClick={() => setCount((c) => c + 1)}>Count is {count}</Button>
    </main>
  );
}

export default App;
