import React, { useEffect, useState } from "react";
import {
  ChakraProvider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function HomeTable() {
  const navigate = useNavigate();
  const [licenseData, setLicenseData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/license").then((res) => {
      setLicenseData(res.data);
    });
  }, []);
  return (
    <ChakraProvider>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>License Data</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>keywords</Th>
            </Tr>
          </Thead>
          <Tbody>
            {licenseData &&
              licenseData.map((e) => {
                return (
                  <Tr onClick={() => navigate(`/card/${e.id}`)}>
                    <Td>{e.id}</Td>
                    <Td>{e.name} </Td>
                    <Td>{e.keywords.join(" , ")}</Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </ChakraProvider>
  );
}

export default HomeTable;

// // Custom useRef

// const { useState } = require("react");

// function useRef(initialValue) {
//   const [ref, unUsed] = useState({ current: initialValue });
//   return ref;
// }
