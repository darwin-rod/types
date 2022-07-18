class PersonaNomal {
  constructor(public nombre: string, public direccion: string) {}
}

class Heroe extends PersonaNomal {
  constructor(
    public alterEgo: string,
    public edad: number,
    public nombreReal: string
  ) {
    super(nombreReal, 'New York, USA');
  }
}

const heroe = new Heroe('IronMan', 45, 'Tony Stark');

console.log(heroe);
