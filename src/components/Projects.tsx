import { Box, Heading, SimpleGrid,Container, } from '@chakra-ui/react';


import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <Container maxW="9xl" py={5} bgColor={'gray.100'} id="project">
         <Box px={6} py={10} bg="gray.50">
      <Heading textAlign="center" mb={10} fontSize="3xl" color="teal.700">
        Projects
      </Heading>
    


      <SimpleGrid columns={[1, 2, 3]}>
        <ProjectCard
          title="Al-Khair Educational & Charitable Trust "
          tech=''
          description="• Collaborated with a team to design and develop a responsive and dynamic website for Al-Khair 
India, a non-profit organization promoting education and charitable activities. 
• Built user-friendly UI using Bootstrap/HTML/CSS  
• Integrated backend functionalities with PHP to enable contact forms, donations, or blog sections. ."
          imageUrl="/img/p2.png"
          liveUrl="https://www.alkhairindia.org"
          githubUrl="#"
        />

          <ProjectCard
          title="Cardiovascular Diseases Risk Prediction"
          tech='(Python | Pandas | NumPy | Matplotlib |Seaborn) '
          description="  
            Developed a model to predict risk of cardiovascular diseases using historical health data. "
          imageUrl="/img/p1.png"
          liveUrl="https://your-live-site.com"
          githubUrl="https://github.com/yourusername/portfolio"
        />
          <ProjectCard
          title="E-Attendance Face Recognition Attendance System"
          tech='(HTML | CSS| Bootstrap | Python | Django)'
          description="
            • Enables user registration and attendance marking through facial recognition. "
          imageUrl=""
          liveUrl="#"
          githubUrl="https://github.com/abdullah368/E-Attendance-Face-Recognition-Attendance-System"
        />
          <ProjectCard
          title="User Daskboard "
          tech=''
          description="A sleek personal portfolio built with React and Chakra UI."
          imageUrl="../img/p1.png"
          liveUrl="https://your-live-site.com"
          githubUrl="https://github.com/yourusername/portfolio"
        />
        
      </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Projects;



