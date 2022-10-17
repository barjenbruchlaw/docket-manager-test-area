import React from "react";
import { Nav } from "shards-react";

import SidebarNavItem from "./SidebarNavItem";
import { Store } from "../../../flux";
import UserContext from "../../../contexts/UserContext";

class SidebarNavItems extends React.Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);

    this.state = {
      navItems: Store.getSidebarItems(),
      user: this.context?.user,
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  componentDidMount() {
    Store.addChangeListener(this.onChange);
    this.setState({
      ...this.state,
      navItems: Store.getSidebarItems().filter((item) => {
        return this.context.hasRole(item.requiredRole);
      }),
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      this.setState({
        ...this.state,
        navItems: Store.getSidebarItems().filter((item) => {
          return this.context.hasRole(item.requiredRole);
        }),
      });
    }
  }

  onChange() {
    this.setState({
      ...this.state,
      navItems: Store.getSidebarItems().filter((item) => {
        return this.context.hasRole(item.requiredRole);
      }),
    });
  }

  render() {
    const { navItems: items } = this.state;
    return (
      <div className="nav-wrapper">
        <Nav
          className="nav--no-borders flex-column"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {items.map((item, idx) => (
            <SidebarNavItem key={idx} item={item} />
          ))}
        </Nav>
        <div
          className="nav--no-borders flex-column"
          style={{
            marginTop: window.innerHeight >= 730 ? "18rem" : "10rem",
            color: "grey",
            fontSize: "10px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              padding: "0.25rem 0.625rem",

              margin: "0",
              marginBottom: "0.5rem",
              opacity: "0.5",
            }}
          >
            Copyright 2022 Northwest Appworks
          </p>
          <p
            style={{
              padding: "0.25rem 0.625rem",

              margin: "0",
              opacity: ".5",
            }}
          >
            Powered by Northwest Appworks
          </p>
        </div>
      </div>
    );
  }
}

export default SidebarNavItems;
