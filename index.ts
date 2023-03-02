let user="admin"
let pin="admin"
let randomAmount=Math.floor(Math.random()*1000 +500)
let userPrompt=prompt("Enter your Username")
let pinPrompt=prompt("Enter your pin")
if (userPrompt==user && pinPrompt==pin){
	console.log("sucessfully Login")
alert("Your Current Balance is"+" "+randomAmount)
let amountPrompt=parseInt(prompt("Enter your Amount")!)
console.log(amountPrompt)
if(amountPrompt<=randomAmount){
console.log("Withdrawl "+amountPrompt)
console.log("Your Current Balance After Withdrawl is"+" "+(randomAmount-amountPrompt));
}else{alert("insuffcient Balance")}	
} else {alert("Username or Pin incorrect")}
