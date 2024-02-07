import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

interface Fighter extends SimpleFighter {
  defense: number;
  energy?: Energy; // Energy opcional

  special?(enemy: Fighter): void; // Special method opcional
  levelUp(): void;
}

export default Fighter;
