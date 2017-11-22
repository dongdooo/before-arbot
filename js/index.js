/******************
  Market
  - CO : Coinone
  - KK : Kraken
  - PO : Poloniex
  - BX : BX
******************/

const getCOData = (suffix) => {
    return fetch(`https://api.coinone.co.kr/orderbook/?currency=${suffix}&format=json`);
}

const getKKData = (suffix) => {
    return fetch(`https://api.kraken.com/0/public/Depth?pair=${suffix}`);
}

const getPOData = (suffix) => {
    return fetch(`https://poloniex.com/public?command=returnOrderBook&currencyPair=${suffix}&depth=30`);
}

 const getBXData = (suffix) => {
     return fetch(`https://bx.in.th/api/orderbook/?pairing=${suffix}`);
 }

const getBFData = (suffix) => {
     return fetch(`https://api.bitfinex.com/v1/book/${suffix}`);
 }

const getBTData = (suffix) => {
     return fetch(`https://bittrex.com/api/v1.1/public/getorderbook?market=${suffix}&type=both`);
 }

 const getBSData = (suffix) => {
     return fetch(`https://www.bitstamp.net/api/v2/order_book/${suffix}`);
 }
            
window.setInterval( () => {
  Promise.all([getCOData('btc'), getCOData('eth'), getCOData('xrp'), getCOData('etc'), getKKData('XXBTZUSD'), getKKData('XETHZUSD'), getKKData('XXRPZUSD'), getKKData('XETCZUSD'),
                getPOData('USDT_BTC'), getPOData('USDT_ETH'), getPOData('USDT_XRP'), getPOData('USDT_ETC'), getBXData('1'), getBXData('21'), getBXData('25'),
                getBFData('BTCUSD'), getBFData('ETHUSD'), getBFData('XRPUSD'), getBFData('ETCUSD'),getBTData('USDT-BTC'), getBTData('USDT-ETH'), getBTData('USDT-XRP'), getBTData('USDT-ETC'),
                getBSData('btcusd'), getBSData('ethusd'), getBSData('xrpusd'),
              ])
  .then((data) => {
    Promise.all([data[0].json(), data[1].json(), data[2].json(), data[3].json(), data[4].json(), data[5].json(), data[6].json(), data[7].json(),
                  data[8].json(), data[9].json(), data[10].json(), data[11].json(), data[12].json(), data[13].json(), data[14].json(), 
                  data[15].json(), data[16].json(), data[17].json(), data[18].json(), data[19].json(), data[20].json(), data[21].json(), data[22].json(),
                  data[23].json(), data[24].json(), data[25].json()
                ])
    .then((data) => {

      // Setup

      var market1 = ['CO','KK','PO','BX','BF','BT','BS'];
      var market = ['CO','KK','PO'];
      var currency = ['BTC','ETH','XRP','ETC'];

      // Fund

      var fundAmountKK = 10000;
      var pointKK = 0;

      var fundAmountCO = 11212400;
      var pointCO = 0;

      var fundAmountPO = 10000;
      var pointPO = 0;

      var fundAmountBX = 332200;
      var pointBX = 0;

      var fundAmountBF = 10000;
      var pointBF = 0;

      var fundAmountBT = 10000;
      var pointBT = 0;

      var fundAmountBS = 10000;
      var pointBS = 0;

      // JSON

      var btc_CO = data[0];
      var eth_CO = data[1];
      var xrp_CO = data[2];
      var etc_CO = data[3];
      
      var btc_KK = data[4];
      var eth_KK = data[5];
      var xrp_KK = data[6];
      var etc_KK = data[7];
      
      var btc_PO = data[8];
      var eth_PO = data[9];
      var xrp_PO = data[10];
      var etc_PO = data[11];

      var btc_BX = data[12];
      var eth_BX = data[13];
      var xrp_BX = data[14];

      var btc_BF = data[15];
      var eth_BF = data[16];
      var xrp_BF = data[17];
      var etc_BF = data[18];

      var btc_BT = data[19];
      var eth_BT = data[20];
      var xrp_BT = data[21];
      var etc_BT = data[22];

      var btc_BS = data[23];
      var eth_BS = data[24];
      var xrp_BS = data[25];
      
      // Price CO

      var buyBTC_CO = btc_CO.ask[0].price;
      var sellBTC_CO = btc_CO.bid[0].price;

      var buyETH_CO = eth_CO.ask[0].price;
      var sellETH_CO = eth_CO.bid[0].price;

      var buyXRP_CO = xrp_CO.ask[0].price;
      var sellXRP_CO = xrp_CO.bid[0].price;

      var buyETC_CO = etc_CO.ask[0].price;
      var sellETC_CO = etc_CO.bid[0].price;

      // Price KK

      var buyBTC_KK = btc_KK.result.XXBTZUSD.asks[0][0];
      var sellBTC_KK = btc_KK.result.XXBTZUSD.bids[0][0];

      var buyETH_KK = eth_KK.result.XETHZUSD.asks[0][0];
      var sellETH_KK = eth_KK.result.XETHZUSD.bids[0][0];

      var buyXRP_KK = xrp_KK.result.XXRPZUSD.asks[0][0];
      var sellXRP_KK = xrp_KK.result.XXRPZUSD.bids[0][0]

      var buyETC_KK = etc_KK.result.XETCZUSD.asks[0][0];
      var sellETC_KK = etc_KK.result.XETCZUSD.bids[0][0];

      // Price PO

      var buyBTC_PO = btc_PO.asks[0][0];
      var sellBTC_PO = btc_PO.bids[0][0];

      var buyETH_PO = eth_PO.asks[0][0];
      var sellETH_PO = eth_PO.bids[0][0];

      var buyXRP_PO = xrp_PO.asks[0][0];
      var sellXRP_PO = xrp_PO.bids[0][0];

      var buyETC_PO = etc_PO.asks[0][0];
      var sellETC_PO = etc_PO.bids[0][0];

      // Price BX

       var buyBTC_BX = btc_BX.asks[0][0];
       var sellBTC_BX = btc_BX.bids[0][0];

       var buyETH_BX = eth_BX.asks[0][0];
       var sellETH_BX = eth_BX.bids[0][0];

       var buyXRP_BX = xrp_BX.asks[0][0];
       var sellXRP_BX = xrp_BX.bids[0][0];

       // Price BF

      var buyBTC_BF = btc_BF.asks[0].price;
      var sellBTC_BF = btc_BF.bids[0].price;

      var buyETH_BF = eth_BF.asks[0].price;
      var sellETH_BF = eth_BF.bids[0].price;

      var buyXRP_BF = xrp_BF.asks[0].price;
      var sellXRP_BF = xrp_BF.bids[0].price;

      var buyETC_BF = etc_BF.asks[0].price;
      var sellETC_BF = etc_BF.bids[0].price;

      // Price BT

      var buyBTC_BT = btc_BT.result.sell[0].Rate;
      var sellBTC_BT = btc_BT.result.buy[0].Rate;

      var buyETH_BT = eth_BT.result.sell[0].Rate;
      var sellETH_BT = eth_BT.result.buy[0].Rate;

      var buyXRP_BT = xrp_BT.result.sell[0].Rate;
      var sellXRP_BT = xrp_BT.result.buy[0].Rate;

      var buyETC_BT = etc_BT.result.sell[0].Rate;
      var sellETC_BT = etc_BT.result.buy[0].Rate;

      // Price BS

      var buyBTC_BS = btc_BS.asks[0][0];
      var sellBTC_BS = btc_BS.bids[0][0];

      var buyETH_BS = eth_BS.asks[0][0];
      var sellETH_BS = eth_BS.bids[0][0];

      var buyXRP_BS = xrp_BS.asks[0][0];
      var sellXRP_BS = xrp_BS.bids[0][0];


  
      // Display

      for (var i = 0; i < market1.length; i++) {
        for (var j = 0; j < currency.length; j++) {
          if(market1[i] == 'BX' && currency[j] == 'ETC') continue
          if(market1[i] == 'BS' && currency[j] == 'ETC') continue
          else if (market1[i] == 'BX'){
            eval('$("#' + market1[i] + '-' + currency[j] + '_buychoice").text( "฿ " + parseFloat(buy'
             + currency[j] + '_' + market1[i] + ').toFixed(2));');
            eval('$("#' + market1[i] + '-' + currency[j] + '_sellchoice").text( "฿ " + parseFloat(sell'
             + currency[j] + '_' + market1[i] + ').toFixed(2));');
          }
          else if (market1[i] == 'CO' && currency[j] == 'XRP'){
            eval('$("#' + market1[i] + '-' + currency[j] + '_buychoice").text( "₩ " + parseFloat(buy'
             + currency[j] + '_' + market1[i] + ').toFixed(0));');
            eval('$("#' + market1[i] + '-' + currency[j] + '_sellchoice").text( "₩ " + parseFloat(sell'
             + currency[j] + '_' + market1[i] + ').toFixed(0));');
          }
          else if (currency[j] == 'XRP'){
            eval('$("#' + market1[i] + '-' + currency[j] + '_buychoice").text( "$ " + parseFloat(buy'
             + currency[j] + '_' + market1[i] + ').toFixed(4));');
            eval('$("#' + market1[i] + '-' + currency[j] + '_sellchoice").text( "$ " + parseFloat(sell'
             + currency[j] + '_' + market1[i] + ').toFixed(4));');
          }
          else if(market1[i] == 'CO'){
            eval('$("#' + market1[i] + '-' + currency[j] + '_buychoice").text( "₩ " + parseFloat(buy'
             + currency[j] + '_' + market1[i] + ').toFixed(0));');
            eval('$("#' + market1[i] + '-' + currency[j] + '_sellchoice").text( "₩ " + parseFloat(sell'
             + currency[j] + '_' + market1[i] + ').toFixed(0));');
          }
          else {
            eval('$("#' + market1[i] + '-' + currency[j] + '_buychoice").text( "$ " + parseFloat(buy'
             + currency[j] + '_' + market1[i] + ').toFixed(2));');
            eval('$("#' + market1[i] + '-' + currency[j] + '_sellchoice").text( "$ " + parseFloat(sell'
             + currency[j] + '_' + market1[i] + ').toFixed(2));');
          }
        }
      }

      // feeKK

      var feeBuySell_KK = 0.0026;
      var feeBS_KK = 1 - feeBuySell_KK;
      var feeWD_BTC_KK = 0.001
      var feeWD_ETH_KK = 0.005
      var feeWD_ETC_KK = 0.005
      var feeWD_XRP_KK = 0.02            

      // feeCO

      var feeBuySell_CO = 0.001;
      var feeBS_CO = 1 - feeBuySell_CO;
      var feeWD_BTC_CO = 0.0005
      var feeWD_ETH_CO = 0.01
      var feeWD_ETC_CO = 0.01
      var feeWD_XRP_CO = 0.01

      // feePO

      var feeBuySell_PO = 0.0025;
      var feeBS_PO = 1 - feeBuySell_PO;
      var feeWD_BTC_PO = 0.0001
      var feeWD_ETH_PO = 0.005
      var feeWD_ETC_PO = 0.01
      var feeWD_XRP_PO = 0.15

      // feeBF

      var feeBuySell_BF = 0.0025;
      var feeBS_BF = 1 - feeBuySell_BF;
      var feeWD_BTC_BF = 0.0001
      var feeWD_ETH_BF = 0.005
      var feeWD_ETC_BF = 0.01
      var feeWD_XRP_BF = 0.15

      // feeBT

      var feeBuySell_BT = 0.0025;
      var feeBS_BT = 1 - feeBuySell_BT;
      var feeWD_BTC_BT = 0.0001
      var feeWD_ETH_BT = 0.005
      var feeWD_ETC_BT = 0.01
      var feeWD_XRP_BT = 0.15

      // // feeBX

       var feeBuySell_BX = 0.0025;
       var feeBS_BX = 1 - feeBuySell_BX;
       var feeWD_BTC_BX = 0.001
       var feeWD_ETH_BX = 0.005
       var feeWD_XRP_BX = 0.01

       // // feeBS

       var feeBuySell_BS = 0.0025;
       var feeBS_BS = 1 - feeBuySell_BS;
       var feeWD_BTC_BS = 0.001
       var feeWD_ETH_BS = 0.005
       var feeWD_XRP_BS = 0.01

      // Price Fee

      for (var i = 0; i < market1.length; i++) {
        for (var j = 0; j < currency.length; j++) {
          if (market1[i] == 'BX' && currency[j] == 'ETC') continue;
          if (market1[i] == 'BS' && currency[j] == 'ETC') continue;
          else {
            eval("var buy" + currency[j] + "_" + market1[i] + "_fee = buy"
             + currency[j] + "_" + market1[i] + " / feeBS_" + market1[i]);
            eval("var sell" + currency[j] + "_" + market1[i] + "_fee = sell"
             + currency[j] + "_" + market1[i] + " * feeBS_" + market1[i]);  
          }
        }
      }   

      //// One Way 
      //KK-CO

      document.getElementById("KK-CO_BTC_oneWay").innerHTML= 

                  ((((((fundAmountKK/buyBTC_KK_fee)- feeWD_BTC_KK ) * sellBTC_CO_fee) - (fundAmountKK * 1100.55)) / (fundAmountKK * 1100.55)) * 100 ).toFixed(2);           

      document.getElementById("KK-CO_ETH_oneWay").innerHTML= 

                  ((((((fundAmountKK/buyETH_KK_fee)- feeWD_ETH_KK ) * sellETH_CO_fee) - (fundAmountKK * 1100.55)) / (fundAmountKK * 1100.55)) * 100 ).toFixed(2);           

      document.getElementById("KK-CO_XRP_oneWay").innerHTML= 

                  ((((((fundAmountKK/buyXRP_KK_fee)- feeWD_XRP_KK ) * sellXRP_CO_fee) - (fundAmountKK * 1100.55)) / (fundAmountKK * 1100.55)) * 100 ).toFixed(2);           

      document.getElementById("KK-CO_ETC_oneWay").innerHTML= 

                  ((((((fundAmountKK/buyETC_KK_fee)- feeWD_ETC_KK ) * sellETC_CO_fee) - (fundAmountKK * 1100.55)) / (fundAmountKK * 1100.55)) * 100 ).toFixed(2);           

      //KK-PO                       

      document.getElementById("KK-PO_BTC_oneWay").innerHTML= 

                  ((((((fundAmountKK/buyBTC_KK_fee)- feeWD_BTC_KK ) * sellBTC_PO_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);           

      document.getElementById("KK-PO_ETH_oneWay").innerHTML= 

                  ((((((fundAmountKK/buyETH_KK_fee)- feeWD_ETH_KK ) * sellETH_PO_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);           

      document.getElementById("KK-PO_XRP_oneWay").innerHTML= 

                  ((((((fundAmountKK/buyXRP_KK_fee)- feeWD_XRP_KK ) * sellXRP_PO_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);           

      document.getElementById("KK-PO_ETC_oneWay").innerHTML= 

                  ((((((fundAmountKK/buyETC_KK_fee)- feeWD_ETC_KK ) * sellETC_PO_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);           

      // //KK-BX                        

       document.getElementById("KK-BX_BTC_oneWay").innerHTML= 

                  ((((((fundAmountKK/buyBTC_KK_fee)- feeWD_BTC_KK ) * sellBTC_BX_fee) - (fundAmountKK * 33.35)) / (fundAmountKK * 33.35)) * 100 ).toFixed(2);           

       document.getElementById("KK-BX_ETH_oneWay").innerHTML= 

                   ((((((fundAmountKK/buyETH_KK_fee)- feeWD_ETH_KK ) * sellETH_BX_fee) - (fundAmountKK * 33.35)) / (fundAmountKK * 33.35)) * 100 ).toFixed(2);           

       document.getElementById("KK-BX_XRP_oneWay").innerHTML= 

                   ((((((fundAmountKK/buyXRP_KK_fee)- feeWD_XRP_KK ) * sellXRP_BX_fee) - (fundAmountKK * 33.35)) / (fundAmountKK * 33.35)) * 100 ).toFixed(2);           

      //KK-BF                       

      document.getElementById("KK-BF_BTC_oneWay").innerHTML= 

                  ((((((fundAmountKK/buyBTC_KK_fee)- feeWD_BTC_KK ) * sellBTC_BF_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);           

      document.getElementById("KK-BF_ETH_oneWay").innerHTML= 

                  ((((((fundAmountKK/buyETH_KK_fee)- feeWD_ETH_KK ) * sellETH_BF_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);           

      document.getElementById("KK-BF_XRP_oneWay").innerHTML= 

                  ((((((fundAmountKK/buyXRP_KK_fee)- feeWD_XRP_KK ) * sellXRP_BF_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);           

      document.getElementById("KK-BF_ETC_oneWay").innerHTML= 

                  ((((((fundAmountKK/buyETC_KK_fee)- feeWD_ETC_KK ) * sellETC_BF_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);           


      //KK-BT                       

      document.getElementById("KK-BT_BTC_oneWay").innerHTML= 

                  ((((((fundAmountKK/buyBTC_KK_fee)- feeWD_BTC_KK ) * sellBTC_BT_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);           

      document.getElementById("KK-BT_ETH_oneWay").innerHTML= 

                  ((((((fundAmountKK/buyETH_KK_fee)- feeWD_ETH_KK ) * sellETH_BT_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);           

      document.getElementById("KK-BT_XRP_oneWay").innerHTML= 

                  ((((((fundAmountKK/buyXRP_KK_fee)- feeWD_XRP_KK ) * sellXRP_BT_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);           

      document.getElementById("KK-BT_ETC_oneWay").innerHTML= 

                  ((((((fundAmountKK/buyETC_KK_fee)- feeWD_ETC_KK ) * sellETC_BT_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);           

     //KK-BS                       

      document.getElementById("KK-BS_BTC_oneWay").innerHTML= 

                  ((((((fundAmountKK/buyBTC_KK_fee)- feeWD_BTC_KK ) * sellBTC_BS_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);           

      document.getElementById("KK-BS_ETH_oneWay").innerHTML= 

                  ((((((fundAmountKK/buyETH_KK_fee)- feeWD_ETH_KK ) * sellETH_BS_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);           

      document.getElementById("KK-BS_XRP_oneWay").innerHTML= 

                  ((((((fundAmountKK/buyXRP_KK_fee)- feeWD_XRP_KK ) * sellXRP_BS_fee) - (fundAmountKK)) / (fundAmountKK)) * 100 ).toFixed(2);           

      

      //  //CO-KK                        

      document.getElementById("CO-KK_BTC_oneWay").innerHTML= 

                  ((((((fundAmountCO/buyBTC_CO_fee)- feeWD_BTC_CO ) * sellBTC_KK_fee) - (fundAmountCO * 0.000908)) / (fundAmountCO * 0.000908)) * 100 ).toFixed(2);           

      document.getElementById("CO-KK_ETH_oneWay").innerHTML= 

                  ((((((fundAmountCO/buyETH_CO_fee)- feeWD_ETH_CO ) * sellETH_KK_fee) - (fundAmountCO * 0.000908)) / (fundAmountCO * 0.000908)) * 100 ).toFixed(2);           

      document.getElementById("CO-KK_XRP_oneWay").innerHTML= 

                  ((((((fundAmountCO/buyXRP_CO_fee)- feeWD_XRP_CO ) * sellXRP_KK_fee) - (fundAmountCO * 0.000908)) / (fundAmountCO * 0.000908)) * 100 ).toFixed(2);           

      document.getElementById("CO-KK_ETC_oneWay").innerHTML= 

                  ((((((fundAmountCO/buyETC_CO_fee)- feeWD_ETC_CO ) * sellETC_KK_fee) - (fundAmountCO * 0.000908)) / (fundAmountCO * 0.000908)) * 100 ).toFixed(2);           


      //  //CO-PO                        

      document.getElementById("CO-PO_BTC_oneWay").innerHTML= 

                  ((((((fundAmountCO/buyBTC_CO_fee)- feeWD_BTC_CO ) * sellBTC_PO_fee) - (fundAmountCO * 0.000908)) / (fundAmountCO * 0.000908)) * 100 ).toFixed(2);           

      document.getElementById("CO-PO_ETH_oneWay").innerHTML= 

                  ((((((fundAmountCO/buyETH_CO_fee)- feeWD_ETH_CO ) * sellETH_PO_fee) - (fundAmountCO * 0.000908)) / (fundAmountCO * 0.000908)) * 100 ).toFixed(2);           

      document.getElementById("CO-PO_XRP_oneWay").innerHTML= 

                  ((((((fundAmountCO/buyXRP_CO_fee)- feeWD_XRP_CO ) * sellXRP_PO_fee) - (fundAmountCO * 0.000908)) / (fundAmountCO * 0.000908)) * 100 ).toFixed(2);           

      document.getElementById("CO-PO_ETC_oneWay").innerHTML= 

                  ((((((fundAmountCO/buyETC_CO_fee)- feeWD_ETC_CO ) * sellETC_PO_fee) - (fundAmountCO * 0.000908)) / (fundAmountCO * 0.000908)) * 100 ).toFixed(2);           

      // //CO-BX                       

       document.getElementById("CO-BX_BTC_oneWay").innerHTML= 

                   ((((((fundAmountCO/buyBTC_CO_fee)- feeWD_BTC_CO ) * sellBTC_BX_fee) - (fundAmountCO / 33.35)) / (fundAmountCO / 33.35)) * 100 ).toFixed(2);           

       document.getElementById("CO-BX_ETH_oneWay").innerHTML= 

                   ((((((fundAmountCO/buyETH_CO_fee)- feeWD_ETH_CO ) * sellETH_BX_fee) - (fundAmountCO / 33.35)) / (fundAmountCO / 33.35)) * 100 ).toFixed(2);           

      document.getElementById("CO-BX_XRP_oneWay").innerHTML= 

                  ((((((fundAmountCO/buyXRP_CO_fee)- feeWD_XRP_CO ) * sellXRP_BX_fee) - (fundAmountCO / 33.35)) / (fundAmountCO / 33.35)) * 100 ).toFixed(2);           

      //  //CO-BF                        

      document.getElementById("CO-BF_BTC_oneWay").innerHTML= 

                  ((((((fundAmountCO/buyBTC_CO_fee)- feeWD_BTC_CO ) * sellBTC_BF_fee) - (fundAmountCO * 0.000908)) / (fundAmountCO * 0.000908)) * 100 ).toFixed(2);           

      document.getElementById("CO-BF_ETH_oneWay").innerHTML= 

                  ((((((fundAmountCO/buyETH_CO_fee)- feeWD_ETH_CO ) * sellETH_BF_fee) - (fundAmountCO * 0.000908)) / (fundAmountCO * 0.000908)) * 100 ).toFixed(2);           

      document.getElementById("CO-BF_XRP_oneWay").innerHTML= 

                  ((((((fundAmountCO/buyXRP_CO_fee)- feeWD_XRP_CO ) * sellXRP_BF_fee) - (fundAmountCO * 0.000908)) / (fundAmountCO * 0.000908)) * 100 ).toFixed(2);           

      document.getElementById("CO-BF_ETC_oneWay").innerHTML= 

                  ((((((fundAmountCO/buyETC_CO_fee)- feeWD_ETC_CO ) * sellETC_BF_fee) - (fundAmountCO * 0.000908)) / (fundAmountCO * 0.000908)) * 100 ).toFixed(2);           

      //  //CO-BT                        

      document.getElementById("CO-BT_BTC_oneWay").innerHTML= 

                  ((((((fundAmountCO/buyBTC_CO_fee)- feeWD_BTC_CO ) * sellBTC_BT_fee) - (fundAmountCO * 0.000908)) / (fundAmountCO * 0.000908)) * 100 ).toFixed(2);           

      document.getElementById("CO-BT_ETH_oneWay").innerHTML= 

                  ((((((fundAmountCO/buyETH_CO_fee)- feeWD_ETH_CO ) * sellETH_BT_fee) - (fundAmountCO * 0.000908)) / (fundAmountCO * 0.000908)) * 100 ).toFixed(2);           

      document.getElementById("CO-BT_XRP_oneWay").innerHTML= 

                  ((((((fundAmountCO/buyXRP_CO_fee)- feeWD_XRP_CO ) * sellXRP_BT_fee) - (fundAmountCO * 0.000908)) / (fundAmountCO * 0.000908)) * 100 ).toFixed(2);           

      document.getElementById("CO-BT_ETC_oneWay").innerHTML= 

                  ((((((fundAmountCO/buyETC_CO_fee)- feeWD_ETC_CO ) * sellETC_BT_fee) - (fundAmountCO * 0.000908)) / (fundAmountCO * 0.000908)) * 100 ).toFixed(2);           

      //  //CO-BS                        

      document.getElementById("CO-BS_BTC_oneWay").innerHTML= 

                  ((((((fundAmountCO/buyBTC_CO_fee)- feeWD_BTC_CO ) * sellBTC_BS_fee) - (fundAmountCO * 0.000908)) / (fundAmountCO * 0.000908)) * 100 ).toFixed(2);           

      document.getElementById("CO-BS_ETH_oneWay").innerHTML= 

                  ((((((fundAmountCO/buyETH_CO_fee)- feeWD_ETH_CO ) * sellETH_BS_fee) - (fundAmountCO * 0.000908)) / (fundAmountCO * 0.000908)) * 100 ).toFixed(2);           

      document.getElementById("CO-BS_XRP_oneWay").innerHTML= 

                  ((((((fundAmountCO/buyXRP_CO_fee)- feeWD_XRP_CO ) * sellXRP_BS_fee) - (fundAmountCO * 0.000908)) / (fundAmountCO * 0.000908)) * 100 ).toFixed(2);           

      
      //PO-KK                        

      document.getElementById("PO-KK_BTC_oneWay").innerHTML= 

                  ((((((fundAmountPO/buyBTC_PO_fee)- feeWD_BTC_PO ) * sellBTC_KK_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);           

      document.getElementById("PO-KK_ETH_oneWay").innerHTML= 

                  ((((((fundAmountPO/buyETH_PO_fee)- feeWD_ETH_PO ) * sellETH_KK_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);           

      document.getElementById("PO-KK_XRP_oneWay").innerHTML= 

                  ((((((fundAmountPO/buyXRP_PO_fee)- feeWD_XRP_PO ) * sellXRP_KK_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);           

      document.getElementById("PO-KK_ETC_oneWay").innerHTML= 

                  ((((((fundAmountPO/buyETC_PO_fee)- feeWD_ETC_PO ) * sellETC_KK_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);           

                  //  //PO-CO                        

      document.getElementById("PO-CO_BTC_oneWay").innerHTML= 

                  ((((((fundAmountPO/buyBTC_PO_fee)- feeWD_BTC_PO ) * sellBTC_CO_fee) - (fundAmountPO * 1100.55)) / (fundAmountPO * 1100.55)) * 100 ).toFixed(2);           

      document.getElementById("PO-CO_ETH_oneWay").innerHTML= 

                  ((((((fundAmountPO/buyETH_PO_fee)- feeWD_ETH_PO ) * sellETH_CO_fee) - (fundAmountPO * 1100.55)) / (fundAmountPO * 1100.55)) * 100 ).toFixed(2);           

      document.getElementById("PO-CO_XRP_oneWay").innerHTML= 

                  ((((((fundAmountPO/buyXRP_PO_fee)- feeWD_XRP_PO ) * sellXRP_CO_fee) - (fundAmountPO * 1100.55)) / (fundAmountPO * 1100.55)) * 100 ).toFixed(2);           

      document.getElementById("PO-CO_ETC_oneWay").innerHTML= 

                  ((((((fundAmountPO/buyETC_PO_fee)- feeWD_ETC_PO ) * sellETC_CO_fee) - (fundAmountPO * 1100.55)) / (fundAmountPO * 1100.55)) * 100 ).toFixed(2);           

                  // //PO-BX                        

       document.getElementById("PO-BX_BTC_oneWay").innerHTML= 

                 ((((((fundAmountPO/buyBTC_PO_fee)- feeWD_BTC_PO ) * sellBTC_BX_fee) - (fundAmountPO * 33.35)) / (fundAmountPO * 33.35)) * 100 ).toFixed(2);           

      document.getElementById("PO-BX_ETH_oneWay").innerHTML= 

                   ((((((fundAmountPO/buyETH_PO_fee)- feeWD_ETH_PO ) * sellETH_BX_fee) - (fundAmountPO * 33.35)) / (fundAmountPO * 33.35)) * 100 ).toFixed(2);           

      document.getElementById("PO-BX_XRP_oneWay").innerHTML= 

                   ((((((fundAmountPO/buyXRP_PO_fee)- feeWD_XRP_PO ) * sellXRP_BX_fee) - (fundAmountPO * 33.35)) / (fundAmountPO * 33.35)) * 100 ).toFixed(2);           
 //PO-BF                       

      document.getElementById("PO-BF_BTC_oneWay").innerHTML= 

                  ((((((fundAmountPO/buyBTC_PO_fee)- feeWD_BTC_PO ) * sellBTC_BF_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);           

      document.getElementById("PO-BF_ETH_oneWay").innerHTML= 

                  ((((((fundAmountPO/buyETH_PO_fee)- feeWD_ETH_PO ) * sellETH_BF_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);           

      document.getElementById("PO-BF_XRP_oneWay").innerHTML= 

                  ((((((fundAmountPO/buyXRP_PO_fee)- feeWD_XRP_PO ) * sellXRP_BF_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);           

      document.getElementById("PO-BF_ETC_oneWay").innerHTML= 

                  ((((((fundAmountPO/buyETC_PO_fee)- feeWD_ETC_PO ) * sellETC_BF_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);           

//PO-BT                       

      document.getElementById("PO-BT_BTC_oneWay").innerHTML= 

                  ((((((fundAmountPO/buyBTC_PO_fee)- feeWD_BTC_PO ) * sellBTC_BT_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);           

      document.getElementById("PO-BT_ETH_oneWay").innerHTML= 

                  ((((((fundAmountPO/buyETH_PO_fee)- feeWD_ETH_PO ) * sellETH_BT_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);           

      document.getElementById("PO-BT_XRP_oneWay").innerHTML= 

                  ((((((fundAmountPO/buyXRP_PO_fee)- feeWD_XRP_PO ) * sellXRP_BT_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);           

      document.getElementById("PO-BT_ETC_oneWay").innerHTML= 

                  ((((((fundAmountPO/buyETC_PO_fee)- feeWD_ETC_PO ) * sellETC_BT_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);           

 //PO-BS                      

      document.getElementById("PO-BS_BTC_oneWay").innerHTML= 

                  ((((((fundAmountPO/buyBTC_PO_fee)- feeWD_BTC_PO ) * sellBTC_BS_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);           

      document.getElementById("PO-BS_ETH_oneWay").innerHTML= 

                  ((((((fundAmountPO/buyETH_PO_fee)- feeWD_ETH_PO ) * sellETH_BS_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);           

      document.getElementById("PO-BS_XRP_oneWay").innerHTML= 

                  ((((((fundAmountPO/buyXRP_PO_fee)- feeWD_XRP_PO ) * sellXRP_BS_fee) - (fundAmountPO)) / (fundAmountPO)) * 100 ).toFixed(2);           

      


      // // //BX-KK                        

       document.getElementById("BX-KK_BTC_oneWay").innerHTML= 

                   ((((((fundAmountBX/buyBTC_BX_fee)- feeWD_BTC_BX ) * sellBTC_KK_fee) - (fundAmountBX / 33.35)) / (fundAmountBX / 33.35)) * 100 ).toFixed(2);           

       document.getElementById("BX-KK_ETH_oneWay").innerHTML= 

                   ((((((fundAmountBX/buyETH_BX_fee)- feeWD_ETH_BX ) * sellETH_KK_fee) - (fundAmountBX / 33.35)) / (fundAmountBX / 33.35)) * 100 ).toFixed(2);           

       document.getElementById("BX-KK_XRP_oneWay").innerHTML= 

                   ((((((fundAmountBX/buyXRP_BX_fee)- feeWD_XRP_BX ) * sellXRP_KK_fee) - (fundAmountBX / 33.35)) / (fundAmountBX / 33.35)) * 100 ).toFixed(2);           

      
      

      //BX-CO  

       document.getElementById("BX-CO_BTC_oneWay").innerHTML= 

                   ((((((fundAmountBX/buyBTC_BX_fee)- feeWD_BTC_BX ) * sellBTC_CO_fee) - (fundAmountBX * 33.35)) / (fundAmountBX * 33.35)) * 100 ).toFixed(2);           

       document.getElementById("BX-CO_ETH_oneWay").innerHTML= 

                   ((((((fundAmountBX/buyETH_BX_fee)- feeWD_ETH_BX ) * sellETH_CO_fee) - (fundAmountBX * 33.35)) / (fundAmountBX * 33.35)) * 100 ).toFixed(2);           

       document.getElementById("BX-CO_XRP_oneWay").innerHTML= 

                   ((((((fundAmountBX/buyXRP_BX_fee)- feeWD_XRP_BX ) * sellXRP_CO_fee) - (fundAmountBX * 33.35)) / (fundAmountBX * 33.35)) * 100 ).toFixed(2);           

      //BX-PO

       document.getElementById("BX-PO_BTC_oneWay").innerHTML= 

                   ((((((fundAmountBX/buyBTC_BX_fee)- feeWD_BTC_BX ) * sellBTC_PO_fee) - (fundAmountBX / 33.35)) / (fundAmountBX / 33.35)) * 100 ).toFixed(2);           

       document.getElementById("BX-PO_ETH_oneWay").innerHTML= 

                   ((((((fundAmountBX/buyETH_BX_fee)- feeWD_ETH_BX ) * sellETH_PO_fee) - (fundAmountBX / 33.35)) / (fundAmountBX / 33.35)) * 100 ).toFixed(2);           

       document.getElementById("BX-PO_XRP_oneWay").innerHTML= 

                   ((((((fundAmountBX/buyXRP_BX_fee)- feeWD_XRP_BX ) * sellXRP_PO_fee) - (fundAmountBX / 33.35)) / (fundAmountBX / 33.35)) * 100 ).toFixed(2);           

        //BX-BF

       document.getElementById("BX-BF_BTC_oneWay").innerHTML= 

                   ((((((fundAmountBX/buyBTC_BX_fee)- feeWD_BTC_BX ) * sellBTC_BF_fee) - (fundAmountBX / 33.35)) / (fundAmountBX / 33.35)) * 100 ).toFixed(2);           

       document.getElementById("BX-BF_ETH_oneWay").innerHTML= 

                   ((((((fundAmountBX/buyETH_BX_fee)- feeWD_ETH_BX ) * sellETH_BF_fee) - (fundAmountBX / 33.35)) / (fundAmountBX / 33.35)) * 100 ).toFixed(2);           

       document.getElementById("BX-BF_XRP_oneWay").innerHTML= 

                   ((((((fundAmountBX/buyXRP_BX_fee)- feeWD_XRP_BX ) * sellXRP_BF_fee) - (fundAmountBX / 33.35)) / (fundAmountBX / 33.35)) * 100 ).toFixed(2);           

//BX-BT

       document.getElementById("BX-BT_BTC_oneWay").innerHTML= 

                   ((((((fundAmountBX/buyBTC_BX_fee)- feeWD_BTC_BX ) * sellBTC_BT_fee) - (fundAmountBX / 33.35)) / (fundAmountBX / 33.35)) * 100 ).toFixed(2);           

       document.getElementById("BX-BT_ETH_oneWay").innerHTML= 

                   ((((((fundAmountBX/buyETH_BX_fee)- feeWD_ETH_BX ) * sellETH_BT_fee) - (fundAmountBX / 33.35)) / (fundAmountBX / 33.35)) * 100 ).toFixed(2);           

       document.getElementById("BX-BT_XRP_oneWay").innerHTML= 

                   ((((((fundAmountBX/buyXRP_BX_fee)- feeWD_XRP_BX ) * sellXRP_BT_fee) - (fundAmountBX / 33.35)) / (fundAmountBX / 33.35)) * 100 ).toFixed(2);           
//BX-BS

       document.getElementById("BX-BS_BTC_oneWay").innerHTML= 

                   ((((((fundAmountBX/buyBTC_BX_fee)- feeWD_BTC_BX ) * sellBTC_BS_fee) - (fundAmountBX / 33.35)) / (fundAmountBX / 33.35)) * 100 ).toFixed(2);           

       document.getElementById("BX-BS_ETH_oneWay").innerHTML= 

                   ((((((fundAmountBX/buyETH_BX_fee)- feeWD_ETH_BX ) * sellETH_BS_fee) - (fundAmountBX / 33.35)) / (fundAmountBX / 33.35)) * 100 ).toFixed(2);           

       document.getElementById("BX-BS_XRP_oneWay").innerHTML= 

                   ((((((fundAmountBX/buyXRP_BX_fee)- feeWD_XRP_BX ) * sellXRP_BS_fee) - (fundAmountBX / 33.35)) / (fundAmountBX / 33.35)) * 100 ).toFixed(2);           


      //BF-KK                        

      document.getElementById("BF-KK_BTC_oneWay").innerHTML= 

                  ((((((fundAmountBF/buyBTC_BF_fee)- feeWD_BTC_BF ) * sellBTC_KK_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);           

      document.getElementById("BF-KK_ETH_oneWay").innerHTML= 

                  ((((((fundAmountBF/buyETH_BF_fee)- feeWD_ETH_BF ) * sellETH_KK_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);           

      document.getElementById("BF-KK_XRP_oneWay").innerHTML= 

                  ((((((fundAmountBF/buyXRP_BF_fee)- feeWD_XRP_BF ) * sellXRP_KK_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);           

      document.getElementById("BF-KK_ETC_oneWay").innerHTML= 

                  ((((((fundAmountBF/buyETC_BF_fee)- feeWD_ETC_BF ) * sellETC_KK_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);           

     
      
      //BF-CO                        

      document.getElementById("BF-CO_BTC_oneWay").innerHTML= 

                  ((((((fundAmountBF/buyBTC_BF_fee)- feeWD_BTC_BF ) * sellBTC_CO_fee) - (fundAmountBF * 1100.55)) / (fundAmountBF * 1100.55)) * 100 ).toFixed(2);           

      document.getElementById("BF-CO_ETH_oneWay").innerHTML= 

                  ((((((fundAmountBF/buyETH_BF_fee)- feeWD_ETH_BF ) * sellETH_CO_fee) - (fundAmountBF * 1100.55)) / (fundAmountBF * 1100.55)) * 100 ).toFixed(2);           

      document.getElementById("BF-CO_XRP_oneWay").innerHTML= 

                  ((((((fundAmountBF/buyXRP_BF_fee)- feeWD_XRP_BF ) * sellXRP_CO_fee) - (fundAmountBF * 1100.55)) / (fundAmountBF * 1100.55)) * 100 ).toFixed(2);           

      document.getElementById("BF-CO_ETC_oneWay").innerHTML= 

                  ((((((fundAmountBF/buyETC_BF_fee)- feeWD_ETC_BF ) * sellETC_CO_fee) - (fundAmountBF * 1100.55)) / (fundAmountBF * 1100.55)) * 100 ).toFixed(2);           

      //BF-PO                       

      document.getElementById("BF-PO_BTC_oneWay").innerHTML= 

                  ((((((fundAmountBF/buyBTC_BF_fee)- feeWD_BTC_BF ) * sellBTC_PO_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);           

      document.getElementById("BF-PO_ETH_oneWay").innerHTML= 

                  ((((((fundAmountBF/buyETH_BF_fee)- feeWD_ETH_BF ) * sellETH_PO_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);           

      document.getElementById("BF-PO_XRP_oneWay").innerHTML= 

                  ((((((fundAmountBF/buyXRP_BF_fee)- feeWD_XRP_BF ) * sellXRP_PO_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);           

      document.getElementById("BF-PO_ETC_oneWay").innerHTML= 

                  ((((((fundAmountBF/buyETC_BF_fee)- feeWD_ETC_BF ) * sellETC_PO_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);           

// //BF-BX                        

       document.getElementById("BF-BX_BTC_oneWay").innerHTML= 

                 ((((((fundAmountBF/buyBTC_BF_fee)- feeWD_BTC_BF ) * sellBTC_BX_fee) - (fundAmountBF * 33.35)) / (fundAmountBF * 33.35)) * 100 ).toFixed(2);           

      document.getElementById("BF-BX_ETH_oneWay").innerHTML= 

                   ((((((fundAmountBF/buyETH_BF_fee)- feeWD_ETH_BF ) * sellETH_BX_fee) - (fundAmountBF * 33.35)) / (fundAmountBF * 33.35)) * 100 ).toFixed(2);           

      document.getElementById("BF-BX_XRP_oneWay").innerHTML= 

                   ((((((fundAmountBF/buyXRP_BF_fee)- feeWD_XRP_BF ) * sellXRP_BX_fee) - (fundAmountBF * 33.35)) / (fundAmountBF * 33.35)) * 100 ).toFixed(2);           
 
//BF-BT                       

      document.getElementById("BF-BT_BTC_oneWay").innerHTML= 

                  ((((((fundAmountBF/buyBTC_BF_fee)- feeWD_BTC_BF ) * sellBTC_BT_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);           

      document.getElementById("BF-BT_ETH_oneWay").innerHTML= 

                  ((((((fundAmountBF/buyETH_BF_fee)- feeWD_ETH_BF ) * sellETH_BT_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);           

      document.getElementById("BF-BT_XRP_oneWay").innerHTML= 

                  ((((((fundAmountBF/buyXRP_BF_fee)- feeWD_XRP_BF ) * sellXRP_BT_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);           

      document.getElementById("BF-BT_ETC_oneWay").innerHTML= 

                  ((((((fundAmountBF/buyETC_BF_fee)- feeWD_ETC_BF ) * sellETC_BT_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);           

//BF-BS                       

      document.getElementById("BF-BS_BTC_oneWay").innerHTML= 

                  ((((((fundAmountBF/buyBTC_BF_fee)- feeWD_BTC_BF ) * sellBTC_BS_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);           

      document.getElementById("BF-BS_ETH_oneWay").innerHTML= 

                  ((((((fundAmountBF/buyETH_BF_fee)- feeWD_ETH_BF ) * sellETH_BS_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);           

      document.getElementById("BF-BS_XRP_oneWay").innerHTML= 

                  ((((((fundAmountBF/buyXRP_BF_fee)- feeWD_XRP_BF ) * sellXRP_BS_fee) - (fundAmountBF)) / (fundAmountBF)) * 100 ).toFixed(2);           

      
//BT-KK                        

      document.getElementById("BT-KK_BTC_oneWay").innerHTML= 

                  ((((((fundAmountBT/buyBTC_BT_fee)- feeWD_BTC_BT ) * sellBTC_KK_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);           

      document.getElementById("BT-KK_ETH_oneWay").innerHTML= 

                  ((((((fundAmountBT/buyETH_BT_fee)- feeWD_ETH_BT ) * sellETH_KK_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);           

      document.getElementById("BT-KK_XRP_oneWay").innerHTML= 

                  ((((((fundAmountBT/buyXRP_BT_fee)- feeWD_XRP_BT ) * sellXRP_KK_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);           

      document.getElementById("BT-KK_ETC_oneWay").innerHTML= 

                  ((((((fundAmountBT/buyETC_BT_fee)- feeWD_ETC_BT ) * sellETC_KK_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);           

      
      //BT-CO                        

      document.getElementById("BT-CO_BTC_oneWay").innerHTML= 

                  ((((((fundAmountBT/buyBTC_BT_fee)- feeWD_BTC_BT ) * sellBTC_CO_fee) - (fundAmountBT * 1100.55)) / (fundAmountBT * 1100.55)) * 100 ).toFixed(2);           

      document.getElementById("BT-CO_ETH_oneWay").innerHTML= 

                  ((((((fundAmountBT/buyETH_BT_fee)- feeWD_ETH_BT ) * sellETH_CO_fee) - (fundAmountBT * 1100.55)) / (fundAmountBT * 1100.55)) * 100 ).toFixed(2);           

      document.getElementById("BT-CO_XRP_oneWay").innerHTML= 

                  ((((((fundAmountBT/buyXRP_BT_fee)- feeWD_XRP_BT ) * sellXRP_CO_fee) - (fundAmountBT * 1100.55)) / (fundAmountBT * 1100.55)) * 100 ).toFixed(2);           

      document.getElementById("BT-CO_ETC_oneWay").innerHTML= 

                  ((((((fundAmountBT/buyETC_BT_fee)- feeWD_ETC_BT ) * sellETC_CO_fee) - (fundAmountBT * 1100.55)) / (fundAmountBT * 1100.55)) * 100 ).toFixed(2);           

      //BT-PO                       

      document.getElementById("BT-PO_BTC_oneWay").innerHTML= 

                  ((((((fundAmountBT/buyBTC_BT_fee)- feeWD_BTC_BT ) * sellBTC_PO_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);           

      document.getElementById("BT-PO_ETH_oneWay").innerHTML= 

                  ((((((fundAmountBT/buyETH_BT_fee)- feeWD_ETH_BT ) * sellETH_PO_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);           

      document.getElementById("BT-PO_XRP_oneWay").innerHTML= 

                  ((((((fundAmountBT/buyXRP_BT_fee)- feeWD_XRP_BT ) * sellXRP_PO_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);           

      document.getElementById("BT-PO_ETC_oneWay").innerHTML= 

                  ((((((fundAmountBT/buyETC_BT_fee)- feeWD_ETC_BT ) * sellETC_PO_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);           

// //BT-BX                        

       document.getElementById("BT-BX_BTC_oneWay").innerHTML= 

                 ((((((fundAmountBT/buyBTC_BT_fee)- feeWD_BTC_BT ) * sellBTC_BX_fee) - (fundAmountBT * 33.35)) / (fundAmountBT * 33.35)) * 100 ).toFixed(2);           

      document.getElementById("BT-BX_ETH_oneWay").innerHTML= 

                   ((((((fundAmountBT/buyETH_BT_fee)- feeWD_ETH_BT ) * sellETH_BX_fee) - (fundAmountBT * 33.35)) / (fundAmountBT * 33.35)) * 100 ).toFixed(2);           

      document.getElementById("BT-BX_XRP_oneWay").innerHTML= 

                   ((((((fundAmountBT/buyXRP_BT_fee)- feeWD_XRP_BT ) * sellXRP_BX_fee) - (fundAmountBT * 33.35)) / (fundAmountBT * 33.35)) * 100 ).toFixed(2);           
 
//BT-BF                       

      document.getElementById("BT-BF_BTC_oneWay").innerHTML= 

                  ((((((fundAmountBT/buyBTC_BT_fee)- feeWD_BTC_BT ) * sellBTC_BF_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);           

      document.getElementById("BT-BF_ETH_oneWay").innerHTML= 

                  ((((((fundAmountBT/buyETH_BT_fee)- feeWD_ETH_BT ) * sellETH_BF_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);           

      document.getElementById("BT-BF_XRP_oneWay").innerHTML= 

                  ((((((fundAmountBT/buyXRP_BT_fee)- feeWD_XRP_BT ) * sellXRP_BF_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);           

      document.getElementById("BT-BF_ETC_oneWay").innerHTML= 

                  ((((((fundAmountBT/buyETC_BT_fee)- feeWD_ETC_BT ) * sellETC_BF_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);           

//BT-BS                      

      document.getElementById("BT-BS_BTC_oneWay").innerHTML= 

                  ((((((fundAmountBT/buyBTC_BT_fee)- feeWD_BTC_BT ) * sellBTC_BS_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);           

      document.getElementById("BT-BS_ETH_oneWay").innerHTML= 

                  ((((((fundAmountBT/buyETH_BT_fee)- feeWD_ETH_BT ) * sellETH_BS_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);           

      document.getElementById("BT-BS_XRP_oneWay").innerHTML= 

                  ((((((fundAmountBT/buyXRP_BT_fee)- feeWD_XRP_BT ) * sellXRP_BS_fee) - (fundAmountBT)) / (fundAmountBT)) * 100 ).toFixed(2);           

     //BS-KK                        

      document.getElementById("BS-KK_BTC_oneWay").innerHTML= 

                  ((((((fundAmountBS/buyBTC_BS_fee)- feeWD_BTC_BS ) * sellBTC_KK_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);           

      document.getElementById("BS-KK_ETH_oneWay").innerHTML= 

                  ((((((fundAmountBS/buyETH_BS_fee)- feeWD_ETH_BS ) * sellETH_KK_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);           

      document.getElementById("BS-KK_XRP_oneWay").innerHTML= 

                  ((((((fundAmountBS/buyXRP_BS_fee)- feeWD_XRP_BS ) * sellXRP_KK_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);           

      

      
      //BS-CO                        

      document.getElementById("BS-CO_BTC_oneWay").innerHTML= 

                  ((((((fundAmountBS/buyBTC_BS_fee)- feeWD_BTC_BS ) * sellBTC_CO_fee) - (fundAmountBS * 1100.55)) / (fundAmountBS * 1100.55)) * 100 ).toFixed(2);           

      document.getElementById("BS-CO_ETH_oneWay").innerHTML= 

                  ((((((fundAmountBS/buyETH_BS_fee)- feeWD_ETH_BS ) * sellETH_CO_fee) - (fundAmountBS * 1100.55)) / (fundAmountBS * 1100.55)) * 100 ).toFixed(2);           

      document.getElementById("BS-CO_XRP_oneWay").innerHTML= 

                  ((((((fundAmountBS/buyXRP_BS_fee)- feeWD_XRP_BS ) * sellXRP_CO_fee) - (fundAmountBS * 1100.55)) / (fundAmountBS * 1100.55)) * 100 ).toFixed(2);           

      
      //BS-PO                       

      document.getElementById("BS-PO_BTC_oneWay").innerHTML= 

                  ((((((fundAmountBS/buyBTC_BS_fee)- feeWD_BTC_BS ) * sellBTC_PO_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);           

      document.getElementById("BS-PO_ETH_oneWay").innerHTML= 

                  ((((((fundAmountBS/buyETH_BS_fee)- feeWD_ETH_BS ) * sellETH_PO_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);           

      document.getElementById("BS-PO_XRP_oneWay").innerHTML= 

                  ((((((fundAmountBS/buyXRP_BS_fee)- feeWD_XRP_BS ) * sellXRP_PO_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);           

      
// //BS-BX                        

       document.getElementById("BS-BX_BTC_oneWay").innerHTML= 

                 ((((((fundAmountBS/buyBTC_BS_fee)- feeWD_BTC_BS ) * sellBTC_BX_fee) - (fundAmountBS * 33.35)) / (fundAmountBS * 33.35)) * 100 ).toFixed(2);           

      document.getElementById("BS-BX_ETH_oneWay").innerHTML= 

                   ((((((fundAmountBS/buyETH_BS_fee)- feeWD_ETH_BS ) * sellETH_BX_fee) - (fundAmountBS * 33.35)) / (fundAmountBS * 33.35)) * 100 ).toFixed(2);           

      document.getElementById("BS-BX_XRP_oneWay").innerHTML= 

                   ((((((fundAmountBS/buyXRP_BS_fee)- feeWD_XRP_BS ) * sellXRP_BX_fee) - (fundAmountBS * 33.35)) / (fundAmountBS * 33.35)) * 100 ).toFixed(2);           
 

 //BS-BF                       

      document.getElementById("BS-BF_BTC_oneWay").innerHTML= 

                  ((((((fundAmountBS/buyBTC_BS_fee)- feeWD_BTC_BS ) * sellBTC_BF_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);           

      document.getElementById("BS-BF_ETH_oneWay").innerHTML= 

                  ((((((fundAmountBS/buyETH_BS_fee)- feeWD_ETH_BS ) * sellETH_BF_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);           

      document.getElementById("BS-BF_XRP_oneWay").innerHTML= 

                  ((((((fundAmountBS/buyXRP_BS_fee)- feeWD_XRP_BS ) * sellXRP_BF_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);           

//BS-BT                       

      document.getElementById("BS-BT_BTC_oneWay").innerHTML= 

                  ((((((fundAmountBS/buyBTC_BS_fee)- feeWD_BTC_BS ) * sellBTC_BT_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);           

      document.getElementById("BS-BT_ETH_oneWay").innerHTML= 

                  ((((((fundAmountBS/buyETH_BS_fee)- feeWD_ETH_BS ) * sellETH_BT_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);           

      document.getElementById("BS-BT_XRP_oneWay").innerHTML= 

                  ((((((fundAmountBS/buyXRP_BS_fee)- feeWD_XRP_BS ) * sellXRP_BT_fee) - (fundAmountBS)) / (fundAmountBS)) * 100 ).toFixed(2);           

      

      // function calculate (priMarket, secMarket, priCurrency, secCurrency, pattern) {

      //   switch(pattern) {

      //     case 1:

      //       return eval('((fundAmount' + priMarket + ' / buy' + priCurrency + '_' + priMarket

      //        + '_fee) - feeWD_' + priCurrency + '_' + priMarket + ').toFixed(2);');

      //     case 2:

      //       return eval('(((fundAmount' + priMarket + ' / buy' + priCurrency + '_' + priMarket

      //        + '_fee) - feeWD_' + priCurrency + '_' + priMarket + ') * sell' + priCurrency + '_'

      //        + secMarket + '_fee).toFixed(0);');

      //     case 3:

      //       return eval('(((((fundAmount' + priMarket + ' / buy' + priCurrency + '_' + priMarket

      //        + '_fee) - feeWD_' + priCurrency + '_' + priMarket + ') * sell' + priCurrency + '_'

      //        + secMarket + '_fee) / buy' + secCurrency + '_' + secMarket + '_fee) - feeWD_'

      //        + secCurrency + '_' + priMarket + ').toFixed(2);');

      //     case 4:

      //       return eval('((((((fundAmount' + priMarket + ' / buy' + priCurrency + '_' + priMarket

      //        + '_fee) - feeWD_' + priCurrency + '_' + priMarket + ') * sell' + priCurrency + '_'

      //        + secMarket + '_fee) / buy' + secCurrency + '_' + secMarket + '_fee) - feeWD_'

      //        + secCurrency + '_' + priMarket + ') * sell' + secCurrency + '_' + priMarket

      //        + '_fee).toFixed(0);');

      //     case 5:

      //       return eval('(((((((fundAmount' + priMarket + ' / buy' + priCurrency + '_' + priMarket

      //        + '_fee) - feeWD_' + priCurrency + '_' + priMarket + ') * sell' + priCurrency + '_'

      //        + secMarket + '_fee) / buy' + secCurrency + '_' + secMarket + '_fee) - feeWD_'

      //        + secCurrency + '_' + priMarket + ') * sell' + secCurrency + '_' + priMarket

      //        + '_fee) - fundAmount' + priMarket + ').toFixed(0);');

      //     case 6:

      //       return eval('(((((((((fundAmount' + priMarket + ' / buy' + priCurrency + '_' + priMarket

      //        + '_fee) - feeWD_' + priCurrency + '_' + priMarket + ') * sell' + priCurrency + '_'

      //        + secMarket + '_fee) / buy' + secCurrency + '_' + secMarket + '_fee) - feeWD_'

      //        + secCurrency + '_' + priMarket + ') * sell' + secCurrency + '_' + priMarket

      //        + '_fee) - fundAmount' + priMarket + ') / fundAmount' + priMarket + ') * 100).toFixed(2);');

      //   }

      // }

     
      /*
      1. fundAmountCo
      2. 1./buyETH_CO
      3. 2.*sellETH_KK
      4. 3./buyXRP_KK
      5. 4.*sellXRP_CO
      6. (5.-1.)
      7. (6./1.)*100*/

      /*************************************
        FUNCTION REFERENCE : KK-CO ETH-XRP
        case 1 : ((fundAmountKK/buyETH_KK_fee)- feeWD_ETH_KK ).toFixed(2);
        case 2 : (((fundAmountKK/buyETH_KK_fee)- feeWD_ETH_KK ) * sellETH_CO_fee).toFixed(0);
        case 3 : (((((fundAmountKK/buyETH_KK_fee)- feeWD_ETH_KK ) * sellETH_CO_fee) / buyXRP_CO_fee)- feeWD_XRP_CO).toFixed(2);            
        case 4 : ((((((fundAmountKK/buyETH_KK_fee)- feeWD_ETH_KK ) * sellETH_CO_fee) / buyXRP_CO_fee)- feeWD_XRP_CO) * sellXRP_KK_fee).toFixed(0);
        case 5 : (((((((fundAmountKK/buyETH_KK_fee)- feeWD_ETH_KK ) * sellETH_CO_fee) / buyXRP_CO_fee)- feeWD_XRP_CO) * sellXRP_KK_fee) - fundAmountKK).toFixed(0);
        case 6 : (((((((((fundAmountKK/buyETH_KK_fee)- feeWD_ETH_KK ) * sellETH_CO_fee) / buyXRP_CO_fee)- feeWD_XRP_CO) * sellXRP_KK_fee) - fundAmountKK) / fundAmountKK) * 100).toFixed(2);
      *************************************/

      function calculate (priMarket, secMarket, priCurrency, secCurrency, pattern) {
        switch(pattern) {
          case 1:
            return eval('((fundAmount' + priMarket + ' / buy' + priCurrency + '_' + priMarket
             + '_fee) - feeWD_' + priCurrency + '_' + priMarket + ').toFixed(2);');
          case 2:
            return eval('(((fundAmount' + priMarket + ' / buy' + priCurrency + '_' + priMarket
             + '_fee) - feeWD_' + priCurrency + '_' + priMarket + ') * sell' + priCurrency + '_'
             + secMarket + '_fee).toFixed(0);');
          case 3:
            return eval('(((((fundAmount' + priMarket + ' / buy' + priCurrency + '_' + priMarket
             + '_fee) - feeWD_' + priCurrency + '_' + priMarket + ') * sell' + priCurrency + '_'
             + secMarket + '_fee) / buy' + secCurrency + '_' + secMarket + '_fee) - feeWD_'
             + secCurrency + '_' + priMarket + ').toFixed(2);');
          case 4:
            return eval('((((((fundAmount' + priMarket + ' / buy' + priCurrency + '_' + priMarket
             + '_fee) - feeWD_' + priCurrency + '_' + priMarket + ') * sell' + priCurrency + '_'
             + secMarket + '_fee) / buy' + secCurrency + '_' + secMarket + '_fee) - feeWD_'
             + secCurrency + '_' + priMarket + ') * sell' + secCurrency + '_' + priMarket
             + '_fee).toFixed(0);');
          case 5:
            return eval('(((((((fundAmount' + priMarket + ' / buy' + priCurrency + '_' + priMarket
             + '_fee) - feeWD_' + priCurrency + '_' + priMarket + ') * sell' + priCurrency + '_'
             + secMarket + '_fee) / buy' + secCurrency + '_' + secMarket + '_fee) - feeWD_'
             + secCurrency + '_' + priMarket + ') * sell' + secCurrency + '_' + priMarket
             + '_fee) - fundAmount' + priMarket + ').toFixed(0);');
          case 6:
            return eval('(((((((((fundAmount' + priMarket + ' / buy' + priCurrency + '_' + priMarket
             + '_fee) - feeWD_' + priCurrency + '_' + priMarket + ') * sell' + priCurrency + '_'
             + secMarket + '_fee) / buy' + secCurrency + '_' + secMarket + '_fee) - feeWD_'
             + secCurrency + '_' + priMarket + ') * sell' + secCurrency + '_' + priMarket
             + '_fee) - fundAmount' + priMarket + ') / fundAmount' + priMarket + ') * 100).toFixed(2);');
        }
      }

      for (var i = 0; i < market.length; i++) {
        for (var j = 0; j < market.length; j++) {
          for (var k = 0; k < currency.length; k++) {
            for (var l = 0; l < currency.length; l++) {
              if (market[i] == market[j] || currency[k] == currency[l]) continue;
              else if(market[i] == 'BX' && (currency[k] == 'ETC' || currency[l] == 'ETC')) continue; 
              else if(market[j] == 'BX' && (currency[k] == 'ETC' || currency[l] == 'ETC')) continue;
              else if(market[i] == 'CO') {
                eval('$("#cryptoGO_' + market[i] + '-' + market[j] + '_' + currency[k] + '-' + currency[l]
                 + '").text(' + calculate(market[i], market[j], currency[k], currency[l], 1) + ');');
                eval('$("#moneyThere_' + market[i] + '-' + market[j] + '_' + currency[k] + '-' + currency[l]
                 + '").text("$ " + ' + calculate(market[i], market[j], currency[k], currency[l], 2) + ');');
                eval('$("#cryptoBack_' + market[i] + '-' + market[j] + '_' + currency[k] + '-' + currency[l]
                 + '").text(' + calculate(market[i], market[j], currency[k], currency[l], 3) + ');');
                eval('$("#moneyBack_' + market[i] + '-' + market[j] + '_' + currency[k] + '-' + currency[l]
                 + '").text("₩ " +  ' + calculate(market[i], market[j], currency[k], currency[l], 4) + ');');
                eval('$("#profit_' + market[i] + '-' + market[j] + '_' + currency[k] + '-' + currency[l]
                 + '").text("₩ " +  ' + calculate(market[i], market[j], currency[k], currency[l], 5) + ');');
                eval('document.getElementById("profit%_' + market[i] + '-' + market[j] + '_' + currency[k] + '-' + currency[l]
                 + '").innerHTML = ' + calculate(market[i], market[j], currency[k], currency[l], 6) + ';');
              }
              else if(market[j] == 'CO') {
                eval('$("#cryptoGO_' + market[i] + '-' + market[j] + '_' + currency[k] + '-' + currency[l]
                 + '").text( ' + calculate(market[i], market[j], currency[k], currency[l], 1) + ');');
                eval('$("#moneyThere_' + market[i] + '-' + market[j] + '_' + currency[k] + '-' + currency[l]
                 + '").text("₩ " + ' + calculate(market[i], market[j], currency[k], currency[l], 2) + ');');
                eval('$("#cryptoBack_' + market[i] + '-' + market[j] + '_' + currency[k] + '-' + currency[l]
                 + '").text(' + calculate(market[i], market[j], currency[k], currency[l], 3) + ');');
                eval('$("#moneyBack_' + market[i] + '-' + market[j] + '_' + currency[k] + '-' + currency[l]
                 + '").text("$ " +  ' + calculate(market[i], market[j], currency[k], currency[l], 4) + ');');
                eval('$("#profit_' + market[i] + '-' + market[j] + '_' + currency[k] + '-' + currency[l]
                 + '").text("$ " +  ' + calculate(market[i], market[j], currency[k], currency[l], 5) + ');');
                eval('document.getElementById("profit%_' + market[i] + '-' + market[j] + '_' + currency[k] + '-' + currency[l]
                 + '").innerHTML = ' + calculate(market[i], market[j], currency[k], currency[l], 6) + ';');
              }
              else {
                eval('$("#cryptoGO_' + market[i] + '-' + market[j] + '_' + currency[k] + '-' + currency[l]
                 + '").text(' + calculate(market[i], market[j], currency[k], currency[l], 1) + ');');
                eval('$("#moneyThere_' + market[i] + '-' + market[j] + '_' + currency[k] + '-' + currency[l]
                 + '").text("$ " + ' + calculate(market[i], market[j], currency[k], currency[l], 2) + ');');
                eval('$("#cryptoBack_' + market[i] + '-' + market[j] + '_' + currency[k] + '-' + currency[l]
                 + '").text(' + calculate(market[i], market[j], currency[k], currency[l], 3) + ');');
                eval('$("#moneyBack_' + market[i] + '-' + market[j] + '_' + currency[k] + '-' + currency[l]
                 + '").text("$ " + ' + calculate(market[i], market[j], currency[k], currency[l], 4) + ');');
                eval('$("#profit_' + market[i] + '-' + market[j] + '_' + currency[k] + '-' + currency[l]
                 + '").text("$ " + ' + calculate(market[i], market[j], currency[k], currency[l], 5) + ');');
                eval('document.getElementById("profit%_' + market[i] + '-' + market[j] + '_' + currency[k] + '-' + currency[l]
                 + '").innerHTML = ' + calculate(market[i], market[j], currency[k], currency[l], 6) + ';');
              }
            }
          }
        }
      }
      
    });
  });
} , 5000);

