
# 🏅 SportsAdda - MERN Stack Backend

SportsAdda is a sports-focused backend application built with Node.js, Express, and MongoDB. It manages user accounts, listings, and reviews for sports-related content.

## 🚀 Features

- User Authentication (using Passport.js)
- Listings and Reviews with MongoDB
- Cloudinary integration for image uploads
- EJS-based templating support
- Schema validation with Joi

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB + Mongoose
- **Auth:** Passport, express-session
- **Storage:** Cloudinary, Multer
- **Templating:** EJS, EJS-mate
- **Validation:** Joi
- **Environment:** dotenv

## 📂 Folder Structure

```
sportsadda/
├── controllers/        # Listing, Review, User controllers
├── models/             # Mongoose schemas
├── init/               # Seed or startup data
├── views/              # EJS templates
├── app.js              # Main entry point
├── cloudConfiq.js      # Cloudinary config
├── middleware.js       # Custom middlewares
├── .env                # Environment variables (not pushed)
├── package.json
```

## 🧪 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/AarjooKumar369/SportsAdda.git
cd SportsAdda
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up `.env`

```env
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_cloud_api_key
CLOUD_API_SECRET=your_cloud_api_secret
ATLASDB_URL=your_mongodb_connection_url
```

### 4. Run the server

```bash
nodemon app.js
```

Visit: `http://localhost:3000`

## 🚀 Deployment

Instructions for deployment will go here (e.g., Render, Vercel, Railway, or custom VPS).

## 🤝 Contributing

Contributions are welcome! Please open an issue or pull request if you’d like to help.
