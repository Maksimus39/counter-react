export const initialState: initialStateType = {
    count:0,
    minValue: 0,
    maxValue: 5
};

export type initialStateType = {
    count: number,
    minValue: number,
    maxValue: number
};

export type IncrementCounterActionType = {
    type: 'INCREMENT'
}
export type DecrementCounterActionType = {
    type: 'DECREMENT'
}
export type SettingsMinCounterActionType = {
    type: 'SETTINGS_MIN',
    payload: {minValue: number}
}
export type SettingsMaxCounterActionType = {
    type: 'SETTINGS_MAX',
    payload: {maxValue: number}
}
export type SetCountActionType = {
    type: 'SET_COUNT',
    payload: number  // добавь комментрарий почему так
}

type ActionType =
    IncrementCounterActionType
    | DecrementCounterActionType
    | SettingsMinCounterActionType
    | SetCountActionType
    | SettingsMaxCounterActionType;

export const incrementCounterAC = (): IncrementCounterActionType => {
    return {
        type: 'INCREMENT',
    } as const
}

export const decrementCounterAC = (): DecrementCounterActionType => {
    return {
        type: 'DECREMENT',
    } as const
}

export const setMinValueAC = (minValue: number): SettingsMinCounterActionType => {
    return {
        type: 'SETTINGS_MIN',
        payload: {minValue}
    } as const
}


export const setMaxValueAC = (maxValue: number): SettingsMaxCounterActionType => {
    return {
        type: 'SETTINGS_MAX',
        payload: {maxValue}
    } as const
};
export const setCountAC = (count: number): SetCountActionType => {
    return {
        type: 'SET_COUNT',
        payload: count // добавь комментрарий почему так
    } as const
};


export const counterSettingReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "INCREMENT": {
            return {
                ...state, count: state.count + 1
            }
        }
        case "DECREMENT": {
            return {
                ...state, count: state.minValue
            }
        }
        case "SET_COUNT": {
            return {
                ...state, count: action.payload // добавь комментрарий почему так
            }
        }
        case "SETTINGS_MIN": {
            return {
                ...state, minValue: action.payload.minValue
            }
        }
        case "SETTINGS_MAX": {
            return {
                ...state, maxValue: action.payload.maxValue
            }
        }
        default:
            return state
    }
}