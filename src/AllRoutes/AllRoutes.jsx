import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeTable from "../Components/HomeTable/HomeTable";
import CreateData from "../Components/CreateData/CreateData";
import Card from "../Components/Card/Card";
export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeTable />} />
        <Route path="/create" element={<CreateData />} />
        <Route path="/card/:id" element={<Card />} />
      </Routes>
    </>
  );
}
