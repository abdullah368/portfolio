import { Box, Image, Heading, Text, Button, Stack, chakra, Link } from '@chakra-ui/react';

interface ProjectCardProps {
  title: string;
  tech: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
 
}

const ProjectCard = ({ title, description, imageUrl, tech, liveUrl ,githubUrl}: ProjectCardProps) => {
 const descriptionLines = description
  .split(/\r?\n/) // handles both \n and \r\n
  .map(line => line.trim())
  .filter(Boolean);
  return (
 
    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      m={3}
      colorPalette="cyan"
      borderColor="blue.200"
      background={"bule.500"}
    //   bg={bg}
    //   boxShadow={}
    bgColor={'gray.50'}
      transition="transform 0.3s"
      _hover={{ transform: 'scale(1.03)' }}
    >
        
             <Image src={imageUrl} alt={title} objectFit="cover" w="100%" h="200px" />

      <Box p="6" >
        <Heading fontSize="xl" mb="2">{title}</Heading>
        <Text mb="4" >
          <Text><strong>Tech Stack:</strong> {tech} </Text>
        

     {descriptionLines.map((line, idx) => (
      <chakra.p key={idx} mb={2}>
        {line}
      </chakra.p>
    ))}

        </Text>


      <Stack direction="row">
  <Link href={liveUrl} target="_blank">
    <Button colorScheme="teal" variant="solid" size="sm">
      Live Demo
    </Button>
  </Link>

  <Link href={githubUrl}  target="_blank">
    <Button colorScheme="teal" variant="outline" size="sm">
      GitHub
    </Button>
  </Link>
</Stack>

      </Box>
    </Box>
  );
};

export default ProjectCard;
