import React, { useRef, useState } from 'react';
import styles from './sleepyTime.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const padNumber = (num, length) => {
    return String(num).padStart(length, '0');
};

const SleepyTime = (props) => {
    let nows = new Date();
    const [hour, setHour] = useState(nows.getHours());
    const [min, setMin] = useState(nows.getMinutes());
    const [ampm,setAmpm] = useState('');
    const [cal,setCal] = useState(false);
    const [now,setNouw] = useState(false);
    const [calTime,setCalTime] = useState(false);

    const hourRef = useRef();
    const minRef = useRef();
    const ampmRef = useRef();


    const calClick = ()=>{
        if(minRef.current.value =='min' || hourRef.current.value == 'hour'){
            alert('시간을 입력해 주세요');
        }
        else{
            setCal(true);
            setCalTime(true);
            setAmpm(ampmRef.current.value);
            setMin(Number(minRef.current.value));
            if(ampmRef.current.value == 'pm'){
                setHour(Number(hourRef.current.value)+12);
            }
            else{
                setHour(Number(hourRef.current.value));
            }
        }
        
    }
    const nowClick = ()=>{
        setCal(true);
        setNouw(true);
        setMin(min+14);
        if(min>60){
            setMin(min+14-60);
            setHour(hour+1);
        }
    }
    const ResetClick = ()=>{
        setCal(false);
        setNouw(false);
        setCalTime(false);
        setHour(nows.getHours());
        setMin(nows.getMinutes());
    }
    return(
        <div className={styles.sleepyTimeWrap}>
            <header className={styles.header}>
                <span className={styles.headerIcon}><FontAwesomeIcon className={styles.icon} icon="fa-solid fa-bed" /></span>
                <h1 className={styles.headerTitle}>SleepyTime</h1>
            </header>
            {
                cal? <></> : <div className={styles.sleepTimeCal}>       
                <div className={styles.first}>
                    
                    <div className={styles.select}>
                    <select ref={hourRef} className={styles.select} name="hour" id="hour">
                        <option value="hour">hour</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <select ref={minRef} className={styles.select} name="min" id="min">
                        <option value="min">min</option>
                        <option value="00">00</option>
                        <option value="05">05</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                        <option value="30">30</option>
                        <option value="35">35</option>
                        <option value="40">40</option>
                        <option value="45">45</option>
                        <option value="50">50</option>
                        <option value="55">55</option>
                    </select>
                    <select ref={ampmRef} className={styles.select} name="ampm" id="ampm">
                        <option value="am">AM</option>
                        <option value="pm">PM</option>
                    </select>
                    </div>

                    <h3 className={styles.sleepTimeCalTitle}>에 일어나려면...</h3>

                    <button className={styles.button} onClick={calClick}>계산하기</button>
                </div>
                <div className={styles.second}>
                    <h3 className={styles.secondTitle}>지금 자고 일어난다면...</h3>
                    <button className={styles.button} onClick={nowClick}>Zzz..</button>
                </div>
            </div>
            }

            {
                calTime? 
                <div className={styles.calTime}>
                    <div className={styles.nowWrap}>
                    <h3 className={styles.nowTitle}>인간이 잠들기 까지 평균 14분이 걸립니다! <br/>
                        {padNumber(hour,2)} : {padNumber(min,2)} {ampm} 에 일어나려면 <br/> 다음 시간중에 잠들도록 노력해야합니다.
                    </h3>
                    <p className={styles.NowP}>
                        {hour+15>24?padNumber(hour+15-24,2):padNumber(hour+15,2)}:{padNumber(min,2)} 
                            <span className={styles.nowSpan}>OR</span> 
                        {min+30>60
                            ?hour+17>24?padNumber(hour+17-24,2):padNumber(hour+17,2)
                            :hour+16>24?padNumber(hour+16-24,2):padNumber(hour+16,2)
                        }:
                        {min+30>60
                            ?padNumber(min+30-60,2)
                            :padNumber(min+30,2)
                        }  
                    </p>
                    <p className={styles.NowP}>
                        {hour+18>24?padNumber(hour+18-24,2):padNumber(hour+18,2)}:{padNumber(min,2)} <span className={styles.nowSpan}>OR</span>   
                        {min+30>60
                            ?hour+20>24?padNumber(hour+20-24,2):padNumber(hour+20,2)
                            :hour+19>24?padNumber(hour+19-24,2):padNumber(hour+19,2)
                        }:
                        {min+30>60
                            ?padNumber(min+30-60,2)
                            :padNumber(min+30,2)
                        } 
                    </p>
                    <button className={styles.button} onClick={ResetClick}> 다시 계산 </button>
                </div>
                </div>: <></>
            }
            {
                now?<div className={styles.nowWrap}>
                    <h3 className={styles.nowTitle}>인간이 잠들기 까지 평균 14분이 걸립니다! <br/>
                        지금 바로 잠자리에 든다면<br/> 다음 시간중에 일어나도록 노력해야합니다.
                    </h3>
                    <p className={styles.NowP}>
                        {min+30>60 
                            ?hour+2>24?padNumber(hour+2-24,2):padNumber(hour+2,2)
                            :hour+1>24?padNumber(hour+1-24,2):padNumber(hour+1,2)
                        }:
                        {min+30>60
                            ?padNumber(min+30-60,2)
                            :padNumber(min+30,2)
                        } <span className={styles.nowSpan}>OR</span> 
                        {hour+4>24?padNumber(hour+4-24,2):padNumber(hour+4,2)}:
                        {min>60?
                            padNumber(min-60,2)
                            :padNumber(min,2)
                        } <span className={styles.nowSpan}>OR</span> 
                        {min+30>60?
                            hour+5>24?padNumber(hour+5-24,2):padNumber(hour+5,2)
                            :hour+4>24?padNumber(hour+4-24,2):padNumber(hour+4,2)
                        }:
                        {min+30>60?
                            padNumber(min+30-60,2)
                            :padNumber(min+30,2)
                        } 
                    </p>
                    <p className={styles.NowP}>
                        {hour+7>24?padNumber(hour+7-24,2):padNumber(hour+7,2)}:
                        {min>60?
                            padNumber(min-60,2)
                            :padNumber(min,2)
                        } <span className={styles.nowSpan}>OR</span> 
                        {min+30>60
                            ?hour+8>24?padNumber(hour+8-24,2):padNumber(hour+8,2)
                            :hour+7>24?padNumber(hour+7-24,2):padNumber(hour+7,2)
                        }:
                        {min+30>60
                            ?padNumber(min+30-60,2)
                            :padNumber(min+30,2)
                        } <span className={styles.nowSpan}>OR</span> 
                        {hour+10>24?padNumber(hour+10-24,2):padNumber(hour+10,2)}:
                        {min>60
                            ?padNumber(min-60,2)
                            :padNumber(min,2)
                        }
                    </p>
                    <button className={styles.button} onClick={ResetClick}> 다시 계산 </button>
                </div>:<></>
            }
        </div>
    );
};

export default SleepyTime;