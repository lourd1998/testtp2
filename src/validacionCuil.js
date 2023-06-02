function validaCuil(cuil) {
    const cuilSinGuiones = cuil.replace(/[-\s]/g, '');
    if (cuilSinGuiones.length !== 11) {
      return false;
    }

    const primerosDosDigitos = parseInt(cuilSinGuiones.substring(0, 2), 10);
    if (isNaN(primerosDosDigitos) || primerosDosDigitos < 20 || primerosDosDigitos > 23) {
      return false;
    }
  
    let a = 0;
    const digitosCUIL = cuilSinGuiones.split('').map(Number);
    const digitoVerificador = digitosCUIL.pop();
  
    for (let i = 0; i < digitosCUIL.length; i++) {
      a += digitosCUIL[i] * (2 + (i % 6));
    }
  
    const verificadorCalculado = (11 - (a % 11)) % 11;
  

    return digitoVerificador === verificadorCalculado;
  }
  module.exports= validaCuil