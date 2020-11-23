export const brandInput = (brandInput) => {
    return {
        type: "BRAND",
        payload: brandInput
    }
}

export const categoryInput = (categoryInput) => {
    return {
        type: "CATEGORY",
        payload: categoryInput
    }
}

export const colourInput = (colourInput) => {
    return {
        type: "COLOUR",
        payload: colourInput
    }
}

export const filterInput = (filterInput) => {
    return {
        type: "FILTER",
        payload: filterInput
    }
}

export const saleInput = (saleInput) => {
    return {
        type: "SALE",
        payload: saleInput
    }
}

export const clearSale = (bool) => {
    return {
        type: "CLEARSALE",
        payload: bool
    }
}