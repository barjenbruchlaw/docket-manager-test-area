import React from "react";
import PropTypes from "prop-types";
import { NavLink as RouteNavLink } from "react-router-dom";
import { NavItem, NavLink as ShardsNavLink } from "shards-react";
import { Dispatcher, Constants } from "../../../flux";

const SidebarNavItem = ({ item }) => {
  const handleToggleSidebar = () => {
    Dispatcher.dispatch({
      actionType: Constants.TOGGLE_SIDEBAR,
    });
  };

  return (
    <NavItem>
      <ShardsNavLink
        onClick={(e) => {
          handleToggleSidebar();
        }}
        tag={(props) => <RouteNavLink {...props} />}
        to={item.to}
      >
        {item.htmlBefore && (
          <div
            className="d-inline-block item-icon-wrapper"
            dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
          />
        )}
        {item.title && <span>{item.title}</span>}
        {item.htmlAfter && (
          <div
            className="d-inline-block item-icon-wrapper"
            dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
          />
        )}
      </ShardsNavLink>
    </NavItem>
  );
};

SidebarNavItem.propTypes = {
  /**
   * The item object.
   */
  item: PropTypes.object,
};

export default SidebarNavItem;
