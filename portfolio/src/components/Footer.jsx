import React from 'react';
import { Box, Link, Text, List, ListItem } from '@chakra-ui/react';

function Footer() {
    return (
        <Box as="footer" className="footer">
            <nav>
                <List styleType="none" display="flex" alignItems="center" justifyContent="center">
                    <ListItem mr="4">
                        <Link to="/aboutMe">About Me</Link>
                    </ListItem>
                    <ListItem mr="4">
                        <Link to="/projects">Projects</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/contact">Contact</Link>
                    </ListItem>
                </List>
            </nav>
            <Text textAlign="center">&copy; Lily Vanderbloemen</Text>
        </Box>
    )
};

export default Footer;
