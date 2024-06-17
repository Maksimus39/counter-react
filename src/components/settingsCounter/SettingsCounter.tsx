import React, {useState} from 'react';
import {UniversalButton} from "../universalButton/UniversalButton";

type SettingsCounterProps = {
    TITLE_SETTINGS_COUNTER: string;
    START_VALUE: string;
    MAX_VALUE: string;
    onFixValues: (min: number, max: number) => void;
}

export const SettingsCounter = (props: SettingsCounterProps) => {
    // Хук фиксирующий значение минимального инпута
    const [minInputValue, setMinInputValue] = useState('');
    // Хук фиксирующий значение максимального инпута
    const [maxInputValue, setMaxInputValue] = useState('');

    // Хук для хранения зафиксированных значений
    const [fixedMinValue, setFixedMinValue] = useState('');
    const [fixedMaxValue, setFixedMaxValue] = useState('');

    // Хендлер для минимального значения
    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMinInputValue(e.currentTarget.value);
    };

    // Хендлер для максимального значения
    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxInputValue(e.currentTarget.value);
    };


    const handleFixValues = () => {
        setFixedMinValue(minInputValue);
        setFixedMaxValue(maxInputValue);
        props.onFixValues(Number(minInputValue), Number(maxInputValue)); // Вызываем функцию обратного вызова с новыми значениями
    };

    return (
        <div className="counter-container">
            <h2 className="title-container">{props.TITLE_SETTINGS_COUNTER}</h2>

            <div className="input-container">
                <div>
                    <h2>{props.MAX_VALUE}</h2>
                    <input
                        type="number"
                        value={minInputValue}
                        onChange={handleMinChange}
                        placeholder="Enter min value"
                    />
                </div>

                <div>
                    <h2>{props.START_VALUE}</h2>
                    <input
                        type="number"
                        value={maxInputValue}
                        onChange={handleMaxChange}
                        placeholder="Enter max value"
                    />
                </div>
            </div>

            <div className="buttons-container">
                <UniversalButton onClick={handleFixValues} name="Fix the value"/>
            </div>

            {/* Демонстрация зафиксированных значений */}
            <p>Fixed Min Value: {fixedMinValue}</p>
            <p>Fixed Max Value: {fixedMaxValue}</p>
        </div>
    );
};
