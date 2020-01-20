/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
    
};
// those variables are an arraylist which has been use to store json response.
  var finance=[];
  var business=[];
  var sport=[];
  var responses=[];
//   c has been use to understand position of buttton . like finance or business or sport.
  var c=0;
// in this function system is making request to provided website .by api.and getting data as a Json then this JSON parse and putting in array. 
function newsData(){

    // first request for finance
    // new http request.
      var http = new XMLHttpRequest();
    //   this is url which has api key in it.
            const url ='https://newsapi.org/v2/everything?q=finance&apiKey=87c3df969d3f4f359f22b33ebe5c4800';
            // opening get request by url
            http.open("GET", url);
            // sending request to website
            http.send();
            // getting response on ready stage.
            http.onreadystatechange = () => {
                // putting JSON response in response variable.
                    var response = http.responseText;
                    // response variable parsing to responses variable.
                     responses = JSON.parse(response);
                    //  writing in console to see responses.
                    console.log("finance") ;
                    console.log(responses);
                    // this responses putting to finance array.
                      finance=responses;                                
                        }
            // this is the second response . making same request to website to get business Json
              var http2= new XMLHttpRequest() ;    
                    const url2 ='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=87c3df969d3f4f359f22b33ebe5c4800';
                    http2.open("GET", url2);
                    http2.send();
                    http2.onreadystatechange = () => {
                            var response = http2.responseText;
                             responses = JSON.parse(response);
                             console.log("business") ;
                            console.log(responses) ;
                                business=responses;
                            
                        }
            // this is the third request to get sport Json response.
                     var http3= new XMLHttpRequest() ;    
                        const url3 ='https://newsapi.org/v2/top-headlines?country=us&category=sport&apiKey=87c3df969d3f4f359f22b33ebe5c4800';
                        http3.open("GET", url3);
                        http3.send();
                        http3.onreadystatechange = () => {
                                var response = http3.responseText;
                                 responses = JSON.parse(response);
                                 console.log("sport") ;
                                console.log(responses) ;
                                    sport=responses;
                                
                            }
       

 }
// when client click any news button (finance ,business, sport) button calls this function to view news .
 function view(news){
    //  getting news from button
    var news1=news;
    // cleaning header2 and clear space in page.
    document.getElementById("header2").innerHTML = "NEWS";
    document.getElementById("clear").innerHTML = '';


// if news what we get from button is equal to finance.
        if(news1=='finance'){
            // writing finance to header1.
            document.getElementById("header1").innerHTML = "FINANCE";
            // cleaninig page by for loop.
            for(var i=0; i<10;i=i+1){
                document.getElementById("title"+i).innerHTML = '  ';
                document.getElementById("publish"+i).innerHTML = ' ';
                document.getElementById("description"+i).innerHTML = '  ';
                document.getElementById("save"+i).innerHTML = ' ' ;
                // assign 1 to c to make the system to understand position.
                c=1;

                var news='finance';
                // writing finance to console that system entered to finance equation if. 
                console.log(news);
                // writing button to html which has button id.and onclick has show function and passing news and i .
                document.getElementById("button"+i).innerHTML = '<button onclick="show('+news+','+i+')" align="center">news'+i+'</button>';
                }
        }
//    if news is a business, system enter this else if and showing data on page.
        else if(news1=='business'){
            // writing business to header 1
            document.getElementById("header1").innerHTML = "BUSINESS";
            // cleaning page and calls all button and onclick passing news and i information to show function.
            for(var i=0; i<10;i=i+1){
                document.getElementById("title"+i).innerHTML = '  ';
                document.getElementById("publish"+i).innerHTML = ' ';
                document.getElementById("description"+i).innerHTML = '  ';
                document.getElementById("save"+i).innerHTML = ' ' ;
                c=2;

                var news='business'; 
                console.log(news);
                document.getElementById("button"+i).innerHTML = '<button onclick="show('+news+','+i+')" align="center">news'+i+'</button>';
                }
         }
// if news is equal to sport system enter to else 
       else{
// writing SPORT to header.
        document.getElementById("header1").innerHTML = "SPORT";
        // cleaning screen and calling button and passing news and i information to show function from each button.
        for(var i=0; i<10;i=i+1){
            document.getElementById("title"+i).innerHTML = '  ';
            document.getElementById("publish"+i).innerHTML = ' ';
            document.getElementById("description"+i).innerHTML = '  ';
            document.getElementById("save"+i).innerHTML = ' ' ;
            c=3;

            var news='sport'; 
            console.log(news);
            document.getElementById("button"+i).innerHTML = '<button onclick="show('+news+','+i+')" align="center">news'+i+'</button>';
            }
     
    }
}
// when client click any button which appeared on news screen . buttons call this function to show each news from news array.
 function show(news,i){
    //  i assigned to a and news assign to article.and writing those variable  to console 
     var a=i;
var article=news;
console.log(article);
console.log(a);
// cleaning button and calling button cleaner button same postion like deleted button.
    document.getElementById("button"+a).innerHTML = '';
    document.getElementById("button"+a).innerHTML = '<button onclick="buttonCleaner('+a+')" align="center">news'+a+'</button>';
// writing each info to page. title , publishAt and description.
    document.getElementById("title"+a).innerHTML = ' \n '+article.articles[a].title;
document.getElementById("publish"+a).innerHTML = ' \n '+article.articles[a].publishedAt;
document.getElementById("description"+a).innerHTML = ' \n '+article.articles[a].description;
// if client want to save news , save button appear under the news need to click that .this button pass a info to storage function and this function saving data to local storage.
document.getElementById("save"+a).innerHTML = '<button   id="submit" onclick="storage('+a+')">save</button>' ;

 
    

}
// when client opend the news on page then button changed with button cleaner button to clean news again.
 function buttonCleaner(a){
    //  a assigned to i.
     var i=a;
    //  function cleaned the button position
     document.getElementById("button"+i).innerHTML = '';
    //  writng the console news code .this code used for to understand which news are open (finance , business, sport.)
     console.log(c);
    //  if c==1 system understand this is finance news
if(c==1){
    // assigned finance to enws1
    var news1='finance';
    // writing button to button position and calling show function to be able to open news again with same button. and pasing news1 and i info to show fnction. 
document.getElementById("button"+i).innerHTML = '<button onclick="show('+news1+','+i+')" align="center">news'+i+'</button>';
}
// if c== 2 it is business news.and working same idea as if.
else if(c==2){
    var news1='business';
    document.getElementById("button"+i).innerHTML = '<button onclick="show('+news1+','+i+')" align="center">news'+i+'</button>';
    }
    // if c ==3 it is sport news.and working same idea as else if and if.
    else{
        var news1='sport';
        document.getElementById("button"+i).innerHTML = '<button onclick="show('+news1+','+i+')" align="center">news'+i+'</button>';

    }
    // cleaning the news which has been called by button .
    document.getElementById("title"+i).innerHTML = '  ';
    document.getElementById("publish"+i).innerHTML = ' ';
    document.getElementById("description"+i).innerHTML = '  ';
    document.getElementById("save"+i).innerHTML = ' ' ;


 }
