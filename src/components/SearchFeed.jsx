import { Stack, Box, Typography } from "@mui/material";

import { useState, useEffect } from "react";
import { Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
  const [videos, setVideos] = useState([]);

  const { searchTerm } = useParams();

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetchFromApi(
        `search?part=snippet&q=${searchTerm}`
      );
      console.log(response);
      // setVideos(data);
    };

    fetchVideos();
  }, []);

  return (
    <Box p={2} sx={{ overflowY: "auto", width: "90vh", flex: 2 }}>
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
