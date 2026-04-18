import {
  Box, Flex, Heading, Text, Button, Stack, Image, Link,
} from '@chakra-ui/react';


const HomePage = () => {
  return (
    <>
      <Box
        bgImage="url('img/bg.webp')"
        bgSize="cover"
        //   bgPosition="center"
        minH="80vh"
        px={6}
        py={10}
        color="white"
      >
        <Flex
          direction={['column', 'column', 'row']}
          align="center"
          justify="space-between"
          maxW="6xl"
          mx="auto"
          gap={15}
        >
          {/* Left Section */}
          <Box flex="1">
            <Heading fontSize={['3xl', '4xl', '5xl']} mb={0}>
              Hi, I'm Abdullah 👋
            </Heading>
            <Text fontSize="lg" mb={0} mt={8}>
              Motivated full-stack developer with a passion for building scalable and user-friendly web applications.
              Seeking a Software Developer role to apply my skills in React MVC, SQL Server, and JavaScript frameworks.
              I aim to contribute to modern enterprise solutions while growing through teamwork, problem-solving, and continuous learning.
            </Text>

            <Stack direction={['column', 'row']} mb={6} mt={8}>
              {/* Email Button */}
              <Link href="mailto:abdullahsiddique368@gmail.com" _hover={{ textDecoration: 'none' }}>
                <Button colorScheme="teal" size="lg">
                  Email Us
                </Button>
              </Link>

              {/* Resume Download Button */}
              <Link href="/portfolio/img/ABDULDOC.pdf" download _hover={{ textDecoration: 'none' }}>
                <Button colorScheme="teal" size="lg">
                  Download Resume
                </Button>
              </Link>
            </Stack>

          </Box>

          {/* Right Section */}
          <Box flex="1" textAlign="center">
            <Image
              src="/portfolio/img/abd.png"
              alt="Abdullah"
              borderRadius="full"
              boxSize={['200px', '250px', '300px']}
              objectFit="cover"
              border="4px solid white"
              mx="auto"
              shadow="lg"
            />
          </Box>
        </Flex>
      </Box>

    </>
  );
};

export default HomePage;
