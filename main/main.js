module.exports = function main(input) {

	var result ='';
	result = printInventory(input);

    console.log(result);
    return result;
};

function printInventory(input){
		var header = '***<store earning no money>Receipt ***\n';
		var items = '';
		var trailer = '----------------------\n';

		var distinctItem = []; 
		distinctItem = findDistinctItem(input);
		var total = 0;
		
		for(var i=0; i<distinctItem.length; i++){
			var name = findItemName(input, distinctItem[i]);
			var count = findItemCount(input, distinctItem[i]);
			var price = findItemPrice(input, distinctItem[i]);
			var subTotal = count * price;
			if(name != 'Battery'){
				items += 'Name: '+name+', Quantity: '+count+' bottles, Unit price: '+price.toFixed(2)+' (yuan), Subtotal: '+subTotal.toFixed(2)+' (yuan)\n'
			}else{
				items += 'Name: '+name+', Quantity: '+count+', Unit price: '+price.toFixed(2)+' (yuan), Subtotal: '+subTotal.toFixed(2)+' (yuan)\n'
			}
			total = total + subTotal;
		}
		trailer += 'Total: '+total.toFixed(2)+' (yuan)\n';
		trailer += '**********************\n';
		
		var result = header + items + trailer;

		return result;
}

function findItemPrice(input, item){
	for(var i=0; i<input.length; i++){
			var element = input[i];
			if (element.Barcode === item){
				return element.Price;
			}
	}
	return 0;
}

function findItemCount(input, item){
	var count = 0;
	for(var i=0; i<input.length; i++){
			var element = input[i];
			if (element.Barcode === item){
				count +=1;
			}
	}
	return count;
}

function findItemName(input, item){
	for(var i=0; i<input.length; i++){
			var element = input[i];
			if (element.Barcode === item){
				return element.Name;
			}
	}
	return 0;
}

function findDistinctItem(input){
	var distinctItem = [];
	for(var i=0; i<input.length; i++){
			var item = input[i];
			if (!distinctItem.includes(item.Barcode)){
				distinctItem.push(item.Barcode);
			}
	}
	return distinctItem;
}