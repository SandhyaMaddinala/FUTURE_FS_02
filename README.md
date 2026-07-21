# FUTURE_FS_02 – Customer Relationship Management (CRM) System

## 📌 Project Overview

FUTURE_FS_02 is a full-stack Customer Relationship Management (CRM) web application developed using the MERN stack. It enables users to manage customer information efficiently by providing features to add, view, update, and delete customer records through an intuitive interface.

## 🚀 Features

* Add new customer details
* View all customers
* Update existing customer information
* Delete customer records
* Responsive user interface
* RESTful API integration
* MongoDB database connectivity

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## 📂 Project Structure

```text
FUTURE_FS_02/
│
├── client/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/SandhyaMaddinala/FUTURE_FS_02.git
```

### Frontend Setup

```bash
cd FUTURE_FS_02/client
npm install
npm run dev
```

### Backend Setup

```bash
cd ../server
npm install
npm start
```

## 🌐 Environment Variables

Create a `.env` file inside the `server` folder and add:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

If your frontend uses environment variables, create a `.env` file inside the `client` folder:

```env
VITE_API_URL=http://localhost:5000
```

## 📷 Screenshots

Add screenshots of:

* Dashboard
* Customer List
* Add Customer Form
* Edit Customer
* Delete Confirmation

## 📈 Future Enhancements

* User authentication (JWT)
* Search and filtering
* Pagination
* Customer notes
* Email notifications
* Dashboard analytics

## 👩‍💻 Author

**Sandhya Lakshmi Maddinala**

* GitHub: https://github.com/SandhyaMaddinala
* LinkedIn: *(Add your LinkedIn profile URL here)*

## 📄 License

This project is developed for learning and internship purposes under the **Future Interns** program.
