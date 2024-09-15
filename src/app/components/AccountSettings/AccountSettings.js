import React from "react";
import { Text } from "@chakra-ui/react";
import Image from "next/image";

import classes from "./accountsettings.module.scss";

const AccountSettings = () => {
  return (
    <div>
      <div className={classes.star}>
        <Image
          className={classes.image}
          width={18}
          height={18}
          src="/star.svg"
          alt="star-icon"
        />
        <Text color="gray.600">Account Settings</Text>
      </div>
      <div className={classes.star}>
        <Image
          className={classes.image}
          width={18}
          height={18}
          src="/star.svg"
          alt="star-icon"
        />
        <Text color="gray.600">Logout</Text>
      </div>
    </div>
  );
};

export default AccountSettings;
