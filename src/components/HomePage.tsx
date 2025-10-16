import {
  Box, Flex, Heading, Text, Button, Stack, Image, Link,
} from '@chakra-ui/react';


const HomePage = () => {
  return (
    <>
    <Box
     bgImage="url('/img/bg.webp')"
    //   bgColor={'black'}
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
            Full-stack developer passionate about building scalable, beautiful web apps.
            To obtain a Software Developer position where I can utilize my skills in ASP.NET, C#, MVC, SQL Server, 
            and JavaScript frameworks to contribute to the design, development, and modernization of enterprise web 
            applications. Eager to leverage problem-solving and communication skills in a collaborative environment
          </Text>

          <Stack direction={['column', 'row']} mb={6} mt={8}>
  {/* Email Button */}
  <Link href="mailto:abdullahsiddique368@gmail.com" _hover={{ textDecoration: 'none' }}>
    <Button colorScheme="teal"  size="lg">
      Email Us
    </Button>
  </Link>

  {/* Resume Download Button */}
  <Link href="/AbdullahRESUME.pdf" download _hover={{ textDecoration: 'none' }}>
    <Button colorScheme="teal"  size="lg">
      Download Resume
    </Button>
  </Link>
</Stack>

</Box>

        {/* Right Section */}
        <Box flex="1" textAlign="center">
          <Image
            src="/img/abd.png"
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
