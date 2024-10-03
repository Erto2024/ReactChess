import "./Pieces.css";

function Pieces() {
  const position = new Array(8).fill('').map(x => new Array(8).fill(''));
  
  position[0][0] = "wr"
  position[0][2] = "wq"
  position[2][3] = "bk"
  position[4][6] = "wr"
  position[6][0] = "wb"

  console.log(position);

  return<div className="pieces">
          {position.map((r,rank) =>
            r.map((f,file) =>
              position[rank][file]
              ?   position [rank][file]
              :   null
          ))}
        </div>
  
}
export default Pieces;