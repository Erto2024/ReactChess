import arbiter from "../../arbiter/arbiter";
import { useAppContext } from "../../contexts/context";
import { generateCandidateMoves } from "../../reducer/actions/move";

function Piece({rank,file,piece}) {

  const {appState,dispatch} = useAppContext()
  const {turn,position} = appState;
  const currentPosition = position[position.length - 1];


  const onDragStart = e => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain',`${piece},${file},${rank}`);
    setTimeout(() => {
      e.target.style.display = "none"
    },0)
    if (turn === piece[0]){
      const candidateMoves = arbiter.getRegularMoves({position: currentPosition,piece,file,rank})
      dispatch(generateCandidateMoves({candidateMoves}))
    }
  }

  const onDragEnd = e => e.target.style.display = "block"

  return(

    <div 

      className={`piece ${piece} p-${file}${rank}`}
      draggable={true}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    />
  )
   
}

export default Piece;