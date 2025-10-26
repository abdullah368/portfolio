import { Box, Text, Heading,HStack,Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => (
  <>
      <Box  textAlign="center" bg="gray.100">
        <Heading fontSize="2xl" mb={4} color="teal.700">
          Follow Me
        </Heading>
        <HStack justify="center" gap={6}>
          <Link href="https://github.com/abdullah368" target="_blank" >
            <FaGithub size="28px" color="#333" />
          </Link>
          <Link href="https://linkedin.com/in/abdullah368" target="_blank" >
            <FaLinkedin size="28px" color="#0077B5" />
          </Link>
          <Link href="https://twitter.com/abdullah368"  target="_blank" >
            <FaTwitter size="28px" color="#1DA1F2" />
          </Link>
          <Link href="https://wa.me/+919661700958" target="_blank" >
            <FaWhatsapp size="28px" color="#25D366" />
          </Link>
        </HStack>
     
  <Box as="footer" p={4} bg="gray.100" textAlign="center">
    <Text fontSize="sm">© {new Date().getFullYear()} Abdullah. All rights reserved.</Text>
  </Box>
   </Box>
  </>
);

export default Footer;
