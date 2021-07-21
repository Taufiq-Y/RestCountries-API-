//1. Creating an XHR object
//New request.
var request=new XMLHttpRequest();
//2. Opening a connection (Specify the URL)
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//3. Sending a connection
request.send();
//4. Once the server responded successfully then we have to process the data.
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);
//5. If the user want to print only first 10 countries then need to use for loop and line 14 according to variableassigned to json parse.
    for(var i=0;i<10;i++){
        console.log(data[i].name+" "+data[i].capital+" "+data[i].flag);
    }
}