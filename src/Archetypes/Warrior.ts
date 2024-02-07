import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private static instances = 0;

  constructor(_name: string, private _energy: EnergyType = 'stamina') {
    super(_name);
    Warrior.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.instances;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}

export default Warrior;
