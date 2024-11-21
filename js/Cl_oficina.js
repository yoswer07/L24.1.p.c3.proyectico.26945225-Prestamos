export default class Cl_oficina {
  constructor(montoCaja, porcComisionMensual) {
    this.montoCaja = montoCaja;
    this.porcComisionMensual = porcComisionMensual;
    this.prestamos = [];
  }

  set montoCaja(montoCaja) {
    this._montoCaja = +montoCaja;
  }
  get montoCaja() {
    return this._montoCaja;
  }

  set porcComisionMensual(porcComisionMensual) {
    this._porcComisionMensual = +porcComisionMensual;
  }
  get porcComisionMensual() {
    return this._porcComisionMensual;
  }

  calculoComision(prestamo) {
    let comision = (prestamo.meses * this.porcComisionMensual) * prestamo.prestamo / 100;
    let totalPagar = comision + prestamo.montoPrestamo()
    return totalPagar;
  }

  agregarPrestamo(prestamo) {
    prestamo.aPagar = this.calculoComision(prestamo);
    this.prestamos.push(prestamo);
  }

  eliminarPrestamo(codigo) {
    codigo = +codigo;
    let indexCodigo = -1;
    for (let i = 0; i < this.prestamos.length; i++) {
      if (this.prestamos[i].codigo == codigo) indexCodigo = i;
    }
    if (indexCodigo !== -1) this.prestamos.splice(indexCodigo, 1);
    return indexCodigo !== -1;
  }

  montoFinal() {
    let auxMonto = this.montoCaja;
    for (let i = 0; i < this.prestamos.length; i++) {
      auxMonto -= this.prestamos[i].montoPrestamo();
    }
    return auxMonto;
  }

  clientesPorDosMeses() {
    let dosMeses = [];
    for (let i = 0; i < this.prestamos.length; i++) {
      if (this.prestamos[i].meses == 2) dosMeses.push(this.prestamos[i]);
    }
    return dosMeses;
  }

  menorPrestamo() {
    let menorPrestamo = this.prestamos[0].aPagar;
    for (let i = 1; i < this.prestamos.length; i++) {
      if (this.prestamos[i].aPagar < menorPrestamo) {
        menorPrestamo = this.prestamos[i].aPagar;
      }
    }
    return menorPrestamo;
  }

  personaMenorPrestamo() {
    let clienteMenorPrestamo = this.menorPrestamo();
    return this.prestamos.filter(
      (prestamo) => prestamo.aPagar == clienteMenorPrestamo
    );
  }
}
