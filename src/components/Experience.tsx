import {
  Box,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Link,
} from '@chakra-ui/react';

const experiences = [
  {
    role: 'Software Development Intern',
    company: 'Marvell Digital Technologies Pvt. Ltd.',
    duration: 'July 2025 – Present',
    details: [
      'Working on software development projects under the guidance of senior developers.',
      'Collaborating with the team to design, develop, and test scalable web applications.',
      'Gaining hands-on experience with real-world coding tasks, debugging, and version control using tools like Git.',
    ],
  },
  {
    role: 'Freelance Web Developer (with Team)',
    company: 'Al-Khair Educational & Charitable Trust',
    website: 'https://www.alkhairindia.org',
    duration: 'Dec 2024 – Feb 2025',
    details: [
             'Collaborated with a team to design and develop a responsive and dynamic website for Al-Khair India, a non-profit organization promoting education and charitable activities.',
      'Built user-friendly UI using Bootstrap/HTML/CSS.',
      'Integrated backend functionalities with PHP to enable contact forms, donations, or blog sections.',
    ],
  },
];

const Experience = () => {
  return (
    <Box id="Experience" px={6} py={10} bg="gray.50" >
      <Heading textAlign="center" mb={10} fontSize="3xl" color="teal.700">
        Experience
      </Heading>

      <SimpleGrid columns={[1, 2]} gap="32px">
        {experiences.map((exp, index) => (
          <Box
            key={index}
            bg="white"
            p={6}
            borderRadius="md"
            boxShadow="md"
            transition="transform 0.3s"
            _hover={{ transform: 'scale(1.03)' }}
          >
               <Heading fontSize="lg" color="gray.700" mb={2}>
              {exp.role}
            </Heading>
            <Text fontWeight="semibold" color="gray.600" mb={1}>
              {exp.company}
              {exp.website && (
                <>
                  {' – '}
                  <Link href={exp.website}  color="teal.500">
                    {exp.website}
                  </Link>
                </>
              )}
            </Text>
            <Text fontSize="sm" color="gray.500" mb={4}>
              {exp.duration}
            </Text>
            <Stack gap={2}>
              {exp.details.map((point, i) => (
                <Text key={i} fontSize="sm" color="gray.600">
                  • {point}
                </Text>
              ))}
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Experience;

