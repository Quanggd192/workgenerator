import React, { Component } from 'react'

class ContactUs extends Component {
    render(){

        const containerStyle = {
            minHeight: 500,
            background: `#fff`,
            width: `90vw`,
            margin: `auto`,
            padding: `40px 0 0 30px`,
            paddingBottom: 40
        }
        const bigTitStyle = { fontSize: 30, paddingBottom: 10 }
        const titleStyle = {fontSize: 20, padding: `10px 0 10px 0`}

        const addressContent = <p>
            60 Nguyễn Văn Thủ, Ward Đa Kao, District 1, Ho Chi Minh City, Việt Nam
        </p>

        const forEmployersContent = <p>
            <ul style={{listStyleType: `disc`}}>
                <li>Call our Sales Hotline: 
                    <ul style={{listStyleType: `circle`, paddingLeft: 10}}>
                        <li>HCM: +84 977 460 519 </li>
                        <li>Hà Nội: +84 964 618 859</li>
                    </ul>
                </li>
                <li>Request a call from one of our Customer Love Account Managers</li>
            </ul>
        </p>

        const forJobSeekersContent = <p>
            <ul style={{listStyleType: `disc`}}>
                <li>Use our form to give us feedback and get a response</li>
                <li>Ask a question on our Facebook page</li>
                <li>Read our blog posts on interview and CV tips</li>
                <li>Email us at getjob@itviec.com</li>
                <li>Call us at +84 28 6681 1397</li>
            </ul>
            Connect with us on social media
        </p>

        return(
            <div style={containerStyle}>
                <div style={bigTitStyle}>Contact Us</div>

                <div style={titleStyle}>Our headquarters address</div>
                <div>{addressContent}</div>

                <div style={titleStyle}>For employers</div>
                <div>
                    {forEmployersContent}
                </div>

                <div style={titleStyle}>jobseekers</div>
                <div>{forJobSeekersContent}</div>
            </div>
        )
    }
}
export default ContactUs