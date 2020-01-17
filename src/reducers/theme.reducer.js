import { DARK_THEME, LIGHT_THEME } from '../types/theme.types'

const initialState = {
  type: '',
}

const customThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIGHT_THEME:
      return { ...state, type: 'light' }

    case DARK_THEME:
      return { ...state, type: 'dark' }

    default:
      return { ...state }
  }
}

export default customThemeReducer
