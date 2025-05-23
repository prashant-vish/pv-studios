import React from "react";
import { categories } from "../utils/constants";
import { Stack } from "@mui/material";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction={"row"}
      // position={"fixed"}
      sx={{
        overflow: "auto",
        height: { sm: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => {
        return (
          <button 
            className="category-btn"
            style={{
              backgroundColor: category.name === selectedCategory && " #fc1503",
              color: "white",
            }}
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
          >
            <span
              style={{
                color: category.name === selectedCategory ? "white" : "red",
                marginRight: "15px",
              }}
            >
              <category.icon />
            </span>
            <span
              style={{
                opacity: category.name === selectedCategory ? 1 : 0.9,
              }}
            >
              {category.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
