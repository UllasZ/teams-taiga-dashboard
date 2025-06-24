import React, { useEffect, useState } from 'react';
import { Box, Button, Heading, Text, Spinner } from '@chakra-ui/react';
import api from '../services/api';

const SubTaskDetails = ({ taskId, onBack }) => {
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/teams/tasks/${taskId}`)
      .then((res) => setTask(res.data))
      .finally(() => setLoading(false));
  }, [taskId]);

  if (loading) return <Spinner />;
  if (!task) return <Text>Subtask not found.</Text>;

  return (
    <Box>
      <Button mb={4} onClick={onBack}>← Back to Subtasks</Button>
      <Heading size="lg">{task.title}</Heading>
      <Text mt={2}>{task.description || "No description available."}</Text>
      <Text mt={2}>Status: {task.status}</Text>
    </Box>
  );
};

export default SubTaskDetails;
