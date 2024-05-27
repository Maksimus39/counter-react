import './App.css';
import {Counter} from "./Counter";
import {useState} from "react";

export default function App() {
    // заголовок Счётчика
    const TITLE_COUNTER = "Counter"

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
        <div>
            <Counter
                TITLE_COUNTER={TITLE_COUNTER}
                minValue={minValue}
                maxValue={maxValue}
                incrementCounter={incrementCounter}
                decrementCounter={decrementCounter}
                counter={counter}
            />
        </div>
    )


}


