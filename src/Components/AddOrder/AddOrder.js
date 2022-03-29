import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Alert, Button, Card, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const AddOrder = () => {
    let { id } = useParams();
    const { user } = useAuth();
    const [success, setSuccess] = useState(false);
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch(`/fakeCourses.JSON`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [id])
    return (
        <div>
            {/* <Header /> */}
            <h2 className="purchase-heading">Place Your Order</h2>
            <Container>
                <Row>
                    <Col md={6} sm={12} lg={6} className="purchase-img-container p-0">
                        <img className="purchase-img" src={order.img} alt="" />
                    </Col>
                    <Col md={6} sm={12} lg={6} className="">
                        {success && <Alert variant="success" className="alert">Order Placed Successfully</Alert>}
                        {success || <form className="purchase-form">

                            <input
                                name="userName"
                                defaultValue={user.userName}
                                disabled
                            /> <br />
                            <input
                                name="email"
                                defaultValue={user.email}
                                disabled
                                variant="outlined"
                            /> <br />
                            <input
                                name="productName"
                                defaultValue={order.name}
                                disabled
                                variant="outlined"
                            /> <br />
                            <input
                                name="address"
                                // onBlur={handleOnBlur}
                                placeholder="Address"
                                variant="outlined"
                                required
                            /> <br />
                            <input
                                name="phone"
                                type="tel"
                                // onBlur={handleOnBlur}
                                placeholder="Phone"
                                variant="outlined"
                                required
                            /> <br />
                            <input
                                type="number"
                                name="price2"
                                value={order.price}
                                // onChange={handleOnBlur}
                                disabled
                                variant="outlined"
                            /> <br />
                            <Button onClick={() => setSuccess(true)} type="submit" variant='contained' className="purchase-btn">Purchase</Button>
                        </form>}
                    </Col>
                </Row>
            </Container>
            {/* {!loading && <Footer />}
            {loading && <FooterBottom />} */}
        </div>
    );
};

export default AddOrder;