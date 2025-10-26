import {  Link } from '@chakra-ui/react';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (

    <>
    <Link
      href="https://wa.me/+919661700958" 
      position="fixed"
      bottom="20px"
      right="20px"
      zIndex="1000"
      target="_blank"
    >
        <FaWhatsapp  aria-label="Chat on WhatsApp"
        size="50px"
        color="#25D366"
       />
    </Link>

        <Link
      href="https://github.com/abdullah368" 
      position="fixed"
      bottom="80px"
      right="20px"
      zIndex="900"
      bgColor={'white'}
      target="_blank"
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
