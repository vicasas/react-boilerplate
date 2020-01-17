import { DARK_THEME, LIGHT_THEME } from '../types/theme.types'

const handleChangeTheme = (type = '') => dispatch => {
  if (type) {
    if (type === 'lig') {
      dispatch({
        type: DARK_THEME,
      })
    } else if (type === 'dark') {
      dispatch({
        type: LIGHT_THEME,
      })
    }
  }
}

export default handleChangeTheme
