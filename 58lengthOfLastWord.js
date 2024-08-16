var lengthOfLastWord = function(s) {
    let split = s.split(' ').filter(e => e !== '')
    return split[split.length - 1].length
};