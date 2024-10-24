import actionType from "../actionTypes"

export const makeNewMove = ({newPosition}) => {
  return {
    type: actionType.NEW_MOVE,
    payload: {newPosition}
}

  }