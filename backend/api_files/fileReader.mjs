import * as fs from "fs/promises"

export default async function readFile(file) {
  try {
    let strData = await fs.readFile(file)
    return JSON.parse(strData)
  } catch(error) {
    console.error(error)
    throw error
  }
}