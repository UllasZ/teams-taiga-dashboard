import React, { useState } from 'react';
import { Box, Input, Button, VStack, useToast } from '@chakra-ui/react';

import api from '../services/api';

const MessageSimulator = ({ onMessageSent }) => {

  const toast = useToast();

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

const handleSend = async () => {
  setLoading(true);
  try {
    const res = await api.post('teams/simulate', { message });
    toast({
      title: 'Message processed',
      description: res.data.message || 'Task successfully created or updated.',
      status: 'success',
      duration: 4000,
      isClosable: true,
      position: 'top',
    });
    setMessage('');
    if (onMessageSent) onMessageSent();
  } catch (err) {
    toast({
      title: 'Error',
      description: err.response?.data?.detail || 'Something went wrong.',
      status: 'error',
      duration: 4000,
      isClosable: true,
      position: 'top',
    });
  } finally {
    setLoading(false);
  }
};

  return (
    <Box p={4} bg="white" borderRadius="md" boxShadow="md">
      <VStack spacing={4}>
        <Input
          placeholder="Type a Teams message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          isDisabled={loading}
        />
        <Button
          colorScheme="blue"
          onClick={handleSend}
          isDisabled={!message.trim() || loading}
          isLoading={loading}
          loadingText="Sending..."
        >
          Send
        </Button>
      </VStack>
    </Box>
  );
};

export default MessageSimulator;
