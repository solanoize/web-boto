import { useContext } from "react";
import { UtilStateContextBase } from "../../../utils/states/contexts.jsx";
import { Accordion, NavLink } from "react-bootstrap";
import ManagerWidgetRBAC from "../../managers/widgets/ManagerWidgetRBAC.jsx";
import { CREATE_PERMISSIONS, READ_PERMISSIONS } from "../states/constants.jsx";

const PermissionSettingMenu = () => {
  const context = useContext(UtilStateContextBase);

  return (
    <ManagerWidgetRBAC
      context={context}
      permissions={[READ_PERMISSIONS, CREATE_PERMISSIONS]}
      or={true}
    >
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Permission Manager</Accordion.Header>
          <Accordion.Body>
            <ManagerWidgetRBAC
              context={context}
              permissions={[READ_PERMISSIONS]}
            >
              <NavLink
                className="d-flex align-items-center gap-2"
                href="/permissions"
              >
                Permissions
              </NavLink>
            </ManagerWidgetRBAC>
            <ManagerWidgetRBAC
              context={context}
              permissions={[CREATE_PERMISSIONS]}
            >
              <NavLink
                className="d-flex align-items-center gap-2"
                href="/permissions/new"
              >
                Generate Permissions
              </NavLink>
            </ManagerWidgetRBAC>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </ManagerWidgetRBAC>
  );
};

export default PermissionSettingMenu;
