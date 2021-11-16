import React from 'react'

const Card = ({id, name, email}) => {
	return(
		<div className = 'dib br3 pa0 ma1 grow bw2 shadow5'>
			<img alt='robot' src={`https://robohash.org/${id}?200x200`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	)
}

export default Card;