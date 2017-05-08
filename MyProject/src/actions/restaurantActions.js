import axios from 'axios';

import { GET_DATAS } from './constants';

export const fetchData = () => dispatch => {
  axios.get('https://developers.zomato.com/api/v2.1/geocode?lat=-6.189281&lon=106.836104', {
    headers: {'user-key': '152f834e5245440d066a9b65f148add7'}
  })
   .then(res => dispatch(getDatas(res.data.nearby_restaurants)))
   .catch(err =>  console.log(err))
}

export const getDatas = datas => ({
  type : GET_DATAS,
  payload : datas
})
