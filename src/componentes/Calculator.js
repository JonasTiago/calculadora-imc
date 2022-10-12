import { useState } from "react"
import styled from "styled-components"
import Table from "./Table"

export default function Calculator() {
    const [imc, setImc] = useState('');
    const [result, setResult] = useState('')
    const [dados, setDados] = useState(
        {
            altura: '',
            peso: ''
        }
    );

    function CollectData(e) {
        setDados({
            ...dados,
            [e.target.name]: /[0-9.,]*/.exec(e.target.value),
        }
        );
    };

    function calcImc() {
        const imcFinal = (parseFloat(dados.peso[0].replace(',', '.')) /
            (parseFloat(dados.altura[0].replace(',', '.')) * parseFloat(dados.altura[0].replace(',', '.')))).toFixed(2);

        setImc(imcFinal);

        if (imcFinal < 18.5) {
            setResult('MAGRESA')
        } else if (imcFinal <= 24.4) {
            setResult('NORMAL')
        } else if (imcFinal >= 25 && imcFinal <= 29.9) {
            setResult('SOBREPESO')
        } else if (30 <= imcFinal && imcFinal <= 39.9) {
            setResult('OBESIDADE')
        } else {
            setResult('OBESIDADE GRAVE')
        };
    };

    function clearDate() {
        setDados(
            {
                altura: '',
                peso: ''
            }
        );
        setResult('')
        setImc('')
    };

    return (
        <CalculatorStyle>
            <h1>Calculadora de IMC</h1>
            <Form imcResult={imc}>
                <section>
                    <div>
                        <p>Altura</p>
                        <input type="text"
                            name="altura"
                            value={dados.altura}
                            onChange={CollectData} />
                    </div>
                    <div>
                        <p>Peso</p>
                        <input
                            type="text"
                            name="peso"
                            value={dados.peso}
                            onChange={CollectData} />
                    </div>
                </section>
                <section>
                    <button onClick={clearDate}>Limpar</button>
                    <button onClick={() => dados.altura > 0 && dados.peso > 0 ?
                        calcImc() :
                        alert('Dados incorretos!')}>Calcular</button>
                </section>
            </Form>
            <Result imcResult={imc}>
                <span>Seu IMC é: {imc}</span>
            </Result>
            <Table result={result} />
        </CalculatorStyle>
    )
}

const CalculatorStyle = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    background-color:red;
    width:680px;
    height:650px;
    margin:auto;
    background-color:#fff;
    box-shadow:0 0 5px #9ca3af;
    padding:32px;
    align-items:center;
    margin: 5% auto;
    border-radius:5px;

    h1{
        font-size:25px;
        text-align:center;
        margin:25px auto 30px auto;
        color:#e44a18;
        font-size:32px;
        font-family:sans-serif;
        font-weight:bold;
    }
`

const Form = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:${props => props.imcResult > 0 ? "" : '110px'};
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
                border:1px solid #bebebe;
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
    display:${props => props.imcResult > 0 ? "intial" : 'none'};
    width:180px;
    height: 62px;
    background-color:red;
    margin:25px auto 15px auto;
    text-align:center;
    padding-top:20px;
    background-color:#f53a00;
    color:#fff;
    font-size:18px;
    font-weight:bold;
    font-family:sans-serif;
    border-radius:8px;
`
