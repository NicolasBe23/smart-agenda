import type { Appointment } from "./appointment";

export interface Customer {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  createdAt: Date;
  age: number;
  nif: string;
  appointments?: Appointment[];
  inLine?: boolean;
}
