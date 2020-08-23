// Creating classes for the two fighters

class userFighter {
    constructor(name, health, power, accuracy){
        this.name = name
        this.health = health
        this.power = power
        this.accuracy =accuracy
    }
    attack() {
        if (Math.random()*10 <= this.accuracy){
            return 'attack successful'
        } else {
            return 'attack missed'
        }
    }
    checkStats(){
        alert(`Name: ${this.name},Health:${this.health},Power:${this.power},Accuracy:${this.accuracy}`)
    }
    forfeit(){
        alert(`${this.name} has forfeited`)
    }

}

class computerFighter {
    constructor(name, health, power, accuracy){
        this.name = name
        this.health = health
        this.power = power
        this.accuracy =accuracy
    }
    attack() {
        if (Math.random()*10 <= this.accuracy){
            return 'attack successful'
        } else {
            return 'attack missed'
        }
    }
    checkStats(){
        alert(`Name: ${this.name},Health:${this.health},Power:${this.power},Accuracy:${this.accuracy}`)
    }
}

// AJAX
// generate character options:
$('#generate').on('click', (event) => {
    event.preventDefault()
    // const userInput = $('input[type="text"]').val()
    randomID = Math.floor(Math.random()*4)+1
    console.log(randomID)
    $.ajax({
        // url: 'http://www.omdbapi.com/?apikey=bb83a7cf&t=' + userInput
        url: `https://www.superheroapi.com/api.php/2668094310098995/${randomID}` 
    }).then(
        (data)=>{
            console.log(data)
            $('#pic1').html(`<img src="${data.image.url}" width="70px">`)
            console.log(data.image)
            console.log(data.image.url)
        },
        ()=>{
            console.log('bad request')
        }
    )
    
})


