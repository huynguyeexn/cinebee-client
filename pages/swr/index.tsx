import React from 'react';
import { CustomerDetail } from './CustomerDetail';

const SWRPage = () => {
	return (
		<div>
			SWR Page
			<ul>
				<li>
					<CustomerDetail customerId={10000} />
				</li>
				<li>
					<CustomerDetail customerId={10000} />
				</li>
				<li>
					<CustomerDetail customerId={10000} />
				</li>
			</ul>
		</div>
	);
};

export default SWRPage;
