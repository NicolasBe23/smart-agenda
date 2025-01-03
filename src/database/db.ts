import { Customer } from "@/entities/customer";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface DbStore {
  customers: Customer[];

  createCustomer: (customer: Customer) => Customer;
  updateCustomer: (customerId: string, customer: Customer) => void;
  deleteCustomer: (customerId: string) => void;
  addCustomerInLine: (customerId: string) => void;
  removeCustomerFromLine: (customerId: string) => void;
  getCustomer: (customerId: string) => Customer | undefined;
}

export const useDatabase = create<DbStore>()(
  persist(
    (set, get) => ({
      customers: [],

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
    }),
    {
      name: "smart-agenda",
    }
  )
);
