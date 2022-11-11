import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
const ens = () => {
	const [name, setName] = useState('');
	const [addr, setAddr] = useState('');
	const btn = async () => {
		// const provider = await new ethers.providers.Web3Provider(ethereum);
		let provider = new ethers.providers.Web3Provider(window.ethereum);
		const address = await provider.resolveName('deependujha.eth');
		const balance = await provider.getBalance('deependujha.eth');
		console.log('address is: ', address);
		console.log('balance is: ', balance);

		// var address = '0x1234...';
		var name = await provider.lookupAddress(address);
		console.log('name is: ', name);
		// ethers.js automatically checks that the forward resolution matches.
	};
	useEffect(() => {}, []);
	return (
		<div>
			learning ENS.
			<button onClick={btn}>click me</button>
		</div>
	);
};

export default ens;
