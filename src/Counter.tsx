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
    const countDecrementHeader=()=>{
        props.decrementCounter()
    }

    return (
        <div>
            <div>
                <h1>
                    {props.TITLE_COUNTER}
                </h1>
            </div>
            <div>
                <span>{props.counter}</span>
            </div>
            <div>
                <button onClick={countIncrementHandler}>Increment:</button>
                <button onClick={countDecrementHeader}>Reset:</button>
            </div>
        </div>


    )
}