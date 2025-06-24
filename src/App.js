import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Heading } from '@chakra-ui/react';

import MessageSimulator from './components/MessageSimulator';
import TaigaTable from './components/TaigaTable';

const Home = () => (
  <>
    <MessageSimulator />
    <TaigaTable />
  </>
);

function App() {
  return (
    <Router>
      <Container maxW="container.lg" py={8}>
        <Heading mb={6}>Teams-Taiga Task Automation</Heading>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
