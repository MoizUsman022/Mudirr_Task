'use client';
import { Box, Avatar, Text, IconButton } from '@chakra-ui/react';
import Image from 'next/image';

import classes from './userprofile.module.scss'

const UserProfile = ({ picSrc, username, email }) => {
    return (
        <Box display="flex" alignItems="center" p={4} borderRadius="md">
            <Image className={classes.image} width={40} height={40} src={picSrc} size="md" />
            <Box className={classes.name} flex="1" display="flex" flexDirection="column" minWidth="0">
                <h3 className={classes.username}>{username}</h3>
                <p className={classes.email}>{email}</p>
            </Box>
            <Image src="/down-arrow.png" width={25} height={25} alt='down-arrow'/>
        </Box>
    );
};

export default UserProfile;
