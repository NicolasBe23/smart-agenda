"use client";

import { AppointmentInfo } from "@/components/ui/appointment-info";
import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/title";
import { useDatabase } from "@/database/db";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
	customerId: string;
}

export function AppointmentList({ customerId }: Props) {
	const router = useRouter();
	const { appointments } = useDatabase();
	const customerAppointments = appointments.filter(
		(appointment) => appointment.customerId === customerId,
	);

	const isEmpty = customerAppointments.length === 0;

	return (
		<div className="flex flex-col gap-4 w-full">
			<div className="flex justify-between items-center w-full">
				<Title>Appointments</Title>
				<Button
					onClick={() =>
						router.push(`/customers/${customerId}/add-appointment`)
					}
				>
					Add Appointment
				</Button>
			</div>

			{isEmpty ? (
				<div>
					<span>There are no appointments for this customer</span>
				</div>
			) : (
				customerAppointments.map((appointment) => (
					<AppointmentInfo appointment={appointment} key={appointment.id} />
				))
			)}
		</div>
	);
}
