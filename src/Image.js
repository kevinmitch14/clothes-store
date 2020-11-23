import React from 'react'

const Image = (props) => {
    return (
        <div className="Image">
            <img src={props.image} alt="" height="70%" width="100%" ></img>
        </div>
    )
}

export default Image
