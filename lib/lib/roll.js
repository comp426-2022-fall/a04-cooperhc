export function roll(sides, dice, rolls){
    var results = []
    for(let i = 0; i < dice; i++){
        for(let j = 0; j < rolls; j++){
            var num = Math.floor(Math.random() * sides) + 1
        }
        results[i] = num
    }
    return results   
}

export default{ roll };