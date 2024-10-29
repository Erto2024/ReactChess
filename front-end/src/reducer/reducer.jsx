import { useReducer } from "react"
import actionType from "./actionTypes"

export const reducer =  (state,action) => {
  switch(action.type){
    case actionType.NEW_MOVE : {
      let {turn,position} = state

      turn = turn === "w" ? "b" : "w"

      position = [
        ...position,
        action.payload.newPosition
      ]
      return{
        ...state,
        turn,
        position
      }
    }
    case actionType.GENERATE_CANDIDATE_MOVES : {
      return {
        ...state,
        candidateMoves: action.payload.candidateMoves
      }
    }
    case actionType.CLEAR_CANDIDATE_MOVES : {
      return {
        ...state,
        candidateMoves: []
      }
    }
    default:
      return state
  }
}
