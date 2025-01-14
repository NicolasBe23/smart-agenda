"use client";

import { Appointment } from "@/entities/appointment";
import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface Props {
  onSubmit: (appointment: Appointment) => void;
  customerId: string;
  defautlValues?: Appointment;
}

export function AppointmentForm({
  onSubmit,
  customerId,
  defautlValues,
}: Props) {
  const emptyAppointment = {
    id: "",
    createdAt: new Date(),
    anamineses: "",
    esfOD: "",
    cilOD: "",
    axleOD: 0,
    esfOE: "",
    cilOE: "",
    axleOE: 0,
    ADD: "",
    customerId: customerId,
  };

  const [appointment, setAppointment] = useState<Appointment>(
    defautlValues || emptyAppointment
  );

  const [errors, setErrors] = useState({
    esfODError: "",
    cilODError: "",
    axleODError: "",
    esfOEError: "",
    cilOEError: "",
    axleOEError: "",
    ADDError: "",
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const key = e.target.name;
    const value = e.target.value;

    setAppointment({ ...appointment, [key]: value });
  }

  function handleSubmit() {
    const hasErros = validateFields();

    if (hasErros) return;
    onSubmit(appointment);
  }

  function validateFields() {
    let hasErros = false;
    const errors = {
      esfODError: "",
      cilODError: "",
      axleODError: "",
      esfOEError: "",
      cilOEError: "",
      axleOEError: "",
      ADDError: "",
    };

    if (appointment.esfOD !== null && !/^[+-]/.test(appointment.esfOD)) {
      errors.esfODError = "O esfOD tem que ser um valor positivo ou negativo";
      hasErros = true;
    }
    if (Number(appointment.esfOD) % 0.25 !== 0) {
      errors.esfODError = "O esfOD é obrigatório";
      hasErros = true;
    }

    if (Number(appointment.cilOD) % 0.25 !== 0) {
      errors.cilODError = "O cilOD é obrigatório";
      hasErros = true;
    }

    if (Number(appointment.axleOD) % 5 !== 0) {
      errors.axleODError = "O axleOD é obrigatório";
      hasErros = true;
    }

    if (appointment.esfOE !== null && !/^[+-]/.test(appointment.esfOE)) {
      errors.esfOEError = "O esfOE tem que ser um valor positivo ou negativo";
      hasErros = true;
    }

    if (Number(appointment.esfOE) % 0.25 !== 0) {
      errors.esfOEError = "O esfOE é obrigatório";
      hasErros = true;
    }

    if (Number(appointment.cilOE) % 0.25 !== 0) {
      errors.cilOEError = "O cilOE é obrigatório";
      hasErros = true;
    }

    if (Number(appointment.axleOE) % 5 !== 0) {
      errors.axleOEError = "O axleOE é obrigatório";
      hasErros = true;
    }

    if (Number(appointment.ADD) % 0.25 !== 0) {
      errors.ADDError = "O ADD é obrigatório";
      hasErros = true;
    }

    setErrors(errors);

    return hasErros;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 w-full">
        <div className="flex flex-col gap-2 w-full">
          <Label>EsfOD:</Label>
          <Input
            type="text"
            name="esfOD"
            value={appointment.esfOD}
            onChange={handleInputChange}
          />
          {errors.esfODError && (
            <span className="text-red-500">{errors.esfODError}</span>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Label>CilOD:</Label>
          <Input
            type="text"
            name="cilOD"
            value={appointment.cilOD}
            onChange={handleInputChange}
          />
          {errors.cilODError && (
            <span className="text-red-500">{errors.cilODError}</span>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Label>AxleOD:</Label>
          <Input
            type="number"
            name="axleOD"
            value={appointment.axleOD}
            onChange={handleInputChange}
          />
          {errors.axleODError && (
            <span className="text-red-500">{errors.axleODError}</span>
          )}
        </div>
      </div>
      <div className="flex gap-4 w-full">
        <div className="flex flex-col gap-2 w-full">
          <Label>EsfOE:</Label>
          <Input
            type="text"
            name="esfOE"
            value={appointment.esfOE}
            onChange={handleInputChange}
          />
          {errors.esfOEError && (
            <span className="text-red-500">{errors.esfOEError}</span>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Label>CilOE:</Label>
          <Input
            type="text"
            name="cilOE"
            value={appointment.cilOE}
            onChange={handleInputChange}
          />
          {errors.cilOEError && (
            <span className="text-red-500">{errors.cilOEError}</span>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Label>AxleOE:</Label>
          <Input
            type="number"
            name="axleOE"
            value={appointment.axleOE}
            onChange={handleInputChange}
          />
          {errors.axleOEError && (
            <span className="text-red-500">{errors.axleOEError}</span>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label>ADD:</Label>
        <Input
          type="text"
          name="ADD"
          value={appointment.ADD}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <Label>Anamineses:</Label>
        <Input
          type="text"
          name="anamineses"
          value={appointment.anamineses}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex justify-end">
        <Button onClick={handleSubmit}>Salvar</Button>
      </div>
    </div>
  );
}
