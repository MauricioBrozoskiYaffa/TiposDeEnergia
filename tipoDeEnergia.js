var implementaciones = [
	{
		tipoEnergia: "Heólica",
		descripcion: "Molino a 2km",
		energiaGenerada: 1500,
		presupuesto: 500000,
		mesesEstimados: 2,
	},
	{
		tipoEnergia: "Heólica",
		descripcion: "Molino arriba de la planta",
		energiaGenerada: 1300,
		presupuesto: 650000,
		mesesEstimados: 1,
	},
	{
		tipoEnergia: "Hidroeléctrica",
		descripcion: "Presa A-120",
		energiaGenerada: 2000,
		presupuesto: 1300000,
		mesesEstimados: 7,
	},
	{
		tipoEnergia: "Hidroeléctrica",
		descripcion: "Presa XA-342",
		energiaGenerada: 4500,
		presupuesto: 1700000,
		mesesEstimados: 24,
	},
	{
		tipoEnergia: "Solar",
		descripcion: "4 paneles A-54",
		energiaGenerada: 1200,
		presupuesto: 350000,
		mesesEstimados: 0.25,
	},
	{
		tipoEnergia: "Solar",
		descripcion: "2 paneles A-57",
		energiaGenerada: 1700,
		presupuesto: 700000,
		mesesEstimados: 1,
	},
];

var continuar = true,

tipoActual = "",
descripcionActual = "",
energiaActual = 0,
presupuestoActual = 0,
tiempoActual = 0;

(tipoPrevio = ""),
(energiaTotal = 0),
(presupuestoTotal = 0),
(tiempoTotal = 0);

efectividadTipo = 0;

do {
    tipoActual = prompt('Tipo de Energia Elegida');
    descripcionActual = prompt('Descripcion de la Energia elegida');
    energiaActual = Number(prompt('Energia generada a razon de (kw/h)'));
    presupuestoActual = Number(prompt('Valor de la Energia'));
    tiempoActual = Number(prompt('Tiempo estimado (en meses)'));

    if (tipoPrevio == "") {
        tipoPrevio = tipoActual;
        (energiaTotal = energiaActual),
        (presupuestoTotal = presupuestoActual),
        (tiempoTotal = tiempoActual);
    } else {

        if (tipoActual == tipoPrevio) {
            (energiaTotal += energiaActual),
            (presupuestoTotal += presupuestoActual),
            (tiempoTotal += tiempoActual);
        } else {
            efectividadTipo = energiaTotal /(presupuestoTotal * tiempoTotal);

            alert('Tipo de Energia : ' + tipoPrevio);
            alert('Efectividad de la Energia : ' + efectividadTipo);
        }
    }
} while ((continuar = confirm('Hay mas Energias para Verificar?')));

efectividadTipo = energiaTotal / (presupuestoTotal * tiempoTotal);

alert('Tipo de energia : ' + tipoPrevio);
alert('Efectividad de la Energia : ' + efectividadTipo);