import { useContext } from "react";
import { UtilStateContextBase } from "../../utils/states/contexts";
import ManagerWidgetRBAC from "../../managers/widgets/ManagerWidgetRBAC";
import { CREATE_ORDERS, READ_ORDERS } from "../states/constants";
import { READ_PRODUCTS } from "../../products/states/constants";
import { NavDropdown } from "react-bootstrap";

const OrderSettingMenu = () => {
  const context = useContext(UtilStateContextBase);

  return (
    <ManagerWidgetRBAC
      context={context}
      permissions={[READ_ORDERS, CREATE_ORDERS, READ_PRODUCTS]}
      or={true}
    >
      <NavDropdown title="Order Manager">
        <ManagerWidgetRBAC context={context} permissions={[READ_ORDERS]}>
          <NavDropdown.Item href="#orders">Orders</NavDropdown.Item>
        </ManagerWidgetRBAC>

        <ManagerWidgetRBAC
          context={context}
          permissions={[CREATE_ORDERS, READ_PRODUCTS]}
        >
          <NavDropdown.Item href="#orders/new">New Order</NavDropdown.Item>
        </ManagerWidgetRBAC>
      </NavDropdown>
    </ManagerWidgetRBAC>
  );
};

export default OrderSettingMenu;
