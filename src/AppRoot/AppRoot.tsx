import * as React from 'react';

type AppRootProps = {
  children: React.ReactNode;
};

export default function AppRoot(props: AppRootProps) {
  const { children } = props;

  return <div>{children}</div>;
}
