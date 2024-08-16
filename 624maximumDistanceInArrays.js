var maxDistance = function(arrays) {
    let max = arrays[0][arrays[0].length - 1]
    let min = arrays[0][0]
    let total = 0

    for(let i = 1; i < arrays.length; i++){
        total = Math.max(total, Math.abs(arrays[i][arrays[i].length - 1] - min))
        total = Math.max(total, Math.abs(max - arrays[i][0]))

        max = Math.max(max, arrays[i][arrays[i].length - 1])
        min = Math.min(min, arrays[i][0])
    }
    
    return total
};