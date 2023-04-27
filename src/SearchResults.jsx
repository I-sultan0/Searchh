import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import ResultCard from "./ResultCard";
import "./App.css";

const SearchResults = ({ fetchedData, loader }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(5);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = fetchedData.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    setCurrentPage(value);
  };
  //   console.log(fetchedData);
  return (
    <>
      <Box id="exercises" sx={{ mt: { lg: "40px" } }} mt="50px" p="20px">
        {loader && (
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        <Stack
          direction="row"
          sx={{ gap: { lg: "60px", xs: "50px" } }}
          flexWrap="wrap"
          justifyContent="center"
        >
          {currentExercises.map((detail) => (
            <ResultCard key={detail.id} currentData={detail} />
          ))}
        </Stack>
        <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
          {fetchedData.length > 9 && (
            <Pagination
              color="standard"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(fetchedData.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
            />
          )}
        </Stack>
      </Box>
    </>
  );
};

export default SearchResults;
