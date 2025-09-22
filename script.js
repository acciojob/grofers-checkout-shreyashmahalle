const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let price = document.querySelectorAll(".price");
	let total = 0;

	price.forEach(p => {
		total += Number(p.textContent);
})
	let row = document.createElement("tr");
	let cell = document.createElement("td");
	cell.setAttribute("colspan", "2");
	cell.textContent = "total"  + total;

	row.appendChild(cell);
	document.querySelector("table").appendChild(row);
};


getSumBtn.addEventListener("click", getSum);

