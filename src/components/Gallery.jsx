import React from 'react'
import Image1 from "../assets/images/1.png"
import Image2 from "../assets/images/2.png"
import Image3 from "../assets/images/3.png"
import Image4 from "../assets/images/4.png"
import Image5 from "../assets/images/5.png"
import Image6 from "../assets/images/6.png"
import { Col, Container, Row } from 'react-bootstrap'


const Gallery = () => {

    const galleryData = [
        {
            name: "Andrey Markovicz",
            img: Image1,
            designation: "Lead real estate agent"
        },
        {
            name: "Andrey Markovicz",
            img: Image2,
            designation: "Lead real estate agent"
        },
        {
            name: "Andrey Markovicz",
            img: Image3,
            designation: "Lead real estate agent"
        },
        {
            name: "Andrey Markovicz",
            img: Image4,
            designation: "Lead real estate agent"
        },
        {
            name: "Andrey Markovicz",
            img: Image5,
            designation: "Lead real estate agent"
        },
        {
            name: "Andrey Markovicz",
            img: Image6,
            designation: "Lead real estate agent"
        },
    ];

    return (
        <Container>
            <Row>
                {galleryData.map((items) => (
                    <Col md={4} className='position-relative mb-4  '>
                        <img className='w-100 rounded-2' src={items.img}  alt="user" />
                        <div className='custom-box'>
                            <h4 className='text-danger'>{items.name}</h4>
                            <div className='custom-border'>
                                <p className='fw-bold text-black'>{items.designation}</p>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Gallery