import React from 'react';
import {UniversalButton} from "../universalButton/UniversalButton";

type SettingsCounterProps = {
    SETTINGS_COUNTER: string
}

export const SettingsCounter = (props: SettingsCounterProps) => {


    return (
        <div className="counter-container">

            <h2 className="title-container">{props.SETTINGS_COUNTER}</h2>

            <div className="input-container">
                <input type="number"/>
                <input type="number"/>
            </div>


            <div className="buttons-container">
                <UniversalButton onClick={() => {
                }} name={"Fix the value"}/>
            </div>
        </div>
    );
};

