import React from 'react'
import { Col,Row,Image } from 'react-bootstrap';
import Link from 'next/link';
import axiosClient from '../../api-client/axiosClient';
import { Blog } from './../../interfaces/blog';
import Pagination from 'react-bootstrap/Pagination'
import { blogApi } from 'api-client/blogApi';

interface Props {

}
export const ListBlog = (props: Props) => {
    const filter = {
        page: 1, 
        perPage: 10
    }
    const begin = (filter.page - 1) * filter.perPage;
    const end = filter.page * filter.perPage;
    React.useEffect(() => {
		(async () => {
			try {
				const response = await blogApi.getblog();
			} catch (error) {
				console.error('Failed to get movies playing: ', error);
			}
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
    const Blog = [
        {
            "id": 1,
            "category": "Điện ảnh",
            "title": "Review phim Titane: con người sắt thép ở thời đại mới",
            "summary": "Hawkeye là luồng gió mới, tạo cảm giác dễ chịu giữa lúc MCU đang xây dựng quá nhiều câu chuyện phức tạp.",
            "date": "2021-11-20",
            "img": "https://chi-blog.com/wp-content/uploads/2021/11/titane_chi_blog.jpg",
            "avatar": "https://vaithuhayho.com/wp-content/uploads/2021/03/anh-avatar-dep-20.jpeg",
            "user_name": "long",
            "total": 26
        },
        {
            "id": 2,
            "category": "Điện ảnh",
            "title": "Review phim Nine Days: ta sống trong những thế giới song song",
            "summary": "Nine Days (2021) là phim giả tưởng – siêu thực, bài viết chỉ dành cho những ai yêu thích nghệ thuật và tâm lý, hoặc muốn chiêm nghiệm về giá trị của cuộc sống. Tôi đang tự hỏi là có nên bỏ từ “siêu thực” khỏi các lời giới thiệu…",
            "date": "2021-11-20",
            "img": "https://chi-blog.com/wp-content/uploads/2021/11/nine_days_chi_blog.jpg",
            "avatar": "https://vaithuhayho.com/wp-content/uploads/2021/03/anh-avatar-dep-20.jpeg",
            "user_name": "long",
            "total": 25
        },
        {
            "id": 3,
            "category": "Điện ảnh",
            "title": "Review phim Finch: cửa giữa không còn, nhưng đừng bỏ cuộc",
            "summary": "Finch (2021) là phim về hậu tận thế, đầu bài đùa chút, sau này điện ảnh Việt hòa vào dòng chảy quốc tế thì đừng quên Chí Blog vì sự phát hiện “vĩ đại” về “bộ 2” và “bộ 3” và “tương phản” và “điệp gia” … ",
            "date": "2021-11-20",
            "img": "https://chi-blog.com/wp-content/uploads/2021/11/Finch_chi_blog.jpg",
            "avatar": "https://vaithuhayho.com/wp-content/uploads/2021/03/anh-avatar-dep-20.jpeg",
            "user_name": "long",
            "total": 26
        },
        {
            "id": 4,
            "category": "Điện ảnh",
            "title": "Review phim Squid Game: thức ăn của con mực hệ thống",
            "summary": "Squid Game (series – 2021), nhiều người đã bàn luận về phim này, nhưng Chí Blog sẽ phân tích phim ở cấp độ sâu hơn, để cho bạn đọc thấy nền điện ảnh Hàn đã tiến đến mức nào so với phương tây, và từ đó hiểu tại sao phim…",
            "date": "2021-11-20",
            "img": "https://chi-blog.com/wp-content/uploads/2021/11/titane_chi_blog.jpg",
            "avatar": "https://vaithuhayho.com/wp-content/uploads/2021/03/anh-avatar-dep-20.jpeg",
            "user_name": "long",
            "total": 26
        },
        {
            "id": 5,
            "category": "Điện ảnh",
            "title": "Review phim Red Notice: trò đùa dai của điện ảnh Mỹ",
            "summary": "Red Notice (2021) là phim hành động thuộc loại “thức ăn nhanh”, giải trí tốt, Chí Blog thường không viết bài cho thể loại phim nhảm kiểu này, nhưng tại sao tôi lại viết bài? Để cho bạn đọc hiểu mặc dù điện ảnh Mỹ đổ nhiều tiền để sản…",
            "date": "2021-11-20",
            "img": "https://chi-blog.com/wp-content/uploads/2021/11/titane_chi_blog.jpg",
            "avatar": "https://vaithuhayho.com/wp-content/uploads/2021/03/anh-avatar-dep-20.jpeg",
            "user_name": "long",
            "total": 26
        },
        {
            "id":6,
            "category": "Điện ảnh",
            "title": "Free Guy: Cốt truyện tuyệt vời về thế giới điện tử",
            "summary": "FREE GUY cực kỳ vui nhộn, quyến rũ thú vị và ngọt ngào đến không ngờ. Trong phim này, Ryan Reynolds với diễn xuất hoàn hảo",
            "date": "2021-11-20",
            "img": "https://static1.dienanh.net/upload/202108/2x1_c3ef846b-60aa-4c94-ae3f-a9a765d67abf.jpg",
            "avatar": "https://vaithuhayho.com/wp-content/uploads/2021/03/anh-avatar-dep-20.jpeg",
            "user_name": "long",
            "total": 26
        },
        {
            "id": 7,
            "category": "Điện ảnh",
            "title": "Review Hawkeye: Cặp chính diễn thực sự ăn ý, phim đơn giản và dễ chịu",
            "summary": "Hawkeye là luồng gió mới, tạo cảm giác dễ chịu giữa lúc MCU đang xây dựng quá nhiều câu chuyện phức tạp.",
            "date": "2021-11-20",
            "img": "https://static1.dienanh.net/upload/202111/2x1_a96e7f8a-d3f9-4d1a-aeff-bd8f03b31840.jpg",
            "avatar": "https://vaithuhayho.com/wp-content/uploads/2021/03/anh-avatar-dep-20.jpeg",
            "user_name": "long",
            "total": 26
        },
        {
            "id": 8,
            "category": "Điện ảnh",
            "title": "3 lý do giúp Hellbound thành công: Đề tài kinh dị, tranh cãi nhưng hay",
            "summary": "Không phải không có lý do mà chỉ trong vòng 24 giờ, Hellbound đã nằm trên top 1 Netflix. Đây là 3 lý do khiến bạn không nên bỏ lỡ bom tấn này của Yoo Ah In.",
            "date": "2021-11-20",
            "img": "https://static1.dienanh.net/upload/202111/2x1_d3ebfcda-b659-44b6-8c69-a1741059b75c.jpg",
            "avatar": "https://vaithuhayho.com/wp-content/uploads/2021/03/anh-avatar-dep-20.jpeg",
            "user_name": "long",
            "total": 26
        },
        {
            "id": 9,
            "category": "Điện ảnh",
            "title": "5 bộ phim lên sóng năm 2021 có rating cao mà không cần sao khủng",
            "summary": "Trong số 5 bộ phim này thì Nữ Thanh Tra Tài Ba của Honey Lee chính là tác phẩm gây nên nhiều bất ngờ nhất, khi có được chỉ số rating đáng ngưỡng mộ. ",
            "date": "2021-11-20",
            "img": "https://static1.dienanh.net/upload/202111/2x1_15d4d8f8-fa21-4600-b302-a11b3ee5a28a.jpg",
            "avatar": "https://vaithuhayho.com/wp-content/uploads/2021/03/anh-avatar-dep-20.jpeg",
            "user_name": "long",
            "total": 26
        },
        {
            "id": 10,
            "category": "Điện ảnh",
            "title": "Cbiz hôm nay: Dương Tử bị chê giống Cúc Tịnh Y; Hộc Châu gay cấn",
            "summary": "Ai cũng tưởng Hải Thị (Dương Mịch) bỏ nhà đi bụi vì Phương Chư (Trần Vỹ Đình) thành thân với người khác, nhưng sự thật có lẽ không phải như vậy.",
            "date": "2021-11-20",
            "img": "https://static1.dienanh.net/upload/202111/2x1_1cb44e46-d8c6-4abd-838d-ab956ba6e2e5.jpg",
            "avatar": "https://vaithuhayho.com/wp-content/uploads/2021/03/anh-avatar-dep-20.jpeg",
            "user_name": "long",
            "total": 26
        },
        {
            "id": 11,
            "category": "Điện ảnh",
            "title": "Chị Mười Ba và loạt phim Việt Nam về xã hội đen, giang hồ hay nhất",
            "summary": "Những bộ phim về giang hồ, xã hội đen Việt Nam trong những năm gần đây bỗng trở thành đề tài hot và thu hút được số lượng lớn khán giả theo dõi. ",
            "date": "2021-11-20",
            "img": "https://static1.dienanh.net/upload/202111/2x1_f3c7fe27-5309-457c-946b-0c1d2ddca04f.jpg",
            "avatar": "https://vaithuhayho.com/wp-content/uploads/2021/03/anh-avatar-dep-20.jpeg",
            "user_name": "long",
            "total": 26
        },
        {
            "id": 12,
            "category": "Điện ảnh",
            "title": "Mặt Nạ Gương: Giả thuyết Khải là đồng lõa với Horus",
            "summary": "Những hành động quá trùng hợp khi Hoa bị giật túi xách làm mình đặt ra nghi vấn liệu Khải thực sự có liên quan đến Horus?",
            "date": "2021-11-20",
            "img": "https://static1.dienanh.net/upload/202111/2x1_d2a77daa-1764-4467-8d44-2684e650769e.jpg",
            "avatar": "https://vaithuhayho.com/wp-content/uploads/2021/03/anh-avatar-dep-20.jpeg",
            "user_name": "long",
            "total": 26
        },
        {
            "id": 13,
            "category": "Điện ảnh",
            "title": "Rating phim Hàn ngày 25/11: School 2021 và Melancholia cùng 'chạm đáy'",
            "summary": "Cả School 2021 và Melancholia đều có kết quả rating đáng buồn, tôi không nghĩ là lại có thể giảm sâu đến vậy.",
            "date": "2021-11-20",
            "img": "https://static1.dienanh.net/upload/202111/2x1_b5465546-affc-4908-a455-46719c520925.jpg",
            "avatar": "https://vaithuhayho.com/wp-content/uploads/2021/03/anh-avatar-dep-20.jpeg",
            "user_name": "long",
            "total": 26
        },
        {
            "id": 14,
            "category": "Điện ảnh",
            "title": "Top 10 phim luân hồi chuyển kiếp hay nhất gây bão màn ảnh Châu Á",
            "summary": "Với trí tưởng tượng “bay cao bay xa” của biên kịch, những bộ phim về luân hồi chuyển kiếp luôn là đề tài để lại dấu ấn sâu đậm trong tim khán giả.",
            "date": "2021-11-20",
            "img": "https://static1.dienanh.net/upload/202111/2x1_1afbc262-36c4-452d-bf4a-5c55d8178cc3.jpg",
            "avatar": "https://vaithuhayho.com/wp-content/uploads/2021/03/anh-avatar-dep-20.jpeg",
            "user_name": "long",
            "total": 26
        },
        {
            "id": 15,
            "category": "Điện ảnh",
            "title": "Top 6 phim Việt Nam về thời sinh viên sống mãi với thời gian",
            "summary": "Ngoài Cổng Mặt Trời, đây là những bộ phim truyền hình Việt Nam về sinh viên nhận được rất nhiều sự yêu thích của khán giả màn ảnh nhỏ.",
            "date": "2021-11-20",
            "img": "https://static1.dienanh.net/upload/202111/2x1_914c57a5-e8e5-4035-964f-7d03b7822caf.jpg",
            "avatar": "https://vaithuhayho.com/wp-content/uploads/2021/03/anh-avatar-dep-20.jpeg",
            "user_name": "long",
            "total": 26
        },
        {
            "id": 16,
            "category": "Điện ảnh",
            "title": "Last Night in Soho: Phim kinh dị đầy thú vị mang hơi thở thập niên 60",
            "summary": "Edgar Wright, Anya Taylor-Joy và Thomasin McKenzie đã tái tạo thành công một London hào nhoáng nhưng độc hại trong phim kinh dị Last Night in Soho.",
            "date": "2021-11-20",
            "img": "https://static1.dienanh.net/upload/202111/2x1_e1538796-ba32-4370-82e9-3dab15865677.jpg",
            "avatar": "https://vaithuhayho.com/wp-content/uploads/2021/03/anh-avatar-dep-20.jpeg",
            "user_name": "long",
            "total": 26
        },
        {
            "id": 17,
            "category": "Điện ảnh",
            "title": "Cowboy Bebop: Bản live-action chơi vơi của Netflix từ anime nổi tiếng",
            "summary": "Netflix mới ra mắt bộ phim Cowboy Bebop được chuyển thể dưới dạng live-action từ tác phẩm cùng tên nổi tiếng năm 1990 - một tác phẩm kinh điển của Nhật Bản. ",
            "date": "2021-11-20",
            "img": "https://static1.dienanh.net/upload/202111/2x1_29d9a78e-e98f-4ed0-b3c4-7e981db5d774.jpg",
            "avatar": "https://vaithuhayho.com/wp-content/uploads/2021/03/anh-avatar-dep-20.jpeg",
            "user_name": "long",
            "total": 26
        },
        {
            "id": 18,
            "category": "Điện ảnh",
            "title": "Resident Evil: Quỷ Dữ Trỗi Dậy: Cốt truyện thú vị, nhân vật thì không",
            "summary": "Dù thích hay không thì chúng ta cũng phải thừa nhận kỷ nguyên mới cho các bộ phim trong vũ trụ Resident Evil (Quỷ Dữ Trỗi Dậy) đã đến.",
            "date": "2021-11-20",
            "img": "https://static1.dienanh.net/upload/202111/2x1_b7dc4346-e2d6-436d-b6ea-e8fc87844efb.jpg",
            "avatar": "https://vaithuhayho.com/wp-content/uploads/2021/03/anh-avatar-dep-20.jpeg",
            "user_name": "long",
            "total": 26
        },
        {
            "id": 19,
            "category": "Điện ảnh",
            "title": "The Guilty: Jake Gyllenhaal điên hơn trong bom tấn giật gân",
            "summary": "The Guilty của Jake Gyllenhaal xoay quanh câu chuyện của một tổng đài viên đã thu hút được nhiều sự chú ý từ khán giả.",
            "date": "2021-11-20",
            "img": "https://static1.dienanh.net/upload/202110/2x1_d31a30c5-d9d7-453d-ae81-08dca6446417.jpg",
            "avatar": "https://vaithuhayho.com/wp-content/uploads/2021/03/anh-avatar-dep-20.jpeg",
            "user_name": "long",
            "total": 26
        },
        {
            "id": 20,
            "category": "Điện ảnh",
            "title": "Cạch, Cạch … Bùm!: Câu chuyện đầy cảm hứng của Andrew Garfield",
            "summary": "Là câu chuyện kể về thời trẻ của Jonathan Larson, Tick, tick… Boom! (Cạch, Cạch … Bùm!) do Andrew Garfield đóng chính mang lại sự bùng nổ trên Netflix.",
            "date": "2021-11-20",
            "img": "https://static1.dienanh.net/upload/202111/2x1_3127c801-ceeb-4d29-98d1-ab62d53c82ea.jpg",
            "avatar": "https://vaithuhayho.com/wp-content/uploads/2021/03/anh-avatar-dep-20.jpeg",
            "user_name": "long",
            "total": 26
        }
    ];
    const handleChangePage = () => {

    }
    let active = filter.page;
    let items = [];
    let limit = Math.ceil(Blog.length / filter.perPage);
    for (let number = 1; number <= limit; number++) {
    items.push(
        <Pagination.Item className="pageItem" key={number} active={number === active} onClick={()=>handleChangePage}>
        {number}
        </Pagination.Item>,
    );
    }
    return (
        <>
       {Blog.slice(begin,end).map((val,i)=>(
           <>
          <Row className="List_blog">
            <Col className="image" md={4}>
            <Image src={val.img} alt="error" />
            </Col>
            <Col className="content">
                <p className="content_category">{val.category}<span className="content_title__date"> - {val.date}</span></p>
                <h4 className="content_title"><Link href="/bai-viet/1" >{val.title}</Link></h4>
                <p>{val.summary}</p>
                <Row className="userWrite">
                    <Image src={val.avatar} alt="error" className="userWrite_Img" roundedCircle />
                    <p className="author">
                    <span className="author_name">{val.user_name}</span>
                    <span className="author_total">Tác giả, {val.total} bài viết</span>
                    </p>
                </Row>
            </Col>
          </Row>
          </>
       ))} 
      <Pagination className="d-flex justify-content-center">{items}</Pagination>
      
      {/* <Row className="List_blog">
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
        </Row> */}
        </>
    );

}