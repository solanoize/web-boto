import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import ManagerWidgetMenu from "./ManagerWidgetMenu";

function ManagerWidgetHeader() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Navbar with text</Navbar.Brand>
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
