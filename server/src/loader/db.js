const mongoose = require('mongoose')

const db = async (dbURI) => {
  if (!dbURI) {
    console.error('MongoDB URI is not provided');
    process.exit(1);
  }
  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('✅✅ Connected to the database');
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

module.exports = db