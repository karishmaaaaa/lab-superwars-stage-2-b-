const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    for (let i =0; i < players.length; i++){
       
        if (i%2==0){
            detailedPlayers.push({
                name : players[i],
                strength : getRandomStrength(),
                image : `./images/super-${i+1}.png`,
                type : "hero"
            })
        }else{
            detailedPlayers.push({
                name : players[i],
                strength : getRandomStrength(),
                image : `./images/super-${i+1}.png`,
                type : "villain"
            })
        }
    
    }
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return Math.floor(Math.random()*101)
}

const buildPlayers = (players, type) => {
    let fragment = '';

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    for (var j=0;j<players.length;j++) {
        if (players[j].type == type){
            fragment += `<div class="player">
                <img src="${players[j].image}" alt="">
                <div class="name">${players[j].name}</div>
                <div class="strength">${players[j].strength}</div>
                </div>`;
        }
    }
    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}