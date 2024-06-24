import React, {useState} from 'react';
import {UniversalButton} from "../universalButton/UniversalButton";

type SettingsCounterProps = {
    TITLE_SETTINGS_COUNTER: string,
    START_VALUE: string,
    MAX_VALUE: string,
    onFixValues: (min: number, max: number) => void,
    error: boolean
    minValueRedux: number
    maxValueRedux: number
}

export const SettingsCounter = (props: SettingsCounterProps) => {
    const [minValue, setMinValue] = useState(props.minValueRedux);
    const [maxValue, setMaxValue] = useState(props.maxValueRedux);

    // Хендлер для минимального значения
    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMinValue(Number(e.currentTarget.value));
    };

    // Хендлер для максимального значения
    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value));
    };

    //
    const handleFixValues = (minimum: number, maximum: number) => {
        props.onFixValues(minimum, maximum)    // добавь комментрарий почему так
    };

    // Используем props.error для определения, когда числа некорректны
    // Здесь мы обновляем логику для проверки ошибки: если minInputValue < 0, maxInputValue < 0, или minInputValue >= maxInputValue
    const isError = props.error || minValue >= maxValue || minValue < 0 || Number(props.maxValueRedux) < 0;
    // Изменяем класс для инпута, чтобы он отображался красным, если есть ошибка
    const inputClass = isError ? "input-error" : "";


    return (
        <div className="counter-container">
            <h2 className="title-container">{props.TITLE_SETTINGS_COUNTER}</h2>

            <div className="input-container">
                <div>
                    <h2>{props.START_VALUE}</h2>
                    <input
                        type="number"
                        value={minValue}
                        onChange={handleMinChange}
                        placeholder="Enter min value"
                        className={inputClass}

                    />
                    {isError && <div className="error">Error: Enter a correct value</div>}
                </div>

                <div>
                    <h2>{props.MAX_VALUE}</h2>
                    <input
                        type="number"
                        value={maxValue}
                        onChange={handleMaxChange}
                        placeholder="Enter max value"
                        className={inputClass}
                    />
                </div>
            </div>

            <div className="buttons-container">
                <UniversalButton onClick={()=>handleFixValues(minValue, maxValue)} name="Fix the value" disabled={isError}/>
            </div>

            {/*/!* Демонстрация зафиксированных значений *!/*/}
            <p>Fixed Min Value: {props.minValueRedux}</p>
            <p>Fixed Max Value: {props.maxValueRedux}</p>
        </div>
    );
};
