import { Customer } from "@/entities/customer";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface DbStore {
  customers: Customer[];

  createCustomer: (customer: Customer) => void;
  updateCustomer: (customerId: string, customer: Customer) => void;
  deleteCustomer: (customerId: string) => void;
  addCustomerInLine: (customerId: string) => void;
  removeCustomerFromLine: (customerId: string) => void;
}

export const useDatabase = create<DbStore>()(
  persist(
    (set) => ({
      customers: [],

      createCustomer: (customer: Customer) => {
        set((state) => ({ customers: [...state.customers, customer] }));
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
    }),
    {
      name: "smart-agenda",
    }
  )
);
