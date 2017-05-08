import { GET_DATAS } from '../actions/constants';

export const restaurantReducers = (state = [], action) => {
  switch(action.type) {
    case GET_DATAS: {
      return action.payload
    }
    default: return state;
  }
}
