import "./Pieces.css";
import Piece from "./Piece.jsx";
import {useState} from 'react';
import { createPosition } from "../../helper.js";

function Pieces() {
  const [state, setState] = useState(createPosition());

  return<div className="pieces">
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