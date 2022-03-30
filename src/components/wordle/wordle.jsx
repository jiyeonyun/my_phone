import React, { useRef, useState } from 'react';
import styles from './wordle.module.css';

const Wordle = (props) => {
    const answers =['apple','happy','house','maple','bread','knife','basic','beach','clock','count','cover','cross','fresh','frame','grade','learn','horse','heart','lunch','magic','movie','place','photo','plane','plant','start','sweet','title','today','total','under','young','white','while','write','stone','sound','sorry','small','sleep','prize','radio','bacon','liver','grape','lemon','mango','melon','peach','trout','onion','chips','olive','cream','plain','yeast','honey','pasta','pizza','react'];
    const color = ['rgb(139 195 74 / 66%)','rgb(255 207 34 / 58%)','rgb(255 59 0 / 54%)','whitesmoke'];
    const [start,setStart] = useState(false);
    const [end,setEnd] = useState(false);
    const [win,setWin] = useState(true);
    const [nullModal,setNullModal] = useState(false);
    const [next,setNext] = useState(false);
    const inputRef1 = useRef();
    const inputRef2 = useRef();
    const inputRef3 = useRef();
    const inputRef4 = useRef();
    const inputRef5 = useRef();
    const gameRef = useRef();
    let colorNum = 0;
    let times = 0;
    const [answer,setAnswer] = useState('');

    const rand = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const startClick = ()=>{
        setStart(!start);
        let randnum = rand(0,answers.length-1);
        setAnswer(answers[randnum]); 
    }
    const changeColor= (e)=>{
        let target = e.target;
        
        if(colorNum <3){
            target.style.background = `${color[colorNum]}`
            colorNum=colorNum+1
        }
        else if(colorNum === 3){
            target.style.background = `${color[colorNum]}`
            colorNum= 0 
        }
    }

    const answerCheck = ()=>{
        let realAnswer = inputRef1.current.value+inputRef2.current.value+inputRef3.current.value+inputRef4.current.value+inputRef5.current.value;
        if(times < 5){
            if(inputRef1.current.value === '',inputRef2.current.value === '',inputRef3.current.value === '',inputRef4.current.value === '' ,inputRef5.current.value === ''){
                setNullModal(!nullModal);
            }
            else{
                if(realAnswer == answer){
                    setEnd(true);
                }
                else{
                    setNullModal(false);
                    for(let i = 0; i < 5; i++){
                        if(realAnswer[i] == answer[i]){
                            document.getElementById(`n${i+1}`).style = 'background:rgb(139 195 74 / 66%)';
                        }
                        else if(answer.includes(realAnswer[i])){
                            document.getElementById(`n${i+1}`).style = 'background:rgb(255 207 34 / 58%)';
                            
                        }
                        else{
                            document.getElementById(`n${i+1}`).style = 'background:rgb(255 59 0 / 54%)';
                        }
                        document.getElementById(`n${i+1}`).removeAttribute('id');
                    }
                    const template = `<div>
                    <input type="text" ref={inputRef1} id="n1" maxlength="1" className={styles.answer} autocomplete="off">
                    <input type="text" ref={inputRef2} id="n2" maxlength="1" className={styles.answer} autocomplete="off">
                    <input type="text" ref={inputRef3} id="n3" maxlength="1" className={styles.answer} autocomplete="off">
                    <input type="text" ref={inputRef4} id="n4" maxlength="1" className={styles.answer} autocomplete="off">
                    <input type="text" ref={inputRef5} id="n5" maxlength="1" className={styles.answer} autocomplete="off">
                    </div>`;
                    gameRef.current.insertAdjacentHTML('beforeend',template);
                    times= times+1;
            }
        }
        }
        else{
            setStart(!start);
            setEnd(!end);
            setWin(!win);
        }
    }

    const reload=()=>{
        window.location.replace("/")
    }
    return(
        <div className={styles.wrap}>
            <h1 className={styles.game_title}>😈 Wordle 👿</h1>

            <div className={`${start?styles.hide:styles.modal}`}>
                <div className={styles.playModal}>
                    <h1 className={styles.modal_title} onClick={startClick}>start?</h1>
                </div>
            </div>

            <div className={`${end?styles.result_modal:styles.hide}`}>
                <h1 className={styles.result_modal_result}>{win?'🥳congratulations🥳':` you lose 👻
            answer is "${answer}"!!`}</h1>
                <h1 className={styles.resultmodal_title} onClick={reload}>replay?</h1>
            </div>

            <div className={`${nullModal?styles.null_modal:styles.hide}`}>
                <h3>please type answer</h3>
            </div>

            <div className={`${start?styles.game:styles.hide}`} >
                <form action='#'ref={gameRef}>
                <input type="text" ref={inputRef1} id="n1" maxLength="1" className={styles.answer} autoComplete="off"/>
                <input type="text" ref={inputRef2} id="n2" maxLength="1" className={styles.answer} autoComplete="off"/>
                <input type="text" ref={inputRef3} id="n3" maxLength="1" className={styles.answer} autoComplete="off"/>
                <input type="text" ref={inputRef4} id="n4" maxLength="1" className={styles.answer} autoComplete="off"/>
                <input type="text" ref={inputRef5} id="n5" maxLength="1" className={styles.answer} autoComplete="off"/>
                </form>
                <button className={styles.submit} onClick={answerCheck}>Enter</button>
            </div>

            <div className={`${start?styles.keyBorad:styles.hide}`}>
                <div className={styles.line1}>
                    <div className={styles.line1_left}>
                        <span className={styles.key} onClick={changeColor}>q</span>
                        <span className={styles.key} onClick={changeColor}>w</span>
                        <span className={styles.key} onClick={changeColor}>e</span>
                        <span className={styles.key} onClick={changeColor}>r</span>
                        <span className={styles.key} onClick={changeColor}>t</span>
                        <span className={styles.key} onClick={changeColor}>y</span>
                    </div>
                    <div className={styles.line1_right}>
                        <span className={styles.key} onClick={changeColor}>u</span>
                        <span className={styles.key} onClick={changeColor}>i</span>
                        <span className={styles.key} onClick={changeColor}>o</span>
                        <span className={styles.key} onClick={changeColor}>p</span>
                    </div>
                </div>
                <div className={styles.line2}>
                    <div className={styles.line2_left}>
                        <span className={styles.key} onClick={changeColor}>a</span>
                        <span className={styles.key} onClick={changeColor}>s</span>
                        <span className={styles.key} onClick={changeColor}>d</span>
                        <span className={styles.key} onClick={changeColor}>f</span>
                        <span className={styles.key} onClick={changeColor}>g</span>
                    </div>
                    <div className={styles.line2_right}>
                        <span className={styles.key} onClick={changeColor}>h</span>
                        <span className={styles.key} onClick={changeColor}>j</span>
                        <span className={styles.key} onClick={changeColor}>k</span>
                        <span className={styles.key} onClick={changeColor}>l</span>
                    </div>
                </div>
                <div className={styles.line3}>
                    <div className={styles.line3_left}>
                        <span className={styles.key} onClick={changeColor}>z</span>
                        <span className={styles.key} onClick={changeColor}>x</span>
                        <span className={styles.key} onClick={changeColor}>c</span>
                        <span className={styles.key} onClick={changeColor}>v</span>
                    </div>
                    <div className={styles.line3_right}>
                        <span className={styles.key} onClick={changeColor}>b</span>
                        <span className={styles.key} onClick={changeColor}>n</span>
                        <span className={styles.key} onClick={changeColor}>m</span>
                        <span className={styles.key} onClick={changeColor}>🖤</span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Wordle;








