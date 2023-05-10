import Navbar from "../Navigation/Navbar";
import { Box, Container, useMediaQuery } from "@chakra-ui/react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Box as="main">
        <Navbar />
        <Container maxWidth="container.xl">{children}</Container>
      </Box>
    </>
  );
};

export default Layout;
