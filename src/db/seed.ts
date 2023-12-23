import 'dotenv/config'
import mongoose from 'mongoose'
import Cow from './../models/Cow'
import Expense from './../models/Expense'
import Category from '../models/Category'

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
        date: 1702771200000,
        code: 'HST-0001',
        initialWeight: 300,
        purchasePrice: 1.28,
        currentWeight: 310
      },
      {
        date: 1702771200000,
        code: 'HST-0002',
        initialWeight: 220,
        purchasePrice: 1.3,
        currentWeight: 230
      },
      {
        date: 1702771200000,
        code: 'HST-0003',
        initialWeight: 195,
        purchasePrice: 1.25,
        currentWeight: 200
      },
      {
        date: 1702771200000,
        code: 'HST-0004',
        initialWeight: 260,
        purchasePrice: 1.25,
        currentWeight: 310
      },
      {
        date: 1702771200000,
        code: 'HST-0005',
        initialWeight: 280,
        purchasePrice: 1.3,
        currentWeight: 290
      },
      {
        date: 1702771200000,
        code: 'HST-0006',
        initialWeight: 195,
        purchasePrice: 1.25,
        currentWeight: 220
      },
      {
        date: 1702771200000,
        code: 'HST-0007',
        initialWeight: 350,
        purchasePrice: 1.25,
        currentWeight: 370
      },
      {
        date: 1702771200000,
        code: 'HST-0008',
        initialWeight: 302,
        purchasePrice: 1.25,
        currentWeight: 310
      },
      {
        date: 1702771200000,
        code: 'HST-0009',
        initialWeight: 217,
        purchasePrice: 1.3,
        currentWeight: 230
      },
      {
        date: 1702771200000,
        code: 'HST-0010',
        initialWeight: 186,
        purchasePrice: 1.25,
        currentWeight: 200
      },
      {
        date: 1702771200000,
        code: 'HST-0011',
        initialWeight: 198,
        purchasePrice: 1.3,
        currentWeight: 230
      },
      {
        date: 1702771200000,
        code: 'HST-0012',
        initialWeight: 253,
        purchasePrice: 1.25,
        currentWeight: 270
      },
      {
        date: 1702771200000,
        code: 'HST-0013',
        initialWeight: 260,
        purchasePrice: 1.28,
        currentWeight: 290
      },
      {
        date: 1702771200000,
        code: 'HST-0014',
        initialWeight: 300,
        purchasePrice: 1.28,
        currentWeight: 310
      },
      {
        date: 1702771200000,
        code: 'HST-0015',
        initialWeight: 300,
        purchasePrice: 1.28,
        currentWeight: 310
      }
    ])

    await Expense.insertMany([
      {
        date: 1702771200000,
        category: 'Transporte',
        description: 'Recarga de gasolina',
        cost: 20,
        quantity: 1
      },
      {
        date: 1702771200000,
        category: 'Imprevistos',
        description: 'Revisión del sistema de agua',
        cost: 40,
        quantity: 1
      },
      {
        date: 1702771200000,
        category: 'Imprevistos',
        description: 'Reparación del sistema de agua',
        cost: 40,
        quantity: 1
      }
    ])

    await Category.insertMany([
      {
        name: 'Medicinas'
      },
      {
        name: 'Transporte'
      },
      {
        name: 'Alimentos'
      },
      {
        name: 'Imprevistos'
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
    await Category.deleteMany({})

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
