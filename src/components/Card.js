import React from 'react';

const Card = (props) => {
    
    const  country =props.country;
    const numberFormat = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      };
    //console.log(props);
    return (
        <li className='card'>
            <img src={country.flags.png} alt="flag" />
            <div className="data-container">
                <ul>
                    <li>{country.name.common}</li>
                    <li>{country.capital}</li>
                    <li>Pop. {numberFormat(country.population)}</li>
                </ul>
            </div>

        </li>
    );
};

export default Card;
