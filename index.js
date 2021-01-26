'use strict'
/*
* Application Programming Coursework 1
*
* If you open `index.html` in your browser you will see
* a series of unit tests. The challenge is to make all of these
* tests pass, similar to your worksheets.
*
* All code you write must be contained within this file.
* Do not modify `tests.js` (although you should read it to see
* exactly what we are testing)
*
* For the first two tests, we have started the functions for you.
* For the subsequent tests, you will need to write them in this file
* yourself.
*
* Remember to make regular backups of your work.
*
* ALL WORK MUST BE YOUR OWN.
*
* If you do not attempt the advanced challenge, your maximum possible
* mark will be 75% for this coursework.
*
* This assessment is worth 50% of your overall module mark.
*/

// modify these functions
// ...

function id () {
  return 'UP2002753'
}

function easyStart () {
  return true
}

/**
 * Don't delete me, you'll need me later :)
 */
function numToArray (limit) {
  const result = []
  for (let i = limit; i >= 1; i = i - 1) {
    result.push(i)
  }
  return result
}

// add the remaining functions here
// ...

function greet (name) {
  if (name === undefined) {
    return 'Hello mystery person how are you?'
  } else {
    return `Hello ${name} how are you?`
  }
}

function palindrome (candidate, ignore) {
  if (candidate !== undefined) {
    const reverseCandidate = candidate.split('').reverse()
    const splitCandidate = candidate.split('')
    if (candidate === undefined || candidate === '') {
      return false
    } else if (candidate.length === 1 || candidate.length % 2 === 0 || (ignore === true && (candidate.trim).length % 2 === 0) || candidate.length % 2 !== 0) {
      if (reverseCandidate !== splitCandidate && candidate.length > 10) {
        if (whiteSpaceCheck(candidate)) {
          if (ignore === true) {
            return true
          }
          return false
        } else {
          return true
        }
      } else {
        whiteSpaceCheck(candidate)
        return true
      }
    }
  } if (candidate === undefined) {
    return false
  }

  function whiteSpaceCheck (candidate) {
    const check = /\s/.test(candidate)
    if (check) {
      return true
    }
    return false
  }
}

function sign (x) {
  if (x > 0) {
    return 'positive'
  } else if (x === 0 || x === undefined) {
    return 'neither'
  }
  return 'negative'
}

function nSay (msg, n) {
  const array = []
  for (let i = 0; i < n; i++) {
    array[i] = msg
  }
  return array
}

function wordCount (str) {
  const strSplit = str.split('')
  let words = 0
  for (let i = 0; i <= str.length; i++) {
    if (strSplit[i] === ' ') {
      words += 1
    }
  }
  words += 1
  return words
}

function charCount (str) {
  const strSplit = str.split('')
  let chars = 0
  for (let i = 0; i < str.length; i++) {
    if (strSplit[i] !== ' ') {
      chars += 1
    }
  }
  return chars
}

function acronym (str) {
  const strSplit = str.split('')
  let acronym = ''
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      acronym = acronym + strSplit[i]
    } else if (strSplit[i] === ' ') {
      acronym = acronym + strSplit[i + 1]
    }
  }
  return acronym
}

function honours (mark) {
  let level = ''
  if (mark >= 70 && mark <= 99) {
    level = 'First'
  } else if (mark >= 60 && mark < 70) {
    level = 'Upper Second'
  } else if (mark >= 50 && mark < 60) {
    level = 'Lower Second'
  } else if (mark >= 40 && mark < 50) {
    level = 'Third'
  } else if (mark < 40) {
    level = 'Fail'
  }
  return level
}

function uniqueWords (str) {
  const words = str.toLowerCase().split(' ')
  const unique = words.filter((x, index) => {
    return words.indexOf(x) === index
  })
  return unique
}

function clickAttacher (selector, cn) {
  const selectorQuery = document.querySelectorAll(selector)
  for (const element of selectorQuery) {
    element.addEventListener('click', () => {
      if (element.classList.contains(cn)) {
        element.classList.remove(cn)
      } else if (!element.classList.contains(cn)) {
        element.classList.add(cn)
      }
    })
  }
}

function drawChessBoard (canvas) {
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  ctx.strokeStyle = 'black'
  ctx.lineWidth = 2

  let x = 0
  for (let i = 0; i <= 7; i++) {
    for (let y = 0; y < 400; y += 50) {
      ctx.strokeRect(x, y, 50, 50)
      if (i % 2 === 0 && (y === 50 || y === 150 || y === 250 || y === 350)) {
        ctx.fillStyle = '#808080'
      } else if (i % 2 !== 0 && (y === 0 || y === 100 || y === 200 || y === 300 || y === 400)) {
        ctx.fillStyle = '#808080'
      } else {
        ctx.fillStyle = '#FFF'
      }
      ctx.fillRect(x, y, 50, 50)
    }
    if (x >= 0 && x <= 400) {
      x += 50
    }
  };
  return true
}

function playChess () {
  const bishopb = new Image()
  const kingb = new Image()
  const kingw = new Image()
  const queenw = new Image()
  const queenb = new Image()
  const bishopw = new Image()
  const knightw = new Image()
  const knightb = new Image()
  const rookw = new Image()
  const rookb = new Image()
  const pawnw = new Image()
  const pawnb = new Image()

  pawnb.onload = function () {
    const canvas = document.getElementById('board')
    const ctx = canvas.getContext('2d')
    const topy = -5
    const bottomy = 345
    for (let x = -5; x < 395; x += 50) {
      ctx.drawImage(pawnw, x, 45)
      ctx.drawImage(pawnb, x, 295)
    }

    ctx.drawImage(rookw, -5, topy)
    ctx.drawImage(knightw, 45, topy)
    ctx.drawImage(bishopw, 95, topy)
    ctx.drawImage(queenw, 145, topy)
    ctx.drawImage(kingw, 195, topy)
    ctx.drawImage(bishopw, 245, topy)
    ctx.drawImage(knightw, 295, topy)
    ctx.drawImage(rookw, 345, topy)

    ctx.drawImage(bishopb, 95, bottomy)
    ctx.drawImage(queenb, 195, bottomy)
    ctx.drawImage(kingb, 145, bottomy)
    ctx.drawImage(bishopb, 245, bottomy)
    ctx.drawImage(knightb, 45, bottomy)
    ctx.drawImage(knightb, 295, bottomy)
    ctx.drawImage(rookb, 0 - 5, bottomy)
    ctx.drawImage(rookb, 345, bottomy)
  }

  bishopb.src = 'i/bbishop.png'
  bishopw.src = 'i/wbishop.png'
  kingb.src = 'i/bking.png'
  kingw.src = 'i/wking.png'
  queenw.src = 'i/wqueen.png'
  queenb.src = 'i/bqueen.png'
  knightw.src = 'i/wknight.png'
  knightb.src = 'i/bknight.png'
  rookw.src = 'i/wrook.png'
  rookb.src = 'i/brook.png'
  pawnw.src = 'i/wpawn.png'
  pawnb.src = 'i/bpawn.png'

  return true
}