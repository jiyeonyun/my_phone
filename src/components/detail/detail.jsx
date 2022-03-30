import React from 'react';
import Calculate from '../calculate/calculate';
import HabitTracker from '../habitTracker/habitTracker';
import PaintingBorad from '../paintingBorad/paintingBorad';
import SleepyTime from '../sleepyTime/sleepyTime';
import WeatherRecommand from '../weatherRecommand/weatherRecommand';
import Wordle from '../wordle/wordle';
import styles from './detail.module.css';

const Detail = ({name}) => {
    console.log(name)
    return(
        <>
            {
                name === 'painting'?<PaintingBorad/>:<></>
            }
            {
                name === 'wordle'?<Wordle/>:<></>
            }
            {
                name === 'sleepy'?<SleepyTime/>:<></>
            }
            {
                name === 'calculate'?<Calculate/>:<></>
            }
            {
                name === 'weather'?<WeatherRecommand/>:<></>
            }
            {
                name === 'habit'?<HabitTracker/>:<></>
            }
        </>
        // // <PaintingBorad/>
        // // <Wordle/>
        // // <HabitTracker/>
        // // <Calculate/>
        // // <WeatherRecommand/>
        // //<SleepyTime/>
    );
};

export default Detail;