import { Customer } from "@/entities/customer";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Appointment } from "@/entities/appointment";

interface DbStore {
  customers: Customer[];
  appointments: Appointment[];

  createCustomer: (customer: Customer) => Customer;
  updateCustomer: (customerId: string, customer: Customer) => void;
  deleteCustomer: (customerId: string) => void;
  addCustomerInLine: (customerId: string) => void;
  removeCustomerFromLine: (customerId: string) => void;
  getCustomer: (customerId: string) => Customer | undefined;

  createAppointment: (appointment: Appointment, customerId: string) => void;
  getAppointment: (id: string) => Appointment | undefined;
  updateAppointment: (id: string, appointment: Appointment) => void;
}

export const useDatabase = create<DbStore>()(
  persist(
    (set, get) => ({
      customers: [],
      appointments: [],

      createCustomer: (customer: Customer) => {
        const newCustomer = {
          ...customer,
          createAd: new Date(),
          id: Math.random().toString(36).substring(2, 15),
        };

        set((state) => ({
          customers: [...state.customers, newCustomer],
        }));

        return newCustomer;
      },

      updateCustomer: (customerId: string, customer: Customer) => {
        set((state) => ({
          customers: state.customers.map((c) =>
            c.id === customerId ? customer : c
          ),
        }));
      },

      deleteCustomer: (customerId: string) => {
        set((state) => ({
          customers: state.customers.filter((c) => c.id !== customerId),
          appointments: state.appointments.filter(
            (a) => a.customerId !== customerId
          ),
        }));
      },

      addCustomerInLine: (customerId: string) => {
        set((state) => ({
          customers: state.customers.map((c) =>
            c.id === customerId ? { ...c, inLine: true } : c
          ),
        }));
      },

      removeCustomerFromLine: (customerId: string) => {
        set((state) => ({
          customers: state.customers.map((c) =>
            c.id === customerId ? { ...c, inLine: false } : c
          ),
        }));
      },

      getCustomer: (customerId: string) => {
        return get().customers.find((c) => c.id === customerId);
      },

      createAppointment: (appointment: Appointment, customerId: string) => {
        const newAppointment = {
          ...appointment,
          id: Math.random().toString(36).substring(2, 15),
          customerId,
        };

        set((state) => ({
          appointments: [...state.appointments, newAppointment],
          customers: state.customers.map((customer) =>
            customer.id === customerId
              ? { ...customer, inLine: false }
              : customer
          ),
        }));

        return newAppointment;
      },

      getAppointment: (id: string) => {
        const appointments = get().appointments;
        return appointments.find((appointment) => appointment.id === id);
      },

      updateAppointment: (id: string, appointment: Appointment) => {
        set((state) => ({
          appointments: state.appointments.map((a) =>
            a.id === id ? appointment : a
          ),
        }));
      },
    }),

    {
      name: "smart-agenda",
    }
  )
);
