import styled from "styled-components";
import Calculator from "./Calculator";
import GlobalStyle from "./GlobalStyles";

export default function App() {
    return (
        <Main>
            <GlobalStyle />
            <Calculator />
        </Main>
    );
};

const Main = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

