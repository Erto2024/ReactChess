import actionType from '../actionTypes';

export const updateCastling = (direction) => {
    return {
        type: actionType.CAN_CASTLE,
        payload: direction,
    }
}