// your code here
document.getElementById("button").addEventListner("click",()=>{
	const name = getElementById("name").value.trim();
	const year = getElementById("year").value.trim();
	const base = "https://localhost:8080/";
	const query = `?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;
	document.getElementById("url").textContent = base+query;
});
