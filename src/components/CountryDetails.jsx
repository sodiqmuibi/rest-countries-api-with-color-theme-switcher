import { LeftOutlined } from "@ant-design/icons"
import { useGetCountryDetailQuery } from "../services/countryApi"
import { useParams, Link } from 'react-router-dom'
import millify from 'millify'
import Loader from "./Loader"
import '../country.css'



const CountryDetails = () => {
    const { name } = useParams()
    const { data: countryDeets, isFetching } = useGetCountryDetailQuery(name)
    if(isFetching) return <Loader />
    return (
        <>
            
            <Link to='/'>
                <button className="backButton"><LeftOutlined /> Back</button>
            </Link>
            <div className="country">
                {countryDeets?.map((countryDetails) => (
                    <div key={countryDetails.name}>
                        <div className="row">
                            <div className="flag">
                                <img alt="flag" src={countryDetails?.flags?.svg}/>
                            </div>
                            <div  className="col1">
                                <div className="name">
                                    {countryDetails?.name}
                                </div>
                                <div className="properties">
                                    <div><span className="bold">Native Name:</span> {countryDetails?.nativeName}</div>
                                    <div><span className="bold">Population:</span> {millify(countryDetails?.population)}</div>
                                    <div><span className="bold">Region:</span> {countryDetails?.region}</div>
                                    <div><span className="bold">Sub-Region:</span> {countryDetails?.subregion}</div>
                                    <div><span className="bold">Capital:</span> {countryDetails?.capital}</div>
                                </div>
                            </div>
                            <div className="col2">
                                <div><span className="bold">Top Level Domain:</span> {countryDetails?.topLevelDomain}</div>
                                <div className="currency"><span className="bold">Currencies:</span> {countryDetails?.currencies?.map((currency) => <div>{currency.name}</div>)}</div>
                                <div className="currency"><span className="bold">Languages:</span> {countryDetails?.languages?.map((language) => <div>{language.name}</div>)}</div>
                            </div>
                        </div>
                        <div className="border">
                                <span className="bold">Border Countries:</span>
                                <div className="borderCountries">
                                    {countryDetails?.borders?.map((border) => (
                                        <div className="borderList">{border}</div>
                                    ))}
                                </div> 
                        </div>
                    </div>
                ))}
            </div>
            
        </>
            
    )
}
export default CountryDetails