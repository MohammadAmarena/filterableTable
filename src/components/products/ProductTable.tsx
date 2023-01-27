import { ProductCategoryRow } from "./product/ProductCategoryRow"
import { ProductRow } from "./product/ProductRow"

export const ProductTable: any = ({ products, filterText, inStockOnly }) => {

    const rows: any = []
    let lastCategory: null = null

    products.forEach((product: any) => {
        if (product.name.toLowerCase().indexOf(filterText.toLowerCase() ) === -1) {
            return
        }
        if (inStockOnly && !product.stocked) {
            return
        }
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow 
                    category={product.category}
                    key={product.category} />
            )
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name} />
        )
        lastCategory = product.category
    })
    
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}