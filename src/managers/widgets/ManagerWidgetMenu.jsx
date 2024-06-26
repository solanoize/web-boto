import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BiMenu } from "react-icons/bi";
import Menu from "../../Menu";
import { Col, Row } from "react-bootstrap";
import PermissionSettingMenu from "../../permissions/settings/PermissionSettingMenu";
import RoleSettingMenu from "../../roles/setttings/RoleSettingMenu";

function ManagerWidgetMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <BiMenu size={18} /> Menu
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mb-3">
            <Col>
              <PermissionSettingMenu />
            </Col>
            <Col>
              <RoleSettingMenu />
            </Col>
          </Row>
          <Menu />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ManagerWidgetMenu;
