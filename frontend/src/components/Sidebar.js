import React, { useState } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

import styles from "./styles/sidebar.module.css";

const Sidebar = () => {
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  const [showSuppliersDropdown, setShowSuppliersDropdown] = useState(false);
  const [showInquiriesDropdown, setShowInquiriesDropdown] = useState(false);
  const [showMoreOptionsDropdown, setShowMoreOptionsDropdown] = useState(false);

  const handleProjectsDropdown = () => {
    setShowProjectsDropdown(!showProjectsDropdown);
  };

  const handleSuppliersDropdown = () => {
    setShowSuppliersDropdown(!showSuppliersDropdown);
  };

  const handleInquiriesDropdown = () => {
    setShowInquiriesDropdown(!showInquiriesDropdown);
  };

  const handleMoreOptionsDropdown = () => {
    setShowMoreOptionsDropdown(!showMoreOptionsDropdown);
  };

  return (
    <div
      style={{
        display: "flex",
        height: "calc(100vh - 86px)",
        overflow: "scroll initial",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <CDBSidebar textColor="#0000008C" className=" navbar-light bg-light">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <h4 className="text-decoration-none" style={{ color: "inherit" }}>
            Dashboard
          </h4>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="" activeClassName="activeClicked">
              <CDBSidebarMenuItem
                className={styles.links}
                icon="fas fa-archway"
              >
                Home
              </CDBSidebarMenuItem>
            </NavLink>
            <div onClick={handleProjectsDropdown}>
              <CDBSidebarMenuItem
                icon="fas fa-location-arrow"
                className={styles.links}
              >
                Projects
                <i
                  style={{ marginLeft: "5px" }}
                  className={
                    showProjectsDropdown
                      ? "fa fa-caret-down"
                      : "fa fa-caret-right"
                  }
                ></i>
              </CDBSidebarMenuItem>
              {showProjectsDropdown && (
                <div style={{ marginLeft: 20 }}>
                  <NavLink
                    exact
                    to="projects"
                    activeClassName="activeClicked"
                    className="text-white"
                  >
                    <CDBSidebarMenuItem
                      icon="fas fa-clipboard-list"
                      className={styles.links}
                    >
                      All Projects
                    </CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink
                    exact
                    to="project/add"
                    activeClassName="activeClicked"
                    className="text-white"
                  >
                    <CDBSidebarMenuItem
                      icon="fas fa-file-import"
                      className={styles.links}
                    >
                      New Projects
                    </CDBSidebarMenuItem>
                  </NavLink>
                </div>
              )}
            </div>
            <div onClick={handleSuppliersDropdown}>
              <CDBSidebarMenuItem icon="box" className={styles.links}>
                Suppliers
                <i
                  style={{ marginLeft: "5px" }}
                  className={
                    showSuppliersDropdown
                      ? "fa fa-caret-down"
                      : "fa fa-caret-right"
                  }
                ></i>
              </CDBSidebarMenuItem>
              {showSuppliersDropdown && (
                <div style={{ marginLeft: 20 }}>
                  <NavLink
                    exact
                    to="suppliers"
                    activeClassName="activeClicked"
                    className="text-white"
                  >
                    <CDBSidebarMenuItem
                      icon="box-open"
                      className={styles.links}
                    >
                      All Suppliers
                    </CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink
                    exact
                    to="supplier/add"
                    activeClassName="activeClicked"
                    className="text-white"
                  >
                    <CDBSidebarMenuItem icon="boxes" className={styles.links}>
                      New Supplier
                    </CDBSidebarMenuItem>
                  </NavLink>
                </div>
              )}
            </div>
            <div onClick={handleInquiriesDropdown}>
              <CDBSidebarMenuItem icon="book" className={styles.links}>
                Inquiries
                <i
                  style={{ marginLeft: "5px" }}
                  className={
                    showInquiriesDropdown
                      ? "fa fa-caret-down"
                      : "fa fa-caret-right"
                  }
                ></i>
              </CDBSidebarMenuItem>
              {showInquiriesDropdown && (
                <div style={{ marginLeft: 20 }}>
                  <NavLink
                    exact
                    to="/dashboard/inquiries"
                    activeClassName="activeClicked"
                    className="text-white"
                  >
                    <CDBSidebarMenuItem
                      icon="fas fa-book-open"
                      className={styles.links}
                    >
                      All Inquiries
                    </CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink
                    exact
                    to="/dashboard/inquiry/add"
                    activeClassName="activeClicked"
                    className="text-white"
                  >
                    <CDBSidebarMenuItem
                      icon="fas fa-book-medical"
                      className={styles.links}
                    >
                      New Inquiry
                    </CDBSidebarMenuItem>
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink exact to="#" activeClassName="activeClicked">
              <CDBSidebarMenuItem
                className={styles.links}
                icon="fas fa-dollar-sign"
              >
                Donors
              </CDBSidebarMenuItem>
            </NavLink>
            <hr className="mt-3 mb-2" style={{ opacity: "0.15" }} />
            <div onClick={handleMoreOptionsDropdown}>
              <CDBSidebarMenuItem
                icon="fas fa-align-center"
                className={styles.links}
              >
                More
                <i
                  style={{ marginLeft: "5px" }}
                  className={
                    showMoreOptionsDropdown
                      ? "fa fa-caret-down"
                      : "fa fa-caret-right"
                  }
                ></i>
              </CDBSidebarMenuItem>
              {showMoreOptionsDropdown && (
                <div style={{ marginLeft: 20 }}>
                  <NavLink
                    exact
                    to="#"
                    activeClassName="activeClicked"
                    className="text-white"
                  >
                    <CDBSidebarMenuItem
                      icon="fas fa-angle-left"
                      className={styles.links}
                    >
                      Recent
                    </CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink
                    exact
                    to="#"
                    activeClassName="activeClicked"
                    className="text-white"
                  >
                    <CDBSidebarMenuItem
                      icon="far fa-address-card"
                      className={styles.links}
                    >
                      About Us
                    </CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink
                    exact
                    to="#"
                    activeClassName="activeClicked"
                    className="text-white"
                  >
                    <CDBSidebarMenuItem
                      icon="fas fa-at"
                      className={styles.links}
                    >
                      Contact Us
                    </CDBSidebarMenuItem>
                  </NavLink>
                </div>
              )}
            </div>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
