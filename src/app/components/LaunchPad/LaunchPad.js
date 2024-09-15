import React from 'react'
import { Text} from '@chakra-ui/react';
import Image from 'next/image';

import classes from './launchpad.module.scss'
import LaunchPadItem from './LaunchPadItem/LaunchPadItem';

const Launchpad = () => {
    const launchpads = [
        { title: 'Business Name 1', imageSrc: '/icon1.png' },
        { title: 'Business Name 2', imageSrc: '/icon2.png' },
        { title: 'Business Name 3', imageSrc: '/icon3.png' }
      ];

  return (
    <div>
        <div className={classes.launchpad}> 
        <Image className={classes.upArrow} src="/angle-up-solid.svg" width={9} height={17} alt='up-arrow'/>
          <Text fontWeight="bold" fontSize="sm" color="gray.600">
            LAUNCHPAD
          </Text>
          </div> 
          <LaunchPadItem launchpads={launchpads}/>
    </div>
  )
}

export default Launchpad
