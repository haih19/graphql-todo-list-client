import { Suspense } from "react";
import { IRoute } from "@/types";

export const RouteComponent = (props: IRoute) => {
  const { layout: Layout, component: Component } = props;

  const RenderComponent = Layout ? (
    <Layout>
      <Component />
    </Layout>
  ) : (
    <Component />
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>{RenderComponent}</Suspense>
  );
};
