<<<<<<< HEAD
const data = document.getElementById("");

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
    }
});

const getData = () => {
    var answer = document.getElementById("").value;
=======
const getBtn = document.querySelector('.btn');
const player = document.getElementById("Player");
const getData = () =>{
    var answer = document.getElementById('search').value;
>>>>>>> master
    console.log(answer);
    var leaderboard ="https://rapidapi.p.rapidapi.com/leaderboard/1/" + answer;
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

			player.textContent = data.entries[0].username;
			document.getElementById('Kills').innerHTML = data.number[0];
			document.getElementById('Wins').innerHTML = data.entries[0].wins;

<<<<<<< HEAD
            document.getElementById('leaderboard').src = data.sprites.front_default;
            var str = " " + data.id;
            var pad = "000";
            var ans = pad.substring( data.length - str.length) + str;
            document.getElementById('Player').value = "#" + ans + " " + data.name;
            document.getElementById('Kills').value = data.number[0];
            document.getElementById('Wins').value = data.number[0];
        }
    })
=======
		}

	})
	xhr.setRequestHeader("x-rapidapi-host", "call-of-duty-modern-warfare.p.rapidapi.com");
	xhr.setRequestHeader("x-rapidapi-key", "2cdcc9a70emsh3e5379ce087c538p19c704jsn52b0efd2bd99");
	xhr.send();
>>>>>>> master
};

getBtn.addEventListener('click', getData);

