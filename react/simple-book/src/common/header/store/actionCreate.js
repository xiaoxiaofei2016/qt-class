import * as CONSTANTS from './constants'
export const searchFocus = (isfoucs) => {
  return {
    type: CONSTANTS.SEARCH_FOCUS,
    isfoucs
  }
}
