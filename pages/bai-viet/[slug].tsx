import { useRouter } from 'next/router';
import { Card, Col, Container, Row, Spinner,Image } from 'react-bootstrap';
import { Blog } from './../../interfaces/blog';
import React from 'react';
import Link from 'next/link';
import{ PageTitle } from 'components';
import { blogApi } from 'api-client/blogApi';
import moment from 'moment';
interface Page{
	page: number;
	per_page: number;
    last_page: any;
    sort_by: string;
    sort_type: string;
    total: number;
}


const BlogDetail = () => {
	const router = useRouter();
	const { slug } = router.query;
	const [Blog, setBlog] = React.useState<Blog>();
	const [Blogview, setBlogview] = React.useState<Blog[]>([]);
    const [category, setCategory] =  React.useState<any>();
    const [employee, setemployee] = React.useState<any>();
	const [BlogLoading, setBlogLoading] = React.useState(false);
	const [page, setPage] = React.useState<Page>();
	const [filter,setFilter] = React.useState<any>({
        page: 1, 
        per_page: 4,
        sort_type: "desc",
        sort_by: "views",
        last_page: 1
    });
	React.useEffect(() => {
		(async () => {
          setBlogLoading(true);
			try {
				const response = await blogApi.getBLogById(Number(slug));
				const blogview = await blogApi.getblog(filter);
                const category_rp = await blogApi.getCategory();
                const employee = await blogApi.getEmployee();
                setemployee(employee.data);
				setCategory(category_rp.data);
				setBlogview(blogview.data as Blog[]);
                setBlog(response as unknown as Blog);  
			} catch (error) {
				console.error('Failed to get blog playing: ', error);
			}
           setBlogLoading(false);
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
    console.log(Blog);
	return (
    <>
       {BlogLoading ? (
               <Spinner animation="border" variant="primary" />
           ):(
        <Container>
            <Row className="Blog_detail justify-content-md-center">
             <Col className="profile" md={2}>
			    <Image className="profile_avatar" src="https://www.themoviedb.org/t/p/original/bZnOioDq1ldaxKfUoj3DenHU7mp.jpg" alt="error" roundedCircle />
				<p className="profile_name">{employee && employee.filter((e: any)=> e.id == Blog?.employee_id).map((val:any)=>(
                                    <>
                                    {val.fullname}
                                    </>
                    ))}</p>
				<p className="profile_dateSend"> {moment(new Date(Blog?.date)).format('ll')}</p>
			 </Col>
            </Row>
			<Row className="mb-5">
				<Col className="blog" >
				   <h2 className="blog_title">{Blog?.title}</h2>
				   <p className="blog_summary">{Blog?.summary}</p>
				   <Col dangerouslySetInnerHTML={{__html: `${Blog?.content}` }}></Col>
				</Col>
			</Row>
		   <PageTitle title="Bài viết xem nhiều" />
		   {Blogview && Blogview.map((val,i)=> (
                    <Row className="List_blog mt-5" key={i}>
                         
                        <Col className="image" md={4}>
                        <Image src={val.img ?? "https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725184-stock-illustration-image-available-icon-flat-vector.jpg"} alt="error" />
                        </Col>
                        <Col className="content">
                            <p className="content_category">{category && category.filter((e: any)=> e.id == val.category_id).map((val: any)=>(
                                    <>
                                    {val.name}
                                    </>
                            ))}<span className="content_title__date"> - {moment(new Date(val.date)).fromNow()}</span></p>
                            <h4 className="content_title"><Link href={`bai-viet/${val.id}`} >{val.title}</Link></h4>
                            <p>{val.summary}</p>
                            <Row className="userWrite">
                                <Image src={val.avatar ?? 'https://www.themoviedb.org/t/p/original/bZnOioDq1ldaxKfUoj3DenHU7mp.jpg'} alt="error" className="userWrite_Img" roundedCircle />
                                <p className="author">
                                <span className="author_name">{employee && employee.filter((e: any)=> e.id == val.employee_id).map((val: any)=>(
                                    <>
                                    {val.fullname}
                                    </>
                                ))}</span>
                                </p>
                            </Row>
                        </Col>
                    </Row>
                 ))} 
        </Container>
		)}
        </>	
	);
};

export async function getServerSideProps() {
	return {
		props: {},
	};
}
export default BlogDetail;
