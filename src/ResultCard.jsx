import React from "react";
import { Stack, Typography } from "@mui/material";

const ResultCard = ({ currentData }) => {
  return (
    <Stack
      direction="column"
      textAlign="center"
      borderRadius="8px"
      alignItems="center"
      width="300px"
      sx={{
        background: "linear-gradient(91.52deg, #1EB9B3 2.19%, #1BB5AD 105.27%)",
      }}
    >
      <Typography
        sx={{
          mt: "8px",
          // p: "8px",
          fontSize: "20px",
          borderRadius: "20px",
          textTransform: "capitalize",
          color: "white",
        }}
      >
        {currentData.id}
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
          p: "8px",
          borderRadius: "20px",
          textTransform: "capitalize",
          color: "white",
          mt: "5px",
          mb: "8px",
        }}
      >
        {currentData.title}
      </Typography>
    </Stack>
  );
};

export default ResultCard;
