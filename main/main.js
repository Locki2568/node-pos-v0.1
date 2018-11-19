module.exports = function main(input) {

	var result ='';
	result = printInventory(input);

    console.log("Debug Info");
    return result;
};

function printInventory(input){
		var header = '***<store earning no money>Receipt ***\n';
		var items = '';

		var distinctItem[] = findDistinctItem(input);

		

		return header + items;
}

function findDistinctItem(input){
	var distinctItem[];
	for(var i=0; i<input.length; i++){
			var items = input[i];
			if (!distinctItem.includes(input.Barcode)){
				distinctItem.push(input.Barcode);
			}
	}
	return distinctItem;
}