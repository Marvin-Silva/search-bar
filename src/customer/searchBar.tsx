import { useEffect, useState } from 'react'
import ROUTE from '../routes'
// import { auth } from './security/auth/credentialsAuth';
import './style.css'

const SearchBar = ()=>{

    const [customer, setCustomer] = useState([]);
    const [data, setDatas] = useState();     
    
 useEffect(() =>{  
         fetch(ROUTE.OF_CUSTOMERS, {
            method: 'GET',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': process.env.REACT_APP_API_KEY as string,
                "Access-Control-Allow-Origin": "*"
            }   ,
    })
    .then((res) => 
                
            {
                console.log("JSON :",res);
                return res.json()
                
                }).then(json => {
                    console.log("JSON :",json);
                    setCustomer(json)}).catch(error => console.log(error))
        
        },[]);

console.log("CUSTOMER", customer);

       const setValue = (e:any) => {
            const val = e.target.value;
            setDatas(val);
       }
   
    return ( <>
                <header>
                    <div id='customer-search-bar-container'>
                        <h1 id='search-bar-title'>Cherchez un client</h1>
                        <input 
                                type="text" 
                                name="search-customer" 
                                id="customer-search-bar"                
                                placeholder='Cherchez un client par nom, prénom, numero de compte ...'
                                onChange={ setValue }
                                 />
                    </div>
                </header>
                <section>
                         { customer.filter((val:any) =>{
                                    return  val.bankAccountNumber.includes(data) ||
                                            val.firstName.includes(data) ||
                                            val.lastName.includes(data) ||
                                            val.birthDate.includes(data);
                                }).map((val:any)=>{
                                    return <>
                                     <table>
                                         <thead>
                                             <tr>
                                                <th>N° deCompte</th>
                                                <th>Prénom</th>
                                                <th>Nom</th>
                                                <th>Née</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td key={val.bankAccountNumber}><a>{val.bankAccountNumber}</a></td>
                                                <td key={val.firstName}>{val.firstName}</td>
                                                <td key={val.lastName}>{val.lastName}</td>
                                                <td key={val.birthDate}>{val.birthDate}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </>
                         }) };   
                </section>
    
            </>    
    ) 
}

export default SearchBar;