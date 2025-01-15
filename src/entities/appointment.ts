export interface Appointment {
  id: string;
  createdAt: Date;
  anamnesis: string;
  esfOD: string;
  cilOD: string;
  axleOD: number;
  esfOE: string;
  cilOE: string;
  axleOE: number;
  ADD?: string;
  customerId: string;
}
