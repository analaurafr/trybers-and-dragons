import Race from './Race';

class Elf extends Race {
  private static instances = 0;

  constructor(name: string, dexterity: number, private _maxLifePoints = 99) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.instances += 1;
  }

  static createdRacesInstances(): number {
    return Elf.instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;
