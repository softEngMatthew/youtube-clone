import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  // component responsbile for:
  // 1. showing the logo
  // 2. containing the SearchBar

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#222",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      {/* when we click it, we go back home */}
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img style={{ marginLeft: 10 }} src={logo} alt="logo" height={45} />
      </Link>

      {/* Search Bar */}
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
