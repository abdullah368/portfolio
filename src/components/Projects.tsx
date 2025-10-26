import { Box, Heading, SimpleGrid,Container, } from '@chakra-ui/react';


import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <Container maxW="9xl" py={5} bgColor={'gray.100'} id='projects'>
         <Box px={6} py={10} bg="gray.50">
      <Heading textAlign="center" mb={10} fontSize="3xl" color="teal.700">
        Projects
      </Heading>
    


      <SimpleGrid columns={[1, 2, 3]}>
        <ProjectCard
          title="Al-Khair Educational & Charitable Trust "
          tech='PHP | Bootstrap| HTML|CSS '
          description="• Collaborated with a team to design and develop a responsive and dynamic website for Al-Khair 
                       • India, a non-profit organization promoting education and charitable activities. 
                      • Integrated backend functionalities with PHP to enable contact forms, donations, or blog sections. ."
          imageUrl="/portfolio/img/p2.png"
          liveUrl="https://www.alkhairindia.org"
          githubUrl="#"
        />

          <ProjectCard
          title="Cardiovascular Diseases Risk Prediction"
          tech='(Python | Pandas | NumPy | Matplotlib |Seaborn) '
          description="  
           • Developed a model to predict risk of cardiovascular diseases using historical health data. 
           • Performed data cleaning, visualization, and feature analysis to improve model accuracy "
            
          imageUrl='/portfolio/img/port.png'
          liveUrl="https://abdullah368.github.io/portfolio"
          githubUrl="https://github.com/abdullah/portfolio"
        />
          <ProjectCard
          title="E-Attendance Face Recognition Attendance System"
          tech='(HTML | CSS| Bootstrap | Python | Django)'
          description="
            • Enables user registration and attendance marking through facial recognition. 
            • Enabled user registration and automated attendance marking through camera input"
          imageUrl=""
          liveUrl="#"
          githubUrl="https://github.com/abdullah368/E-Attendance-Face-Recognition-Attendance-System"
        />
          <ProjectCard
          title="Full-Stack User Management Dashboard"
          tech=' React, Chakra UI, Node.js, Express, MongoDB, XLSX '
          description=" • Developed a responsive admin dashboard for user signup, management, and data export 
                        • Implemented secure authentication, full CRUD operations, and real-time API integration 
                        • Designed dynamic UI with Chakra UI, including searchable tables and form validation 
                        • Enabled Excel export of user data using XLSX for easy reporting"
          imageUrl="../portfolio/img/p1.png"
          liveUrl="#"
          githubUrl="https://github.com/abdullah368/React-Dashboard"
        />
            <ProjectCard
          title="Potfolio Website "
          tech=' React, Chakra UI, Node.js, Express, MongoDB, '
          description=" Designed and developed a fully responsive personal portfolio to showcase projects, skills, and experience using React and Chakra UI.
                         Implemented smooth scroll navigation, reusable components, and dynamic content sections for a clean user experience."
          imageUrl="../portfolio/img/port.png"
          liveUrl="https://abdullah368.github.io/portfolio"
          githubUrl="https://github.com/abdullah368/portfolio"
        />

        
      </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Projects;



