import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import ManagerWidgetMenu from "./ManagerWidgetMenu";
import { APP_TITLE } from "../../settings";

function ManagerWidgetHeader() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">{APP_TITLE}</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <ManagerWidgetMenu />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ManagerWidgetHeader;
