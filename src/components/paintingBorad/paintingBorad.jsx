import React, { useEffect, useRef, useState } from 'react';
import styles from './paintingBoard.module.css';

const PaintingBorad = (props) => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const inputRef = useRef('');
    const [color,setColor] = useState('');
    const[ctx,setCtx] = useState();
    const[isDrawing,setIsDrawing] = useState(false);
    const[size,setSize] = useState(inputRef.current.value);
    const[filling,setFilling] =useState(false);   
    useEffect(()=>{
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth*0.3;
        canvas.heigt = window.innerHeight*0.2;

        const context = canvas.getContext('2d');
        context.strokeStyle = color;
        context.lineWidth  = size;
        contextRef.current = context;
        context.fillStyle = color;
        setCtx(contextRef.current);
        }, []);
    const startDrawing = ({nativeEvent}) =>{
        setIsDrawing(true);
    }

    const finishDrawing = ()=>{
        setIsDrawing(false);
    }

    const drawing = ({nativeEvent}) =>{
        const{offsetX,offsetY} = nativeEvent;

        if(ctx){
            if(!isDrawing){
                ctx.beginPath();
                ctx.moveTo(offsetX,offsetY);
            }
            else{
                ctx.lineTo(offsetX,offsetY);
                ctx.stroke();
            }
        }
    }
    const modeClick = () =>{
        if(filling){
            setFilling(!filling)
        }
        else{
            setFilling(!filling)
        }
    }
    const changeColor=(event)=>{
        setColor(event.target.style.backgroundColor);
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
    }
    const rangeChange = ()=>{
        setSize(inputRef.current.value);
        ctx.lineWidth = size;
    }
    const onChange = ()=>{
        rangeChange();
    }
    const canvasClick= ({nativeEvent})=>{
        if(filling){
            ctx.fillRect(0,0,320,260);
        }
        
    }
    const saveClick = ()=>{
        const canvas = canvasRef.current;
        const image = canvas.toDataURL();
        const link = document.createElement('a');
        link.href = image;
        link.download = "paintJS[🎨]";
        link.click();
    }
    return(
        <div> 
            <canvas ref={canvasRef}
                    className={styles.canvas}
                    onClick={canvasClick}
                    onMouseDown={startDrawing}
                    onMouseUp={finishDrawing}
                    onMouseMove={drawing}
                    onMouseLeave={finishDrawing}
                    >
                    
            </canvas>
        <div className={styles.controls}>
            <div className={styles.controlsRange}>
                <input
                ref={inputRef}
                type="range"
                id="jsRange" 
                min="0.1" 
                max="5" 
                step="0.1"
                onChange={onChange}
                />
            </div>
            <div className={styles.controlsBtns}>
                <button onClick={modeClick}>{filling?'Paint':'fill'}</button>
                <button onClick={saveClick}>save</button>
            </div>
    
            <div className={styles.controlsColors} >
                <div className={styles.controlsColor} onClick={changeColor} style={{backgroundColor:'#2c2c2c'}} ></div>
                <div className={styles.controlsColor} onClick={changeColor} style={{backgroundColor:'white'}} ></div>
                <div className={styles.controlsColor} onClick={changeColor} style={{backgroundColor:'#FF3B30'}} ></div>
                <div className={styles.controlsColor} onClick={changeColor} style={{backgroundColor:'#ff9500'}} ></div>
                <div className={styles.controlsColor} onClick={changeColor} style={{backgroundColor:'#FFCC00'}} ></div>
                <div className={styles.controlsColor} onClick={changeColor} style={{backgroundColor:'#4CD963'}} ></div>
                <div className={styles.controlsColor} onClick={changeColor} style={{backgroundColor:'#5AC8FA'}} ></div>
                <div className={styles.controlsColor} onClick={changeColor} style={{backgroundColor:'#0579FF'}} ></div>
                <div className={styles.controlsColor} onClick={changeColor} style={{backgroundColor:'#5856D6'}} ></div>
            </div>
        </div>
        </div>
        );}


export default PaintingBorad;