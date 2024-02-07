import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static _instances = 0;

  constructor(_name: string, private _energy: EnergyType = 'mana') {
    super(_name);
    Mage._instances += 1;
  }

  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances(): number {
    return this._instances;
  }
}

export default Mage;