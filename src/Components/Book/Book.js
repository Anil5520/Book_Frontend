import { Button } from '@mui/material';
import React from 'react';

const Book = (props) => {
    const { name, author, price, description, image } = props.book;
    return (
        <div>
            <img src={image} alt={name} />
            <article>By {author}</article>
            <h3>{name}</h3>
            <p>{description}</p>
            <h2>Rs {price}</h2>
            <Button>update</Button>
            <Button>Delete</Button>
        </div>
    )
}

export default Book
