import React from 'react';
import styles from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateLeft ,faCircleNotch, faBars  } from '@fortawesome/free-solid-svg-icons';
const Footer = ({clicked,setClicked,setName}) => {
    const onCancle = ()=>{
        setClicked(!clicked);
        setName('');
    }
    return(
        <footer className={styles.footer}>
            <span className={styles.icon} onClick={onCancle}><FontAwesomeIcon icon={faArrowRotateLeft} /></span>
            <span className={styles.icon} onClick={onCancle}><FontAwesomeIcon icon={faCircleNotch} /></span>
            <span className={styles.icon}><FontAwesomeIcon icon={faBars} /></span>
        </footer>
    );
};

export default Footer;