interface Pasajero {
  nombre: string;
  hijos?: string[];
}

const pasajero1: Pasajero = {
  nombre: 'Darwin',
};

const pasajero2: Pasajero = {
  nombre: 'LAdy',
  hijos: ['Karen', 'Valentina'],
};

function imprimeHijos(pasajero: Pasajero): void {
  const cuantosHijos = pasajero.hijos?.length || 0;
  console.log(cuantosHijos);
}

imprimeHijos(pasajero1);
