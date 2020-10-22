const data = document.getElementById('player');
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
        sendHttpRequest('GET', "https://rapidapi.p.rapidapi.com/leaderboard/1/battle");
    }
});
<<<<<<< HEAD
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
=======

const getData = () => {
    var answer = document.getElementById("").value;
    console.log(answer);
};

const sendHttpRequest = (method, url) => {
    const promise = new Promise((resolve, reject) => {
        console.log(url);
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = () => {
            const data = JSON.parse(xhr.response);
            console.log(data);

            document.getElementById('leaderboard').src = data.sprites.front_default;
            var str = "" + data.id;
            var pad = "000";
            var ans = pad.substring( data.length - str.length) + str;
            document.getElementById('info_Player').value = "#" + ans + " " + data.name;
            document.getElementById('info_Kills').value = data.number[0];
            document.getElementById('info_Wins').value = data.number[0];
        }
    })
};
xhr.open("GET", "https://rapidapi.p.rapidapi.com/leaderboard/1/battle");
xhr.setRequestHeader("x-rapidapi-host", "call-of-duty-modern-warfare.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "2cdcc9a70emsh3e5379ce087c538p19c704jsn52b0efd2bd99");
xhr.send(data);
>>>>>>> master
