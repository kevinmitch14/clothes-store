const saleReducer = (sale = false, action) => {
    switch (action.type) {
        case "SALE":
            return !sale

        case "CLEARSALE":
            return false

        default:
            return sale
    }
}
export default saleReducer;