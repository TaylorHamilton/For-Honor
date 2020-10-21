const player = document.getElementById('player')
////////Create our Request to server
let xhr = new XMLHttpRequest();
////////Set up a callback function to run when server req is successful///////////
xhr.onreadystatechange = () => {
    ///////Create an if statement that asks if the server req is complete/////////////
    if (xhr.readyState === 4)
        ///////now server is complete create an if to see if connection succcessful///////
        if (xhr.status = 200) {
            ///////Body of the callback where we parse data and use DOM Manipulation//////////
            const data = JSON.parse(xhr.response);
            console.log(data);
            player.innerHTML = data.el.attributes;
          
            ///////Else if clause where we throw an error if we dont have success connecting//
        } else if (xhr.status === 404) {
            alert("Oh no the page wasn't found");
        } else if (xhr.status === 500) {
            alert("Awhh man the server is taking a break :(");
        }
};
///////open server request////////////////////////////////////////////////////////
xhr.open("GET", "https://tracker.gg/for-honor/leaderboards/stats/all/Wins");
///////send server request////////////////////////////////////////////////////////
xhr.send();