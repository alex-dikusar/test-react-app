import { NavLink, Outlet } from 'react-router-dom';
import { cn } from '@/lib/utils';

const linkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    'rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
    isActive
      ? 'bg-primary text-primary-foreground'
      : 'text-muted-foreground hover:text-foreground',
  );

export function AppLayout() {
  return (
    <div className="mx-auto max-w-2xl p-6">
      <header className="mb-6 flex items-center gap-2">
        <h1 className="mr-4 text-xl font-semibold tracking-tight">
          test-react-app
        </h1>
        <nav className="flex gap-1">
          <NavLink to="/todos" className={linkClass}>
            Todos
          </NavLink>
          <NavLink to="/people" className={linkClass}>
            People
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
