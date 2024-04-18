import './App.css'
import logo from './assets/logo.png';
import Card from './components/Card'
import data from './server/server'

const App = () => {
  const cards = data.map(element => {
    return <Card 
          key = {element.id}
          {...element}
    />
  })
  
  return (
    <div className='App'>
      <div className = 'header'>
        <img src={logo} alt='logo' className='logo-img'/>
        <h1> Food Truck </h1>
      </div>
      <div className='card-list'>
        {cards}
      </div>
    </div>
  )
}

export default App
