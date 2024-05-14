import { Route, Routes } from "react-router-dom";
import { RouteComponent, routeList } from "./router";

function App() {
  return (
    <Routes>
      {routeList.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<RouteComponent {...route} />}
        />
      ))}
    </Routes>
  );
}

export default App;
