import "./Board.css";

function Board() {
    const rank = Array(8).fill().map((_, i) => 8 - i);
    const files = Array(8).fill().map((_, i) => String.fromCharCode(i + 97));

    
    const getClassName = (i, j) => {
        let c = "tile";
        c += (i + j) % 2 === 0 ? ' tile--light' : ' tile--dark';
        return c;
    };

    return (
        <div className="board">
            <div className="tiles">
                {rank.map((rank, i) =>
                    files.map((file, j) =>
                        <div key={file + "-" + rank} className={getClassName(i, j)}>
                            {rank}{file}
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default Board;
