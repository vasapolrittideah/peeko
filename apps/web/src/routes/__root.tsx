import { User } from '@repo/database';
import { NotificationProvider } from '@repo/ui';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import NotFound from '@/components/errors/not-found';

export interface RouterContext {
  user: User;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: Root,
  notFoundComponent: () => <NotFound />,
});

function Root() {
  return (
    <div>
      <Outlet />
      {import.meta.env.DEV && (
        <>
          <TanStackRouterDevtools />
          <ReactQueryDevtools />
        </>
      )}
      <NotificationProvider />
    </div>
  );
}
