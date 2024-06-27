import PropTypes from "prop-types";
import { useContext } from "react";
import { UtilStateContextBase } from "../../../utils/states/contexts.jsx";
import UserPageSignIn from "../../users/pages/UserPageSignIn.jsx";
import ManagerWidgetHeader from "./ManagerWidgetHeader.jsx";

const ManagerWidgetLayoutProtected = ({ children }) => {
  const context = useContext(UtilStateContextBase);

  return (
    <>
      {context.auth.isAuthenticated ? (
        <>
          <ManagerWidgetHeader />
          <div className="mb-4"></div>
          {children}
        </>
      ) : (
        <UserPageSignIn />
      )}
    </>
  );
};

ManagerWidgetLayoutProtected.propTypes = {
  children: PropTypes.element,
};

export default ManagerWidgetLayoutProtected;
