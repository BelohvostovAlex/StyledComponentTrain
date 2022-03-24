import styled from 'styled-components';
import { Title } from './components/Title';
import { Wrapper } from './components/Wrapper';
import { Console } from './components/Console';
import { Button } from './components/Button';

const StyledApp = styled.div`
  height: 100vh;
  width: 100%;
  padding: 20px;
  background: black;
`;

function App() {
  return (
    <StyledApp>
      <Wrapper direction="column" align="center" justify="center">
        <Title color="green">Console</Title>
        <Console color="green"/>
        <Button outline color="green">Send</Button>
      </Wrapper>
    </StyledApp>
  );
}

export default App;
