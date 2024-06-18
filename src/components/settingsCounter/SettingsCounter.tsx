import React from 'react';
import {UniversalButton} from "../universalButton/UniversalButton";

type SettingsCounterProps = {
    TITLE_SETTINGS_COUNTER: string,
    START_VALUE: string,
    MAX_VALUE: string,
    onFixValues: (min: number, max: number) => void,
    setMinInputValue:(value:number)=>void
    setMaxInputValue:(value:number)=>void
    setFixedMinValue:(value:number)=>void
    minInputValue:number
    setFixedMaxValue:(value:number)=>void
    maxInputValue:number
    fixedMinValue:number
    fixedMaxValue:number
    error:boolean
}

export const SettingsCounter = (props: SettingsCounterProps) => {


    // Хендлер для минимального значения
    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setMinInputValue(Number(e.currentTarget.value));
    };

    // Хендлер для максимального значения
    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setMaxInputValue(Number(e.currentTarget.value));
    };


    const handleFixValues = () => {
        props.setFixedMinValue(props.minInputValue);
        props.setFixedMaxValue(props.maxInputValue);
        props.onFixValues(Number(props.minInputValue), Number(props.maxInputValue)); // Вызываем функцию обратного вызова с новыми значениями
    };

    // проверка input на отрицательное значение и на равное значение
    const settingsInput = Number(props.minInputValue) < 0

    // написание класса для input
    const inputClass = settingsInput ? "input-disabled" : ""

    return (
        <div className="counter-container">
            <h2 className="title-container">{props.TITLE_SETTINGS_COUNTER}</h2>

            <div className="input-container">
                <div>
                    <h2>{props.START_VALUE}</h2>
                    <input
                        type="number"
                        value={props.minInputValue}
                        onChange={handleMinChange}
                        placeholder="Enter min value"
                        className={inputClass}

                    />
                    {props.error && <div>error</div>}
                </div>

                <div>
                    <h2>{props.MAX_VALUE}</h2>
                    <input
                        type="number"
                        value={props.maxInputValue}
                        onChange={handleMaxChange}
                        placeholder="Enter max value"
                        className={inputClass}
                    />
                </div>
            </div>

            <div className="buttons-container">
                <UniversalButton onClick={handleFixValues} name="Fix the value"/>
            </div>

            {/* Демонстрация зафиксированных значений */}
            <p>Fixed Min Value: {props.fixedMinValue}</p>
            <p>Fixed Max Value: {props.fixedMaxValue}</p>
        </div>
    );
};
