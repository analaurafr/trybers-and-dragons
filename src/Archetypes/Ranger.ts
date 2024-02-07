import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private static instances = 0;

  constructor(_name: string, private _energy: EnergyType = 'stamina') {
    super(_name);
    Ranger.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.instances;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}

export default Ranger;
