function insert_Row() {
    //Write your code here
	  let table = document.getElementById("sampleTable"); 

	let newRow = table.insertRow(0);

	let newCell1 = newRow.insertCell(0);
    let newCell2 = newRow.insertCell(1);

	newCell1.textContent = "New Cell1";
    newCell2.textContent = "New Cell2";
  
}
