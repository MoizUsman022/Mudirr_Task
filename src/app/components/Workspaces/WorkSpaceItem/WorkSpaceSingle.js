import React from 'react'
import { Box, Text, VStack, HStack } from '@chakra-ui/react';
import Image from 'next/image';
import classes from './WorkSpaceSingle.module.scss'

const WorkSpaceItem = ({workspaces}) => {
  return (
    <div>   
    {workspaces.map((workspace, index) => (
        <HStack key={index} spacing={20} flex="1" textAlign="left" ml={10} p={2}>
          <Text color="gray.600" _hover={{ color: "#000000" , cursor:"default"}}>{workspace.title}</Text>
          <Image className={classes.image} width={25} height={25} src="/down-arrow.png" alt="down-arrow" />
        </HStack>
      ))}
      <p className={classes.seeAll}>See All</p>
      </div>
  )
}

export default WorkSpaceItem
