
//Script to get the Bitcoin Price 

function bitPrice(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var myObj = JSON.parse(this.responseText);
            var percent_change = myObj[0].percent_change_24h+'%';
            var final;
            if(myObj[0].percent_change_24h.charAt() == '-'){
                final = percent_change.fontcolor("red");
            }
            else{
                percent_change = '+'+ percent_change;
                final = percent_change.fontcolor("green");															
            }
            document.getElementById("btcwdgt-price").innerHTML = '$'+myObj[0].price_usd+' '+final;	
        }
    };
    xmlhttp.open("GET", "https://api.coinmarketcap.com/v1/ticker/bitcoin/", true);
    xmlhttp.send();    
}
