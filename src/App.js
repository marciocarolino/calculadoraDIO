import Input from './components/Input';
import Buttom from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';



const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0');

  const [firstNumber, setFirstNumber] = useState('0');

  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleMultiplicationNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }


  const handleDivisionNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== 0) {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;

        case '-':
          handleMinusNumbers();
          break;

        case '*':
          handleMultiplicationNumbers();
          break;

        case '/':
          handleDivisionNumbers();
          break;

        default:
          break;
      }
    }
  }


  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Buttom label="x" onClick={() => handleMultiplicationNumbers()} />
          <Buttom label="/" onClick={handleDivisionNumbers} />
          <Buttom label="c" onClick={handleOnClear} />
          <Buttom label="." />
        </Row>

        <Row>
          <Buttom label="7" onClick={() => handleAddNumber('7')} />
          <Buttom label="8" onClick={() => handleAddNumber('8')} />
          <Buttom label="9" onClick={() => handleAddNumber('9')} />
          <Buttom label="-" onClick={handleMinusNumbers} />
        </Row>

        <Row>
          <Buttom label="4" onClick={() => handleAddNumber('4')} />
          <Buttom label="5" onClick={() => handleAddNumber('5')} />
          <Buttom label="6" onClick={() => handleAddNumber('6')} />
          <Buttom label="+" onClick={handleSumNumbers} />
        </Row>

        <Row>
          <Buttom label="1" onClick={() => handleAddNumber('1')} />
          <Buttom label="2" onClick={() => handleAddNumber('2')} />
          <Buttom label="3" onClick={() => handleAddNumber('3')} />
          <Buttom label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
