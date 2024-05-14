import { Layout, theme } from "antd";
import { LayoutProps } from "@/types";

const { Header, Content, Footer } = Layout;

const MainLayout = ({ children }: LayoutProps) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout
      style={{
        height: "100dvh",
      }}
    >
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="demo-logo flex items-center gap-2.5 cursor-pointer">
          <div className="text-white font-medium text-lg">
            React + Graphql + Typescript
          </div>
        </div>
      </Header>
      <Content
        style={{ height: "100%" }}
        className=" md:px-[32px] xl:px-[48px]"
      >
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            height: "100%",
            overflowX: "hidden",
          }}
        >
          <Content
            style={{
              padding: "0 24px",
              maxWidth: "90%",
              width: 1200,
              margin: "auto",
            }}
          >
            {children}
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Weather ©{new Date().getFullYear()} Created by Haih
      </Footer>
    </Layout>
  );
};

export default MainLayout;
