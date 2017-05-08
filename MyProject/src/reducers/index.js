import { combineReducers } from 'redux';

import { restaurantReducers } from './restaurantReducer';

const rootReducer = combineReducers ({
  datas: restaurantReducers,
})

export default rootReducer
