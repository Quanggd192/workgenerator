import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

class Footer extends Component {
    render(){
        const footerStyle = {
            minHeight: `150px`,
            color: `#666`,
            borderTop: `solid 1px #999`,
            paddingTop: `25px`,
            textAlign: `center`,
        }
        return(
            <Grid style={footerStyle}>
                <Row>
                    <Col mdOffset={1} md={10}>
                        <div>
                        © 2019 - Copy right Aptech Work Generator 
                        <br/><br/>
                            Trụ sở HN: Tầng 19, 169 Nguyễn Ngọc Vũ, Trung Hòa, Cầu Giấy, Hà Nội
                            TP HCM: Tòa nhà cao ốc Nam Giao 1, số 261 - 263 Phan Xích Long, Phường 2, Quận Phú Nhuận, TP Hồ Chí Minh
                        </div>
                    </Col>
                </Row>
            </Grid>
        )
    }

}

export default Footer