import axiosClient from 'api-client/axiosClient';
import React from 'react';
import useSWR from 'swr';

interface Props {
	customerId: number;
}

export const CustomerDetail = ({ customerId }: Props) => {
	// const {} = useSWR('update customer', () => axiosClient.post(`/customers/${customerId}`));

	const { data, error, mutate, isValidating } = useSWR(`customers/${customerId}`);
	console.log(`data`, data);
	return <div>Name: {data?.fullname || '--'}</div>;
};
