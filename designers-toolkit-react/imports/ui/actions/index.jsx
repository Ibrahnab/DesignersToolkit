export const increment = () => {
    return{
        type: 'INCREMENT'
    }
}

export const decrement = () => {
    return{
        type: 'DECREMENT'

    }
}

export const payload = (nr) => {
    return{
        type: 'PAYLOAD',
        payload: nr
    }
}
