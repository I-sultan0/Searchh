import React, { useState, useEffect } from "react";
import { Box, TextField, Typography } from "@mui/material";
import SearchResults from "./SearchResults";

const Search = () => {
  // const [search, setSearch] = useState([]);
  const [loader, setLoader] = useState(false);
  const [showData, setShowData] = useState([]);

  const notification = [
    {
      id: "Notification",
      title: "Please type atleast 3 characters to get the Search Results",
    },
  ];
  const noData = [
    {
      id: "No Data Found",
      title: "Try Something Else (like - 'tem')",
    },
  ];

  const searchValue = async (e) => {
    const userInput = e.target.value.toLowerCase();

    if (userInput.length < 3) {
      return setShowData(notification);
    }

    // Getting the API Data, on user input

    if (userInput.length > 2) {
      const dataPresent = localStorage.getItem("API-Data");

      // If the data present in Local Storage, then fetch from it else fetch from the Server

      if (dataPresent) {
        const storageData = localStorage.getItem("API-Data");
        const myArray = JSON.parse(storageData);
        console.log(myArray);
        const filterData = myArray.filter((character) => {
          return character.title?.toLowerCase().includes(userInput);
        });
        console.log(filterData);
        setShowData([]);
        setLoader(true);
        console.log([...showData]);
        setTimeout(() => {
          setLoader(false);
          setShowData(filterData);
          if (filterData.length === 0) {
            setShowData(noData);
          }
        }, 1500);
        setTimeout(() => {
          localStorage.removeItem("API-Data");
        }, 10000);
      } else {
        setShowData([]);
        setLoader(true);
        setTimeout(() => {
          fetching();
        }, 1500);
      }
    }
    const fetching = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      const resolveData = [...data];
      console.log(resolveData);
      const updatedData = JSON.stringify(resolveData);
      localStorage.setItem("API-Data", updatedData);
      const filterData = resolveData.filter((character) => {
        return character.title?.toLowerCase().includes(userInput);
      });
      setLoader(false);
      setShowData(filterData);
      if (filterData.length === 0) {
        setShowData(noData);
      }
    };

    if (e.target.value === "") {
      setShowData([]);
    }
  };
  return (
    <Box
      position="relative"
      m="35px auto"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      width="100%"
    >
      <Box
        pb="25px"
        sx={{
          background:
            "linear-gradient(91.52deg, #1EB9B3 2.19%, #1BB5AD 105.27%)",
        }}
      >
        <Typography
          sx={{
            mb: "25px",
            pt: "20px",
            fontSize: "28px",
            borderRadius: "20px",
            textTransform: "capitalize",
            fontWeight: "bold",
            color: "white",
            fontFamily: ["Poppins", "sans-serif"],
          }}
        >
          Quickly Find What You Need: Search Here
        </Typography>
        <TextField
          height="56px"
          mb="15px"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "8px" },
            width: { lg: "800px", sm: "500px", xs: "320px" },
            backgroundColor: "#fff",
            borderRadius: "8px",
          }}
          onChange={searchValue}
          placeholder="Search..."
          type="text"
        />
      </Box>

      <SearchResults fetchedData={showData} loader={loader} />
    </Box>
  );
};

export default Search;
