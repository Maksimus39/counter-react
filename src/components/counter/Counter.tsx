import {UniversalButton} from "../universalButton/UniversalButton";

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

    // Условия для атрибута disabled
    const isIncrementDisabled = props.counter >= props.maxValue;

    // Определим класс для value-container в зависимости от isIncrementDisabled
    const valueContainerClass = isIncrementDisabled ? "value-container value-container-disabled" : "value-container";


    return (
        <div className="counter-container">

            <h1 className="title-container">{props.TITLE_COUNTER}</h1>

            <span className={valueContainerClass}>{props.counter}</span>

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