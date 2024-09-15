import React from 'react'
import { Text, HStack } from '@chakra-ui/react';
import WorkSpaceItem from './WorkSpaceItem/WorkSpaceSingle';

import classes from './Workspaces.module.scss'
import Image from 'next/image';

const WorkSpaces = () => {
    const workspaces = [
        { title: 'Work Space Name 1'},
        { title: 'Work Space Name 2'},
        { title: 'Work Space Name 3'},
      ];

  return (
    <div>
      <HStack justify="space-between" w="full" mb={2}>
        <div className={classes.workspace}> 
        <Image className={classes.upArrow} src="/angle-up-solid.svg" width={9} height={17} alt='up-arrow'/>
          <Text fontWeight="bold" fontSize="sm" color="gray.600">
            WORKSPACES
          </Text>
          </div>
          <div className={classes.badge}>
          <p>
            Coming Soon
          </p>
          </div>
        </HStack>
        <WorkSpaceItem workspaces={workspaces} />
    </div>
  )
}

export default WorkSpaces
