import React, {useState, useEffect} from 'react'

export default function Keypad() {
    const buttonList = [
        {
            name: '0',
            class: 'number-button',
            id: 'zero',
            value: 0
        },
        {
            name: '1',
            class: 'number-button',
            id: 'one',
            value: 1
        },
        {
            name: '2',
            class: 'number-button',
            id: 'two',
            value: 2
        },
        {
            name: '3',
            class: 'number-button',
            id: 'three',
            value: 3
        },
        {
            name: '4',
            class: 'number-button',
            id: 'four',
            value: 4
        },
        {
            name: '5',
            class: 'number-button',
            id: 'five',
            value: 5
        },
        {
            name: '6',
            class: 'number-button',
            id: 'six',
            value: 6
        },
        {
            name: '7',
            class: 'number-button',
            id: 'seven',
            value: 7
        },
        {
            name: '8',
            class: 'number-button',
            id: 'eight',
            value: 8
        },
        {
            name: '9',
            class: 'number-button',
            id: 'nine',
            value: 9
        },
        {
            name: '=',
            class: 'number-button',
            id: 'equals',
            value: '='
        },
        {
            name: '.',
            class: 'number-button',
            id: 'decimal',
            value: '.'
        },
        {
            name: '+',
            class: 'operator-button',
            id: 'add',
            value: '+'
        },
        {
            name: '-',
            class: 'operator-button',
            id: 'subtract',
            value: '-'
        },
        {
            name: '*',
            class: 'operator-button',
            id: 'multiply',
            value: '*'
        },
        {
            name: '/',
            class: 'operator-button',
            id: 'divide',
            value: '/'
        },
        {
            name: 'C',
            class: 'clear-button',
            id: 'clear',
            value: ''
        }

    ]

    
    const operators = ['+', '-', '/', '*', '=' ]

    const [input, setInput] = useState('')
    const [inputHistory, setInputHistory] = useState('')
    const [display, setDisplay] = useState(0)
    const [operand, setOperand] = useState('')
    const [result, setResult] = useState('')
    const [finalResult, setFinalResult] = useState('')
    const [inputArray, setInputArray] = useState('')
    const [prevInput, setPrevInput] = useState('')
    const [arrayResult, setArrayResult] = useState(0)
    const handleClick = (e) => {
        
        console.log(prevInput)
        //clearing out all variables when clear button is pressed
        if (e.target.id === 'clear') {
            console.log('empty')
            setDisplay(0)
            setResult('')
            setInputHistory('')
            setInput('')
            return
        }
        //check for multiple 0 inputs in a row
        if (prevInput == 0 && e.target.value == 0) {
            console.log(inputHistory)
            return
        }

        //check for multiple . inputs in a row
        if (prevInput == '.' && e.target.value == '.') {
            return
        }
        //conditional statmement to prevent operators without number input or multiple operators in a row
        if (
            operators.includes(e.target.value) && input === '' ||
            operators.includes(e.target.value) && operators.includes(input.slice(-1))
            ) {
            return
        }
        setInput(input => input + e.target.value)
        setInputHistory(inputHistory !== 0 ? inputHistory + e.target.value : e.target.value)
        setPrevInput(e.target.value)
        

        console.log(inputArray)
        //if user clicks operator, save the operator to use in the next calculation
        if (operators.includes(e.target.value) && result === ('')) {
            //setResult(input)
            setInput('')          
        }   
        
        //switch case for different operators, set display to the result        
        if (operators.includes(e.target.value)) {
            console.log('ayay')
            console.log(result)
            console.log(input) 
            console.log(display)
            setOperand (e.target.value)
            setInput('')
            // setInput('')
                switch (operand) {
                    case '+':
                        setResult(parseFloat(result) + parseFloat(input))                
                        break;
                    case '-':
                        setResult(parseFloat(result) - parseFloat(input))
                        break;
                    case '*':
                        setResult(parseFloat(result) * parseFloat(input))
                        break;
                    case '/':
                        setResult(parseFloat(result) / parseFloat(input))
                        break;
                    case '=':
                        setFinalResult(result)
                        break;
                    default:
                        return
                    
                }    
              
        }       
    }
    //when the result is updated, show it on the display
    useEffect(() => {
        setDisplay(finalResult)
        //setInputHistory(inputHistory + result)
    }, [finalResult])

    return (
        <div id='container'>
            {buttonList.map(button => (
                <button className={button.class} id={button.id} 
                value={button.value} onClick={(e) => handleClick(e)}>
                {button.name}
                </button>
            ))}
            <div id='display-area'>
            <div id='input-area'>{display}</div>
            <input type='text' id='display' value={inputHistory + finalResult || 0} />
            
            </div>
        </div>
    )
}
