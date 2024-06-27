import { FaPlusCircle, FaTractor } from "react-icons/fa";

const ManagerWidgetSidebar = () => {
  return (
    <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
      <div
        className="offcanvas-md offcanvas-end bg-body-tertiary"
        tabIndex="-1"
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">
            Company name
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a
                className="nav-link d-flex align-items-center gap-2 active"
                aria-current="page"
                href="src/systems/managers/widgets/ManagerWidgetSidebar.jsx#"
              >
                <FaTractor />
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="src/systems/managers/widgets/ManagerWidgetSidebar.jsx#">
                <FaTractor />
                Orders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="src/systems/managers/widgets/ManagerWidgetSidebar.jsx#">
                <FaTractor />
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="src/systems/managers/widgets/ManagerWidgetSidebar.jsx#">
                <FaTractor />
                Customers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="src/systems/managers/widgets/ManagerWidgetSidebar.jsx#">
                <FaTractor />
                Reports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="src/systems/managers/widgets/ManagerWidgetSidebar.jsx#">
                <FaTractor />
                Integrations
              </a>
            </li>
          </ul>

          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
            <span>Saved reports</span>
            <a
              className="link-secondary"
              href="src/systems/managers/widgets/ManagerWidgetSidebar.jsx#"
              aria-label="Add a new report"
            >
              <FaPlusCircle />
            </a>
          </h6>
          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="src/systems/managers/widgets/ManagerWidgetSidebar.jsx#">
                <FaTractor />
                Current month
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="src/systems/managers/widgets/ManagerWidgetSidebar.jsx#">
                <FaTractor />
                Last quarter
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="src/systems/managers/widgets/ManagerWidgetSidebar.jsx#">
                <FaTractor />
                Social engagement
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="src/systems/managers/widgets/ManagerWidgetSidebar.jsx#">
                <FaTractor />
                Year-end sale
              </a>
            </li>
          </ul>

          <hr className="my-3" />

          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="src/systems/managers/widgets/ManagerWidgetSidebar.jsx#">
                <FaTractor />
                Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="src/systems/managers/widgets/ManagerWidgetSidebar.jsx#">
                <FaTractor />
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ManagerWidgetSidebar;
