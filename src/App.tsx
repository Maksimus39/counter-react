import './App.css';
import React, {useState} from "react";
import {Counter} from "./components/counter/Counter";
import {SettingsCounter} from "./components/settingsCounter/SettingsCounter";

export default function App() {

    // Заголовок первого input
    const MAX_VALUE = "Max value"
    // Заголовок второго input
    const START_VALUE = "Start value"

    const TITLE_COUNTER = "Counter";
    const TITLE_SETTINGS_COUNTER = "Settings Counter";

    // Начальные значения для счётчика, эти значения теперь будут меняться
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(5);

    const [counter, setCounter] = useState(minValue);

    const incrementCounter = () => {
        if (counter < maxValue) {
            setCounter(prev => prev + 1);
        }
    };

    const decrementCounter = () => {
        setCounter(minValue);
    };

    // Функция для обновления минимума и максимума из настроек счётчика
    const handleFixedValues = (min: number, max: number) => {
        setMinValue(Number(min)); // Обязательно преобразуйте в число, если используются строки
        setMaxValue(Number(max));
        setCounter(Number(min)); // Сбрасываем значение счетчика до нового минимального значения
    };


    return (
        <div className="counters-wrapper">
            <Counter
                TITLE_COUNTER={TITLE_COUNTER}
                minValue={minValue}
                maxValue={maxValue}
                incrementCounter={incrementCounter}
                decrementCounter={decrementCounter}
                counter={counter}
            />

            <SettingsCounter
                START_VALUE={START_VALUE}
                MAX_VALUE={MAX_VALUE}
                TITLE_SETTINGS_COUNTER={TITLE_SETTINGS_COUNTER}
                onFixValues={handleFixedValues} // Передаем функцию как проп
            />
        </div>
    );
}
