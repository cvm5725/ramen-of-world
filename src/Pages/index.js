import React from "react";
import {Row, Col} from "reactstrap";
import ApiService from "../api/apiServices";
import Resturant from "../Components/Resturant";
import 'bootstrap/dist/css/bootstrap.min.css';

class HomePage extends React.Component{

    state = {
        resturantList : []
    }

    componentDidMount(){
        let requestData = `Country=Malaysia`
        ApiService.fetchResturant(requestData).then((res) => {
            let resturantList = res
            this.setState({
                resturantList
            })
        })
        
    }

    getResturants = () => {
        const {resturantList} = this.state;
        return resturantList.map((resturant,index) => {
            return(
                <Resturant {...resturant} />
            )
        })
    }

    render(){

        const {resturantList} = this.state

        return(
            <>
                <Row>
                    <Col style={{textAlign : "center"}}>
                        <h1>Remen Of The World</h1>
                    </Col>
                </Row>
                {
                    resturantList.length > 0 ?
                    <Row className="p-3">
                        {this.getResturants() }
                    </Row> : null
                }
            </>
        )
    }
}

export default HomePage;