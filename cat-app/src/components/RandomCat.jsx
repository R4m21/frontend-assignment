"use client";
import React, { useEffect, useState } from "react";
import CatDetails from "./CatDetails";

const RandomCat = () => {
  const [randomCat, setRandomCat] = useState(null);
  const fetchRandomCat = async () => {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?has_breeds=1"
      );
      const data = await response.json();
      const catId = data[0].id;

      const catDetailsResponse = await fetch(
        `https://api.thecatapi.com/v1/images/${catId}`
      );
      const catDetailsData = await catDetailsResponse.json();

      console.log("catDetailsResponse", data);
      console.log("catDetailsData", catDetailsData);
      setRandomCat({
        name: catDetailsData.breeds[0].name,
        url: catDetailsData.url,
        breeds: catDetailsData.breeds,
        description: catDetailsData.breeds[0].description,
      });
    } catch (error) {
      console.error("Error fetching cat data:", error);
    }
  };
  useEffect(() => {
    fetchRandomCat();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <button
        className="text-center text-4xl m-10 font-bold cursor-pointer"
        onClick={fetchRandomCat}
      >
        Random Cat Generator
      </button>
      {randomCat && <CatDetails catData={randomCat} />}
    </div>
  );
};

export default RandomCat;
