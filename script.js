// №1

// function rand4() {
//     return Math.random() * 4;
//     }
// function rand8to10(){
//     return rand4()/2 + 8;
// }

// №2 
// function findDuplicates(array, distance){
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] == array[i + distance]) {
//             return i
//         }
//     }
//     return -1
// }

// №3

function hasTerms(array, sum){
    for (let i = 0; i < array.length; i++){
        if((sum - array[i]) in array.splice(i+1)){
            console.log(true);
        }
    }
    console.log(false);
}

hasTerms([1,2,3,4,5], 7)
