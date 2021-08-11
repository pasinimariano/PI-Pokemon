import React from 'react';

const Logic = ({ pokemonPerPage, allPokemons, paged }) => {
    const pageNumbers = [];

    for (let i = 0; i <= Math.ceil(allPokemons / pokemonPerPage); i++) {
        pageNumbers.push(i)
    };

    return (
        <nav>
            <ul className='Paged'>
                {pageNumbers &&
                    pageNumbers.map(number =>
                        <li className='PagedNumber' key={number}>
                            <a onClick={() => paged(number)}> {number}</a>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
};

export default Logic;