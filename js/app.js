const dog_api = 'https://dog.ceo/api/breeds/list'
const selectBreed = document.getElementById('selectBreed')
const viewDog = document.getElementById('viewDog')
//const breedName = document.getElementById('breedName')
const breedName = 'https://dog.ceo/api/breeds/image/random'
const breedImage = document.getElementById('breedImage')



$.ajax({
    url: dog_api,
    dataType: "json",
    success: (data => {
        var perros = data.message
        console.log(perros)
        for (let i = 0; i < perros.length; i++) {
            selectBreed.innerHTML += `
            <option value=${perros[i]}>${perros[i]}</option>
            `
        }
    }),
    error: (error => {
        console.log("error")
    })
})


viewDog.addEventListener("click", function() {
    document.getElementById("breedImage").setAttribute("url" , "https://dog.ceo/api/breeds/image/random");
    var breedName = selectBreed.value
    $.ajax({ 
        url:'https://dog.ceo/api/breeds/image/random',
        dataType : 'json',
        success : function(data) {
            console.log(data)
        }
    })
  
    //console.log(breedName)
})

