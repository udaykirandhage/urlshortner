

## 📁 URL Shortener

A simple Node.js-based URL shortener that lets users convert long URLs into short, shareable links.

---

### 🛠 Tech Stack

- **Node.js** + **Express.js**
- **MongoDB** with **Mongoose**
- **EJS** for server-side templating
- **Bootstrap ** for styling

---

### 📦 Folder Structure

```
URL-shortner/
├── Controllers/
│   └── url.controller.js      # Route handlers (home, shorten, redirect)
├── Models/
│   └── shortUrl.js            # Mongoose schema
├── Routes/
│   └── router.js              # Express route definitions
├── Views/
│   └── index.ejs              # EJS front-end template
├── .env                       # Environment config
├── app.js                     # Main Express app
### Architecture

<img width="600" alt="Architecture" src="https://github.com/user-attachments/assets/355bf3db-6d8e-4c59-80a6-6d23a35bba5f" />

---

### 🚀 Endpoints

| Method | Route          | Handler                       | Purpose                             |
|--------|----------------|-------------------------------|-------------------------------------|
| `GET`  | `/`            | `controller.home`             | Renders homepage with short URLs,long urls and time stamp when was it created   |
| `POST` | `/shorten`     | `controller.post_Fullurl`     | Accepts full URL and shortens it    |
| `GET`  | `/:code`       | `controller.convertshorturltoFull` | Redirects to the full original URL |

---

### 🌐 How to Use

1. Paste your long URL into the input field.
2. Click **Shorten URL**.
3. Receive a short link like `https://short.ly/:code`.
4. Visit that short link to be redirected to the original address.

---

### 📌 Getting Started

```bash
git clone https://github.com/your-repo/url-shortener
cd url-shortener
npm install
```

Create a `.env` file:

```env
mongoDb_uri=your_mongodb_connection_string
port=3008
```

Run the app:

```bash
node app.js
```

Visit: `http://localhost:3008`

---

