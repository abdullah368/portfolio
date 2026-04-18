import {
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  Stack,

} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';


const ContactUs = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Box px={6} py={10} bg="gray.100" id='contact'>
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap={5}>
            <Box>
              <Text mb={2} fontWeight="bold" color="gray.700">Name</Text>
              <Input {...register('name')} placeholder="Your name" bg="gray.50" />
            </Box>

            <Box>
              <Text mb={2} fontWeight="bold" color="gray.700">Email</Text>
              <Input  {...register('email')} type="email" placeholder="you@example.com" bg="gray.50" />
            </Box>

            <Box>
              <Text mb={2} fontWeight="bold" color="gray.700">Message</Text>
              <Textarea {...register('message')} placeholder="Your message..." bg="gray.50" />
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
        </form>
      </Box>
    </Box>
  );
};

export default ContactUs;

