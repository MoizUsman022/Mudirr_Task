import React from "react";
import { Box,Button } from "@chakra-ui/react";
import Image from "next/image";

import classes from './tabs.module.scss'

const Tabs = () => {
  return (
    <div>
      <Box className={classes.tabs} flexDirection={{ base: 'column', md: 'row' }} >
        <Box display="flex" mb={10}>
      <div className={`${classes.tab} ${classes.active}`}>Ongoing</div>
        <div className={classes.tab}>Completed</div>
        <div className={classes.tab}>Cancelled</div>
        <div className={classes.tab}>Drafts</div>
        </Box>
        <div>
        <Button _hover={{ backgroundColor:"#334876"}} mr={4} m={{base:'20px'}} color="white" leftIcon={<Image src="/add-icon.png" width={20} height={20} />} sx={{ backgroundColor: "#5876b7" }} variant='solid'>
    Create a Project
  </Button>
        </div>
      </Box>
    </div>
  );
};

export default Tabs;
