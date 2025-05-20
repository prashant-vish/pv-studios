import { Stack, Box, Typography } from "@mui/material";

import { useState, useEffect } from "react";
import { Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);

  const { searchTerm } = useParams();
  console.log(searchTerm, "helloe");

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetchFromApi(
        `search?part=snippet&q=${searchTerm}`
      );
      console.log(response);
      setVideos(response.items);
    };

    fetchVideos();
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 1 }}>
      <Typography
        variant="h4"
        fontWeight={"bolder"}
        sx={{ mb: 2, color: "#fff" }}
      >
        Search Results for{" "}
        <span style={{ color: "#fc1503" }}> {searchTerm}</span> Videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
