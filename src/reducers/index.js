import { combineReducers } from 'redux'
import photosReducer from './examples/photos.reducer'
import customThemeReducer from './theme.reducer'

export default combineReducers({
  photosReducer,
  customThemeReducer,
})
