const hexToBinLookup = {
  "0": "0000",
  "1": "0001",
  "2": "0010",
  "3": "0011",
  "4": "0100",
  "5": "0101",
  "6": "0110",
  "7": "0111",
  "8": "1000",
  "9": "1001",
  "a": "1010",
  "b": "1011",
  "c": "1100",
  "d": "1101",
  "e": "1110",
  "f": "1111",
}

const hexToBinary = (h: string | Buffer): string => {
  let hexString: string
  if (Buffer.isBuffer(h)) {
    hexString = h.toString("hex")
  } else {
    hexString = h
  }
  hexString = hexString.replace(/^0x/, "").toLowerCase()

  if (!/^[0-9a-f]+$/.test(hexString)) {
    throw `invalid hex value in ${hexString}`
  }

  let binaryString: string
  for (let i = 0; i < hexString.length; i++) {
    binaryString += hexToBinLookup[hexString[i]]
  }

  return binaryString
}

export const hammingDistance = (a: string | Buffer, b: string | Buffer): number => {
  if (a.length !== b.length) {
    throw "arguments must have equal lengths"
  }

  const binA = hexToBinary(a)
  const binB = hexToBinary(b)

  let distance = 0

  for (let i = 0; i < binA.length; i++) {
    if (binA[i] !== binB[i]) {
      distance++
    }
  }

  return distance
}