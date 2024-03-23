import React,{useState} from 'react'

function UserInputs() {
    const [userInput, setUserInput] = useState(
        {
            InitialInvestment: 1000,
            AnnualInvestment: 20000,
            ExpectedReturn: 6,
            Duration: 5,
        }
    )

    function handleChangeUserInput(identifier, newValue){
        setUserInput(prevUserInput => {
            return{
                ...prevUserInput,
                [identifier]: newValue,
            }
        })
    }



    return (
        <section id='user-input'>
            <div className='user-group'>
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required value={userInput.InitialInvestment} onChange={(event) => handleChangeUserInput('InitialInvestment', event.target.value)}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required value={userInput.AnnualInvestment} onChange={(event) => handleChangeUserInput('AnnualInvestment', event.target.value)}/>
                </p>
            </div>
            <div className='user-group'>
                <p>
                    <label>Expected Return</label>
                    <input type="number" required value={userInput.ExpectedReturn} onChange={(event) => handleChangeUserInput('ExpectedReturn', event.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required value={userInput.Duration} onChange={(event) => handleChangeUserInput('Duration', event.target.value)}/>
                </p>
            </div>
        </section>
    )
}

export default UserInputs