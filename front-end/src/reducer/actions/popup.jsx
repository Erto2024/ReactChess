import actionType from "../actionTypes"

export const openPromotion = ({rank,file,x,y}) => {
  return {
    type: actionType.PROMOTION_OPEN,
    payload: {rank,file,x,y}
  }
}

export const ClosePopup = () => {
  return {
      type: actionType.PROMOTION_CLOSE,
  }
}