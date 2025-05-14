import { Stack, Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Sidebar, Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await fetchFromApi(
        `search?part=snippet&q=${selectedCategory}`
      );
      setVideos(res.items);
    };

    fetchVideos();
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
        overflow: "hidden", // Prevent outer container from scrolling
        height: "92vh", // Set a fixed height for the container
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
          overflowY: "auto", // Make the sidebar independently scrollable
          position: "sticky", // Make sidebar position sticky
          top: 0, // Stick to the top
          width: { sx: "100%", md: "auto" }, // Responsive width
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2025 @ PV Studios
        </Typography>
      </Box>
      <Box
        p={2}
        sx={{
          overflowY: "auto",
          flex: 2,
          height: "92vh", // Ensure the content area has the same height
        }}
      >
        <Typography
          variant="h4"
          fontWeight={"bolder"}
          sx={{ mb: 2, color: "#fff" }}
        >
          {selectedCategory}
          <span style={{ color: "#fc1503" }}> Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
