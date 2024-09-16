import React from 'react';
import classes from './progressbar.module.scss';

import { Text } from '@chakra-ui/react';

const ProgressBar = () => {
  return (
    <div>
      <div className={classes.progressContainer}>
        <div className={`${classes.step} ${classes.active}`}></div>
        <div className={`${classes.line} ${classes.active}`}></div>

        <div className={`${classes.step} ${classes.active}`}></div>
        <div className={`${classes.line} ${classes.active}`}></div>

        <div className={`${classes.step} ${classes.active}`}></div>
        <div className={classes.line}></div>

        <div className={classes.step}></div>

        <Text ml={4}>3/4 Done</Text>
      </div>

      
    </div>
  );
};

export default ProgressBar;
