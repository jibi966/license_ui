import React, { useEffect, useState } from "react";
import {
  ChakraProvider,
  Image,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Flex,
  Button,
  ButtonGroup,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spacer,
} from "@chakra-ui/react";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  StarIcon,
  ChevronDownIcon,
  WarningIcon,
  NotAllowedIcon,
  CheckCircleIcon,
} from "@chakra-ui/icons";
import axios from "axios";
function HomeTable() {
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
                  <Tr>
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
