import React, { useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import data from "./../../assets/api.json";
import availableIcon from "../../assets/icon-available.svg";
import busyIcon from "../../assets/icon-busy.svg";
import "./People.scss";

function People({ searchTerm }) {
	const [isHovered, setIsHovered] = useState(false);

	const filteredPeople = data.filter(
		(person) =>
			(person.firstName &&
				person.firstName.toLowerCase().includes(searchTerm.toLowerCase())) ||
			(person.lastName &&
				person.lastName.toLowerCase().includes(searchTerm.toLowerCase()))
	);

	if (filteredPeople.length === 0) {
		return <p>No matches</p>;
	}
	return (
		<div className='people'>
			{filteredPeople.map((person, index) => (
				<Card
					key={index}
					onMouseEnter={() => setIsHovered(index)}
					onMouseLeave={() => setIsHovered(null)}
				>
					<CardContent>
						<div className='card-heading'>
							{person.image ? (
								<img src={person.image} alt='Available Icon' />
							) : (
								<img
									src='https://www.shutterstock.com/image-vector/photo-coming-soon-picture-frame-260nw-722839600.jpg'
									alt='Busy Icon'
								/>
							)}
							{person.available ? (
								<img
									className='icon'
									src={availableIcon}
									alt='Available Icon'
								/>
							) : (
								<img className='icon' src={busyIcon} alt='Busy Icon' />
							)}
						</div>
						<Typography className='name' variant='h5' component='h2'>
							{person.firstName} {person.lastName}
						</Typography>
						<Typography color='textSecondary'>{person.location}</Typography>
						{isHovered === index && (
							<div>
								<Typography className='details' color='textSecondary'>
									{person.phone}
								</Typography>
								<Typography className='details' color='textSecondary'>
									{person.email}
								</Typography>
							</div>
						)}
					</CardContent>
				</Card>
			))}
		</div>
	);
}

export default People;
