const inputReducer = (brand = "", action) => {
    switch (action.type) {
        case "BRAND":
            return action.payload
        default:
            return brand
    }
}
export default inputReducer;