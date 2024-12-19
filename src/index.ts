
interface Data {
    name: string
    age: number
    password: string
    isCoding: boolean
}

const userData: Data[] = []

const newData: Data = {
    name: 'pratik basnet',
    age: 18,
    password: 'GATA_ONLY.mp3',
    isCoding: true
}

userData.push(newData)

console.log(userData)