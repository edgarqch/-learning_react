import React from 'react';
import PropTypes from 'prop-types'

const Card = ({image, title, price}) => (
    <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        {
            image
            ? <img src={image} alt={title} />
            : <p>No hay imagen</p>
        }
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">
            {title}
        </h3>
        <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="www.google.com">{`$ ${price} USD`}</a>
        </div>
    </div>
    </article>
)

Card.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
}

Card.defaultProps = {
    title: "No de encontro el Título",
    image: "https://concepto.de/wp-content/uploads/2018/08/Londres-e1533855310803.jpg",
    price: "--",
}

export default Card;
