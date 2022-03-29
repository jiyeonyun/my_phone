import React, { useState } from 'react';
import styles from './sleepyTime.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SleepyTime = (props) => {
    const [cal,setCal] = useState(false);

    return(
        <div className={styles.sleepyTimeWrap}>
            <header className={styles.header}>
                <span className={styles.headerIcon}><FontAwesomeIcon className={styles.icon} icon="fa-solid fa-bed" /></span>
                <h1 className={styles.headerTitle}>SleepyTime</h1>
            </header>
            {
                cal? <></> : <div className={styles.sleepTimeCal}>       
                <div className={styles.first}>
                    <h3>I have to wake up at...</h3>
                    <div className={styles.select}>
                    <select className={styles.select} name="hour" id="hour">
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
                    <select className={styles.select} name="min" id="min">
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
                    <select className={styles.select} name="ampm" id="ampm">
                        <option value="am">AM</option>
                        <option value="pm">PM</option>
                    </select>
                    </div>
                    <button className={styles.button}>CALCUATE</button>
                </div>
                <div className={styles.second}>
                    <h3 className={styles.secondTitle}>I have to wake up at...</h3>
                    <button className={styles.button}>Zzz..</button>
                </div>
            </div>
            }
        </div>
    );
};

export default SleepyTime;