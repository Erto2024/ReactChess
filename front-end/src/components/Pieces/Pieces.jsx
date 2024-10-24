import "./Pieces.css";
import Piece from "./Piece.jsx";
import {useState, useRef} from 'react';

import { createPosition, copyPosition } from "../../helper.js";
import { useAppContext } from "../../contexts/context.jsx";
import { makeNewMove } from "../../reducer/actions/move.jsx";

function Pieces() {
  const ref = useRef();
  
  const {appState,dispatch} = useAppContext();
  
  const currentState = appState.position

  const calculatePosition = e => {
    const {width,left,top} = ref.current.getBoundingClientRect()
    const size = width /8;
    const y =  Math.floor((e.clientX-left) / size);
    const x = 7 - Math.floor((e.clientY-top) / size);
    return {x,y}
  }

  const onDrop = e => {
    const newPosition = copyPosition(currentState)
    const {x,y} = calculatePosition(e)
    const [p,file,rank] = e.dataTransfer.getData('text').split(",")
    
    
    newPosition[rank][file] = ''
    newPosition[x][y] = p
    
    dispatch(makeNewMove({newPosition}))
  }
  const onDragOver = e => {
    e.preventDefault();
  }

  return<div 
      ref = {ref}
      onDrop={onDrop}
      onDragOver={onDragOver}
      className="pieces">
          {currentState.map((r,rank) =>
            r.map((f,file) =>
              currentState[rank][file]
              ?     <Piece 
                      key={rank+"-"+file}
                      file={file}
                      rank={rank}
                      piece={currentState[rank][file]}
                  />
              :   null
          ))}
        </div>
}
export default Pieces;