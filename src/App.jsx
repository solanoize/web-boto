import useAuth from "./utils/hooks/useAuth.jsx";
import { UtilStateContextBase } from "./utils/states/contexts";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import PermissionSettingRouter from "./systems/permissions/settings/PermissionSettingRouter.jsx";
import RoleSettingRouter from "./systems/roles/setttings/RoleSettingRouter.jsx";
import UserSettingRouter from "./systems/users/settings/UserSettingRouter.jsx";
import DashboardSettingRouter from "./systems/dashboards/settings/DashboardSettingRouter.jsx";
import ProductSettingRouter from "./modules/products/settings/ProductSettingRouter.jsx";
import OrderSettingRouter from "./modules/orders/settings/OrderSettingRouter.jsx";

function App() {
  const auth = useAuth();

  return (
    <UtilStateContextBase.Provider value={{ auth }}>
      <BrowserRouter>
        <Routes>
          <Route path={"/*"} element={<DashboardSettingRouter />} />
          <Route
            path={"/permissions/*"}
            element={<PermissionSettingRouter />}
          />
          <Route path={"/roles/*"} element={<RoleSettingRouter />} />
          <Route path={"/users/*"} element={<UserSettingRouter />} />
          <Route path={"/products/*"} element={<ProductSettingRouter />} />
          <Route path={"/orders/*"} element={<OrderSettingRouter />} />
        </Routes>
      </BrowserRouter>
    </UtilStateContextBase.Provider>
  );
}

export default App;
