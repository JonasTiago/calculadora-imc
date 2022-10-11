import styled from "styled-components"
import Table from "./Table"

export default function Calculator() {


    
    return (
        <CalculatorStyle>
            <h1>Calculadora de IMC</h1>
            <Form>
                <section>
                    <div>
                        <p>Altura</p>
                        <input type="text" name="altura" />
                    </div>
                    <div>
                        <p>Peso</p>
                        <input type="text" name="peso" />
                    </div>
                </section>
                <section>
                    <button>Limpar</button>
                    <button>Calcular</button>
                </section>
                <Result>
                    <span>Seu IMC é: 21,26</span>
                </Result>
            </Form>
            {/* <Table /> */}
        </CalculatorStyle>
    )
}

const CalculatorStyle = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    background-color:red;
    width:600px;
    height:650px;
    margin:auto;
    background-color:#fff;
    box-shadow:0 0 3px black;
    padding:32px;
    align-items:center;
    margin: 5% auto;
    border-radius:5px;

    h1{
        font-size:25px;
        text-align:center;
        margin:50px auto 0px auto;
        color:#F43E06;
        font-size:32px;
        font-family:sans-serif;
        font-weight:bold;
    }
`

const Form = styled.div`
    display:flex;
    flex-direction:column;
    section{
        display:flex;
    

        div{
            display:flex;
            flex-direction:column ;
            margin:0 4px;

            p{
                color:red;
                margin:4px 0;
                color:#2C967A;
                font-weight:bold;
                font-family:sans-serif;

            }
            input{
                width:175px;
                height:30px;
                border:1px solid gray;
                border-radius:4px;
                font-size:16px;
                padding:0 8px;
            }
        }

        button{
            width:175px;
            height:38px;
            margin:5px 4px;
            border:2px solid #2C967A;
            color:#2C967A;
            font-size:16px;
            font-weight:bold;
            cursor: pointer;
            border-radius:8px;
            background-color:#fff;
        }
    }

    
`

const Result = styled.div`
    width:150px;
    height: 42px;
    background-color:red;
    margin:50px auto;
    text-align:center;
    padding-top:12px;
    background-color:#F43E06;
    color:#fff;
    font-size:16px;
    font-weight:bold;
    font-family:sans-serif;
`
