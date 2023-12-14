import 'dotenv/config'
import mongoose from 'mongoose'
import Cow from './../models/Cow'

const url = process.env.MONGODB_URL

if (url === undefined) {
  throw new Error('[db] MONGODB_URL is not set')
}

const insertData = async () => {
  try {
    await mongoose.connect(url)
    console.log('[db] Sucessfully connected to MongoDB')

    await Cow.insertMany([
      {
        identifier: 1,
        race: 'Rojo',
        currentWeight: 310,
        age: 12,
        purchaseDate: 1702515894750,
        purchaseWeight: 300,
        purchasePrice: 1.28,
        createdAt: 1702515894750,
        updatedAt: 1702515894750
      },
      {
        identifier: 2,
        race: 'Negro',
        currentWeight: 230,
        age: 12,
        purchaseDate: 1702515894750,
        purchaseWeight: 220,
        purchasePrice: 1.3,
        createdAt: 1702515894750,
        updatedAt: 1702515894750
      },
      {
        identifier: 3,
        race: 'Negro',
        currentWeight: 200,
        age: 20,
        purchaseDate: 1702515894750,
        purchaseWeight: 195,
        purchasePrice: 1.25,
        createdAt: 1702515894750,
        updatedAt: 1702515894750
      },
      {
        identifier: 4,
        race: 'Negro',
        currentWeight: 310,
        age: 20,
        purchaseDate: 1702515894750,
        purchaseWeight: 260,
        purchasePrice: 1.25,
        createdAt: 1702515894750,
        updatedAt: 1702515894750
      },
      {
        identifier: 5,
        race: 'Negro',
        currentWeight: 290,
        age: 20,
        purchaseDate: 1702515894750,
        purchaseWeight: 280,
        purchasePrice: 1.3,
        createdAt: 1702515894750,
        updatedAt: 1702515894750
      },
      {
        identifier: 6,
        race: 'Negro',
        currentWeight: 220,
        age: 20,
        purchaseDate: 1702515894750,
        purchaseWeight: 195,
        purchasePrice: 1.25,
        createdAt: 1702515894750,
        updatedAt: 1702515894750
      },
      {
        identifier: 7,
        race: 'Negro',
        currentWeight: 370,
        age: 20,
        purchaseDate: 1702515894750,
        purchaseWeight: 350,
        purchasePrice: 1.25,
        createdAt: 1702515894750,
        updatedAt: 1702515894750
      },
      {
        identifier: 8,
        race: 'Rojo',
        currentWeight: 310,
        age: 20,
        purchaseDate: 1702515894750,
        purchaseWeight: 302,
        purchasePrice: 1.25,
        createdAt: 1702515894750,
        updatedAt: 1702515894750
      },
      {
        identifier: 9,
        race: 'Negro',
        currentWeight: 230,
        age: 20,
        purchaseDate: 1702515894750,
        purchaseWeight: 217,
        purchasePrice: 1.3,
        createdAt: 1702515894750,
        updatedAt: 1702515894750
      },
      {
        identifier: 10,
        race: 'Negro',
        currentWeight: 200,
        age: 20,
        purchaseDate: 1702515894750,
        purchaseWeight: 186,
        purchasePrice: 1.25,
        createdAt: 1702515894750,
        updatedAt: 1702515894750
      },
      {
        identifier: 11,
        race: 'Rojo',
        currentWeight: 230,
        age: 12,
        purchaseDate: 1702515894750,
        purchaseWeight: 198,
        purchasePrice: 1.3,
        createdAt: 1702515894750,
        updatedAt: 1702515894750
      },
      {
        identifier: 12,
        race: 'Rojo',
        currentWeight: 270,
        age: 12,
        purchaseDate: 1702515894750,
        purchaseWeight: 253,
        purchasePrice: 1.25,
        createdAt: 1702515894750,
        updatedAt: 1702515894750
      },
      {
        identifier: 13,
        race: 'Rojo',
        currentWeight: 290,
        age: 12,
        purchaseDate: 1702515894750,
        purchaseWeight: 260,
        purchasePrice: 1.28,
        createdAt: 1702515894750,
        updatedAt: 1702515894750
      },
      {
        identifier: 14,
        race: 'Rojo',
        currentWeight: 310,
        age: 12,
        purchaseDate: 1702515894750,
        purchaseWeight: 300,
        purchasePrice: 1.28,
        createdAt: 1702515894750,
        updatedAt: 1702515894750
      },
      {
        identifier: 15,
        race: 'Rojo',
        currentWeight: 310,
        age: 12,
        purchaseDate: 1702515894750,
        purchaseWeight: 300,
        purchasePrice: 1.28,
        createdAt: 1702515894750,
        updatedAt: 1702515894750
      }
    ])
    console.log('[db] Data sucessfully inserted')

    process.exit()
  } catch (error) {
    console.log('[db] There was an error inserting data')
    console.error(error)
    process.exit(1)
  }
}

const removeData = async () => {
  try {
    await mongoose.connect(url)
    console.log('[db] Sucessfully connected to MongoDB')
    await Cow.deleteMany({})
    console.log('[db] Data sucessfully removed')
    process.exit()
  } catch (error) {
    console.log('[db] There was an error removing data')
    console.error(error)
    process.exit(1)
  }
}

if (process.argv[2] === '-i') {
  insertData()
}

if (process.argv[2] === '-r') {
  removeData()
}
