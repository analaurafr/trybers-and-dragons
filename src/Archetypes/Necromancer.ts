import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private static instances = 0;

  constructor(_name: string, private _energy: EnergyType = 'mana') {
    super(_name);
    Necromancer.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.instances;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}

export default Necromancer;
