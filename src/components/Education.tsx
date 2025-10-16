import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Icon,
} from '@chakra-ui/react';
import { FaUniversity, FaGraduationCap } from 'react-icons/fa';

const Education= () => {
  const educationData = [
    {
      degree: 'Bachelor of Technology in Computer Science & Engineering',
      institution: 'Dr. A.P.J Abdul Kalam Technical University',
      year: '2020 – 2024',
      icon: FaUniversity,
    },
    {
      degree: 'Higher Secondary Education (Science)',
      institution: 'DAV College Siwan',
      year: '2018 – 2020',
      icon: FaGraduationCap,
    },
    {
      degree: 'Secondary Education (10th)',
      institution: 'High School Barauli ',
             year: '2017 – 2018',
      icon: FaGraduationCap,
    },
  ];

  return (
    <Box px={6} py={10} bg="gray.50">
      <Heading textAlign="center" mb={10} fontSize="3xl" color="teal.700">
        Education
      </Heading>

      <SimpleGrid columns={[1, 2]} gap="32px">
        {educationData.map((edu, index) => (
          <Box
            key={index}
            bg="white"
            p={6}
            borderRadius="md"
            boxShadow="md"
            transition="transform 0.3s"
            _hover={{ transform: 'scale(1.03)' }}
          >
            <Stack direction="row" align="center" mb={4}>
              <Icon as={edu.icon} boxSize={6} color="teal.500" />
              <Heading fontSize="lg" color="gray.700">
                {edu.degree}
              </Heading>
            </Stack>
                    <Text fontSize="sm" color="gray.600" mb={1}>
              {edu.institution}
            </Text>
            <Text fontSize="sm" color="gray.500">{edu.year}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Education;
