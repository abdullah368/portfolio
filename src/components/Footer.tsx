import { Box, Text } from '@chakra-ui/react';

const Footer = () => (
  <Box as="footer" p={4} bg="gray.100" textAlign="center">
    <Text fontSize="sm">© {new Date().getFullYear()} Abdullah. All rights reserved.</Text>
  </Box>
);

export default Footer;
