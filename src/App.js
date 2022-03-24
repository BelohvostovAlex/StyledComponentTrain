import styled from 'styled-components';
import { Title } from './components/Title';
import { Flex } from './components/Flex';
import { Console } from './components/Console';
import { Button } from './components/Button';

const StyledApp = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 20px;
  background: black;
`;

function App() {
  return (
    <StyledApp>
      <Flex direction="column" align="center" justify="center">
        <Title color="green">Console</Title>
        <Console color="green"/>
        <Button color="green">Send</Button>
      </Flex>
    </StyledApp>
  );
}

export default App;
