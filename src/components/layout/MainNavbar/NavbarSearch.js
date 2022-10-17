import React from "react";
import {
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
} from "shards-react";
import useSearch from "../../../hooks/useSearch";

const NavbarSearch = () => {
  const searchContext = useSearch();

  return (
    <Form className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
      <InputGroup seamless className="ml-3">
        <InputGroupAddon type="prepend">
          <InputGroupText>
            <i className="material-icons">search</i>
          </InputGroupText>
        </InputGroupAddon>
        <FormInput
          className="navbar-search"
          placeholder="Start typing to search..."
          onChange={(e) => {
            searchContext.setSearch({
              value: e.target.value,
              type: "",
            });
          }}
        />
      </InputGroup>
    </Form>
  );
};

export default NavbarSearch;
