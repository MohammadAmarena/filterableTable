import { useState } from "react"
import { ProductTable } from "./products/ProductTable"
import { SearchBar } from "./products/SearchBar"

export const FilterableProductTable = ({ products }) => {
    const [filterText, setFilterText] = useState("")
    const [inStockOnly, setInStockOnly] = useState(false)
    
    return (
        <>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly} />
            <ProductTable
                products={products}
                filterText={filterText}
                inStockOnly={inStockOnly} />
        </>
    )
}