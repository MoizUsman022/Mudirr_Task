import React from 'react'
import Image from 'next/image'
import { Text } from '@chakra-ui/react'

import classes from './pinnedprojects.module.scss'
import PinnedProjectItem from './PinnedProjectItem/PinnedProjectItem'
const PinnedProjects = () => {

    const pinnedprojects = [
        { title: 'Porject Name 1', imageSrc: '/star.svg' },
        { title: 'Porject Name 2', imageSrc: '/star.svg' },
        { title: 'Porject Name 3', imageSrc: '/star.svg' }
      ];
  return (
    <div>
        <div className={classes.pinnedproject}> 
        <Image className={classes.upArrow} src="/angle-up-solid.svg" width={9} height={17} alt='up-arrow'/>
          <Text fontWeight="bold" fontSize="sm" color="gray.600">
            PINNED PROJECTS (3/3)
          </Text>
          </div> 
          <PinnedProjectItem pinnedprojects={pinnedprojects}/>
    </div>
  )
}

export default PinnedProjects
