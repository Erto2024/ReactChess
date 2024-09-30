import "./Board.css";
import Ranks from "./bits/Ranks.jsx"
import Files from "./bits/Files.jsx"

function Board() {
    const ranks = Array(8).fill().map((_, i) => 8 - i);
    const files = Array(8).fill().map((_, i) => String.fromCharCode(i + 97));

    
    const getClassName = (i, j) => {
        let c = "tile";
        c += (i + j) % 2 === 0 ? ' tile--light' : ' tile--dark';
        return c;
    };

    return (
        
        <div className="board">

        <Ranks ranks={ranks}  />

            <div className="tiles">
                {ranks.map((rank, i) =>
                    files.map((file, j) =>
                        <div key={file + "-" + rank} className={getClassName(i, j)}></div>
                    )
                )}
            </div>

            <Files files={files} />

        </div>
    );
}

export default Board;
