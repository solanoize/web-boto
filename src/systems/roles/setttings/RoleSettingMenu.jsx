import { useContext } from "react";
import { UtilStateContextBase } from "../../../utils/states/contexts.jsx";
import ManagerWidgetRBAC from "../../managers/widgets/ManagerWidgetRBAC.jsx";
import { CREATE_ROLES, READ_ROLES } from "../states/constants.jsx";
import { Accordion, NavLink } from "react-bootstrap";
import { READ_PERMISSIONS } from "../../permissions/states/constants.jsx";

const RoleSettingMenu = () => {
  const context = useContext(UtilStateContextBase);

  return (
    <ManagerWidgetRBAC
      context={context}
      permissions={[READ_ROLES, CREATE_ROLES, READ_PERMISSIONS]}
    >
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Role Manager</Accordion.Header>
          <Accordion.Body>
            <ManagerWidgetRBAC context={context} permissions={[READ_ROLES]}>
              <NavLink
                className="d-flex align-items-center gap-2"
                href="/roles"
              >
                Roles
              </NavLink>
            </ManagerWidgetRBAC>
            <ManagerWidgetRBAC
              context={context}
              permissions={[CREATE_ROLES, READ_PERMISSIONS]}
            >
              <NavLink
                className="d-flex align-items-center gap-2"
                href="/roles/new"
              >
                New Role
              </NavLink>
            </ManagerWidgetRBAC>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </ManagerWidgetRBAC>
  );
};

export default RoleSettingMenu;