//  this function saving data to local storage.
 function storage(a){
    //  getting info form button  and assign it to i.
    var i=a;
    
    //  if c== 1 this is finance page
    if(c==1){
        // setting item to local storage by key as finance +a and also articles converted to jason.
        localStorage.setItem('finance'+i,JSON.stringify(finance.articles[i]));
        
    
    }
    // else if and if working same as if 
    else if(c==2){
    
        localStorage.setItem('business'+i,JSON.stringify(business.articles[i]));
      
    }
    else{
        localStorage.setItem('sport'+i,JSON.stringify(sport.articles[i]));
       
    }
    
        
    }
          
// this function working to show local storage.
function views(){
// cleaning the page.
    document.getElementById("header1").innerHTML = "STORAGE";
        document.getElementById("header2").innerHTML = " ";
        for(var i=0;i<10;i=i+1){
            document.getElementById("button"+i).innerHTML = ' ';
         document.getElementById("button"+i).innerHTML = " ";
        document.getElementById("title"+i).innerHTML = " ";
        document.getElementById("publish"+i).innerHTML = " ";
        document.getElementById("description"+i).innerHTML = " ";
        document.getElementById("save"+i).innerHTML = "";
        }
// if local storage as some thing in it.
        if(localStorage.length>0){
            // appear the cleaner button. which is calling clearAll() function to clean all local storage.
            document.getElementById("clear").innerHTML = '<button onclick="clearAll()"> CLEAR </button>';
// writing all new from local storage,
        for(var i=0;i<localStorage.length;i=i+1){
            // gwtting each store key.
            z=localStorage.key(i);
            // getting response from local storage by key and convert Json storage to variable by JSON parse.
            var responseText = JSON.parse(localStorage.getItem(z));
// writing each document to page.
      document.getElementById("title"+i).innerHTML = ' \n '+responseText.title;
      document.getElementById("publish"+i).innerHTML = ' \n '+responseText.publishedAt;
      document.getElementById("description"+i).innerHTML = ' \n '+responseText.description;
            }
        }
        // if there is no data in storage page has no news info.
        else{
            document.getElementById("header1").innerHTML = " ";
            document.getElementById("header2").innerHTML = " NO NEWS";
            document.getElementById("clear").innerHTML = ' ';

        }

    
    
        
}

// this function cleaning all local storage.
function clearAll(){
// cleanign all local storage.
    localStorage.clear();
    // cleaninig the page .
    document.getElementById("header1").innerHTML = "NO NEWS";
    document.getElementById("header2").innerHTML = " ";
    document.getElementById("clear").innerHTML = ' ';

    for (var i = 0; i < 10; i=i+1) {
        document.getElementById("button"+i).innerHTML = " ";
        document.getElementById("title"+i).innerHTML = " ";
        document.getElementById("publish"+i).innerHTML = " ";
        document.getElementById("description"+i).innerHTML = " ";
        document.getElementById("save"+i).innerHTML = "";  


      }
  
}





// this function getting time and date info.
function today(){
// created date object and calling it as a time.
    var time=new Date();
    // getting all info from objrct. such as hour ,min.second,year, month and day.
    var h =time.getHours();
    var m =time.getMinutes();
    var s =time.getSeconds(); 
    var years = time.getFullYear();
     var months = (time.getMonth()+1);
   var days = time.getDate();
//    checking all info if they are smaller than 10 , function putting 0 infront of them.
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    months = checkTime(months);
    days = checkTime(days);
    // writing each of them in the page.
    document.getElementById('date').innerHTML=years+'-'+months+'-'+days;
    document.getElementById("time").innerHTML= h +' : '+m+' : '+s;
    // checking time every second
    var t =setTimeout(today,500);
    }
    
    // this function putting 0 infornt of information when they are smaller than 10.
    function checkTime(i){
    if(i<10){i='0'+i}
    
    return i;
    }
    
    
   