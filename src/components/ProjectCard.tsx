import { Box, Image, Heading, Text, Button, Stack,  } from '@chakra-ui/react';

interface ProjectCardProps {
  title: string;
  tech: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
 
}

const ProjectCard = ({ title, description, imageUrl, tech }: ProjectCardProps) => {
 
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
    bgColor={'blue.50'}
      transition="transform 0.3s"
      _hover={{ transform: 'scale(1.03)' }}
    >
        
             <Image src={imageUrl} alt={title} objectFit="cover" w="100%" h="200px" />

      <Box p="6" >
        <Heading fontSize="xl" mb="2">{title}</Heading>
        <Text mb="4" >
          <Text><strong>Technology Used:</strong> {tech} </Text>
          {description}
        </Text>

        <Stack direction="row" >
          <Button
            as="a"
           
            colorScheme="teal"
            variant="solid"
            size="sm"
          >
            Live Demo
          </Button>
          <Button
            as="a"
            colorScheme="tail"
            variant="outline"
            size="sm"
          >
            GitHub
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProjectCard;
