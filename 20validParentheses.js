var isValid = function(s) {
    let braceMap = { '(' : ')' , '[' : ']' , '{' : '}' }
    let arr = []

    for(let i = 0; i < s.length; i++){
        if(braceMap[s[i]]) arr.push(s[i])
        else{
            if(braceMap[arr.pop()] !== s[i]) return false
        }
    }
    return arr.length === 0
};