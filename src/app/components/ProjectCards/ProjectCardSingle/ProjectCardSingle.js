import React from 'react';
import { Box, Text, Progress, Button, Badge } from '@chakra-ui/react';
import ProgressBar from '../../ProgressBar/ProgressBar';
import classes from './projectcarditem.module.scss';
import Image from 'next/image';

const ProjectCardSingle = ({ title, progress, status, milestone }) => {
  return (
    <Box
    className={classes.card}
      border="1px solid #E2E8F0"
      p={4}
      boxShadow="sm"
      transition="all 0.2s"
      width="400px"   
      height="300px"   
      maxWidth="100%" 
      cursor="pointer"
    >
        <Box display="flex" gap={4} alignItems="center"> 
      <Text as="h3" fontWeight="bold" fontSize="xl" className={classes.title}>
        {title}
      </Text>
      <Image src="/three-dots.png" width={25} height={25} alt='three-dots'/>
      </Box>
      <Text fontSize="sm" color="gray.500">Web</Text>

      <ProgressBar/>

      <div className={classes.badge}>
          <Text color="#607dbb !important" as="p" fontSize="sm !important">
            Ongoing
          </Text>
          </div>
          <div className={classes.badge}><Text color="#607dbb !important" as="p" fontSize="sm !important">Next milestone: {milestone}</Text></div>

<Box display="flex" alignContent="center" alignItems="center" justifyContent="space-between">
      <Text  as="h2" fontWeight="bold" mt={4} fontSize="large !important">
        Follow up with manager
      </Text>
      <Button  className={classes.btn} colorScheme='#5876b7' variant='solid'>
    <Image src="/send-icon.png" width={20} height={20} alt='send-icon'/>
  </Button>
      </Box>
    </Box>
  );
};

export default ProjectCardSingle;
