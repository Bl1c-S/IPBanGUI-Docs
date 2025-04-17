import React from 'react';
import Bord from "../bord";

function TimeValue() {
    return (
        <div className="nx-pt-1" style={{lineHeight: '1.8rem'}}>
            Час вказується в форматі: <Bord>DD:HH:MM:SS</Bord> що читається як:
            <br/><Bord>DD - дні</Bord> <Bord>HH - години</Bord> <Bord>MM- хвилини</Bord> <Bord>SS - секунди</Bord>
            <br/>Значення <Bord>00:02:00:30</Bord> означає 2 години та 30 секунд.
            <br/>При значенні <Bord>00:00:00:00</Bord> ключ не діє.
        </div>
    );
}

export default TimeValue;