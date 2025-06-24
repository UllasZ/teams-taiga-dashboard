import React, { useEffect, useState } from 'react';
import {
  Box, Button, Heading, Text, Spinner,
  Table, Thead, Tbody, Tr, Th, Td
} from '@chakra-ui/react';
import api from '../services/api';
import SubTaskDetails from './SubTaskDetails';

const StoryDetails = ({ storyId, onBack }) => {
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      api.get(`/teams/user_stories/${storyId}`),
      api.get(`/teams/user_stories/${storyId}/tasks`)
    ])
      .then(([storyRes, tasksRes]) => {
        setStory({ ...storyRes.data, tasks: tasksRes.data });
      })
      .finally(() => setLoading(false));
  }, [storyId]);

  if (loading) return <Spinner />;
  if (!story) return <Text>Story not found.</Text>;

  return (
    <Box>
      <Button mb={4} onClick={onBack}>← Back</Button>
      <Heading size="lg" mb={2}>{story.subject}</Heading>
      <Text mb={4}>{story.description || "No description available."}</Text>

      <Heading size="md" mt={6} mb={2}>Subtasks</Heading>
      {!selectedTaskId ? (
        story.tasks && story.tasks.length > 0 ? (
          <Table variant="simple" size="md" mt={4}>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Title</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {story.tasks.map(task => (
                <Tr key={task.id}>
                  <Td>{task.id}</Td>
                  <Td>
                    <Button
                      variant="link"
                      colorScheme="blue"
                      onClick={() => setSelectedTaskId(task.id)}
                    >
                      {task.subject}
                    </Button>
                  </Td>
                  <Td>{task.status}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        ) : (
          <Text>No subtasks available.</Text>
        )
      ) : (
        <Box mt={6}>
          <SubTaskDetails
            taskId={selectedTaskId}
            onBack={() => setSelectedTaskId(null)}
          />
        </Box>
      )}
    </Box>
  );
};

export default StoryDetails;
