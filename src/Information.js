import React from 'react'

const Information = (props) => {
    return (
        <div className="Information">
            <p style={{ fontSize: 'small' }}>{props.name}</p>
            {props.salePrice ?

                <div style={{ display: 'flex' }}>
                    <p style={{ textDecoration: 'line-through' }}>€{props.price}</p>
                    <p style={{ color: 'red' }}>€{props.salePrice}</p>
                </div>

                :
                <p>€{props.price}</p>}
        </div>
    )
}

export default Information
