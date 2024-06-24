import './App.css';
import React from "react";
import {Counter} from "./components/counter/Counter";
import {SettingsCounter} from "./components/settingsCounter/SettingsCounter";
import {useDispatch, useSelector} from "react-redux";
import {
    decrementCounterAC,
    incrementCounterAC,
    setCountAC,
    setMaxValueAC,
    setMinValueAC
} from "./state/counterSettingReducer";
import {AppRootCounterStateType} from "./state/store";


export default function AppCounterRedux() {

    // подключение Redux
    const dispatch = useDispatch();

    const minValueRedux = useSelector<AppRootCounterStateType, number>(state => state.count.minValue)
    const maxValueRedux = useSelector<AppRootCounterStateType, number>(state => state.count.maxValue)
    const count = useSelector<AppRootCounterStateType, number>(state => state.count.count)



    // Заголовок первого input
    const MAX_VALUE = "Max value"
    // Заголовок второго input
    const START_VALUE = "Start value"

    const TITLE_COUNTER = "Counter";
    const TITLE_SETTINGS_COUNTER = "Settings Counter";




    const incrementCounter = () => {
        const action = incrementCounterAC()
        dispatch(action)
    }


    const decrementCounter = () => {
        const action = decrementCounterAC()
        dispatch(action)
    };

    // Функция для обновления минимума и максимума из настроек счётчика
    const handleFixedValues = (min: number, max: number) => {
        dispatch(setMinValueAC(min));
        dispatch(setMaxValueAC(max));
        dispatch(setCountAC(min));
    };

    // когда Минимальное больше Максимального, или Максимальное меньше Минимального
    const errorMinMoreMax = minValueRedux > maxValueRedux  // или true или false
    // когда Минимальное равно Максимальному
    const errorMinEquallyMax = minValueRedux === maxValueRedux  // или true или false
    // когда Минимальное меньше нуля
    const errorMinLessZero = minValueRedux < 0  // или true или false

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
                    : String(count)


    // Проверяем, не достиг ли счетчик максимального значения для кнопки инкрементирования
    const isIncrementDisabled = maxValueRedux === count  // или true или false


    return (
        <div className="counters-wrapper">
            <Counter
                TITLE_COUNTER={TITLE_COUNTER}
                minInitialValue={minValueRedux}
                maxInitialValue={maxValueRedux}
                incrementCounter={incrementCounter}
                decrementCounter={decrementCounter}
                counter={textForTheCounter}
                isIncrementDisabled={isIncrementDisabled}
            />

            <SettingsCounter
                START_VALUE={START_VALUE}
                MAX_VALUE={MAX_VALUE}
                TITLE_SETTINGS_COUNTER={TITLE_SETTINGS_COUNTER}
                onFixValues={handleFixedValues}
                error={error}
                minValueRedux={minValueRedux}
                maxValueRedux={maxValueRedux}
            />
        </div>
    );
}
