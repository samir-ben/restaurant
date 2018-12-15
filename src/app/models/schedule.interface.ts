import { EveningEvent } from './evening-events.interface';

export interface Schedule {
  version: string;
  events: EveningEvent[];
}
