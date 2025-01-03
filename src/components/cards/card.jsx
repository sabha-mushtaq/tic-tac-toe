import Icon from "../icon/icon";
import './card.css';

function Card({ gameEnd, player, onPlay, index }) {
    // Define the icon based on the player symbol
    let icon = <Icon />;
    if (player === 'X') {
        icon = <Icon name="cross" />;
    } else if (player === 'O') {
        icon = <Icon name="circle" />;
    }

    // Handle click only if the game is not over and the cell is empty
    const handleClick = () => {
        if (!gameEnd && player === " ") {
            onPlay(index); // Pass the index to the play function
        }
    };

    return (
        <div className="card" onClick={handleClick}>
            {icon}
        </div>
    );
}

export default Card;
