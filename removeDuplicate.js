

function removeDuplicate(names){
    const initial = [];
    for(nam in names){
        const friend = names[nam];
        const duplicate = initial.includes(friend);
        if (duplicate === false) {
            initial.push(friend)
        }     
    }
    return initial;   
}


const friends = ["abul", "babul", "cabul", "kabul", "gabul", "abul", "abul", "babul", "cabul", "abul", "cabul", "abul", "gabul", "mohon", "mohon", "mohonsaha"];
const result = removeDuplicate(friends);
console.log(result);