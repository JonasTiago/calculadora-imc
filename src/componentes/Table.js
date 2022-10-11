import { useEffect } from "react";
import styled from "styled-components";

export default function Table(imc) {
    const imcs = [
        { imc: 'MENOR QUE 18,5', rating: 'MAGRESA', grau: 0 },
        { imc: 'MENOR QUE 18,5', rating: 'NORMAL', grau: 0 },
        { imc: 'MENOR QUE 18,5', rating: 'SOBREPESO', grau: 'I' },
        { imc: 'MENOR QUE 18,5', rating: 'OBESIDADE', grau: 'II' },
        { imc: 'MENOR QUE 18,5', rating: 'OBESIDADE GRAVE', grau: 'III' }
    ];

    return (
        <TableStyle>
            <thead>
                <tr>
                    <th>IMC</th>
                    <th>Classificação</th>
                    <th>Grau</th>
                </tr>
            </thead>
            <tbody>
                {imcs.map((i, ind) =>
                    <tr key={ind} resut={false}>
                        <td>{i.imc}</td>
                        <td>{i.rating}</td>
                        <td>{i.grau}</td>
                    </tr>
                )
                }
            </tbody>
        </TableStyle>
    )
}

const TableStyle = styled.table`
    border:1px solid #bebebe;
    width:95%;
    height:45%;
    font-family:sans-serif;
    font-size:20px;
    margin-top:10px;


    th{
        background-color:#2C967A;
        text-align:center;
        border:1px solid #bebebe;
        padding: 10px 15px 0 15px;
        color:#fff;
        height:40px;
    }

    tr{

    }

    td{
        text-align:center;
        border:1px solid #bebebe;
        padding: 15px 15px 0 15px;
        font-size:16px;
        background-color: #fff;
    }
`