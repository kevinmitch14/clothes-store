import React from 'react'
import { useDispatch } from 'react-redux'
import { brandInput, categoryInput, colourInput, filterInput, saleInput, clearSale } from './actions'

const Header = ({ data }) => {

    const dispatch = useDispatch()

    const uniqueBrands = [];
    data.map(item => {
        return (
            uniqueBrands.indexOf(item.brand) === -1 ? uniqueBrands.push(item.brand) : null
        )
    });


    const uniqueCategories = []
    data.map(item => {
        return (
            uniqueCategories.indexOf(item.category) === -1 ? uniqueCategories.push(item.category) : null
        )
    })

    const uniqueColours = []
    data.map(item => {
        return (
            uniqueColours.indexOf(item.colour) === -1 ? uniqueColours.push(item.colour) : null
        )
    })

    const brandSelect = <select onChange={(event) => dispatch(brandInput(event.target.value))}>
        <option label="Brand"></option>
        {uniqueBrands.map((item) => {
            return (
                <option label={item} value={item} key={item}></option>
            )
        })}
    </select>

    const categorySelect = <select onChange={(event) => dispatch(categoryInput(event.target.value))}>
        <option label="Category"></option>
        {uniqueCategories.map(item => {
            return (
                <option label={item} value={item} key={item}></option>
            )
        })}
    </select>

    const colourSelect = <select onChange={(event) => dispatch(colourInput(event.target.value))}>
        <option label="Colour"></option>
        {uniqueColours.map(item => {
            return (
                <option label={item} value={item} key={item}></option>
            )
        })}
    </select>

    const filterText = <input
        onChange={(event) => dispatch(filterInput(event.target.value))}
        placeholder="Search..."></input>


    const handleReset = () => {
        Array.from(document.querySelectorAll('select')).forEach(
            input => (input.value = "")
        );
    }

    const clearButton = <button style={{ backgroundColor: '#9ed6af' }} onClick={() => dispatch(colourInput(""),
        dispatch(categoryInput(""),
            dispatch(brandInput(""),
                dispatch(clearSale()),
                handleReset())))}>
        Clear filters
    </button>

    const saleButton = <button
        style={{ backgroundColor: '#e09775' }}
        onClick={() => dispatch(saleInput())}>
        Sale!
    </button >



    return (
        <div className="Header">
            {filterText}
            {brandSelect}
            {categorySelect}
            {colourSelect}
            {clearButton}
            {saleButton}
        </div >
    )
}
export default Header;
