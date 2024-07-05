import React, { useState } from 'react';
import { Box, Button, H1, H2, Wrapper, BoxForH1 } from './Style';
import Container from '@mui/material/Container';

const CalculatorItems = () => {

    const [num, setNum] = useState(0);
    const [operator, setOperator] = useState('');
    const [oldNum, setOldNum] = useState();
    const [twoValues, setTwoValues] = useState()

    const inputNum = (e) => {
        let input = e.target.innerHTML

        if (input === '0' || input === '1' || input === '2' || input === '3' || input === '4' || input === '5' || input === '6'  || input === '7'
            || input === '8' || input === '9' || input === '.') {

                if(num === 0) {
                    setNum(input)
                }
                else{
                setNum(num + input)
                }
            }

        if(input === 'AC') {
            setNum(0)
            setOldNum(0)
            setTwoValues('') 
        }

        if(input === '+/-') {
            if(num >0){
                setNum(-num)
            }else{
                setNum(Math.abs(num))
            }
        }

        if(input === '+' || input === '-' || input === '/' || input === 'x' || input === '%'){

            
            setOperator(input)

            if(num <0 || num >=0) {
                setOldNum(num);
                setTwoValues(num + input)
                setNum(0);
            }
           
        }

        if(input === '='){


            if(oldNum>=0 && num >=0 || oldNum <=0 && num <=0 || oldNum <=0 && num >=0 || oldNum >=0 && num <=0){

                setTwoValues(twoValues + num + input)

                if(operator === '+'){
                 setNum(+oldNum + +num)
                }

                if(operator === '-'){
                    setNum(+oldNum - +num)
                }

                if(operator === 'x'){
                    setNum(+oldNum * +num)
                }

                if(operator === '/'){
                    setNum(+oldNum / +num)
                }

                if(operator === '%') {
                    setNum(+oldNum * +num / 100)
                }
            } 
        }

    }

    const buttonsList = ['AC', '+/-', '%', '/', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '-', '=',];
    let randomNumber = 53868382438;

    return (

        <div>
            <Box/>
            <Container maxWidth="xs">
                <Wrapper>
                    <BoxForH1>
                        <H2>{twoValues}</H2>
                        <H1>{num}</H1>
                    </BoxForH1>
                    {buttonsList.map((button => (
                        <Button onClick={inputNum}  key={randomNumber = Math.floor(Math.random() * 100000)}>{button}</Button>
                    )))}
                </Wrapper>
            </Container>

        </div>
    )
}

export default CalculatorItems




