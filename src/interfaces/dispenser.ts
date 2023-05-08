import Ticket from './ticket';

export default interface Dispenser {
  generateTicket(): Ticket;
};
