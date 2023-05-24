suits = ["♠️", "♥", "♣", "♦"]
function deck() {
    let cards = new Array();
    for (let i= 0; i <= 3; i++) {
        for (let j=1; j <= 13; j++) {
            deck.push({value:[j], suit:suits[i] })
        }
    }
}