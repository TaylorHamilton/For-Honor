const getBtn = document.querySelector('.btn');
const player = document.getElementById("Player");
const tr = document.querySelector('tr')
const getData = () => {
	var answer = document.getElementById('search').value;
	console.log(answer);
	var leaderboard = "https://rapidapi.p.rapidapi.com/leaderboard/1/" + answer;
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
			for (var y = 0; y < tr.length; y++) {
				for (var x = 0; x < data.entries.length; x++) {
					player.textContent = data.entries[x].username;
					document.getElementById('Kills').innerHTML = data.entries[x].values.kills;
					document.getElementById('Wins').innerHTML = data.entries[x].values.wins;
				}
			}
		}
		xhr.setRequestHeader("x-rapidapi-host", "call-of-duty-modern-warfare.p.rapidapi.com");
		xhr.setRequestHeader("x-rapidapi-key", "2cdcc9a70emsh3e5379ce087c538p19c704jsn52b0efd2bd99");
		xhr.send();
	})


};

getBtn.addEventListener('click', getData);

