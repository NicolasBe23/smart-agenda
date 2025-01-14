"use client";

import type { Appointment } from "@/entities/appointment";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface Props {
  onSubmit: (appointment: Appointment) => void;
  customerId: string;
  defaultValues?: Appointment;
}

export function AppointmentForm({
  onSubmit,
  customerId,
  defaultValues,
}: Props) {
  const emptyAppointment = {
    id: customerId,
    createdAt: new Date(),
    anamineses: "",
    esfOD: "-0.00",
    cilOD: "-0.00",
    axleOD: 0,
    esfOE: "-0.00",
    cilOE: "-0.00",
    axleOE: 0,
    ADD: "-0.00",
    customerId: customerId,
  };

  const [appointment, setAppointment] = useState<Appointment>(
    defaultValues || emptyAppointment
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
      errors.esfODError = "The value must contain a + or -";
      hasErros = true;
    }
    if (Number(appointment.esfOD) % 0.25 !== 0) {
      errors.esfODError = "The value must be a multiple of 0.25";
      hasErros = true;
    }

    if (Number(appointment.cilOD) % 0.25 !== 0) {
      errors.cilODError = "The value must be a multiple of 0.25";
      hasErros = true;
    }

    if (Number(appointment.axleOD) % 5 !== 0) {
      errors.axleODError = "The value must be a multiple of 5";
      hasErros = true;
    }

    if (appointment.esfOE !== null && !/^[˝-]/.test(appointment.esfOE)) {
      errors.esfOEError = "The value must contain a + or -";
      hasErros = true;
    }

    if (Number(appointment.esfOE) % 0.25 !== 0) {
      errors.esfOEError = "The value must be a multiple of 0.25";
      hasErros = true;
    }

    if (Number(appointment.cilOE) % 0.25 !== 0) {
      errors.cilOEError = "The value must be a multiple of 0.25";
      hasErros = true;
    }

    if (Number(appointment.axleOE) % 5 !== 0) {
      errors.axleOEError = "The value must be a multiple of 5";
      hasErros = true;
    }

    if (Number(appointment.ADD) % 0.25 !== 0) {
      errors.ADDError = "The value must be a multiple of 0.25";
      hasErros = true;
    }

    setErrors(errors);

    return hasErros;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 w-full">
        <div className="flex flex-col gap-2 w-full">
          <Label>Sphere Right Eye:</Label>
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
          <Label>Cylinder Right Eye:</Label>
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
          <Label>Axle Right Eye:</Label>
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
          <Label>Sphere Left Eye:</Label>
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
          <Label>Cylinder Left Eye:</Label>
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
          <Label>Axle Left Eye:</Label>
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
      <div className="flex flex-col gap-2">
        <Label>Anamneses:</Label>
        <Input
          type="text"
          name="anamineses"
          value={appointment.anamineses}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex justify-end">
        <Button onClick={handleSubmit}>Save</Button>
      </div>
    </div>
  );
}
