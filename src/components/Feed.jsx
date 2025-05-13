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
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
        position="f"
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
      <Box p={2} sx={{ overflowY: "auto", width: "90vh", flex: 2 }}>
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
