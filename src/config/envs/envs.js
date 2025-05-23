import 'dotenv/config'

const {
  PORT = 3000,
  POSTGRES_URI_DEV,
  POSTGRES_URI_PROD,
  SECRET_WORD,
  GMAIL_DIR,
  GMAIL_PASSWORD,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_KEY,
  CLOUDINARY_NAME,
} = process.env

export default {
  PORT,
  POSTGRES_URI_DEV,
  POSTGRES_URI_PROD,
  SECRET_WORD,
  GMAIL_DIR,
  GMAIL_PASSWORD,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_KEY,
  CLOUDINARY_NAME,
}
