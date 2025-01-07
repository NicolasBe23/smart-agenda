"use client";

import { Appointment } from "@/entities/appointment";

interface Props {
  appointment: Appointment;
}

export function AppointmentInfo({ appointment }: Props) {
  return (
    <div className="w-full shadow-md bg-gray-950 rounded-md px-2 border border-gray-700">
      <div className="p-2 border-b border-gray-700 flex justify-between items-center">
        <span>EsfOD:</span>
        <span>{appointment?.esfOD}</span>
      </div>
      <div className="p-2 border-b border-gray-700 flex justify-between items-center">
        <span>CilOD:</span>
        <span>{appointment?.cilOD}</span>
      </div>
      <div className="p-2 border-b border-gray-700 flex justify-between items-center">
        <span>AxleOD:</span>
        <span>{appointment?.axleOD}</span>
      </div>
      <div className="p-2 border-b border-gray-700 flex justify-between items-center">
        <span>EsfOI:</span>
        <span>{appointment?.esfOE}</span>
      </div>
      <div className="p-2 border-b border-gray-700 flex justify-between items-center">
        <span>CilOI:</span>
        <span>{appointment?.cilOE}</span>
      </div>
      <div className="p-2 border-b border-gray-700 flex justify-between items-center">
        <span>AxleOI:</span>
        <span>{appointment?.axleOE}</span>
      </div>
      <div className="p-2 flex border-b border-gray-700 justify-between items-center">
        <span>ADD:</span>
        <span>{appointment?.ADD}</span>
      </div>
      <div className="p-2 flex border-b border-gray-700 justify-between items-center">
        <span>anamineses:</span>
        <span>{appointment?.anamineses}</span>
      </div>
    </div>
  );
}
