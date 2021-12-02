import { useRouter } from 'next/router';
import React from 'react';

const ShowtimeIndexPage = () => {
	const router = useRouter();
	const { showtime } = router.query;

    // Is Client Side
    if(typeof window !== 'undefined') {
        if(!showtime){
            router.push('/');
        }else{
            router.push(`/${showtime}/chon-ghe`);
        }
    }
    return <div></div>
};

export async function getServerSideProps() {
	return {
		props: {},
	};
}

export default ShowtimeIndexPage;
