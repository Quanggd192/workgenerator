import React, { Component } from 'react'
import SlideBar from '../../user_components/common/SlideBar'
import styled from 'styled-components'

const Container = styled.div`
    width: 85%;
    margin: auto;
    background: #fff;
    border-radius: 5px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`
const Header = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    min-height: 170px;
    border-bottom: solid 1px #e3e3e3;
`
const SmallCol = styled.div`
    width: 18%;
    text-align: center;
`
const BigCol = styled.div`
    width: 64%;
`
const JobTit = styled.div`
    font-size: 22px;
    line-height: 50px;
    font-weight: 600;
    color: #0ba25e;
    text-transform: uppercase;
`
const CompanyName = styled.div`
    color: #222;
    line-height: 30px;
    text-transform: uppercase;
`
const Address = styled.div`
    color: #555;
`
const ApllyBtn = styled.button`
    color: #fff;
    background: #0ba25e;
    border-radius: 5px;
    height: 40px;
    border: none;
    width: 140px;
    text-transform: uppercase;
    font-weight: 500;
`
const DescriptionCol = styled.div`
    width: 60%;
    padding: 40px 0 80px 40px;
`
const InfoCol = styled.div`
    width: 40%;
`
const TitleLine = styled.div`
    font-size: 18px;
    font-weight: bold;
    padding: 30px 0 30px 0;
    text-transform: uppercase;
`

const CompactBlock = styled.div`
    width: 75%;
    margin: auto;
    margin-top: 40px;
    border: solid 1px #e3e3e3;
    border-radius: 3px;
    min-height: 300px;
    color: #444;
`
const BlockHeader = styled.div`
    background: #212f3f;
    color: #fff;
    text-transform: uppercase;
    font-size: 17px;
    /* border-radius: 3px; */
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
`
const JobInfoItem = styled.div`
    width: 94%;
    margin: auto;
    display: flex;
    border-bottom: solid 1px #e3e3e3;
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
`
const RelevantJobItem = styled.div`
    width: 94%;
    margin: auto;
    display: flex;
    border-bottom: solid 1px #e3e3e3;
    height: 70px;
    line-height: 50px;
    padding-left: 20px;
`
const ItemTitle = styled.span`
    font-weight: 600;
`
export default class JobDetail extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <SmallCol>
                        <img alt="" style={{
                            width: 100,
                            height: 100
                        }} src="https://img.icons8.com/bubbles/2x/google-logo.png"/>
                    </SmallCol>
                    <BigCol>
                        <JobTit>Chủ tịch giả vờ và cái kết</JobTit>
                        <CompanyName>Google national Company</CompanyName>
                        <Address>Valley Silicon</Address>
                    </BigCol>
                    <SmallCol>
                        <ApllyBtn>Apply for job</ApllyBtn>
                    </SmallCol>
                </Header>
                <div style={{display: "flex"}}>
                    <DescriptionCol>
                    MÔ TẢ CÔNG VIỆC
                        - Làm việc tại Văn phòng Công ty

                        - Tiếp nhận điện thoại khách hàng, giải đáp thắc mắc cho khách hàng khi cần.

                        - Tư vấn, giới thiệu sản phẩm của Công ty tới khách hàng.

                        - Chăm sóc khách hàng sau ký kết hợp đồng.

                        - Một số công việc khác theo yêu cầu của BGĐ.

                        - Chi tiết công việc sẽ được trao đổi cụ thể tại buổi phỏng vấn.

                        YÊU CẦU ỨNG VIÊN
                        - Nam / Nữ tuổi từ 18 – 28.

                        - Chưa có kinh nghiệm, sẽ được đào tạo.

                        - Năng động, trung thực, ham học hỏi, cầu tiến.

                        - Làm việc có trách nhiệm công việc.

                        - Tự tin trong giao tiếp, có khả năng làm việc độc lập hoặc nhóm.

                        - Chấp nhận sinh viên đang thực tập và sinh viên mới ra trường.

                        QUYỀN LỢI ĐƯỢC HƯỞNG
                        - Mức lương: 7-8,5 triệu / tháng+ hoa hồng 20-60 triệu / 1 giao dịch. Ngoài ra còn có thưởng theo hiệu quả công việc.

                        - Thưởng nóng khi có giao dịch.

                        - Được hỗ trợ đăng tin trên trang web Công ty.

                        - Được đào tạo kiến thức về các sản phẩm dự án.

                        - Được đào tạo các kỹ năng mềm: kỹ năng giao tiếp, chăm sóc KH..

                        - Cơ hội thăng tiến trong công việc.

                        - Được tham gia các chương trình tổng kết hàng tháng, quí, năm.

                        - Được tham gia hoạt động ngoại khóa, nghỉ mát, du lịch trong năm.(3lần / năm).

                        - Hưởng các chính sách phúc lợi xã hội và BHXH, BHYT theo quy định nhà nước
                        
                        
                        <TitleLine>Apply for this job</TitleLine>
                        <div>Hit the button below to apply for this job</div>
                        <div style={{textAlign: "center", paddingTop: 40}}>
                            <ApllyBtn>Apply for job</ApllyBtn><br/><br/>
                            The deadline for submission: 15/12/2019
                        </div>
                        <div style={{
                            width: "80%",
                            margin: "auto",
                            textAlign: "center",
                            padding: "30px 0 0 30px",
                            color: "#777"
                        }}>
                            Tin được đăng bởi Lê Khánh Hòa - Ban tuyển dụng Viện thiết kế - Bộ Quốc Phòng (Công ty TNHH MTV Tư vấn thiết kế và Đầu tư xây dựng - Bộ Quốc phòng)
                        </div>
                        <hr/>
                    </DescriptionCol>
                    <InfoCol>
                        <CompactBlock>
                            <BlockHeader>Info about Job</BlockHeader>
                                <JobInfoItem>
                                    <ItemTitle>Salary: </ItemTitle>
                                    <span> &nbsp;&nbsp;10.000 - 20.000 $</span>
                                </JobInfoItem>
                                <JobInfoItem>
                                    <ItemTitle>Form of work: </ItemTitle>
                                    <span> &nbsp;&nbsp;Full time</span>
                                </JobInfoItem>        
                                <JobInfoItem>
                                    <ItemTitle>Position:</ItemTitle>
                                    <span>&nbsp;&nbsp;Chairman pretend and the end</span>
                                </JobInfoItem>
                                <JobInfoItem>
                                    <ItemTitle>Experience request:</ItemTitle>
                                    <span>&nbsp;&nbsp;none</span>
                                </JobInfoItem>    
                                <JobInfoItem>
                                    <ItemTitle>Gender request:</ItemTitle>
                                    <span>&nbsp;&nbsp;none</span>
                                </JobInfoItem>    
                                <JobInfoItem style={{ borderBottom: "none"}}>
                                    <ItemTitle>Place:</ItemTitle>
                                    <span>&nbsp;&nbsp;Silicon Valley</span>
                                </JobInfoItem>
                        </CompactBlock>

                        <CompactBlock>
                            <BlockHeader>Relevant Jobs</BlockHeader>
                            <RelevantJobItem></RelevantJobItem>
                            <RelevantJobItem></RelevantJobItem>
                            <RelevantJobItem></RelevantJobItem>
                            <RelevantJobItem></RelevantJobItem>
                            <RelevantJobItem></RelevantJobItem>
                        </CompactBlock>
                    </InfoCol>
                </div>
            </Container>
        )
    }
}
