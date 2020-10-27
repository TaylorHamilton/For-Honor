const getBtn = document.querySelector('.btn');
const player = document.getElementById("Player");
const parent = document.querySelectorAll('.javascript');
console.log(parent);
const getData = () => {
	var answer = document.getElementById('search').value;
	console.log(answer);
	var leaderboard = "https://rapidapi.p.rapidapi.com/leaderboard/2/" + answer;
	sendHttpRequest('GET', leaderboard);
};

const sendHttpRequest = (method, url) => {
	const promise = new Promise((resolve, reject) => {
		console.log(url);
		const xhr = new XMLHttpRequest();
		xhr.withCredentials = true;
		xhr.open(method, url);
		xhr.onload = () => {
			const data = JSON.parse(xhr.response);
			console.log(data);
			for (var x = 0; x < parent.length; x++) {
				parent[x].children[1].textContent = data.entries[x].username;
				parent[x].children[2].textContent = data.entries[x].values.kills;
				parent[x].children[3].textContent = data.entries[x].values.wins;
				console.log(data.entries[x].username)
			}
		}
		xhr.setRequestHeader("x-rapidapi-host", "call-of-duty-modern-warfare.p.rapidapi.com");
		xhr.setRequestHeader("x-rapidapi-key", "2cdcc9a70emsh3e5379ce087c538p19c704jsn52b0efd2bd99");
		xhr.send();
	})


};

getBtn.addEventListener('click', getData);

