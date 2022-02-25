import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {

    const [data,setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);
    const [rangeValue, setRangeValue] = useState(40);
    const [selectedRadio, setSelectedRadio] = useState('');
    const radios = ['Africa','America','Asia','Oceania','Europe'];

                            

    useEffect(()=>{
        
        if (playOnce){
            axios.get("https://restcountries.com/v3.1/all").then(
                    (res) => {
                        setData(res.data);
                        setPlayOnce(false);
                    }
              );
        }
        
        const sortedCountry = () =>{
            const countryObj = Object.keys(data).map((i) => data[i]);
            console.log(countryObj);
            
                
            const filterArray = countryObj.filter((country) =>{
                 if (selectedRadio && selectedRadio !='Tous'){return country.region.includes(selectedRadio);}
                   else{
                       return true;
                   }
                
            })
            console.log(selectedRadio +"="+filterArray);
            const sortedArray = filterArray.sort((a,b) => {
                return b.population - a.population;
                }
            )
            /*console.log("sortedArray="+sortedArray2);    
            const sortedArray = countryObj.sort((a,b) => {
                return b.population - a.population;
                }
            )*/
            
            
            
            

            sortedArray.length=rangeValue;
            setSortedData(sortedArray);
        };
        sortedCountry();

                //console.log(sortedData);
        
    },[data,rangeValue,selectedRadio]);
        
            
    return (
        <div className='countries'>
            <div className="sort-container">
                <input type="range"  min="1" value={rangeValue} max="250" onChange={(e) =>(setRangeValue(e.target.value))}/>
           
                <ul>
                {radios.map((radio)=>{
                    return (
                        
                        <li key={radio}>
                         
                            <input type="radio" value={radio} id={radio} checked={radio ==  selectedRadio} onChange={(e)=> (setSelectedRadio(e.target.value))}/>
                            <label>{radio}</label>   
                        </li>
                    )
                })}
               </ul>
            </div>
            <div className="cancel">
                {selectedRadio && <h5  onClick = {() =>(setSelectedRadio(''))}>Annuler la recherche</h5>}
            </div>
            <ul className='countries-list'>
                
                {sortedData.map((country)=>( <Card country={country} key={country.name.common}/>))}
              
            </ul>

        </div>
    );
};

export default Countries;