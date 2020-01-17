/* eslint-disable import/prefer-default-export */
import config from './main.config'

export const getEnv = () => {
  return config.enviroment.dev
}
