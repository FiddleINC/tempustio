import React, { useState } from 'react';

import TypeChart from './BarChart';

const statusCounter = (inputs, query) => {
	let counter = 0;
	for (const input of inputs) {
		if (input.type === query) counter += 1;
	}
	return counter;
};

const RegistrationChart = (props) => {
	const [ data ] = useState(props.data);
	const chartData = [
		{
			type: 'Self',
			count: statusCounter(data, 'Self')
		},
		{
			type: 'Group',
			count: statusCounter(data, 'Group')
		},
		{
			type: 'Corporate',
			count: statusCounter(data, 'Corporate')
		},
		{
			type: 'Others',
			count: statusCounter(data, 'Others')
		}
	];
	return props.data.length !== 0 ? <TypeChart data={chartData} /> : null;
};

export default RegistrationChart;
