const plainText = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' '
]

let cipherText = []

let encodedString = ''
let decodedString = ''

const encode = (text, k = 3) => {
  const textArray = text.split('')
  const encoded = []
  const plainIndex = []

  getCipherText(k)

  for (const el of textArray) {
    plainIndex.push(plainText.indexOf(el))
  }
  for (const el of plainIndex) {
    encoded.push(cipherText[el])
  }
  encodedString = encoded.join('')
  document.getElementById('encodedText').value = encodedString
}

const decode = (text, k = 3) => {
  const textArray = text.split('')
  const decoded = []
  const cipherIndex = []

  getCipherText(k)

  for (const el of textArray) {
    cipherIndex.push(cipherText.indexOf(el))
  }
  for (const el of cipherIndex) {
    decoded.push(plainText[el])
  }
  decodedString = decoded.join('')
  document.getElementById('secretMessage').value = decodedString
}

const getCipherText = (k) => {
  const basePositions = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' '
  ]

  const spliced = basePositions.splice(0, k)
  cipherText = basePositions.concat(spliced)
}

document.getElementById('encode').addEventListener('click', (e) => {
  e.preventDefault()
  const encodedInput = document.getElementById('encodedInput').value
  const encodedKeyInput = document.getElementById('encodedKeyInput').value
  document.getElementById('originalText').value = encodedInput
  encode(encodedInput, +encodedKeyInput)
  document.getElementById('encodedInput').value = ''
})

document.getElementById('decode').addEventListener('click', (e) => {
  e.preventDefault()
  const decodedInput = document.getElementById('decodedInput').value
  const decodedKeyInput = document.getElementById('decodedKeyInput').value
  document.getElementById('decodedText').value = decodedInput
  decode(decodedInput, +decodedKeyInput)
  document.getElementById('decodedInput').value = ''
})


document.getElementById('decodedInput').addEventListener('input', (e) => {
  const button = document.getElementById('decode')
  if (e.target.value !== '') {
    button.disabled = false
  } else {
    button.disabled = true
  }
})

document.getElementById('encodedInput').addEventListener('input', (e) => {
  const button = document.getElementById('encode')
  if (e.target.value !== '') {
    button.disabled = false
  } else {
    button.disabled = true
  }
})