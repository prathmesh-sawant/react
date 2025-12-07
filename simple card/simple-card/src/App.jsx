import { useState } from 'react'
import './App.css'
import Card from '../components/Card'

function App() {
  
  return (
    <>
     <h1>Shop</h1>
     <div className='grid'> 
     <Card img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS0hWa1oRuQtUSoC6RzMQFyeIXuSUzLwDvjpFc-rkum6IsRZcaX9Z_3MhdFujvhMMH7Uln5Ud03K5zgR-Ir1LUDEi1J1aIetz5RshNVNtDxjW5PluCvz9zKog" title="Portronics Bubble 2.0 Wireless Keyboard" brand="Logitech" price="Rs.799"/>

     <Card img="https://m.media-amazon.com/images/I/51IuaaMgjdL._SX679_.jpg" title="Logitech M221 Wireless Mouse" brand="Logitech" price="Rs.699"/>

     <Card img="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTANE44KzmdUa3AR3gYp8SDk4YxwiclPotsaRjVGGWku0Gdzeav6S0t1zQbMgpjkXQr3aQkNF5aEZc0gV-YZOvnd9TBZn84g3zpSpt5g3LVTyoQMp-IXqeqhA" title="HP 8GB DDR5-4800 SDRAM Memory Module" brand="HP" price="Rs.4999"/>

     </div>
    </>
  )
}

export default App
