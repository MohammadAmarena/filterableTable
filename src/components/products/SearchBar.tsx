export const SearchBar: any = ({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}) => {
    return (
        <div className="search-bar">
        <input
            type="search"
            placeholder='Search'
            value={filterText}
            onChange={(e) => onFilterTextChange(e.target.value)} />
        <label>
            <input
            type='checkbox'
            value={inStockOnly}
            onChange={(e) => onInStockOnlyChange(e.target.checked)} />
            {' ' + 'Only show products in stock'}
        </label>
        </div>
    )
}