import React from 'react'
import { Button, Box } from '@chakra-ui/react'
import Image from 'next/image'

import classes from './footer.module.scss'

const Footer = () => {
  const footers = [
    {
      title: "Explore Documentation",
      src: "/document-icon.png"
    },
    {
      title: "Cost Calculator",
      src: "/calculator-icon.png"
    },
    {
      title: "Billing Calculator",
      src: "/calculator-icon.png"
    }
  ]

  return (
    <Box mt={32} mb={0} className={classes.footerFix}>
      {footers.map((footeritem, index) => (
        <Button
          key={index}
          _hover={{ backgroundColor: "#dadad7" }}
          color="black"
          leftIcon={<Image src={footeritem.src} width={20} height={20} />}
          colorScheme="white"
          variant="solid"
          transition="background-color 0.3s ease, transform 0.3s ease" 
        >
          {footeritem.title}
        </Button>
      ))}
    </Box>
  )
}

export default Footer
