import { useState,useEffect } from 'react';
import  Header from './components/Header';
import Buttons from './components/Buttons';
import Alerta from './components/Alerta';
import { formatearDinero,calcularTotalPagar } from './helpers';

function App() {
  const [cantidad,setCantidad] = useState(50000);
  const [meses,setMeses]=useState(6);
  const [total,setTotal]=useState(0);
  const [pago,setPago]=useState(0)
  const [alerta,setAlerta]=useState({});

  useEffect(()=>{
    const resultadoTotalPagar = calcularTotalPagar(cantidad,meses)
    setTotal(resultadoTotalPagar)

  },[cantidad,meses]);
  
  useEffect(() => {
    
    setPago(total/meses)
  }, [total,meses])
  

  const MIN= 0 ;
  const MAX = 100000;
  const STEP = 100
  
  function handleChange(e){
     setCantidad(+e.target.value)
  }
  function handleClickDecremento(){
    const valor = cantidad - STEP;
    if(valor < MIN){
      setAlerta({msg: 'Elige una cantidad valida', error:true})
      return;
    }
    setAlerta({})
    setCantidad(valor)
  }
  function handleClickAumento(){
    const valor = cantidad + STEP;
    if(valor > MAX){
      setAlerta({msg: 'Estas excediendo el Limite de prestamo', error:true})
      return;
    }
    setAlerta({})
    setCantidad(valor)
  }
  const { msg } = alerta
  return (
    <div className="my-20 max-w-lg mx-auto shadow bg-white p-10">
      <Header/>
      { msg && 
        
          <Alerta alerta={alerta} /> 
       
      }

      <div className="flex justify-between my-6">
          <Buttons
          operador='-'
          fn={handleClickDecremento}
          />
          <Buttons
          operador='+'
          fn={handleClickAumento}
          />
      </div>

      <input type="range" 
        name=""
        id=""
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
      />

      <p className="text-indigo-600 text-center my-10 text-5xl font-extrabold ">{formatearDinero(cantidad)}</p>

      <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
        Elige un <span className='text-indigo-600'>Plazo</span> a pagar
      </h2>

      <select  className='mt-5 w-full p-2 bg-white border-gray-300 
        rounded-lg text-center text-xl font-bold text-gray-500'
        value={meses}
        onChange={e=>setMeses(+e.target.value)}
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses </option>
      </select>

      <div className='my-5 space-y-3 bg-gray-50 p-5'>
        <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
          Resumen <span className='text-indigo-600'>de Pagos</span> 
        </h2>

        <p className='text-xl font-bold text-gray-500 text-center'>Meses</p>
        <p className='text-xl font-bold text-gray-500 text-center'>{formatearDinero(total)} Total a Pagar</p>
        <p className='text-xl font-bold text-gray-500 text-center'>{formatearDinero(pago)} Plazos</p>

      </div>

    </div>
  )
}

export default App;
