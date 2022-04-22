var indice = 1;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'the-office.p.rapidapi.com',
		'X-RapidAPI-Key': 'ec18b92f23msh8aeb55194e63f7ap1743b4jsn26ba3630acab'
	}
};

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

const request = 'https://the-office.p.rapidapi.com/' + getRandomNumber(1,26);

fetch(request , options)
    .then(response => response.json())
	.then(response => {
        createResult(response)
        console.log(response)
    })
	.catch(err => console.error(err)
);


function createResult(response) {
    // Creo el resultado html
    const card = document.createElement("div")
    const nameResult = document.createTextNode(response.name);
    card.appendChild(nameResult);

    const imageContainer = document.createElement("div")
    const imageElement = document.createElement("img")
    imageElement.src = 'imgs/' + response.name + '.png';
    imageElement.className = "character";
    imageContainer.appendChild(imageElement);

    document.getElementById("result").appendChild(imageContainer);
    document.getElementById("result").appendChild(card);

}