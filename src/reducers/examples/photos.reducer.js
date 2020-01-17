/* eslint-disable import/prefer-default-export */
import {
  FETCH_PHOTOS_INIT,
  FETCH_GET_ALL_PHOTOS,
  FETCH_PHOTOS_FAILURE,
} from '../../types/examples/photos.type'

const initialState = {
  photos: [],
  loading: false,
  error: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GET_ALL_PHOTOS:
      return { ...state, photos: action.payload, loading: false, error: '' }

    case FETCH_PHOTOS_INIT:
      return { ...state, loading: true }

    case FETCH_PHOTOS_FAILURE:
      return { ...state, error: action.payload, loading: false }

    default:
      return { ...state }
  }
}
