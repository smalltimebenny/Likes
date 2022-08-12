var like = 0
var like2 = 0
var like3 = 0


function addLike (element) {
var tempLikes = document.querySelector("#user1Likes")
console.log(tempLikes.innerText)
like ++;
console.log(like)

if (like == 1){
    tempLikes.innerText = like + " Like"
} else{
    tempLikes.innerText = like + " Likes"
}
}

function addLike2 (element) {
    var tempLikes = document.querySelector("#user2Likes")
    console.log(tempLikes.innerText)
    like2 ++;
    console.log(like2)
    
    if (like2 == 1){
        tempLikes.innerText = like2 + " Like"
    } else{
        tempLikes.innerText = like2 + " Likes"
    }
    }

    function addLike3 (element) {
        var tempLikes = document.querySelector("#user3Likes")
        console.log(tempLikes.innerText)
        like3 ++;
        console.log(like3)
        
        if (like3 == 1){
            tempLikes.innerText = like3 + " Like"
        } else{
            tempLikes.innerText = like3 + " Likes"
        }
        }