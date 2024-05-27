const Alerta = ({alerta}) => {
    
 
    return (
      <div className={`${alerta.error ? 'from-red-700 to-red-400' : 'from-indigo-400 to-indigo-600'}
       bg-gradient-to-r m-5 p-3 rounded-xl text-center uppercase text-white font-bold text-sm`} id="alerta">
          {alerta.msg}
      </div>
    )
  }
  
  export default Alerta