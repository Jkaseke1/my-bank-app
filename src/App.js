import React, { useState, useContext } from 'react';
import { Container, Form, FormControl, FormGroup, Button, Row, Col } from 'react-bootstrap';
import { AccountContext } from './Context';
import './App.css';

const App = () => {
  const { balance, setBalance } = useContext(AccountContext);
  const [amount, setAmount] = useState(0);

  const handleDeposit = () => {
    const amount = parseFloat(document.getElementById("amount").value);
    setBalance(balance + amount);
    setAmount(0);
  };

  const handleWithdraw = () => {
    const amount = parseFloat(document.getElementById("amount").value);
    setBalance(balance - amount);
    setAmount(0);
  };

  const handleAddInterest = () => {
    setBalance(balance + (balance * 0.05));
  };

  const handleCharges = () => {
    setBalance(balance - (balance * 0.15));
  };

  return (
    <Container className="container">
      <h1>My Bank APP</h1>
      <Form>
        <FormGroup>
          <FormControl 
            type="number" 
            id="amount" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </FormGroup>
        <Row>
          <Col md={12}>
            <Button 
              variant="success" 
              className="button-container" 
              onClick={handleDeposit}
              block
            >
              Deposit
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Button 
              variant="danger" 
              className="button-container" 
              onClick={handleWithdraw}
              block
            >
              Withdraw
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Button 
              variant="info" 
              className="button-container" 
              onClick={handleAddInterest}
              block
            >
              Add Interest
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Button 
              variant="warning" 
              className="button-container" 
              onClick={handleCharges}
              block
            >
              Charges
            </Button>
          </Col>
        </Row>
      </Form>
      <div className="balance">Balance: ${balance.toFixed(2)}</div>
    </Container>
  );
};

export default App;
