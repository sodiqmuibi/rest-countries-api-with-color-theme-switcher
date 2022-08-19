import { Link } from "react-router-dom"
import { Card, Row, Col, Typography } from "antd"
import millify from "millify"
import { SearchOutlined } from "@ant-design/icons"
import { useGetCountriesQuery } from "../services/countryApi"
import { useState } from "react"
import { useEffect } from "react"
import Loader from "./Loader"


const Countries = () => {
    const { data: countriesList, isFetching} = useGetCountriesQuery()
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState('')
    const [region, setRegion] = useState('')
    useEffect(() => {
        setCountries(countriesList?.filter((country) => country.name.toLowerCase().includes(search.toLowerCase())))
    }, [countriesList, search])
    useEffect(() => {
        setCountries(countriesList?.filter((country) => country.region.includes(region)))
    }, [countriesList, region])
    if(isFetching) return <Loader />
    return (
        <>
            <div className="filter">
                <div className="search">
                    <div>{<SearchOutlined />}</div>
                    <input 
                        type="text"
                        placeholder="Search for a country"
                        onChange={(event) => setSearch(event.target.value)}/> 
                </div>
                <div>
                    <select className="select" onChange={(val) => setRegion(val.target.value)}>
                        <option value="">All</option>
                        <option value="Africa">Africa</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Americas">Americas</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
            </div>
            <Row className="card-container">
                {countries?.map((country) => {
                    return  <Col xs={24} sm={12} lg={6} key={country.name} className="card">
                        <Link to={`/country/${country.name}`}>
                            <Card
                                style={{backgroundColor: 'var(--navBackground)', color: 'var(--color)', border: 'none'}}
                                cover={<img className="flag" alt="flag" src={country.flags.png}/>} 
                                hoverable>
                                <Typography.Title style={{color: 'var(--color)'}} level={4}>{country.name}</Typography.Title>
                                <p><span className="span">Population:</span> {millify(country.population)}</p>
                                <p><span className="span">Region:</span> {country.region}</p>
                                <p><span className="span">Capital:</span> {country.capital}</p>
                            </Card>
                        </Link>
                    </Col>
                })}
            </Row>
        </>
        

    )
}

export default Countries
