# Payment_throught_crypto_Currency(Ethereum Project:)

## Introduction


## Ethereum Project Directory:
>
    '-- Cryptocurrency 
     '-- Server.js
     '-- public 
         '-- Display.html 
>

## Create folder thought Windows command
>
    mkdir cryptocurrency
    cd cryptocurrency
    npm install express  // install express module
>


## Create simple server using Node.js File:Server.js

>
    var express = require("express")
    var server  = express() // createServer()
    server.listen(20000)
    server.use( express.static("public") )  // looking for directory name : "public"
>

## Create simple web application File:public/Display.html

>
    <!DOCTYPE html>
    <html>
      <head><title>Member Application</title></head>
      <body>
        <input id="email">
        <br>
        <button onclick="apply(0.1)">Gold</button>
        <button onclick="apply(0.05)">Silver</button>
        <button onclick="refresh()">Refresh</button>
        <div id="target">...</div>
        <div id="showValueBuy">...</div>
        <div id="showValueSell">...</div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/web3/3.0.0-rc.5/web3.min.js"></script>
        <script>
          var accounts = [ ]

          async function apply(value) {
            if (typeof ethereum == 'undefined') {
              alert("Please install MetaMask")
              return  // end of this function
            }
            accounts = await ethereum.request({method:"eth_requestAccounts"})
            await pay(value)
          }
          async function pay(value) {
            var w = new Web3(ethereum)
            var detail = { from: accounts[0],
                           to:   "0x463eee5756231F693D98d7Bf4D9AF6584FECCC9D",
                           value: w.utils.toWei("" + value) }
            var result = await w.eth.sendTransaction(detail)
            // check if result is passed
            if (result.status) {
              var e = document.getElementById("email")
              alert("Successfully applied, confirmation email has been sent to " + e.value)
            } else {
              alert("Fail to apply membership")
            }
          }
         async function refresh(){
         result =[]
         var url= "https://api.coinbase.com/v2/prices/BTC-USD"

         await fetch(url+"/buy").then(convert).then(show)
         await fetch(url+"/sell").then(convert).then(show)

          }
          function convert(response){
            return response.json()
          }
          function show(data){
         result.push(data)
         if (result.length==2){
         var spread = result[0].data.amount - result[1].data.amount
         //if (spread<0) spread= -spread
         var e = document.getElementById("target")
         var f = document.getElementById("showValueBuy")
         var g = document.getElementById("showValueSell")
         e.innerText ="Spread is " + spread.toFixed(2)
         f.innerText ="Buy price = " + result[0].data.amount
         g.innerText ="Sell price = " + result[1].data.amount
         }
       }

        </script>

      </body>
    </html>

>

![image](https://user-images.githubusercontent.com/104770048/169694827-d855167c-7942-491d-bbf9-9df3b2b6bc1f.png)


