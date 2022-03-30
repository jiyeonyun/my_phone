import React, { useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './main.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette,faW,faCarrot,faCloudSun,faLeaf,faCalculator } from '@fortawesome/free-solid-svg-icons';
import Detail from '../detail/detail';

const Main = (props) =>{
    const[clicked,setClicked] = useState(false);
    const [name,setName] = useState('');
    const onClick = (e)=>{
        setName('');
        setClicked(!clicked);
        setName(e.target.textContent);
    };
    return(
        <div className={styles.phoneWrap}>
            <div className={styles.phone}>
                <Header/>
                {
                    clicked
                    ? <Detail name={name}/> 
                    : <ul className={styles.appList}>
                    <li className={styles.app} onClick={onClick}><FontAwesomeIcon className={styles.icon} icon={faPalette}/>painting</li>
                    <li className={styles.app} onClick={onClick}><FontAwesomeIcon className={styles.icon} icon={faW} />wordle</li>
                    <li className={styles.app} onClick={onClick}><FontAwesomeIcon className={styles.icon} icon="fa-solid fa-bed"/>sleepy</li>
                    <li className={styles.app} onClick={onClick}><FontAwesomeIcon className={styles.icon} icon={faCalculator}/>calculate</li>
                    <li className={styles.app} onClick={onClick}><FontAwesomeIcon className={styles.icon} icon={faCloudSun}/>weather</li>
                    <li className={styles.app} onClick={onClick}><FontAwesomeIcon className={styles.icon} icon={faLeaf}/>habit</li>
                </ul>
                }
                <Footer setName={setName} clicked={clicked} setClicked={setClicked}/>
            </div>
        </div>
    );
};

export default Main;