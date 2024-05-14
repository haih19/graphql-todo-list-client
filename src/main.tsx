import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider, ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    colorBgLayout: "#E4EAF2",
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider direction="ltr" theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>
);
