import { Card, CardContent, Typography } from "@mui/material";
import data from "./../../assets/api.json";
import availableIcon from '../../assets/icon-available.svg';
import busyIcon from '../../assets/icon-busy.svg';
import { useState } from "react";
import "./People.scss";


function People() {
    const [hoveredPerson, setHoveredPerson] = useState(null);

    return (
      <div className="people">
        {data.map((person) => (
          <Card key={person.id}
          onMouseEnter={() => setHoveredPerson(person)}
          onMouseLeave={() => setHoveredPerson(null)}
          >
            <CardContent>
              <div className='card-heading'>
              {person.image ? (
                <img src={person.image} alt='Available Icon' />
              ) : (
                <img src="https://www.shutterstock.com/image-vector/photo-coming-soon-picture-frame-260nw-722839600.jpg" alt='Busy Icon' />
              )}
              {person.available ? (
                <img className="icon" src={availableIcon} alt='Available Icon' />
              ) : (
                <img className="icon" src={busyIcon} alt='Busy Icon' />
              )}
              </div>
              <Typography className='name' variant='h5' component='h2'>
                  {person.firstName} {person.lastName}
                </Typography>
              <Typography color='textSecondary'>{person.location}</Typography>
              {hoveredPerson && hoveredPerson.id === person.id && (
              <div>
                <Typography color="textSecondary">{person.phone}</Typography>
                <Typography color="textSecondary">{person.email}</Typography>
              </div>
            )}
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

// function PersonCard(props) {
// 	const { firstName, lastName, image, location } = props.person;
// 	return (
// 		<Card>
// 			<CardContent>
// 				<div className='card-heading'>
// 					<img src={image} alt={image} />
// 					<Typography variant='h5' component='h2'>
// 						{firstName} {lastName}
// 					</Typography>
// 				</div>
// 				<Typography color='textSecondary'>{location}</Typography>
// 			</CardContent>
// 		</Card>
// 	);
// }

// function People() {
// 	return (
// 		<div className='people'>
// 			{data.map((person) => (
// 				<PersonCard key={person.id} person={person} />
// 			))}
// 		</div>
// 	);
// }

export default People;
