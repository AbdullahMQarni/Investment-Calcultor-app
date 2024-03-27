import Header from './components/Header';
import UserInputs from './components/UserInputs';
import Result from './components/Result';
import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChangeUserInput(identifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [identifier]: Number(newValue),
      };
    });
  }

  // Adjusted errorMessage function

  return (
    <>
      <Header />
      <div className='view'>
        <UserInputs userInput={userInput} onChange={handleChangeUserInput} />
        {userInput.duration <= 0 || userInput.expectedReturn < 0 || userInput.annualInvestment < 0 || userInput.initialInvestment < 0 ? "": <Result userInputs={userInput} initialInvestment={userInput.initialInvestment} />}
      </div>
        {(userInput.duration <= 0 || userInput.expectedReturn < 0 || userInput.annualInvestment < 0 || userInput.initialInvestment < 0 ? <div id='center'><p>Error: You Entered an invalid number, <span>enter duration greater than Zero</span>.</p></div> : "")}
    </>
  );
}

export default App;
