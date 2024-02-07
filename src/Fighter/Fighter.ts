import Energy from '../Energy';

export default interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy; // Energy opcional
  attack(enemy: Fighter): void;
  special?(enemy: Fighter): void; // Special method opcional
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}
