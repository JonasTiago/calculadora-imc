import styled from "styled-components";

export default function Table({ result }) {
    const imcs = [
        { imc: 'MENOR QUE 18,5', rating: 'MAGRESA', grau: 0 },
        { imc: 'ENTRE 18,5 E 24,9', rating: 'NORMAL', grau: 0 },
        { imc: 'ENTRE 25,0 E 29,9', rating: 'SOBREPESO', grau: 'I' },
        { imc: 'ENTRE 30,0 E 39,9', rating: 'OBESIDADE', grau: 'II' },
        { imc: 'MAIOR QUE 40,0', rating: 'OBESIDADE GRAVE', grau: 'III' }
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
                {imcs.map((i, ind) => i.rating !== result ?
                    <tr key={ind}>
                        <TdStyle>{i.imc}</TdStyle>
                        <TdStyle>{i.rating}</TdStyle>
                        <TdStyle>{i.grau}</TdStyle>
                    </tr>
                    :
                    <tr key={ind}>
                        <TdResult>{i.imc}</TdResult>
                        <TdResult>{i.rating}</TdResult>
                        <TdResult>{i.grau}</TdResult>
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
        background-color:red;
    }

`

const TdStyle = styled.td`
        text-align:center;
        border:1px solid #bebebe52;
        padding: 15px 15px 0 15px;
        font-size:16px;
        background-color: #fff;
`

const TdResult = styled(TdStyle)`
        background-color:#cdebe3;
`