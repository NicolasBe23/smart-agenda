"use client";

import type { Customer } from "@/entities/customer";
import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface Props {
  onSubmit: (customer: Customer) => void;
  defaultValues?: Customer;
}

export function CustomerForm({ onSubmit, defaultValues }: Props) {
  const emptyCustomer: Customer = {
    id: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    age: 0,
    nif: "",
    createdAt: new Date(),
  };

  const [customer, setCustomer] = useState<Customer>(defaultValues || emptyCustomer);

  const [errors, setErrors] = useState({
    nameError: "",
    ageError: "",
    nifError: "",
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const key = e.target.name;
    const value = e.target.value;

    setCustomer({ ...customer, [key]: value });
  }

  function handleSubmit() {
    const hasErros = validateFields();

    if (hasErros) return;
    onSubmit(customer);
  }

  function validateFields() {
    let hasErros = false;
    const errors = {
      nameError: "",
      ageError: "",
      nifError: "",
    };

    if (customer.name.length === 0) {
      errors.nameError = "O nome é obrigatório";
      hasErros = true;
    }

    if (customer.age === 0) {
      errors.ageError = "A idade é obrigatória";
      hasErros = true;
    }

    if (customer.nif.length === 0) {
      errors.nifError = "O NIF é obrigatório";
      hasErros = true;
    }

    setErrors(errors);

    return hasErros;
  }

  return (
    <div className="flex flex-col gap-4">
      <Label>
        Nome
        <Input
          name="name"
          type="text"
          value={customer.name}
          onChange={handleInputChange}
        />
        {errors.nameError && <p className="text-red-500">{errors.nameError}</p>}
      </Label>
      <Label>
        Email
        <Input
          name="email"
          type="text"
          value={customer.email}
          onChange={handleInputChange}
        />
      </Label>
      <Label>
        Telefone
        <Input
          name="phone"
          type="text"
          value={customer.phone}
          onChange={handleInputChange}
        />
      </Label>
      <Label>
        Endereço
        <Input
          name="address"
          type="text"
          value={customer.address}
          onChange={handleInputChange}
        />
      </Label>
      <Label>
        Idade
        <Input
          name="age"
          type="number"
          value={customer.age}
          onChange={handleInputChange}
        />
        {errors.ageError && <p className="text-red-500">{errors.ageError}</p>}
      </Label>
      <Label>
        NIF
        <Input
          name="nif"
          type="text"
          value={customer.nif}
          onChange={handleInputChange}
        />
        {errors.nifError && <p className="text-red-500">{errors.nifError}</p>}
      </Label>

      <div className="flex justify-end">
        <Button onClick={handleSubmit}>Salvar</Button>
      </div>
    </div>
  );
}
