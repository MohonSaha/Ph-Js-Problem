/* 
If you search for chest or biceps or leg workout this 
function will show the details workout for the perticular
workout.
*/


function inputParts(parts){
    if (parts === "chest") {
    const chestExercise = {
            num1: "pushUps",
            num2: "Fly Burble",
            num3: "Cable Press"
        }
        // console.log(chestExercise);
        return chestExercise;
    }

    else if (parts === "biceps") {
        const bicepExercise = {
                num1: "Dumble press",
                num2: "Burble Press",
                num3: "Push Ups"
            }
            // console.log(chestExercise);
            return bicepExercise;
        }
}


const result = inputParts("biceps");
console.log(result);