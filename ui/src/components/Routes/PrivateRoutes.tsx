import React from 'react';
import { Route, Redirect } from 'react-router-dom';

type Props = {
  path: string;
  exact?: boolean;
  component: React.FC;
};

export const PrivateRoute: React.FC<Props> = ({
  component: Component,
  path,
  ...rest
}) => {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props: any) =>
        path === path.toLowerCase() ? (
          <Component {...props} />
        ) : (
          <>
            <Redirect to={path.toLowerCase()} />
            <Component {...props} />
          </>
        )
      }
    />
  );
};
