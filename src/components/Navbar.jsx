import React from "react";
import { logo } from "../utils/constants.js";
import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
const Appbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      p={2}
      sx={{
        position: "sticky",
        backgroundColor: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="Logo" height={45} />
      </Link>

      <SearchBar />
    </Stack>
  );
};

export default Appbar;
