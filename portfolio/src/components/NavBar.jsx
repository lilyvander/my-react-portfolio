import React from 'react';
import { Link, List, ListItem } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <List styleType="none" display="flex" alignItems="center">
        <ListItem mr="4">
          <Link as={RouterLink} to="/about-me">About Me</Link>
        </ListItem>
        <ListItem mr="4">
          <Link as={RouterLink} to="/portfolio">Portfolio</Link>
        </ListItem>
        <ListItem>
          <Link as={RouterLink} to="/contact">Contact</Link>
        </ListItem>
      </List>
    </nav>
  );
}

export default Navigation;
