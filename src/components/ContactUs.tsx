import {
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  Stack,
  Link,
  HStack,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <Box px={6} py={10} bg="gray.100">
      <Heading textAlign="center" mb={10} fontSize="3xl" color="teal.700">
        Contact Me
      </Heading>

      {/* Contact Form */}
      <Box
        maxW="600px"
        mx="auto"
        bg="white"
        p={8}
        borderRadius="md"
             boxShadow="md"
      >
        <Stack gap={5}>
          <Box>
            <Text mb={2} fontWeight="bold" color="gray.700">Name</Text>
            <Input placeholder="Your name" bg="gray.50" />
          </Box>

          <Box>
            <Text mb={2} fontWeight="bold" color="gray.700">Email</Text>
            <Input type="email" placeholder="you@example.com" bg="gray.50" />
          </Box>

          <Box>
            <Text mb={2} fontWeight="bold" color="gray.700">Message</Text>
            <Textarea placeholder="Your message..." bg="gray.50" />
          </Box>

          <Button
            type="submit"
            colorScheme="teal"
            size="lg"
            _hover={{ bg: 'teal.600' }}
          >
            Send Message
          </Button>
        </Stack>
      </Box>
          {/* Follow Me Section */}
      <Box mt={12} textAlign="center">
        <Heading fontSize="2xl" mb={4} color="teal.700">
          Follow Me
        </Heading>
        <HStack justify="center" gap={6}>
          <Link href="https://github.com/yourusername"  >
            <FaGithub size="28px" color="#333" />
          </Link>
          <Link href="https://linkedin.com/in/yourusername"  >
            <FaLinkedin size="28px" color="#0077B5" />
          </Link>
          <Link href="https://twitter.com/yourusername"  >
            <FaTwitter size="28px" color="#1DA1F2" />
          </Link>
          <Link href="https://wa.me/91661700958"  >
            <FaWhatsapp size="28px" color="#25D366" />
          </Link>
        </HStack>
      </Box>
    </Box>
  );
};

export default ContactUs;

