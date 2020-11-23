const categoryReducer = (category = "", action) => {
    switch (action.type) {
        case "CATEGORY":
            return action.payload;
        default:
            return category
    }
}
export default categoryReducer;