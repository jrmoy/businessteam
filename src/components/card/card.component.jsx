import React from 'react';
import './card.styles.css';

export const Card = (props) => (
	<div className='card-container'>
		<img alt='bussinessTeam' src={`https://robohash.org/${props.businessTeam.id}?set=set4&size=180x180`} />
		<h1> {props.businessTeam.name}</h1>
		<p>{props.businessTeam.email}</p>
		<p> {props.businessTeam.phone}</p>
		<p>{props.businessTeam.address.city}</p>
	</div>
);
