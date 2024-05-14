import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider, ThemeConfig } from "antd";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const theme: ThemeConfig = {
  token: {
    colorBgLayout: "#E4EAF2",
  },
};

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <ConfigProvider direction="ltr" theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </ApolloProvider>
);
