const colourReducer = (colour = "", action) => {
    switch (action.type) {
        case "COLOUR":
            return action.payload
        default:
            return colour
    }
}
export default colourReducer;