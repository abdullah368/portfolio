import {
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  Stack,
  
} from '@chakra-ui/react';


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
    </Box>
  );
};

export default ContactUs;

