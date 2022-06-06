import styled, { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"

const TitleExample = styled.h1`
  color: ${({theme}) => theme.colors.error};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TitleExample>Styled components</TitleExample>
    </ThemeProvider>
  )
}

export default App
