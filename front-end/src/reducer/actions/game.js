import { initGameState } from '../../constant';
import actionType from '../actionTypes';

export const updateCastling = (direction) => {
    return {
        type: actionType.CAN_CASTLE,
        payload: direction,
    }
}

export const detectStalemate = () => {
    return {
        type: actionType.STALEMATE,
    }
}
export const setupNewGame = () => {
    return {
        type: actionType.NEW_GAME,
        payload: initGameState
    }
}