import React from 'react'

function Temperature({ temp }) {

    return (
        <>
            {temp > 0 ? '+' : ''}{temp} <small>&deg;C</small>
        </>
    )
}
  
export default Temperature