import React, { Component } from 'react'

class Guide extends Component {
    render(){
        const guideStyle = {
            height: `550px`,
            background: `#fff`,
            paddingTop: `15px`,
            paddingLeft: `30px`,
            color: `#666`
        }
        const titleStyle = {
            fontSize: `20px`,
            color: `#777`,
            paddingBottom: `10px`,
            fontFamily: `Arial,helvetica neue,Helvetica,sans-serif`
        }
        return(
            <div style={guideStyle}>
                <div style={titleStyle}>
                    Guide to use Work Generator
                </div>
                <div>
                    1. Đăng nhập (Đăng ký tài khoản mới nếu bạn chưa từng sử dụng Work Generator tại đây)<br/>
                    2. Viết CV trực tiếp trên Work Generator<br/>
                    3. Tải CV dạng PDF về máy<br/>
                    4. Ứng tuyển các việc làm hot ngay trên Work Generator<br/>
                </div>
                <div style={{textAlign: `center`, paddingTop: `30px`}}>
                    <iframe title="guide-video" width="560" height="315" src="https://www.youtube.com/embed/tCzvYMW-jO8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                </div>
                </div>
        )
    }
}

export default Guide