import React from 'react';

const Listcountry = ({addvisit}) => {
    const {name} = addvisit;
    return (
        <div>
            <li>{name.common}</li>
        </div>
    );
};

export default Listcountry;