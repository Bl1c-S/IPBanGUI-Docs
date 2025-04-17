import React from 'react';
import {Callout} from "nextra/components";

function InProcess() {
    return (
        <div className="nx-pt-1" style={{lineHeight: '1.8rem'}}>
            <Callout type="warning" emoji="⚠️">
                Стаття не завершена, або знаходиться на стадії розробки.
            </Callout>
        </div>
    );
}

export default InProcess;