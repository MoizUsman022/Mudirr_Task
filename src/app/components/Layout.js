import { Flex, Box } from '@chakra-ui/react';
import SideNav from './SideNav/SideNav';
import Dashboard from './Dashboard/Dashboard';

const Layout = ({ children }) => (
  <Flex height="80vh">
    <Box width="20%" minWidth="250px" height="80vh" maxWidth="400px">
      <SideNav />
    </Box>
    
    <Box width="80%" flex="1" height="80vh">
      <Dashboard>{children}</Dashboard>
    </Box>
  </Flex>
);

export default Layout;
