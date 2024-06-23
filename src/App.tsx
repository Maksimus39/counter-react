import './App.css';
import React, {useState} from "react";
import {Counter} from "./components/counter/Counter";
import {SettingsCounter} from "./components/settingsCounter/SettingsCounter";


export default function App() {
    // value number
    const initialMinValue = 0
    const initialMaxValue = 5

    // Заголовок первого input
    const MAX_VALUE = "Max value"
    // Заголовок второго input
    const START_VALUE = "Start value"

    const TITLE_COUNTER = "Counter";
    const TITLE_SETTINGS_COUNTER = "Settings Counter";

    // Начальные значения для счётчика, эти значения теперь будут меняться
    const [minValue, setMinValue] = useState(initialMinValue);
    const [maxValue, setMaxValue] = useState(initialMaxValue);
    // фиксированное значение
    const [counter, setCounter] = useState(minValue);

    // Хук фиксирующий значение минимального инпута
    const [minInputValue, setMinInputValue] = useState(initialMinValue);
    // Хук фиксирующий значение максимального инпута
    const [maxInputValue, setMaxInputValue] = useState(initialMaxValue);

    // Хук для хранения зафиксированных значений
    const [fixedMinValue, setFixedMinValue] = useState(initialMinValue);
    const [fixedMaxValue, setFixedMaxValue] = useState(initialMaxValue);


    const incrementCounter = () => {
        if (counter < maxValue) {
            setCounter(counter => counter + 1);
        }
    }

    // когда Минимальное больше Максимального, или Максимальное меньше Минимального
    const errorMinMoreMax = minInputValue > maxInputValue  // или true или false
    // когда Минимальное равно Максимальному
    const errorMinEquallyMax = minInputValue === maxInputValue  // или true или false
    // когда Минимальное меньше нуля
    const errorMinLessZero = minInputValue < 0  // или true или false

    const error =
        errorMinMoreMax // когда Минимальное больше Максимального, или Максимальное меньше Минимального
            ? true
            : errorMinEquallyMax     // когда Минимальное равно Максимальному
                ? true
                : errorMinLessZero     // когда Минимальное меньше нуля

    const textForTheCounter =
        errorMinMoreMax // когда Минимальное больше Максимального, или Максимальное меньше Минимального
            ? "Минимальное больше Максимального"
            : errorMinEquallyMax     // когда Минимальное равно Максимальному
                ? "Минимальное равно Максимальному"
                : errorMinLessZero     // когда Минимальное меньше нуля
                    ? "Минимальное меньше нуля"
                    : String(counter)


    const decrementCounter = () => {
        setCounter(minValue);
    };

    // Функция для обновления минимума и максимума из настроек счётчика
    const handleFixedValues = (min: number, max: number) => {
        setMinValue(Number(min)); // Обязательно преобразуйте в число, если используются строки
        setMaxValue(Number(max));
        setCounter(Number(min)); // Сбрасываем значение счетчика до нового минимального значения
    };

    // Проверяем, не достиг ли счетчик максимального значения для кнопки инкрементирования
    const isIncrementDisabled = maxValue === counter  // или true или false


    return (
        <div className="counters-wrapper">
            <Counter
                TITLE_COUNTER={TITLE_COUNTER}
                minInitialValue={minValue}
                maxInitialValue={maxValue}
                incrementCounter={incrementCounter}
                decrementCounter={decrementCounter}
                counter={textForTheCounter}
                isIncrementDisabled={isIncrementDisabled}
            />

            <SettingsCounter
                START_VALUE={START_VALUE}
                MAX_VALUE={MAX_VALUE}
                TITLE_SETTINGS_COUNTER={TITLE_SETTINGS_COUNTER}
                onFixValues={handleFixedValues} // Передаем функцию как проп
                minInputValue={minInputValue}
                setMinInputValue={setMinInputValue}
                maxInputValue={maxInputValue}
                setMaxInputValue={setMaxInputValue}
                fixedMinValue={fixedMinValue}
                setFixedMinValue={setFixedMinValue}
                fixedMaxValue={fixedMaxValue}
                setFixedMaxValue={setFixedMaxValue}
                error={error}

            />
        </div>
    );
}
