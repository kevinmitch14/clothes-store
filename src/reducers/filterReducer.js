const filterReducer = (input = "", action) => {
    switch (action.type) {
        case "FILTER":
            return action.payload
        default:
            return input
    }
}

export default filterReducer