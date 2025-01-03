import { useState } from "react";
import Card from "../cards/card";
import './grid.css';
import isWinner from '../../helpers/iswinner';

function Grid({ numberofCards }) {
    const [board, setBoard] = useState(Array(numberofCards).fill(" "));
    const [turn, setturn] = useState(true);
    const [winner, setwinner] = useState(null);
    const [isDraw, setIsDraw] = useState(false); // New state to track draw

    function play(index) {
        // Create a copy of the current board state
        const newBoard = [...board];

        // Update the cell with the appropriate symbol ('X' or 'O')
        if (turn === true) {
            newBoard[index] = "O";
        } else {
            newBoard[index] = "X";
        }

        // Check if there's a winner
        const win = isWinner(newBoard, turn ? "O" : "X");
        if (win) {
            setwinner(win); // Set the winner
        } else if (!newBoard.includes(" ")) { // Check for a draw (no empty spaces)
            setIsDraw(true);
        }

        // Update the board and switch the turn
        setBoard(newBoard);
        setturn(!turn);
    }

    function reset() {
        setturn(true); // Reset turn to O's turn
        setwinner(null); // Clear the winner
        setIsDraw(false); // Clear draw state
        setBoard(Array(numberofCards).fill(" ")); // Reset the board
    }

    return (
        <div className="grid-wrapper">
            {winner && (
                <>
                    <h1 className="turn-highlight">Winner is {winner}</h1>
                    <button className="reset" onClick={reset}>Reset Game</button>
                </>
            )}
            {isDraw && !winner && ( // Show draw message if no winner
                <>
                    <h1 className="turn-highlight">its a Draw!</h1>
                    <button className="reset" onClick={reset}>Reset Game</button>
                </>
            )}
            {!winner && !isDraw && (
                <h1 className="turn-highlight">
                    Current turn: {turn ? 'O' : 'X'}
                </h1>
            )}
            <div className="grid">
                {board.map((el, idx) => (
                    <Card
                        key={idx}
                        onPlay={!winner && !isDraw ? () => play(idx) : null} // Allow play only if no winner or draw
                        index={idx}
                        player={el}
                    />
                ))}
            </div>
        </div>
    );
}

export default Grid;

