import React, { useState } from 'react';
import { Box, Input, Button, Text, VStack } from '@chakra-ui/react';
import api from '../services/api';

const MessageSimulator = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState(null);

  const handleSend = async () => {
    try {
      const res = await api.post('teams/simulate', { message });
      setResponse(res.data);
    } catch (err) {
      setResponse({ error: 'Something went wrong' });
    }
  };

  return (
    <Box p={4} bg="white" borderRadius="md" boxShadow="md">
      <VStack spacing={4}>
        <Input
          placeholder="Type a Teams message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button colorScheme="blue" onClick={handleSend}>Send</Button>
        {response && (
          <Box bg="gray.50" p={3} borderRadius="md" w="100%">
            <Text fontWeight="bold">Response:</Text>
            <Text fontSize="sm" whiteSpace="pre-wrap">
              {response.message}
            </Text>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default MessageSimulator;
