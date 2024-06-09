import './App.css';
import {Counter} from "./components/counter/Counter";
import {useState} from "react";
import {SettingsCounter} from "./components/settingsCounter/SettingsCounter";

export default function App() {
    // заголовок Счётчика
    const TITLE_COUNTER = "Counter"

    // Заголовок счётчика с настройками
    const SETTINGS_COUNTER = "Settings Counter"

    // Блок с данными
    const minValue = 0;
    const maxValue = 5;

    // хук меняющий state счётчика
    const [counter, setCounter] = useState(minValue);

    // функция для инкрементирования значения
    const incrementCounter = () => {
        return setCounter(counter + 1)
    }

    // функция для сброса значения до 0
    const decrementCounter = () => {
        return setCounter(minValue)
    }


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
                SETTINGS_COUNTER={SETTINGS_COUNTER}
            />
        </div>
    )
}


