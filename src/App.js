import React from "react";
import { ThemeProvider } from "styled-components";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Container } from "./Components/Styles/Container.styled";
import GlobalStyle from "./Components/Styles/Global";
import content from './content'
const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "hsl(192,100%,9%)",
  },
  mobile:'768px'
};
//footer #00333
function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <Header />
        <Container>
        {content.map((item,index) => (
        <Card key={index} item={item}/>
        ))}
        </Container>
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
