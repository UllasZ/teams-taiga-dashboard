import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Heading } from '@chakra-ui/react';

import MessageSimulator from './components/MessageSimulator';
import TaigaTable from './components/TaigaTable';

function App() {
  const [refreshTrigger, setRefreshTrigger] = useState(false);

  const triggerRefresh = () => {
    setRefreshTrigger(prev => !prev);
  };

  return (
    <Router>
      <Container maxW="container.lg" py={8}>
        <Heading mb={6}>Teams-Taiga Task Automation</Heading>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MessageSimulator onMessageSent={triggerRefresh} />
                <TaigaTable refresh={refreshTrigger} />
              </>
            }
          />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
