import React from "react";
import { Stack, Typography } from "@mui/material";

const ResultCard = ({ currentData }) => {
  return (
    <Stack
      direction="column"
      textAlign="center"
      borderRadius="12px"
      alignItems="center"
      width="300px"
      backgroundColor="white"
    >
      <Typography
        sx={{
          mb: "21px",
          p: "8px",
          fontSize: "20px",
          borderRadius: "20px",
          textTransform: "capitalize",
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
        }}
      >
        {currentData.title}
      </Typography>
    </Stack>
  );
};

export default ResultCard;
