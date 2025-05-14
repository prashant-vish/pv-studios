import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar } from "./components";
import FeedPage from "./pages/FeedPage";
import VideoDetailsPage from "./pages/VideoDetailsPage";
import ChannelDetailPage from "./pages/ChannelDetailPage";
import SearchFeedPage from "./pages/SearchFeedPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Box sx={{ backgroundColor: "#000" }}>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<FeedPage />} />
            <Route path="/video/:id" exact element={<VideoDetailsPage />} />
            <Route path="/channel/:id" exact element={<ChannelDetailPage />} />
            <Route
              path="/search/:searchTerm"
              exact
              element={<SearchFeedPage />}
            />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
