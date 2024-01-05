"use client";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import React from "react";
import { IconType } from "react-icons";

interface ListingInfoProps {
	user: SafeUser | null;
	description: string;
	roomCount: number;
	bathroomCount: number;
	guestCount: number;
	category:
		| {
				icon: IconType;
				label: string;
				description: string;
		  }
		| undefined;
	locationValue: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
	user,
	description,
	roomCount,
	bathroomCount,
	guestCount,
	category,
	locationValue,
}) => {
	const { getByValue } = useCountries();
	const coordinates = getByValue(locationValue)?.latlng;
	return <div>ListingInfo</div>;
};

export default ListingInfo;
