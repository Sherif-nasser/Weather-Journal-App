// Async POST
// 'api.openweathermap.org/data/2.5/weather?zip={zip code}&appid={API key}';
const apiKey = '&appid=7084def9c2e496ccdac5b5a9a989de3b&units=metric';
let baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const generate = document.getElementById('clickedButton');
let d = new Date(2021 , 5 , 13,03,00,00);
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();
console.log(d.toString());

generate.addEventListener('click',handleGenerateBtnClick);

function handleGenerateBtnClick(e){
  
  let zipCode = document.getElementById('zipCode').value;
  if(zipCode){
    document.getElementById('date').innerHTML= newDate;
  const userFeeling = document.getElementById('feeling').value;
   console.log(zipCode);
  
  getData(baseUrl,zipCode,apiKey)
  .then(function(data){
    console.log(data)
    postData('/addData',{temp:data.main.temp,feels:data.main.feels_like, userFeeling:userFeeling})
    updateUI()
  });
}else{
  alert('Please Enter a ZIP Code');
}

}

  
 const getData = async (baseUrl,zipCode,apiKey)=>{
  
  const request = await fetch (baseUrl+zipCode+apiKey);
    try {
      const data = await request.json();
      //  console.log(data);
      return data;
      
    }catch(error) {
    console.log("error", error);
    }
  
  }



const postData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

try {
    const newData = await response.json();
    // postData('/addData',{temp:data.main.temp,feels:data.main.feels_like, userFeeling:userFeeling});
    return newData

  }catch(error) {
  console.log("postError", error);
  }
}

const updateUI =async (url='') => {
  const request = await fetch('/all');
  try{
    const allData = await request.json();
    console.log(allData);
   
      
      
      document.getElementById('temp').innerHTML = allData.temp + ' °C';
      document.getElementById('feelsLike').innerHTML = allData.feels+ ' °C';
      document.getElementById('userFeelings').innerHTML = allData.userFeeling;
  
  }catch(error) {
    console.log("didn't retreive", error);
    }
  }


