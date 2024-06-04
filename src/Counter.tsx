import {UniversalButton} from "./universalButton/UniversalButton";

export type CounterProps = {
    TITLE_COUNTER: string
    minValue: number
    maxValue: number
    incrementCounter: () => void
    decrementCounter: () => void
    counter: number
}

export function Counter(props: CounterProps) {
    // Функция для инкрементирования значения
    const countIncrementHandler = () => {
        props.incrementCounter()
    }

    // функция для сброса значения до 0
    const countDecrementHeader = () => {
        props.decrementCounter()
    }

    return (
        <div className="borderCounter">
            <div>
                <h1 className="Title-Counter">
                    {props.TITLE_COUNTER}
                </h1>
            </div>
            <div className="displayValue">
                <span className="displayValueSpan">
                    {props.counter}
                </span>
            </div>
            <div className="buttonContainer">
                <UniversalButton name={"Increment:"} onClick={countIncrementHandler}/>
                <UniversalButton name={"Reset:"} onClick={countDecrementHeader}/>
            </div>
        </div>
    )
}