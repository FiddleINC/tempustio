import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const TypeChart = (props) => {
	return (
		<BarChart width={600} height={400} data={props.data}>
			<CartesianGrid strokeDasharray="4 4" />
			<XAxis dataKey="type" />
			<YAxis />
			<Tooltip />
			<Bar dataKey="count" fill="#009C95" label={{ position: 'top' }} barSize={40} />
		</BarChart>
	);
};

export default TypeChart;
