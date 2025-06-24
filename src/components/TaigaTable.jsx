import React, { useEffect, useState } from 'react';
import {
  Table, Thead, Tbody, Tr, Th, Td, Box, Spinner, Text, Button
} from '@chakra-ui/react';
import api from '../services/api';
import StoryDetails from './StoryDetails';

const TaigaTable = ({refresh}) => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStoryId, setSelectedStoryId] = useState(null);

useEffect(() => {
  setLoading(true);
  api.get('teams/user_stories')
    .then(res => setStories(res.data))
    .catch(() => setStories([]))
    .finally(() => setLoading(false));
}, [refresh]);

  return (
    <Box mt={8}>
      {!selectedStoryId && (
        <>
          <Text fontSize="xl" fontWeight="bold" mb={4}>Taiga Backlog</Text>
          {loading ? (
            <Spinner />
          ) : (
            <Table variant="striped" colorScheme="gray">
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Title</Th>
                  <Th>Created Date</Th>
                  <Th>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {stories.map(story => (
                  <Tr key={story.id}>
                    <Td>{story.id}</Td>
                    <Td>
                      <Button
                        variant="link"
                        colorScheme="blue"
                        onClick={() => setSelectedStoryId(story.id)}
                      >
                        {story.subject}
                      </Button>
                    </Td>
                    <Td>{story.created_date}</Td>
                    <Td color={story.status && story.status_extra_info ? story.status_extra_info.color : null}>
                      {story.status && story.status_extra_info ? story.status_extra_info.name : null}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          )}
        </>
      )}

      {selectedStoryId && (
        <Box mt={6}>
          <StoryDetails
            storyId={selectedStoryId}
            onBack={() => setSelectedStoryId(null)}
          />
        </Box>
      )}
    </Box>
  );
};

export default TaigaTable;
