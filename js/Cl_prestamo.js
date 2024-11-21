export default class Cl_prestamo {
    constructor(cliente, codigo, prestamo, meses) {
        this.cliente = cliente;
        this.codigo = codigo;
        this.prestamo = prestamo;
        this.meses = meses;
    }
    set cliente(cliente) {
        this._cliente = cliente;
    }
    get cliente() {
        return this._cliente;
    }   
    set codigo(codigo) {
        this._codigo = codigo;
    }
    get codigo() {
        return this._codigo;
    }
    set prestamo(prestamo) {
        this._prestamo = +prestamo;
    }
    get prestamo() {
        return this._prestamo;
    }
    set meses(meses) {
        this._meses = +meses;
    }
    get meses() {
        return this._meses;
    }
    montoPrestamo() {
        return this.prestamo * this.meses;
    }
}