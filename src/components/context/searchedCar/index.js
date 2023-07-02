/* eslint-disable indent */
/* eslint-disable react/react-in-jsx-scope */
import { createContext, useState } from 'react'
import node from 'prop-types'
export const SearchedCarContext = createContext(null)

const SearchedCarProvider = ({ children }) => {
    const SearchedCarState = {
        namaMobil: '',
        kategori: '',
        harga: '',
        status: ''
    }
    const [searchedCar, setSearchedCar] = useState(SearchedCarState)
    const carObj = {
        searchedCar,
        setSearchedCar
    }
    return (
        <SearchedCarContext.Provider value={carObj}>{children}</SearchedCarContext.Provider>
    )
}

SearchedCarProvider.propTypes = {
    children: node.isRequired
}

export default SearchedCarProvider