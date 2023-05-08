import Sequence from './interfaces/sequence';

export default class TurnNumberSequence implements Sequence {
  private turnNumber: number;

  constructor() {
    this.turnNumber = 0;
  }

  public increase() {
    return this.turnNumber++;
  }
}
