import Dispenser from './interfaces/dispenser';
import Sequence from './interfaces/sequence';
import Ticket from './interfaces/ticket';
import TurnTicket from './turn-ticket';

export default class TicketDispenser implements Dispenser {
  private sequence: Sequence;

  constructor(sequence: Sequence) {
    this.sequence = sequence;
  }

  public generateTicket(): Ticket {
    return new TurnTicket(this.sequence.increase());
  }
}
