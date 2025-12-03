const addButton = document.createElement("button")
addButton.id = 'add-btn';


const sortButton = document.createElement("button")
sortButton.id = 'sort-btn';


const sortAll = document.createElement("button")
sortAll.id = 'sort-all-btn';
const renderBankPanel = (bankValue) => {
 return `<p style = " border : 1px solid black ; border-radius: 6px">
 ${bankValue}
  </p>`
}


const renderOddsPanel = (oddsValue) => {
 return `<p style = " border : 1px solid black ; border-radius: 6px">
 ${oddsValue}
  </p>`
}
const renderEvensPanel = (evenValue) => {
 return `<p style = " border : 1px solid black ; border-radius: 6px">
 ${evenValue}
  </p>`
}


const renderInputPanel =() =>{
  const addButton = document.createElement("button")
addButton.id = 'add-btn';
addButton.addEventListener("click" , (singleValue) => {
 } )


const sortButton = document.createElement("button")
sortButton.id = 'sort-btn';


const sortAll = document.createElement("button")
sortAll.id = 'sort-all-btn';
 const input = document.createElement("input")
}
const render = () => {
 const app = document.getElementById("app")
 let inputPanel = renderInputPanel ()
 let bankPanel = renderBankPanel("46")
 let oddsPanel = renderOddsPanel("34")
 let evensPanel = renderEvensPanel ("24")
 app.innerHTML = `
 <h1> Odds and Evens </h1>
 <p>Add a to the bank  </p>
 ${inputPanel}
 <h2> Bank </h2>
 ${bankPanel}
 <h2>Odds</h2>
 ${oddsPanel}
 <h2>Evens</h2>
 ${evensPanel}
 `
}
render()
