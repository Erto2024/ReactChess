import "./Pieces.css";
import Piece from "./Piece.jsx";
import {useState, useRef} from 'react';

import { createPosition, copyPosition } from "../../helper.js";

function Pieces() {
  const ref = useRef();
  const [state, setState] = useState(createPosition());

  const calculatePosition = e => {
    const {width,left,top} = ref.current.getBoundingClientRect()
    const size = width /8;
    const y =  Math.floor((e.clientX-left) / size);
    const x = 7 - Math.floor((e.clientY-top) / size);
    return {x,y}
  }

  const onDrop = e => {
    const newPosition = copyPosition(state)
    const {x,y} = calculatePosition(e)
    const [p,file,rank] = e.dataTransfer.getData('text').split(",")
    
    
    newPosition[rank][file] = ''
    newPosition[x][y] = p
    
    setState(newPosition)
  }
  const onDragOver = e => {
    e.preventDefault();
  }

  return<div 
      ref = {ref}
      onDrop={onDrop}
      onDragOver={onDragOver}
      className="pieces">
          {state.map((r,rank) =>
            r.map((f,file) =>
              state[rank][file]
              ?     <Piece 
                      key={rank+"-"+file}
                      file={file}
                      rank={rank}
                      piece={state[rank][file]}
                  />
              :   null
          ))}
        </div>
}
export default Pieces;