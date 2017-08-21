function ShoppingTitle() {
  return (
    <div>
      <h1>Welcome to React Transportation</h1>
      <p>The best place to buy vehicles online</p>
    </div>
  )
}

function Options(props) {
  return (
    <div>
      <h3>Choose Options</h3>
      New Only <input type = "checkbox" />
      <br />
      Select Type <SelectOption values = {props.value} />
    </div>
  )
}
function SelectOption(props) {
  let choices = props.values;
  return (
    <select>
      {choices.map(val => <option value = {val}>{val}</option>)}
    </select>
  )
}

function ShoppingList(props) {
  let vehicleData = props.vehicleData;
  return (
    <div>
      <h3>{props.header}</h3>
      {vehicleData.map(val => <VehicleTable vehicleData = {val} />)}
    </div>
  )
}
function VehicleTable(props) {
  return (
    <table>
      <tr>
        <th>Year</th>
        <th>Model</th>
        <th>price</th>
        <th>buy</th>
      </tr>
      <tr>
        <td>{props.vehicleData[0]}</td>
        <td>{props.vehicleData[1]}</td>
        <td>${props.vehicleData[2]}</td>
        <td><button>Buy now</button></td>
      </tr>
    </table>
  )
}

function ReactTranportationApp(props) {
  return (
    <div>
      <ShoppingTitle />
      <Options value = {['All', 'Cars', 'Trucks', 'Convertibles']} />
      <ShoppingList header = "Car" vehicleData = {[[2013, 'A', 32000], [2011, 'B', 4400], [2016, 'B', 15500]]} />
      <ShoppingList header = "Trucks" vehicleData = {[[2014, 'D', 18000], [2013, 'E', 5200]]} />
      <ShoppingList header = "Convertibles" vehicleData = {[[2009, 'F', 2000], [2010, 'G', 6000], [2012, 'H', 12500], [2017, 'M', 50000]]} />
    </div>
  )
}

ReactDOM.render(
  <ReactTranportationApp />,
  document.getElementById("lab")
)
