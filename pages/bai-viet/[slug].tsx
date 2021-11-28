import { useRouter } from 'next/router';
import { Card, Col, Container, Row, Spinner,Image } from 'react-bootstrap';
import React from 'react';
import Link from 'next/link';
import{ PageTitle } from 'components';
const Blog = () => {
	const router = useRouter();
	const { slug } = router.query;
	// const [movie, setMovie] = React.useState<Movie>();
	// const [movieLoading, setMovieLoading] = React.useState(false);

	// React.useEffect(() => {
	// 	if (slug) {
	// 		(async () => {
	// 			setMovieLoading(true);
	// 			try {
	// 				const response: any = await movieApi.getById(slug);
	// 				setMovie(response as Movie);
	// 			} catch (error) {
	// 				console.error('Failed to get movies playing: ', error);
	// 			}
	// 			setMovieLoading(false);
	// 		})();
	// 	}
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, []);

	return (
    <>
     
        <Container>
            <Row className="Blog_detail justify-content-md-center">
             <Col className="profile" md={2}>
			    <Image className="profile_avatar" src="https://preview.colorlib.com/theme/magdesign/images/ximg_2.jpg.pagespeed.ic.fbbBEgB1Q6.webp" alt="error" roundedCircle />
				<p className="profile_name">Sergy Campbell</p>
				<p className="profile_dateSend">JULY 2, 2020</p>
			 </Col>
            </Row>
			<Row className="mb-5">
				<Col className="blog">
				  <h2 className="blog_title">Your most unhappy customers are your greatest source of learning.</h2>
				  <p className="blog_summary">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
				  <Image src="https://preview.colorlib.com/theme/magdesign/images/ximg_2.jpg.pagespeed.ic.fbbBEgB1Q6.webp" />
				  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
				  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
				  <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
				  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
				  <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
					<Image src="https://preview.colorlib.com/theme/magdesign/images/post_lg_1.jpg.webp" width="300" />
					<Image src="https://preview.colorlib.com/theme/magdesign/images/post_lg_2.jpg.webp" width="300" />
					<Image src="https://preview.colorlib.com/theme/magdesign/images/post_lg_3.jpg.webp" width="300"  />
					<Image src="https://preview.colorlib.com/theme/magdesign/images/post_lg_4.jpg.webp" width="300" />
					<Image src="https://preview.colorlib.com/theme/magdesign/images/post_lg_1.jpg.webp" width="300" />
					<Image src="https://preview.colorlib.com/theme/magdesign/images/post_lg_2.jpg.webp" width="300" />
				  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
				  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
				</Col>
			</Row>
		   <PageTitle title="Bài viết xem nhiều" />
		   <Row className="List_blog mt-5">
            <Col className="image" md={4}>
            <Image src="https://preview.colorlib.com/theme/magdesign/images/ximg_2.jpg.pagespeed.ic.fbbBEgB1Q6.webp" alt="error" />
            </Col>
            <Col className="content">
                <p className="content_category">Travel<span className="content_title__date"> - July 2, 2020</span></p>
               <h4 className="content_title"><Link href="/bai-viet/1" >Your most unhappy customers are your greatest source of learning.</Link></h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <Row className="userWrite">
                    <Image src="https://preview.colorlib.com/theme/magdesign/images/xperson_1.jpg.pagespeed.ic.Zebptmx_f8.webp" alt="error" className="userWrite_Img" roundedCircle />
                    <p className="author">
                    <span className="author_name">Long</span>
                    <span className="author_total">tác giả, 26 bài viết</span>
                    </p>
                </Row>
            </Col>
        </Row>
        </Container>
    </>	
	);
};

export async function getServerSideProps() {
	return {
		props: {},
	};
}
export default Blog;
