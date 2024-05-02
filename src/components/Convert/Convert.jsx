import React, { useState, useEffect } from 'react';
import './Convert.css';
import API_KEY from '../../utils/api-key';
import axios from 'axios';
import currencyapi from '@everapi/currencyapi-js'


const Convert = (props) => {
  const {isResultFunc} = props;
  const [amount, setAmount] = useState((1).toFixed(2));
  const [valueInput, setValueInput] = useState({
    "currencies": { "USD": { "name": "United States dollar", "symbol": "$" } },
    "flags": {
      "png": "https://flagcdn.com/w320/us.png",
      "svg": "https://flagcdn.com/us.svg",
    }
  });
  const [valueInput2, setValueInput2] = useState({
    "currencies": { "EUR": { "name": "Euro", "symbol": "€" } },
    "flags": {
      "png": "https://flagcdn.com/w320/fr.png",
      "svg": "https://flagcdn.com/fr.svg",
      "alt": "The flag of France is composed of three equal vertical bands of blue, white and red."
    },
  });
  const [countryInfos, setCountryInfos] = useState([]);
  const [totalExRate, setTotalExRate] = useState(0);
  const [totalExRate2, setTotalExRate2] = useState(0);
  const [status1, setStatus1] = useState(false);
  const [status2, setStatus2] = useState(false);
  const [error1, setError1] = useState("");


  useEffect(() => {
    let url = `https://restcountries.com/v3.1/all`;
    axios
      .get(url)
      .then((res) => {
        setCountryInfos(Object.values( res.data));
      })
      .catch((err) => {
        console.log(err);
      }); 
  }, []);

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    calcExchangeRate();
  }

  const toggleExchangeRate = () =>{
    console.log('test');
    const lastOfCurrencyCountry = valueInput;
    const lastToCurrencyCountry = valueInput2;
    const lastTotalExRate = totalExRate;
    const lastTotalExRate2 = totalExRate2;
    let stats = false

    if (stats === false) {
      setValueInput(lastToCurrencyCountry);
      setValueInput2(lastOfCurrencyCountry);
      setTotalExRate(lastTotalExRate2);
      setTotalExRate2(lastTotalExRate);
      stats = true;
    } else {
      setValueInput(lastOfCurrencyCountry);
      setValueInput2(lastToCurrencyCountry);
      setTotalExRate(lastTotalExRate);
      setTotalExRate2(lastTotalExRate2);
      stats = false;
    }
  }


  const  displayDropdown1 = (elt) =>{
   const dropdown = document.querySelector('ul.custom-dropdown.one');
   dropdown.classList.toggle('hide');
   }
  const  displayDropdown2 = (elt) =>{
   const dropdown = document.querySelector('ul.custom-dropdown.two');
   dropdown.classList.toggle('hide');
  }

  const  calcExchangeRate = async() =>{
    const getExchangeRate1 = new currencyapi(API_KEY)
    getExchangeRate1.latest({
            base_currency: Object.keys(valueInput?.currencies || 'null').join(""),
            currencies: Object.keys(valueInput2?.currencies || 'null').join("")
    }).then(res => {
           setTotalExRate(amount * (res.data[Object.keys(valueInput2?.currencies || 'null').join("")]['value']));
           setStatus1(true);
          //isResultFunc(true)
    }).catch((err1) => {
        console.log('err1',err1.message);
        setError1(err1.message || 'err')
    });

    const getExchangeRate2 = new currencyapi(API_KEY)
    getExchangeRate2.latest({
            base_currency: Object.keys(valueInput2?.currencies || 'null').join(""),
            currencies: Object.keys(valueInput?.currencies || 'null').join("")
    }).then(res => {
           setTotalExRate2(amount * (res.data[Object.keys(valueInput?.currencies || 'null').join("")]['value']));
          setStatus2(true);
    }).catch((err2) => {
         console.log('err2',err2);
    });
  }  


  return (
    <div className="Convert">
      <form onSubmit={onSubmitHandler}>
       <div className="convert-inputs flex">
             <div className="cvrt amount">
                 <label htmlFor="amount">Amount</label>
                 <input id='amount' type="text" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                 <span className="symbols">{ Object.values(valueInput?.currencies || 'null')[0].symbol}</span>
             </div>
              <div className="cvrt of">
                 <label htmlFor="of">Of</label>
                 <div className="contains-of">
                   <img src={(Object.values(valueInput?.flags || 'null')[1])} alt="flag" />
                   {Object.keys(valueInput?.currencies || 'null').join("") } - {Object.values(valueInput?.currencies || 'null')[0].name}
                   <i class="fa-solid fa-chevron-down" onClick={()=>{displayDropdown1()}}></i>
                   <ul className="custom-dropdown one hide">
                      {countryInfos.map((elt, i) => (
                        <li
                          key={Object.values(elt?.name || 'null')[0]}
                          onClick={() => {
                            setValueInput(elt);
                            displayDropdown1();
                          }}
                        >
                          <img src={Object.values(elt?.flags || 'null')[1]} alt="flag" />
                          {Object.keys(elt?.currencies || 'null').join("") }  -  {Object.values(elt?.currencies || 'null')[0].name}
                        </li>
                      ))}
                    </ul>
                 </div>
              </div>
              <div className="btn-ctn">
                 <div className="btn-transact" onClick={()=>{toggleExchangeRate()}}>
                     <img src="../src/assets/transfert.svg" alt="" />
                 </div>
              </div>
             <div className="cvrt toward">
                 <label htmlFor="toward">towards</label>
                 <div className="contain-toward">
                    <img src={(Object.values(valueInput2?.flags || 'null')[1])} alt="flag" />
                   {Object.keys(valueInput2?.currencies || 'null').join("") } - {Object.values(valueInput2?.currencies || 'null')[0].name}
                   <i class="fa-solid fa-chevron-down" onClick={()=>{displayDropdown2()}}></i>
                   <ul className="custom-dropdown two hide">
                      {countryInfos.map((elt, i) => (
                        <li
                          key={Object.values(elt?.name || 'null')[0]}
                          onClick={() => {
                            setValueInput2(elt);
                            displayDropdown2();
                          }}
                        >
                          <img src={Object.values(elt?.flags || 'null')[1]} alt="flag" />
                          {Object.keys(elt?.currencies || 'null').join("") }  -  {Object.values(elt?.currencies || 'null')[0].name}
                        </li>
                      ))}
                    </ul>
                 </div>
             </div>
       </div>
       {
        true === true && error1 === "" ?
        <div className="convert-results">
           <div className="line1">{amount} {Object.values(valueInput?.currencies || 'null')[0].name} = </div>
           <div className="line2">
           <span className="nb1">{totalExRate.toFixed(8).toString().split('.')[0]},</span>
           <span className="nb2">{totalExRate.toFixed(8).toString().split('.')[1]}  </span>
           <span className="nb3">{Object.values(valueInput2?.currencies || 'null')[0].name}</span>
           </div>
            { true === true ? 
              <div className="line3">{amount} {Object.keys(valueInput2?.currencies || 'null').join("")} =  {totalExRate2.toFixed(8)} {Object.keys(valueInput?.currencies || 'null').join("")} </div>
              : null
            }
         </div> 
          : 
          <div className="convert-results">
           <div className="error">Something went wrong! please retry</div>
           </div> 
       }
       <div className="convert-actions">
         <div className="notify">
            <div className="notify-icon">
             <img src="../src/assets/inf.svg" alt="" />
            </div>
            <div className="notify-resume">
            We use the mid-market rate for our converter. 
            The rate is given for information purposes only. 
            You will not benefit from this rate when sending money.
            <a href='#' className='notify-link'> Check shipping rates.</a>
            </div>
         </div>
         <div className="validate-btn">
            <button>Convert</button>
         </div>
       </div>
      </form>
    </div>
  );
};

export default Convert;
