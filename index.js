
let note = "handitover"

let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
"e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t",
"h", "a", "t", "y", "o", "u", "s", "h", "o", "u", "l", "d", "b",
"u", "y", "t", "h", "e", "y", "a", "r", "e", "c", "h", "e", "a",
"p", "a", "n", "d", "w", "o", "n", "d", "e", "r", "f", "u", "l",
 "f", "o", "r", "t", "h", "e", "s", "u", "m", "m", "e", "r"]

function buildHistogram(magazine) {
    return magazine.reduce((object, letter) => {
        if (object.hasOwnProperty([letter])) {
            object[letter] += 1
        } else {
            object[letter] = 1
        }
        return object
    }, {})
}

function canBuildNote(magazine, note)  {
    const noteArray = note.split("")
    const magazineHistogram = buildHistogram(magazine)
    
    for (let i = 0; i < noteArray.length; i++) {
        const letter = noteArray[i]
        if (magazineHistogram[letter] - 1 < 0 || !magazineHistogram.hasOwnProperty(letter)) {
            return false
        }
        magazineHistogram[letter] -= 1
    }
    return true
}

console.log(canBuildNote(magazine, note))

