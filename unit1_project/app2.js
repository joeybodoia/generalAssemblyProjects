// // Creating classes for the two fighters

// class userFighter {
//     constructor(name, health, power, accuracy){
//         this.name = name
//         this.health = health
//         this.power = power
//         this.accuracy =accuracy
//     }
//     attack() {
//         if (Math.random()*10 <= this.accuracy){
//             return 'attack successful'
//         } else {
//             return 'attack missed'
//         }
//     }
//     checkStats(){
//         alert(`Name: ${this.name},Health:${this.health},Power:${this.power},Accuracy:${this.accuracy}`)
//     }
//     forfeit(){
//         alert(`${this.name} has forfeited`)
//     }

// }

// class computerFighter {
//     constructor(name, health, power, accuracy){
//         this.name = name
//         this.health = health
//         this.power = power
//         this.accuracy =accuracy
//     }
//     attack() {
//         if (Math.random()*10 <= this.accuracy){
//             return 'attack successful'
//         } else {
//             return 'attack missed'
//         }
//     }
//     checkStats(){
//         alert(`Name: ${this.name},Health:${this.health},Power:${this.power},Accuracy:${this.accuracy}`)
//     }
// }

// $('#battleArena').droppable()

// AJAX
// generate character options:
$('#generate').on('click', (event) => {
    for (let i=1;i<11;i++) {
        event.preventDefault()
        randomID = Math.floor(Math.random()*400)
        console.log(randomID)
        $.ajax({
            url: `https://www.superheroapi.com/api.php/2668094310098995/${randomID}` 
        }).then(
            (data)=>{    
                // console.log(data)
                $div = $('<div>').html(`<img src="${data.image.url}" id ='image' width="100px" height='150px'>`).css({"border":'2px solid red','height':'150px'}).addClass('drag').attr('id',`pics${i}`).draggable()
                $('#characterPics').append($div)
                // $(`#pic${i}`).html(`<img src="${data.image.url}" width="100px" height='150px'>`).css({"border":'2px solid red','height':'150px'})
                $(`#pic${i}`).draggable()
                console.log(data.image)
                console.log(data.image.url)

            },
            ()=>{
                console.log('bad request')
            }
        )
    }
})

$( function() {
    $('.players' ).droppable( 
        { 
            accept:".drag", 
            drop :function() 
        { 
            alert("I am dropped"); 
        } 
        } ); 
        } );






const startGame = () => {
    alert('Match starting')
}




// game logic:ahahah
$('#start').on('click', startGame)