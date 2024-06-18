import {UniversalButton} from "../universalButton/UniversalButton";

export type CounterProps = {
    TITLE_COUNTER: string
    minInitialValue: number
    maxInitialValue: number
    incrementCounter: () => void
    decrementCounter: () => void
    counter: string
    isIncrementDisabled:boolean

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
    const spanClass = props.isIncrementDisabled ? "span-container span-disabled" : "span-container";
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
                    disabled={props.isIncrementDisabled}
                />
                <UniversalButton
                    name={"Reset:"}
                    onClick={countDecrementHeader}
                />
            </div>
        </div>
    )
}