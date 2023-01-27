import "./App.scss"
import { FilterableProductTable } from "./components/FilterableProductsTable"
import pro from "./data.json"
const App = () => {
return (
  <div className="App">
    <FilterableProductTable products={pro as any}/>
  </div>
  )
}
export default App