import React, { useState } from 'react';
import Skills from './Skills';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Stack,
  Button,
  Link
} from '@chakra-ui/react';
import { FiHome, FiMenu, FiX } from 'react-icons/fi';

//const Links = ['Home', 'Projects', 'Skills', 'Contact Us'];

const Links = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#Education' },
  {label: 'Certificates', href: '#certificates'},
  { label: 'Contact Us', href: '#contact' },
];


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box px={4} boxShadow="md" bg="gray.100">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Logo */}
        <Box fontWeight="bold" fontSize="xl" color="teal.500">
          Abdullah Siddique
        </Box>

        {/* Desktop Nav */}
<HStack display={{ base: 'none', md: 'flex' }}>
  {Links.map((link) => (
    <Link key={link.label} href={link.href} _hover={{ textDecoration: 'none' }}>
      <Button variant="subtle" >{link.label}</Button>
    </Link>
  ))}
</HStack>

   {/* Mobile Menu Toggle */}
        <IconButton
          size="md"
          aria-label="Toggle Menu"
          display={{ md: 'none' }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
         {menuOpen ? <FiX/> : <FiMenu/>}
          </IconButton>
      </Flex>
      {/* Mobile Nav */}

{menuOpen && (
  <Box pb={4} display={{ md: 'none' }}>
    <Stack>
      {Links.map((link) => (
        <Link key={link.label} href={link.href} _hover={{ textDecoration: 'none' }}>
          <Button variant="subtle" width="100%">
            {link.label}
          </Button>
        </Link>
      ))}
    </Stack>
  </Box>
)}
    </Box>
  );
}
