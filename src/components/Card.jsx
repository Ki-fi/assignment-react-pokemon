import './Card.css';

function Card({ name, imgUrl, nrOfMoves, weight, ability }) {
    return (
        <article className="card">
            <h3>{name}</h3>
            <img src={imgUrl} alt="Image of pokemon"/>
            <p><strong>Moves: </strong>{nrOfMoves}</p>
            <p><strong>Weight: </strong>{weight}</p>
            <p><strong>Abilities:</strong></p>
            <div className="chip">{ability}</div>
        </article>
    )
}

export default Card;
