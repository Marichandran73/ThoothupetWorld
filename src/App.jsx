
import './App.css'
import Dashboard from './Components/Products/Dashboard'

if( !localStorage.getItem("Customer")){
  localStorage.setItem("Customer",JSON.stringify([]));
}


function App() {
 
  return (
    <>
      <Dashboard/>
   </>
  )
}

export default App
