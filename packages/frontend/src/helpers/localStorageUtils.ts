const read = (key: string) => {
  if (typeof window !== 'undefined') {
    const item = localStorage.getItem(`droppin_${key}`)
    return JSON.parse(item || '{}')
  }
}

const write = (key: string, data: any) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(`droppin_${key}`, JSON.stringify(data))
  }
}
const localStorageUtils = { read, write }

export default localStorageUtils
