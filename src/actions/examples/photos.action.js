/* eslint-disable import/prefer-default-export */
import {
  FETCH_PHOTOS_INIT,
  FETCH_GET_ALL_PHOTOS,
  FETCH_PHOTOS_FAILURE,
} from '../../types/examples/photos.type'
import request from '../../utils/request.util'
import { loggerError } from '../../utils/logger.util'

export const getAllPhotos = () => async dispatch => {
  dispatch({
    type: FETCH_PHOTOS_INIT,
  })

  setTimeout(() => {
    request('http://jsonplaceholder.typicode.com/posts')
      .then(({ status, datum }) => {
        if (status.ok) {
          dispatch({
            type: FETCH_GET_ALL_PHOTOS,
            payload: datum,
          })
        }
      })
      .catch(error => {
        loggerError(`Error: ${error.message}`)
        dispatch({
          type: FETCH_PHOTOS_FAILURE,
          payload: 'UPS ! la colección de fotos no se encuentra disponible. Intenta más tarde.',
        })
      })
  }, 2000)
}
