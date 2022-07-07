module.exports = {
    /**
     * 
     * @param {*} n1 Numero 1 de la suma
     * @param {*} n2 Numero 2 de la suma
     * @returns Suma de los números
     */
    suma: function(n1,n2){
        return (this.esNumero(n1,n2)? n1 + n2 : this.mensajeError());
    },
    resta: function(n1,n2){
        return (this.esNumero(n1,n2)? n1 - n2 : this.mensajeError());
    },
    multiplicacion: function(n1,n2){
        return (this.esNumero(n1,n2)? n1 * n2 : this.mensajeError());
    },
    division: function(n1,n2){
        return (this.esNumero(n1,n2)? n1 / n2 : this.mensajeError());
    },

    mensajeError: function(){
        console.log('Un valor o los dos valores no son numeros');
    },
    esNumero: function(n1,n2){
        if (typeof n1 !== 'number' || typeof n2 !=='number'){
            return false;
        }
        return true;
    }
}