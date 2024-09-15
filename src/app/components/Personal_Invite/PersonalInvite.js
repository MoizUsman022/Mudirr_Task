import React from 'react'
import { Button, ButtonGroup} from '@chakra-ui/react'

import classes from './personalinvite.module.scss'

const PersonalInvite = () => {
  return (
    <div className={classes.btns}>
      <ButtonGroup w="100%">
      <Button
      color="#334876"
      className={classes.btn1}
      backgroundColor="#dbe2f0"
        width="50%"
      >
        Personal
      </Button>
      <Button
        colorScheme="gray"
        color="gray.500"
        bg="white"
        _hover={{ bg: 'gray.100' }}
        width="50%"
      >
        Invited
      </Button>
    </ButtonGroup>
    </div>
  )
}

export default PersonalInvite
