import React from 'react';

const Card = ({coffee,coffeess}) => {
    const {nutrition_info,ingredients,category,image,name}= coffee
    return (
        <div>
            {name}
        </div>
    );
};

export default Card;