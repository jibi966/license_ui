import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  Spacer,
  ListItem,
  List,
  ListIcon,
  Badge,
  Button,
} from "@chakra-ui/react";
import { ArrowRightIcon, LinkIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export const Card = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/license/${id}`).then((res) => {
      setData(res.data);
    });
  }, [id]);
  return (
    <>
      <br />
      <div>
        <ChakraProvider>
          <Flex>
            <Box boxSize="sm">
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Heading as="h4" size="md">
                  {data.name}
                </Heading>

                <Box p="6">
                  <Box display="flex" alignItems="baseline">
                    ID : &nbsp;
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      {data.id}
                    </Badge>
                  </Box>
                </Box>
                <Flex>
                  <Box p="4">
                    <Heading as="h5" size="sm">
                      Keywords
                    </Heading>
                    {data.keywords}
                  </Box>
                  <Spacer />
                  <Box p="4">
                    <Button
                      leftIcon={<LinkIcon />}
                      colorScheme="pink"
                      variant="solid"
                      size="sm"
                    >
                      <a href="http://">Link</a>
                    </Button>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </ChakraProvider>
      </div>
    </>
  );
};
