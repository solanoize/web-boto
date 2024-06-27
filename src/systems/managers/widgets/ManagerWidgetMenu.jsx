import { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { BiMenu } from "react-icons/bi";
import { NavLink, Table } from "react-bootstrap";
import { MENUS } from "../../../settings.jsx";
import { FaSearch } from "react-icons/fa";
import { UtilStateContextBase } from "../../../utils/states/contexts.jsx";
import useAPI from "../../../utils/hooks/useAPI.jsx";
import useAccess from "../../../utils/hooks/useAccess.jsx";

function ManagerWidgetMenu() {
  const context = useContext(UtilStateContextBase);
  const api = useAPI();
  const access = useAccess(context, api);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onShow = () => {
    access.verify();
  };

  return (
    <>
      <NavLink variant="primary" onClick={handleShow}>
        <BiMenu size={24} className="text-primary" />
      </NavLink>

      <Modal onShow={onShow} size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Menu</Modal.Title>
        </Modal.Header>
        <Table responsive>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Access</th>
            </tr>
          </thead>
          <tbody>
            {MENUS.map((menu, index) => (
              <tr key={index}>
                {access.has(
                  menu.permissions,
                  context.auth.superuser,
                  context.auth.accessList,
                  menu.or
                ) && (
                  <>
                    <td>{menu.title}</td>
                    <td>
                      <NavLink size="sm" href={menu.link}>
                        <FaSearch />
                      </NavLink>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal>
    </>
  );
}

export default ManagerWidgetMenu;
