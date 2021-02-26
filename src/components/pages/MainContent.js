
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Row, Col, Input, Button, Card } from 'antd';

const MainComponent = () => {
    const [dataCity, setDataCity] = useState('jakarta');
    const [dataCuaca, setDataCuaca] = useState();
    const apiKey = `9281ce9fa6072cbd884ecde4ebd1cb3c `;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${dataCity}&appid=${apiKey}`

    useEffect(() => {
        axios.get(apiUrl)
            .then(ress => {
                setDataCuaca(ress.data)
                console.log(ress.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleClick = () => {
        axios.get(apiUrl)
            .then(ress => {
                setDataCuaca(ress.data)
                console.log(ress.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleChange = (event) => {
        setDataCity(event.target.value)
    }
    return (
        <div>
            <Row>
                <Col md={24} style={{ textAlign: 'center', marginBottom: "20px" }}>
                    <h1 >React Weather App</h1>
                </Col>
                <Col md={24} style={{ textAlign: 'center', marginBottom: "15px" }}>
                    <label>Enter Location :</label>
                </Col>
                <Col offset={9} md={6} style={{ marginBottom: "15px" }}>
                    <Input type="text" placeholder="Input City" defaultValue={dataCity} onChange={handleChange} />
                </Col>
                <Col offset={11} md={7} style={{ paddingLeft: "25px", marginBottom: "20px" }}>
                    <Button type="primary" onClick={handleClick}>
                        Search
                </Button>
                </Col>
            </Row>
            <Row>
                <Col md={16} offset={4}>
                    <Card style={{ height: "350px" }}>
                        <Row>
                            <Col md={10} offset={11}>
                                <img
                                    src={`http://openweathermap.org/img/w/${dataCuaca?.weather[0].icon}.png`}
                                    alt="weather status icon"
                                    className="weather-icon"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={10} offset={10}>
                                <h1>{dataCuaca?.main.temp}&deg; C</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={10} offset={10}>
                            <h2>{dataCuaca?.name}</h2>
                            </Col>

                        </Row>
                        <Row>
                            <Col md={10} offset={2}>
                            <h2>{dataCuaca?.main.temp_min}&deg; C</h2>
                            </Col>
                            <Col md={5} offset={6} >
                            <h3>{dataCuaca?.weather[0].main}</h3>
                            </Col>
                        </Row>
                        <Row>
                        <Col md={10} offset={2}>
                            <h2>{dataCuaca?.main.temp_max}&deg; C</h2>
                            </Col>
                            <Col md={5} offset={6} >
                            <h3>{dataCuaca?.sys.country.includes('ID') ? 'Indonesia' : dataCuaca?.sys.country}</h3>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default MainComponent;