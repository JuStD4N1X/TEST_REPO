import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from "react";
import './z1.png'; 

function App() {

  

  const [Money,setMoney] = useState(0);

  const deposit = (amount)=>
  {
    setMoney((prevMoney => prevMoney + amount));
  }

  return (
    <body className='bg-warning-subtle'>
    <div className='container'>
      <header className='m-3 fs-1 text-center w-100'> Kup znicza </header>
        <span className='col fs-3'>Stan konta: {Money}</span>
        <section className='row mt-5'>
          <span className='fs-4 col-2'>Doładuj konto</span>
          <button className='btn btn-secondary m-2 col-3' onClick={()=>{deposit(1)}}>1 zł</button>
          <button className='btn btn-secondary m-2 col-3' onClick={()=>{deposit(2)}}>2 zł</button>
          <button className='btn btn-secondary m-2 col-3' onClick={()=>{deposit(5)}}>5 zł</button>
        </section>

        <section>
          
        </section>
    </div>
  </body>);
}

export default App;
