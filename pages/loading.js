import React from 'react';
import ReactLoading from 'react-loading';

const loading = () => {
	const type = 'spinningBubbles';
	const color = '#31549e';
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}
		>
			<ReactLoading type={type} color={color} />
		</div>
	);
};

export default loading;
