import {combineReducers} from  'redux'

import productsReducers from './reducer'

const rootReducer = combineReducers({
    products : productsReducers
})

export default rootReducer;