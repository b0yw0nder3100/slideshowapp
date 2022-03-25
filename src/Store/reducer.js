export const reducer = (state, action) => {
    if (action.type === 'NEXT') {
        let counts = state.count + 1
        return { ...state, count: counts }
    }
    if (action.type === 'PREV') {
        let counts = state.count - 1
        return { ...state, count: counts }
    }
    if (action.type === 'RESTART') {
        return { ...state, count: 0 }
    }
    throw new Error("no matching type")
}