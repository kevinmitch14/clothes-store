import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import Image from './Image'
import Information from './Information'


const Card = ({ data }) => {

    const [filter, setFilter] = useState("")

    const c = useSelector(state => state)
    useEffect(() => {
        console.log(c)
    })


    const saleFilter = c.data.filter((item) => {
        return (
            'sale_price' in item
        )
    })

    console.log(saleFilter)

    const outputCards =
        c.data.filter((item => (item.brand.startsWith(c.brand)) &&
            (item.brand.startsWith(c.filter) || item.brand.toLowerCase().startsWith(c.filter)) &&
            (item.colour.startsWith(c.colour)) &&
            item.category.startsWith(c.category))).map((item) => {
                return (
                    <div className="Card" key={item.name}>

                        <Image
                            image={item.image}
                        />
                        <Information
                            name={item.name}
                            brand={item.brand}
                            price={item.price}
                            salePrice={item.sale_price}
                            colour={item.colour}
                        />
                    </div >
                )
            })

    const saleCards = c.data.filter((item) => (('sale_price' in item) &&
        item.brand.startsWith(c.brand)) &&
        (item.brand.startsWith(c.filter) || item.brand.toLowerCase().startsWith(c.filter)) &&
        (item.colour.startsWith(c.colour)) && item.category.startsWith(c.category)
    )
        .map((item) => {
            return (
                <div className="Card" key={item.name}>

                    <Image
                        image={item.image}
                    />
                    <Information
                        name={item.name}
                        brand={item.brand}
                        price={item.price}
                        salePrice={item.sale_price}
                        colour={item.colour}
                    />
                </div >
            )
        })


    return (
        <>
            {outputCards.length === 0 ? <p>No Reuslts</p> : c.sale ? saleCards : outputCards}
            {c.sale && saleCards.length === 0 ? <p>No Sale Products</p> : null}
        </>


    )
}

export default Card