# API-Examples

* Different type of Api defend on their data 

<b>https://restcountries.com/v3.1/all</b> this api is as simple we see all data in array 
  [{}]
so use:
       fetch('http link')
       .then(res=>res.json())
       .then(data => console.log(data))

<b>https://randomuser.me/api/?results=5</b> </br>
this API is little bit different cause 
{ result : this an object and name (result)
     [ this is an array 
         {1} 1,2 is object in an array  
         {2}
     ]
}