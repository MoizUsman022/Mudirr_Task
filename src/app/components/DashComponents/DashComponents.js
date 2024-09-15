import React from "react";
import {
  VStack,
  HStack,
  Box,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

import classes from "./dashcomponents.module.scss";

const DashComponents = () => {
  return (
    <div>
      <Box
        className={classes.box}
        w="320px"
        p={4}
        borderRadius="md"
        marginTop={10}
      >
        <VStack align="start" spacing={4}>
          <HStack spacing={2} className={classes.selectedItem} borderRadius="md">
          <Image src="/star-fill.svg" width="17" height="17" alt="star"/>
            <Text fontWeight="bold" fontSize="lg" color="black">
              Dashboard
            </Text>
          </HStack>
        </VStack>
        <VStack align="start" spacing={2}>
          <HStack spacing={2}  className={classes.btnHistory} borderRadius="md">
            <Image src="/star.svg" width="17" height="17" alt="star"/>
            <Text color="gray.600"  _hover={{ color: "#000000" , cursor:"default"}}>Project History</Text>
          </HStack>
          <HStack spacing={2} className={classes.otherbtns} borderRadius="md">
          <Image src="/star.svg" width="17" height="17" alt="star"/>
            <Text color="gray.600"  _hover={{ color: "#000000" , cursor:"default"}}>Client History</Text>
          </HStack>
          <HStack spacing={2} className={classes.otherbtns} borderRadius="md">
          <Image src="/star.svg" width="17" height="17" alt="star"/>
            <Text color="gray.600"  _hover={{ color: "#000000" , cursor:"default"}}>Emails</Text>
          </HStack>
        </VStack>
      </Box>
    </div>
  );
};

export default DashComponents;
