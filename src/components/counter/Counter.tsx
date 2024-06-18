import {UniversalButton} from "../universalButton/UniversalButton";

export type CounterProps = {
    TITLE_COUNTER: string
    minInitialValue: number
    maxInitialValue: number
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

    // Проверяем, не достиг ли счетчик максимального значения для кнопки инкрементирования
    const isIncrementDisabled = props.maxInitialValue === props.counter
    const spanClass = isIncrementDisabled ? "span-container span-disabled" : "span-container";

    return (
        <div className="counter-container">

            <h1 className="title-container">{props.TITLE_COUNTER}</h1>

            <span className={spanClass}>
                {props.counter}
            </span>

            <div className="buttons-container">

                <UniversalButton
                    name={"Increment:"}
                    onClick={countIncrementHandler}
                    disabled={isIncrementDisabled}
                />
                <UniversalButton
                    name={"Reset:"}
                    onClick={countDecrementHeader}
                />
            </div>
        </div>
    )
}