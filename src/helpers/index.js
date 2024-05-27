const formatearDinero = (valor)=>  {
    const formatter = new Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'USD'
    });
    return formatter.format(valor);
}
const calcularTotalPagar = (cantidad , plazo)=>{
    let total;

    if(cantidad < 5000){
        //35%
        total= cantidad * 1.35;
    }else if( cantidad >= 5000 && cantidad < 10000){
        //30%
        total = cantidad * 1.3
    }else if(cantidad >= 10000 && cantidad < 15000){
        //20%
        total = cantidad * 1.2
    }else{
        //15%
        total = cantidad * 1.15
    }
    
    //plazo - mas plazo mas intereses
    switch (plazo) {
        
        case 12:
            total *= 1.2;
            break;
        case 24 :
            total *= 1.3;
            break;      
        default:
            total *= 1.1;
            break;
    }
    return total;
    
}
export{
    formatearDinero,
    calcularTotalPagar
}