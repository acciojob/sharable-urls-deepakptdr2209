// your code here
document.getElementById("button").addEventListener("click",()=>{
	const name = document.getElementById("name").value.trim();
	const year = document.getElementById("year").value.trim();
	const base = "https://localhost:8080/";

	 const params = new URLSearchParams();

  if (name) params.append("name", name);
  if (year) params.append("year", year);

  const finalURL = params.toString()
    ? base + "?" + params.toString()
    : base;
	document.getElementById("url").textContent = finalURL;
});
