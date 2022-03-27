import React, { useEffect, useRef, useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './main.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette,faW,faCarrot,faCloudSun,faLeaf,faCalculator } from '@fortawesome/free-solid-svg-icons';
import Detail from '../detail/detail';

const Main = (props) =>{
    const[clicked,setClicked] = useState(false);
    const onClick = ()=>{
        setClicked(!clicked);
    };
    return(
        <div className={styles.phoneWrap}>
            <div className={styles.phone}>
                <Header/>
                {
                    clicked
                    ? <Detail/> 
                    : <ul className={styles.appList}>
                    <li className={styles.app} onClick={onClick}><FontAwesomeIcon className={styles.icon} icon={faPalette} /></li>
                    <li className={styles.app} onClick={onClick}><FontAwesomeIcon className={styles.icon} icon={faW} /></li>
                    <li className={styles.app} onClick={onClick}><FontAwesomeIcon className={styles.icon} icon={faCarrot} /></li>
                    <li className={styles.app} onClick={onClick}><FontAwesomeIcon className={styles.icon} icon={faCalculator} /></li>
                    <li className={styles.app} onClick={onClick}><FontAwesomeIcon className={styles.icon} icon={faCloudSun} /></li>
                    <li className={styles.app} onClick={onClick}><FontAwesomeIcon className={styles.icon} icon={faLeaf} /></li>
                </ul>
                }
                <Footer clicked={clicked} setClicked={setClicked}/>
            </div>
        </div>
    );
};

export default Main;