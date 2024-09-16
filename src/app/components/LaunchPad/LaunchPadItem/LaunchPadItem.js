import React from 'react'
import { Text, HStack } from '@chakra-ui/react';
import Image from 'next/image';
import classes from './launchpaditem.module.scss'

const LaunchPadItem = ({launchpads}) => {
  return (
    <div>   
    {launchpads.map((launchpad, index) => (
        <HStack key={index} spacing={{ 'xll': 8, '2xl':24}} flex="1" textAlign="left"   p={2}>
            <div className={classes.businesslogos}>
            <Image className={classes.image} width={16} height={16} src={launchpad.imageSrc} alt="business-icons" />
          <Text color="gray.600" _hover={{ color: "#000000" , cursor:"default"}}>{launchpad.title}</Text>
          </div>
          <Image className={classes.image} width={25} height={25} src="/down-arrow.png" alt="down-arrow" />
        </HStack>
      ))}
      <p className={classes.seeAll}>See All</p>
      </div>
  )
}

export default LaunchPadItem
