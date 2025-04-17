import React from 'react';
import Bord from "../bord";

function NumberValue() {
    return (
        <div className="nx-pt-1" style={{lineHeight: '1.8rem'}}>
            Значення вказується в форматі цілих чисел: <Bord>1</Bord>, <Bord>2</Bord>, <Bord>5</Bord> і т.д.
            <br/>При значенні <Bord>0</Bord> ключ не діє.
        </div>
    );
}

export default NumberValue;