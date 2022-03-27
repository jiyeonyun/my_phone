import React, { useRef, useState } from 'react';
import styles from './calculate.module.css';
    let firstNum = '';
    let operatorForAdvanced = '';
    let previousKey = '';
    let previousNum = '';
    let arr = [];
    let num ='';

const Calculate = (props) => {
    const [result,setResult] = useState(0);
    const buttonRef = useRef();
    const allClear = ()=>{
        arr = [];
        setResult(0);
        firstNum = '';
        previousNum = '';
        operatorForAdvanced = '';
        previousKey = '';
    }

    const BtnClick = (e) => {
        const action = isNaN(parseInt(e.target.innerText));
        const buttonContent = e.target.textContent;
        if(action === false){/*숫자이면*/
            if(result === 0 && operatorForAdvanced === ''){
                num = isNaN(buttonContent) ? '' : buttonContent;
                setResult(num);
                firstNum = num;
            }
            else if(result !== 0 && operatorForAdvanced === ''){
                    num= result + buttonContent;
                    setResult(num);
                    firstNum = num;
            }
            else{//둘다 아닐때
                if(previousKey === operatorForAdvanced ){
                    arr.push(result);
                    num = isNaN(buttonContent) ? '' : buttonContent;
                    setResult(num);
                    previousKey = num
                    previousNum = num;
                }
                else{
                    num = result+ buttonContent;
                    setResult(num);
                    previousNum = num;
                }
            }
        }
        if(action === true){
            operatorForAdvanced = buttonContent;
            previousKey = operatorForAdvanced; 
        }
    };
    const calculate =(n1, operator, n2) => {
        let results = 0;
        if(operator === '+') {
          results = Number(n1) + Number(n2); // '+'버튼을 눌렀을 때
            arr = [];
            arr.push(results);
        }
        else if(operator === '-') {
           results = Number(n1) - Number(n2); // '-'버튼을 눌렀을 때
            arr = [];
            arr.push(results);
        }
        else if(operator === '*') {
           results = Number(n1) * Number(n2); // '*'버튼을 눌렀을 때
            arr = [];
            arr.push(results);
        }
        if(operator === '/') {
           results = Number(n1) / Number(n2); // '/'버튼을 눌렀을 때
            arr = [];
            arr.push(results);
        }
        setResult(results);
        
        }
        
        const Enter = () =>{
            arr.push(result);
            calculate(arr[0],operatorForAdvanced,arr[arr.length-1]);
        }
        
    return(
        <div className={styles.calculateWrap}>
            <div className={styles.display}>
                <span className={styles.result}>{result}</span>
            </div>
        <div className={styles.calculator}>
            <div className={styles.controlor}>
                    <button className={styles.ac} onClick={allClear}>AC</button>
                    <button className={styles.enter} onClick={Enter}>=</button>
                </div>
                <div className={styles.buttons}>
                    <button ref={buttonRef} onClick={BtnClick} className={styles.number}>7</button>
                    <button ref={buttonRef} onClick={BtnClick} className={styles.number}>8</button>
                    <button ref={buttonRef} onClick={BtnClick} className={styles.number}>9</button>
                    <button ref={buttonRef} onClick={BtnClick} className={styles.operator}>+</button>
                    <button ref={buttonRef} onClick={BtnClick} className={styles.number}>4</button>
                    <button ref={buttonRef} onClick={BtnClick} className={styles.number}>5</button>
                    <button ref={buttonRef} onClick={BtnClick} className={styles.number}>6</button>
                    <button ref={buttonRef} onClick={BtnClick} className={styles.operator}>-</button>
                    <button ref={buttonRef} onClick={BtnClick} className={styles.number}>1</button>
                    <button ref={buttonRef} onClick={BtnClick} className={styles.number}>2</button>
                    <button ref={buttonRef} onClick={BtnClick} className={styles.number}>3</button>
                    <button ref={buttonRef} onClick={BtnClick} className={styles.operator}>*</button>
                    <button ref={buttonRef} onClick={BtnClick} id="zero" className={styles.number}>0</button>
                    <button ref={buttonRef} onClick={BtnClick} className={styles.operator}>/</button>
                    <button className={styles.operator}>🤍</button>
                    <button className={styles.operator}>🤍</button>
                </div>
            </div>
        </div>
    );
};

export default Calculate;