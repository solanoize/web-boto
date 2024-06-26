import { Col, Row } from "react-bootstrap";
import PermissionSettingMenu from "./permissions/settings/PermissionSettingMenu";

const Menu = () => {
  return (
    <>
      <Row>
        <Col>
          <PermissionSettingMenu />
        </Col>
        <Col>
          <PermissionSettingMenu />
        </Col>
      </Row>
    </>
  );
};

export default Menu;
