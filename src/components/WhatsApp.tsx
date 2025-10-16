import {  Link } from '@chakra-ui/react';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (

    <>
    <Link
      href="https://wa.me/91661700958" 
      position="fixed"
      bottom="20px"
      right="20px"
      zIndex="1000"
    >
        <FaWhatsapp  aria-label="Chat on WhatsApp"
        size="50px"
        color="#25D366"
       />
    </Link>

        <Link
      href="https://github.com" 
      position="fixed"
      bottom="80px"
      right="20px"
      zIndex="900"
      bgColor={'white'}
    >
        <FaLinkedin
        size="50px"
        color="#171817ff"
       />
    </Link>





    </>
  );
};

export default WhatsAppButton;
