const data = document.getElementById('player');
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});
const sendHttpRequest = (method, url) => {
	const promise = new Promise((resolve, reject) => {
		console.log(url);
		const xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.onload = () => {
			///////////// When browser load parse http req to usable format//////////
			const data = JSON.parse(xhr.response);
			console.log(data);

			document.getElementById('player').innerHTML = data.entries[0].username;

			xhr.open("GET", "https://rapidapi.p.rapidapi.com/leaderboard/1/battle");
			xhr.setRequestHeader("x-rapidapi-host", "call-of-duty-modern-warfare.p.rapidapi.com");
			xhr.setRequestHeader("x-rapidapi-key", "5c57e915c7msh50e80a6f3111130p12ab1djsnee726d84ca19");

			xhr.send(data);
		}
	})
    
};
