import React from 'react';
import {UniversalButton} from "../universalButton/UniversalButton";

type SettingsCounterProps = {
    TITLE_SETTINGS_COUNTER: string
    START_VALUE:string
    MAX_VALUE:string
}

export const SettingsCounter = (props: SettingsCounterProps) => {


    return (
        <div className="counter-container">

            <h2 className="title-container">{props.TITLE_SETTINGS_COUNTER}</h2>

            <div className="input-container">
                <div>
                    <h2>
                        {props.MAX_VALUE}
                    </h2>
                    <input type="number"/>
                </div>

                <div>
                    <h2>
                        {props.START_VALUE}
                    </h2>
                    <input type="number"/>
                </div>

            </div>


            <div className="buttons-container">
                <UniversalButton onClick={() => {
                }} name={"Fix the value"}/>
            </div>
        </div>
    );
};

