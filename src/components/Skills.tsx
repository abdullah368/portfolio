import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Icon,
 
} from '@chakra-ui/react';
import { FaCode, FaBrain} from 'react-icons/fa';

const Skills = () => {
  return (
    <Box px={6} py={10} bg="gray.50"  id="skills">
      <Heading textAlign="center" mb={10} fontSize="3xl" color="teal.700">
        My Skills & Strengths
      </Heading>

      <SimpleGrid columns={[1, 2]}>
        {/* Technical Skills */}
        <Box bg="white" p={6} borderRadius="md" boxShadow="md" m={2}>
          <Stack direction="row" align="center" mb={4}>
            <Icon as={FaCode} boxSize={6} color="teal.500" />
            <Heading fontSize="xl" color="gray.700">Technical Skills</Heading>
          </Stack>
                    
          <Text mb={2}><strong>Programming Languages:</strong> C, Python, Java, C#</Text>
          <Text mb={2}><strong>Concepts:</strong> DBMS, SQL, Cloud, OOP, DSA, Linux, ASP.NET</Text>
          <Text mb={2}><strong>Frontend:</strong> HTML, CSS, JavaScript, Bootstrap, ReactJS, Django</Text>
          <Text mb={2}><strong>Python Libraries:</strong> Pandas, NumPy, Matplotlib</Text>
          <Text><strong>Tools:</strong> MySQL, Visual Studio, Tableau</Text>
        </Box>

        {/* Personal Strengths */}
        <Box bg="white" p={6} borderRadius="md" boxShadow="md" m={2}>
          <Stack direction="row" align="center" mb={4}> 
            <Icon as={FaBrain} boxSize={6} color="purple.500" />
            <Heading fontSize="xl" color="gray.700">Personal Strengths</Heading>
          </Stack>
          
          <Stack >
            <Text>• Quick learner</Text>
            <Text>• Communication</Text>
            <Text>• Responsible</Text>
            <Text>• Willingness to learn new things</Text>
            <Text>• Critical Thinking</Text>
          </Stack>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
