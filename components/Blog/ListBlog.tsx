import React from 'react'
import { Col,Row,Image,Spinner } from 'react-bootstrap';
import Link from 'next/link';
import axiosClient from '../../api-client/axiosClient';
import { Blog } from './../../interfaces/blog';
import Pagination from 'react-bootstrap/Pagination'
import { blogApi } from 'api-client/blogApi';
import moment from 'moment';

interface Props {

}
interface Page{
	page: number;
	per_page: number;
    last_page: any;
    sort_by: string;
    sort_type: string;
    total: number;
}

export const ListBlog = (props: Props) => {
    const [Blog, setBlog] = React.useState<Blog[]>([]);
    const [page, setPage] = React.useState<Page>();
    const [category, setCategory] =  React.useState<any>();
    const [employee, setemployee] = React.useState<any>();
	const [BlogLoading, setBlogLoading] = React.useState(false);
    const [filter,setFilter] = React.useState<any>({
        page: 1, 
        per_page: 10,
        sort_type: "desc",
        sort_by: "created_at",
        last_page: 1
    });
    React.useEffect(() => {
		(async () => {
          setBlogLoading(true);
			try {
				const response = await blogApi.getblog(filter);
                const category_rp = await blogApi.getCategory();
                const employee = await blogApi.getEmployee();
                setCategory(category_rp.data);
                setemployee(employee.data);
                setBlog(response.data as Blog[]);  
                setPage(response.pagination as Page);
                console.log(response);
			} catch (error) {
				console.error('Failed to get blog playing: ', error);
			}
           setBlogLoading(false);
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filter]);
    const items = [];
    const handelPageChange = (number: Number) =>{
        const newFilter = {
            ...filter,
            page: number,
        }
       setFilter(newFilter);
    }
    const active = page?.page;
    for (let number = 1; number <= page?.last_page; number++) {
        items.push(
            <Pagination.Item key={number} active={number == active} onClick={()=>handelPageChange(number)}>
            {number}
            </Pagination.Item>,
        );
    }
    
    return (
       	<>
           {BlogLoading ? (
               <Spinner animation="border" variant="primary" />
           ):(
               <>
               {Blog && Blog.map((val,i)=> (
                    <Row className="List_blog" key={i}>
                         
                        <Col className="image" md={4}>
                        <Image src={val.files.length == 0 ? 
                            "https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725184-stock-illustration-image-available-icon-flat-vector.jpg"
                            :val.files[0]?.url } alt="error" />
                        </Col>
                        <Col className="content">
                            <p className="content_category">{category.filter((e: any)=> e.id == val.category_id).map((val: any)=>(
                                    <>
                                    {val.name}
                                    </>
                            ))}<span className="content_title__date"> - {moment(new Date(val.date)).fromNow()}</span></p>
                            <h4 className="content_title"><Link href={`bai-viet/${val.id}`} >{val.title}</Link></h4>
                            <p>{val.summary}</p>
                            <Row className="userWrite">
                                <Image src={val.avatar ?? 'https://www.themoviedb.org/t/p/original/bZnOioDq1ldaxKfUoj3DenHU7mp.jpg'} alt="error" className="userWrite_Img" roundedCircle />
                                <p className="author">
                                <span className="author_name">{employee.filter((e: any)=> e.id == val.employee_id).map((val: any)=>(
                                    <>
                                    {val.fullname}
                                    </>
                                ))}</span>
                                </p>
                            </Row>
                        </Col>
                    </Row>
                 ))} 
                 <Pagination className="d-flex justify-content-center">{items}</Pagination>
               </>
           )}
        </>
    )

}