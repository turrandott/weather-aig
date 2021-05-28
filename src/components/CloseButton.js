import React from 'react'

function CloseButton({ closeLocation }) {

    return (
        <div className="closeContainer" onClick={closeLocation}>
            <div className="leftright"></div>
            <div className="rightleft"></div>
        </div>
    )
}

export default CloseButton