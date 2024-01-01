import React, {useState} from 'react';
import './App.css';

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];
function App() {

  return (
      <>
         <Counter />
          <Counter />

      </>
  );
}


function Counter() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true)

    function handlePreviousClick(){
        if (step > 1)setStep(currentStep => currentStep-1)
    }

    function handleNextClick(){
        if (step < 3)setStep(currentStep => currentStep+1)
    }
    return (
        <>
            <button className="close" onClick={() => setIsOpen((open)=> !open)}>&times;</button>
            {isOpen && (
                <div className="steps">
                    <div className="numbers">
                        <div className={step >= 1 ? "active" : ""}>1</div>
                        <div className={step >= 2 ? "active" : ""}>2</div>
                        <div className={step >= 3 ? "active" : ""}>3</div>
                    </div>

                    <p className="message">Step {step}: {messages[step - 1]}</p>

                    <div className="buttons">

                        <button style={{backgroundColor: "#7950f2", color: "#fff"}}
                                onClick={handlePreviousClick}>previous
                        </button>
                        <button style={{backgroundColor: "#7950f2", color: "#fff"}} onClick={handleNextClick}>next
                        </button>

                    </div>
                </div>
            )}
        </>

    )
}

export default App;
