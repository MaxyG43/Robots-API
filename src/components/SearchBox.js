import React from 'react'

const Searchbox = ({ searchfield, searchChange }) => {
	return(
		<div className= 'pa2' >
			<input
			className= 'pa1 ba b--green bg-gold' 
			type='search' 
			placeholder='search your robot here'
			onChange= {searchChange}
			/>
		</div>
	);
}

export default Searchbox