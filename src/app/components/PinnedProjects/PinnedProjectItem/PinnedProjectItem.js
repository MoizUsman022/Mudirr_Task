import React from 'react'
import { Text, HStack } from '@chakra-ui/react';
import Image from 'next/image';
import classes from './pinnedprojectitem.module.scss'

const PinnedProjectItem = ({pinnedprojects}) => {
  return (
    <div>
      <div>   
    {pinnedprojects.map((pinnedproject, index) => (
        <HStack key={index} spacing={24} flex="1" p={2}>
            <div className={classes.star}>
            <Image className={classes.image} width={18} height={18} src={pinnedproject.imageSrc} alt="star-icon" />
          <Text color="gray.600" _hover={{ color: "#000000" , cursor:"default"}}>{pinnedproject.title}</Text>
          </div>
          <Image className={classes.image} width={25} height={25} src="/down-arrow.png" alt="down-arrow" />
        </HStack>
      ))}
      </div>
    </div>
  )
}

export default PinnedProjectItem
