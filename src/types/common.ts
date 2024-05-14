export type LayoutProps = {
  children: React.ReactNode;
};

export type IRoute = {
  path: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
  layout?: React.LazyExoticComponent<
    ({ children }: LayoutProps) => JSX.Element
  >;
};
