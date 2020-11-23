import { combineReducers } from 'redux'
import dataReducer from './dataReducer'
import inputReducer from './inputReducer'
import categoryReducer from './categoryReducer'
import colourReducer from './colourReducer'
import filterReducer from './filterReducer'
import saleReducer from './saleReducer'



const allReducers = combineReducers({
    data: dataReducer,
    brand: inputReducer,
    category: categoryReducer,
    colour: colourReducer,
    filter: filterReducer,
    sale: saleReducer,
})

export default allReducers;