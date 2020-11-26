
 	function calculateTip () {
 		let varBillAmount = Number(document.querySelector("#billAmount-input").value);
 		//console.log(varBillAmount)
 		let varTipPercent = Number(document.querySelector("#tipPercent-input").value);
 		//console.log(varTipPercent)
 		let varSplitBy = Number(document.querySelector("#splitBy-input").value);
 		//console.log(varSplitBy)
 		let varTipSplit = ((varBillAmount * (varTipPercent/100))/ varSplitBy);
 		//console.log(varTipSplit)
 		let USD = new Intl.NumberFormat("en-us",{style:"currency",currency:"USD"});
 		document.querySelector("#resultsOutput").innerHTML = "Each Person should pay " + USD.format(varTipSplit);
 		}