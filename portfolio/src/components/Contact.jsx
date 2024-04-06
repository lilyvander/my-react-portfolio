import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // TEST 
  };

  return (
    <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden" p="6" m="4">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <FormControl id="name">
          <FormLabel>Name:</FormLabel>
          <Input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </FormControl>
        <FormControl id="email" mt="4">
          <FormLabel>Email:</FormLabel>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </FormControl>
        <FormControl id="message" mt="4">
          <FormLabel>Message:</FormLabel>
          <Textarea name="message" value={formData.message} onChange={handleChange} required />
        </FormControl>
        <Button type="submit" mt="4">Submit</Button>
      </form>
    </Box>
  );
}

export default Contact;
