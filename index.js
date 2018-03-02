$(document).ready(function() {
	
	$.getJSON("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,LTC,XMR,LSK,DASH,XEM,DOGE&tsyms=USD,EUR")
	.done(function(data) {
		handleCryptoPricing(data);
	})
	.fail(function() {
		console.log("API Error");
	})
	
	$(".refresh").click(function(e) {
		e.preventDefault();
		
		// 'this' needs to be saved into a variable
		// because it will change context later
		var clickedRefreshButton = this;
		
		$.getJSON("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,LTC,XMR,LSK,DASH,XEM,DOGE&tsyms=USD,EUR")
		.done(function(data) {
			switch(clickedRefreshButton.parentNode.parentNode.id) {
				case "btc":
					handleBTC(data);
					break;
				case "eth":
					handleETH(data);
					break;
				case "xrp":
					handleXRP(data);
					break;
				case "ltc":
					handleLTC(data);
					break;
				case "xmr":
					handleXMR(data);
					break;
				case "lsk":
					handleLSK(data);
					break;
				case "dash":
					handleDASH(data);
					break;
				case "xem":
					handleXEM(data);
					break;
				case "doge":
					handleDOGE(data);
					break;
				default:
					handleCryptoPricing(data);
					break;
			}
		})
		.fail(function() {
			console.log("API Error");
		});
	});
	
	function handleCryptoPricing(data) {
		handleBTC(data);
		handleETH(data);
		handleXRP(data);
		handleLTC(data);
		handleXMR(data);
		handleLSK(data);
		handleDASH(data);
		handleXEM(data);
		handleDOGE(data);
	}

	function handleBTC(data) {
		$("#btc .usd").text(data.BTC.USD);
		$("#btc .eur").text(data.BTC.EUR);
	}

	function handleETH(data) {
		$("#eth .usd").text(data.ETH.USD);
		$("#eth .eur").text(data.ETH.EUR);
	}

	function handleXRP(data) {
		$("#xrp .usd").text(data.XRP.USD);
		$("#xrp .eur").text(data.XRP.EUR);
	}

	function handleLTC(data) {
		$("#ltc .usd").text(data.LTC.USD);
		$("#ltc .eur").text(data.LTC.EUR);
	}

	function handleXMR(data) {
		$("#xmr .usd").text(data.XMR.USD);
		$("#xmr .eur").text(data.XMR.EUR);
	}

	function handleLSK(data) {
		$("#lsk .usd").text(data.LSK.USD);
		$("#lsk .eur").text(data.LSK.EUR);
	}

	function handleDASH(data) {
		$("#dash .usd").text(data.DASH.USD);
		$("#dash .eur").text(data.DASH.EUR);
	}

	function handleXEM(data) {
		$("#xem .usd").text(data.XEM.USD);
		$("#xem .eur").text(data.XEM.EUR);
	}

	function handleDOGE(data) {
		$("#doge .usd").text(data.DOGE.USD);
		$("#doge .eur").text(data.DOGE.EUR);
	}
});