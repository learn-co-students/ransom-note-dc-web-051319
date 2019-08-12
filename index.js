
const buildHistogram = (magezine) => {
    let histo = {}
    magezine.forEach(letter => {
      if (histo[letter]) {
        histo[letter] += 1
      } else {
        histo[letter] = 1
      }
    })
    return histo
}

const canBuildNote = (magezine, note) => {
    let newNote = note.split(" ").join("").split("").sort()
    let histo = buildHistogram(magezine)
    let flag = true
    
    newNote.forEach(letter => {
        if (histo[letter] && histo[letter] > 0) {
            histo[letter] -= 1
        } else {
            flag = false
        }
    })
    return flag
}

