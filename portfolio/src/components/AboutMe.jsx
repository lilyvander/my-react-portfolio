import React from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';

function AboutMe() {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      p="6"
      m="4"
    >
      <Heading as="h2" size="lg" mb="4">
        About Me
      </Heading>
      <Box display="flex" alignItems="center">
        <Image
        src="https://media.licdn.com/dms/image/D5603AQGmuyEb8Sgtcg/profile-displayphoto-shrink_400_400/0/1711170320101?e=1717632000&v=beta&t=RvWBEmSi7iLPHA5QZS_kJweWElMx5RrGLigLuNlT_5o"
        alt="Lily Vanderblomen's Photo"
        boxSize="150px"
        borderRadius="full"
        mr="4"
      />
        <Text>
          My name is Lily and I am a Colorado native. Over the past 8+ years, I have been working in Digital Marketing. My BS degree is in Fisheries Bio, but my skills in Data Analysis brought me into the world of digital marketing. Now, to expand my skills to help my clients WIN, I am learning about coding and software engineering.
        </Text>
      </Box>
    </Box>
  );
}

export default AboutMe;
