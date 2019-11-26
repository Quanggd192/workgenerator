import React, { Component } from 'react'

class AboutUs extends Component {
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
        // text content
        const generalIntroduceContent = <p>We help great developers like you grow your career. We do this by featuring the best IT jobs. We also have lots of content and resources on our blog to help you grow.
        <br/> The best IT companies in Vietnam choose Work Generator to recruit the best IT candidates. </p>
        const whatMakeUsDiffirentContent = <p>
            ITviec is the only job site in Vietnam to:
            <ul style={{listStyleType: `circle`}}>
                <li>Focus only on IT jobs<br/>
                    We designed our site exclusively for the needs and interests of IT jobseekers.</li>
                <li>
                    Screen candidates<br/>
                    Employers receive CVs only from experienced developers.
                </li>
                <li>
                    Provide company reviews<br/>
                    Jobseekers can see what it’s like to work inside a company before they apply.
                </li>
            </ul>
        </p>

        const doYouNeedContent = <p>
            Request a call from one of our Customer Love Account Managers.
        </p>

        const outDetailContent = <p>
            Name: Work Generator Joint Stock Company <br/>
            Registered office: 60 Nguyễn Văn Thủ, Ward Đa Kao, District 1, Ho Chi Minh City, Việt Nam <br/>
            Tax code: 0312192258
        </p>

        const wantToKnowMoreContent = <p>
            Visit our Press Page or meet our people!
        </p>
        return(
            <div style={containerStyle}>
                <div style={bigTitStyle}>About Us</div>
                <div>
                    {generalIntroduceContent}
                </div>

                <div style={titleStyle}>What make us different?</div>
                <div>
                    {whatMakeUsDiffirentContent}
                </div>

                <div style={titleStyle}>Do you need great IT people right away?</div>
                <div>
                    {doYouNeedContent}
                </div>

                <div style={titleStyle}>What are our details?</div>
                <div>{outDetailContent}</div>

                <div style={titleStyle}>Do you want to know more?</div>
                <div>{wantToKnowMoreContent}</div>
            </div>
        )
    }
}

export default AboutUs