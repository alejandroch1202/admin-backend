import 'dotenv/config'
import mongoose from 'mongoose'
import Cow from './../models/Cow'
import Expense from './../models/Expense'

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
        currentWeight: 310,
        purchaseDate: 1702771200000,
        purchaseWeight: 300,
        purchasePrice: 1.28
      },
      {
        identifier: 2,
        currentWeight: 230,
        purchaseDate: 1702771200000,
        purchaseWeight: 220,
        purchasePrice: 1.3
      },
      {
        identifier: 3,
        currentWeight: 200,
        purchaseDate: 1702771200000,
        purchaseWeight: 195,
        purchasePrice: 1.25
      },
      {
        identifier: 4,
        currentWeight: 310,
        purchaseDate: 1702771200000,
        purchaseWeight: 260,
        purchasePrice: 1.25
      },
      {
        identifier: 5,
        currentWeight: 290,
        purchaseDate: 1702771200000,
        purchaseWeight: 280,
        purchasePrice: 1.3
      },
      {
        identifier: 6,
        currentWeight: 220,
        purchaseDate: 1702771200000,
        purchaseWeight: 195,
        purchasePrice: 1.25
      },
      {
        identifier: 7,
        currentWeight: 370,
        purchaseDate: 1702771200000,
        purchaseWeight: 350,
        purchasePrice: 1.25
      },
      {
        identifier: 8,
        currentWeight: 310,
        purchaseDate: 1702771200000,
        purchaseWeight: 302,
        purchasePrice: 1.25
      },
      {
        identifier: 9,
        currentWeight: 230,
        purchaseDate: 1702771200000,
        purchaseWeight: 217,
        purchasePrice: 1.3
      },
      {
        identifier: 10,
        currentWeight: 200,
        purchaseDate: 1702771200000,
        purchaseWeight: 186,
        purchasePrice: 1.25
      },
      {
        identifier: 11,
        currentWeight: 230,
        purchaseDate: 1702771200000,
        purchaseWeight: 198,
        purchasePrice: 1.3
      },
      {
        identifier: 12,
        currentWeight: 270,
        purchaseDate: 1702771200000,
        purchaseWeight: 253,
        purchasePrice: 1.25
      },
      {
        identifier: 13,
        currentWeight: 290,
        purchaseDate: 1702771200000,
        purchaseWeight: 260,
        purchasePrice: 1.28
      },
      {
        identifier: 14,
        currentWeight: 310,
        purchaseDate: 1702771200000,
        purchaseWeight: 300,
        purchasePrice: 1.28
      },
      {
        identifier: 15,
        currentWeight: 310,
        purchaseDate: 1702771200000,
        purchaseWeight: 300,
        purchasePrice: 1.28
      }
    ])

    await Expense.insertMany([
      {
        date: 1702771200000,
        name: 'Recarga',
        category: 'Gasolina',
        cost: 20,
        quantity: 1
      },
      {
        date: 1702771200000,
        name: 'Revisión del sistema de agua',
        category: 'Otros',
        cost: 40,
        quantity: 1
      },
      {
        date: 1702771200000,
        name: 'Reparación del sistema de agua',
        category: 'Otros',
        cost: 40,
        quantity: 1
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
    await Expense.deleteMany({})

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
