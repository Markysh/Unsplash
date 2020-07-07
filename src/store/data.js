const DATA = 'DATA';

export const setData = payload => ({
  type: DATA,
  payload,
});

const initialState = [];

export function dataReducer(store = initialState, {type, payload}) {
  switch (type) {
    case DATA:
      return [...store, ...payload];
    default:
      return store;
  }
}

const url =
  'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';

export const getData = () => async dispatch => {
  try {
    const response = await fetch(url);
    const images = await response.json();
    dispatch(setData(images));
  } catch (error) {
    throw error;
  }
};
