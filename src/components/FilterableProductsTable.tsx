import { useState } from "react"
import { ProductTable } from "./products/ProductTable"
import { SearchBar } from "./products/SearchBar"

export const FilterableProductTable: any = ({ products }) => {
    const [filterText, setFilterText] = useState<any>("")
    const [inStockOnly, setInStockOnly] = useState<any>(false)
    
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