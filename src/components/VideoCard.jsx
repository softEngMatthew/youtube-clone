import React from "react";
import { Link } from "react-router-dom"; // when we click the video, we want to navigate to it
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  videoInfo: {
    id: { videoId },
    snippet,
  },
}) => {
  // Component responsible for:
  // 1. getting the video's info -- thumbnail, id, title
  // 2. allows us to navigate to the specific video or the video's channel

  return (
    <Card
      sx={{
        borderRadius: "5px",
        height: {
          sm: "377px",
          md: "320px",
        },
        transition: "all 0.5s",
        boxShadow: "none",
        width: {
          xs: "320px",
          sm: "330px",
          md: "100%",
        },
        "&:hover": {
          boxShadow: "1px 1px 5px gray",
        },
        // maxWidth: "371px",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            height: "200px",
            width: {
              xs: "100%",
              sm: "358px",
            },
            objectFit: "fill",
          }}
        />
      </Link>
      <CardContent
        sx={{
          background: "#111",
          height: "11vh",
        }}
      >
        {/* The video title */}
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 40) || demoVideoTitle.slice(0, 40)}
          </Typography>
        </Link>

        {/* The channel title */}
        <Link
          to={
            snippet.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="#999">
            {snippet?.channelTitle.slice(0, 40) ||
              demoChannelTitle.slice(0, 40)}
            <CheckCircle sx={{ fontSize: 12, color: "#1778f2", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
