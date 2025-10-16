// import {
//   Box,
//   Heading,
//   Text,
//   SimpleGrid,
//   Stack,
//   Icon,
// } from '@chakra-ui/react';
// import { FaAward, FaCertificate } from 'react-icons/fa';

// const Certificate = () => {
//   const certificates = [
//     {
//       title: 'Python for Data Science',
//       issuer: 'IBM',
//     },
//     {
//       title: 'Full Stack Web Development',
//       issuer: 'Coursera',
//     },
//     {
//       title: 'React Developer Certification',
//       issuer: 'Meta',
//     },
//   ];
//   const achievements = [
//     'Built a job automation bot using Python',
//     'Created a responsive portfolio with Chakra UI',
//     'Resolved complex backend integration issues',
//     'Completed 100+ DSA problems on LeetCode',
//   ];

//  return (
//     <Box px={6} py={10} bg="gray.100">
//       <Heading textAlign="center" mb={10} fontSize="3xl" color="teal.700">
//         Certificates & Achievements
//       </Heading>

//       <SimpleGrid columns={[1, 2, 3]}  mb={10}>
//         {certificates.map((cert, index) => (
//           <Box
//             key={index}
//             bg="white"
//             p={6}
//             borderRadius="md"
//             boxShadow="md"
//             transition="transform 0.3s"
//             _hover={{ transform: 'scale(1.03)' }}
//           >
//             <Stack direction="row" align="center" mb={3}>
//               <Icon as={FaCertificate} boxSize={6} color="orange.400" />
//               <Heading fontSize="md" color="gray.700">
//                 {cert.title}
//               </Heading>
//             </Stack>
//             <Text fontSize="sm" color="gray.600">Issued by: {cert.issuer}</Text>
//           </Box>
//         ))}
//      </SimpleGrid>

//       <SimpleGrid columns={[1, 2]} >
//         {achievements.map((item, index) => (
//           <Box
//             key={index}
//             bg="white"
//             p={6}
//             borderRadius="md"
//             boxShadow="md"
//             transition="transform 0.3s"
//             _hover={{ transform: 'scale(1.03)' }}
//           >
//             <Stack direction="row" align="center" mb={3}>
//               <Icon as={FaAward} boxSize={6} color="purple.500" />
//               <Heading fontSize="md" color="gray.700">
//                 Achievement {index + 1}
//               </Heading>
//             </Stack>
//             <Text fontSize="sm" color="gray.600">{item}</Text>
//           </Box>
//         ))}
//       </SimpleGrid>
//     </Box>
//   );
// };
// export default Certificate;




import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Image,
  Link,
} from '@chakra-ui/react';
import { FaAward,  } from 'react-icons/fa';

const Certificate = () => {
  const certificates = [
    {
      title: 'Machine Learning – From Basic to Advanced',
      issuer: 'Udemy',
      image: '/img/ml.png',
      link: 'https://www.udemy.com/certificate/UC-c4ca9371-d753-4920-bfb7-1a828786089c/',
    },
    {
      title: 'Python for Beginners',
      issuer: 'Simplilearn',
      image: '/img/python.png',
      link: 'https://drive.google.com/file/d/1-CpywOhKvwuoSUTkLB1g_Qkbl5UnSCoK/view?usp=drive_link',
    },
  {
      title: 'ReactJS  Course – Basics to Advanced ',
      issuer: 'Udemy',
      image: '/img/rs.png',
      link: 'https://www.udemy.com/certificate/UC-817f7975-452c-40ea-b755-ceeea99009ae/',
    },
  ];

  const achievements = [
    'SQL Certified, got 3-star on HackerRank',
    '3- star in Java on HackerRank',
    'Resolved complex backend integration issues',
    'Completed 100+ DSA problems on LeetCode',
  ];

  return (
    <Box px={6} py={10} bg="gray.100">
      <Heading textAlign="center" mb={10} fontSize="3xl" color="teal.700">
        Certificates & Achievements
      </Heading>

      {/* Certificates */}
      <SimpleGrid columns={[1, 2, 3]} gap={8} mb={12}>
        {certificates.map((cert, index) => (
          <Box
            key={index}
            bg="white"
                    p={4}
            borderRadius="md"
            boxShadow="md"
            transition="transform 0.3s"
            _hover={{ transform: 'scale(1.03)' }}
          >
            <Stack mb={3}>
              <Image
                src={cert.image}
                alt={cert.title}
                borderRadius="md"
                objectFit="cover"
                h="150px"
                w="100%"
              />
              <Heading fontSize="md" color="gray.700">
                {cert.title}
              </Heading>
              <Text fontSize="sm" color="gray.600">
                Issued by: {cert.issuer}
              </Text>
              <Link href={cert.link}  color="teal.500" fontSize="sm">
                View Certificate →
              </Link>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
           {/* Achievements */}
      <SimpleGrid columns={[1, 2]} gap={8}>
        {achievements.map((item, index) => (
          <Box
            key={index}
            bg="white"
            p={6}
            borderRadius="md"
            boxShadow="md"
            transition="transform 0.3s"
            _hover={{ transform: 'scale(1.03)' }}
          >
            <Stack direction="row" align="center" mb={3}>
              <FaAward size="20px" color="#805AD5" />
              <Heading fontSize="md" color="gray.700">
                Achievement {index + 1}
              </Heading>
            </Stack>
            <Text fontSize="sm" color="gray.600">{item}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Certificate;