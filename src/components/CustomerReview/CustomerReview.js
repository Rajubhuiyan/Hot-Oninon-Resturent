import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './CustomerReview.css';
import firstImg from '../../images/Image/adult-blur-blurred-background-687824.png';
import secondImg from '../../images/Image/chef-cook-food-33614.png';
import thirdImg from '../../images/Image/architecture-building-city-2047397.png'
import homeDeliveryIcon from '../../images/ICON/Group 245.png';
import goodIcon from '../../images/ICON/Group 1133.png';
import fastDeliveryIcon from '../../images/ICON/Group 204.png'
const CustomerReview = () => {
    return (
        <div className="container mt-5">

            <div className="review-choose">
                <h2>Why You Choose Us?</h2>
                <p>Berton Waited Tweenty Always Repair In Within We Do. An delighted Offending Curiosity My Is Dashwoods At.Boy Prosperous Increasing Sorrounded.</p>
            </div>
            <div className="row">
                <div className="col-md-4 mt-3">
                    <Card className="card-style" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={firstImg} />
                        <Card.Body>
                            <Card.Title> <img className="img-fluid" src={fastDeliveryIcon} alt="" />  Fast Delivery</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure necessitatibus nihil quia, soluta ipsum non ratione.
                            </Card.Text>
                            <Card.Link className="see-more-btn" href="#">See More</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4 mt-3">
                    <Card className="card-style" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={secondImg} />
                        <Card.Body>
                            <Card.Title> <img className="img-fluid" src={goodIcon} alt="" /> A Good Responder</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure necessitatibus nihil quia, soluta ipsum non ratione.
                            </Card.Text>
                            <Card.Link className="see-more-btn" href="#">See More</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4 mt-3">
                    <Card className="card-style" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={thirdImg} />
                        <Card.Body>
                            <Card.Title> <img className="img-fluid" src={homeDeliveryIcon} alt="" /> Home Delivery</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure necessitatibus nihil quia, soluta ipsum non ratione.
                            </Card.Text>
                            <Card.Link className="see-more-btn" href="#">See More</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;