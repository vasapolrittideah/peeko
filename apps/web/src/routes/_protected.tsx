import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_protected')({
  beforeLoad: async ({ context, location }) => {
    console.log(context);
    if (!context.user) {
      // throw redirect({
      //   to: '/auth/login',
      //   search: {
      //     redirect: location.href,
      //   },
      // });
    }
  },
});
