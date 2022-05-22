# Payment_throught_crypto_Currency

Ethereum Project:
>
    '-- web-20 <br>
     '-- web.js
     '-- public 
     '-- member.html 
>

>
    mkdir web-20
    cd web-20
    npm install express
>


FILE: web.js

>
    var express = require("express")
    var server  = express() // createServer()
    server.listen(20000)
    server.use( express.static("public") )
>

FILE: public/member.html

>
    <!DOCTYPE html>
    <html>
      <head><title>Member Application</title></head>
      <body>
        <input id="email">
        <br>
        <button onclick="apply(0.1)">Gold</button>
        <button onclick="apply(0.05)">Silver</button>

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
        </script>

      </body>
    </html>
>

![image](https://user-images.githubusercontent.com/104770048/169694827-d855167c-7942-491d-bbf9-9df3b2b6bc1f.png)


