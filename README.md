# 🌾 Farmkart – Online Agriculture Marketplace

Farmkart is a **web-based agricultural marketplace platform** that connects **farmers directly with customers** to buy and sell fresh farm products without middlemen.

It helps farmers get better prices and customers get fresh products at affordable rates.

---

## 🚀 Features

✔ Farmer product listing  
✔ Customer product browsing  
✔ Add to cart  
✔ Secure login & registration  
✔ Order placement  
✔ Admin management  
✔ SQLite database  
✔ Responsive web design  

---

## 🎯 Objective

Traditional markets involve many intermediaries, reducing farmers’ profits.  
Farmkart provides:

- Direct farmer → customer selling
- Fair pricing
- Easy online ordering
- Transparent transactions

---

## 🛠 Tech Stack

### Backend
- Python
- Flask

### Frontend
- HTML
- CSS
- Bootstrap
- JavaScript

### Database
- SQLite

---

## ⚙️ Installation & Setup

Follow these steps to run locally.

---

### 1️⃣ Clone Repository

git clone https://github.com/your-username/farmkart.git  
cd farmkart

---

### 2️⃣ Create Virtual Environment (recommended)

python -m venv venv

Activate:

Linux / Mac  
source venv/bin/activate  

Windows  
venv\Scripts\activate

---

### 3️⃣ Install Dependencies

pip install -r requirements.txt

---

### 4️⃣ Run Application

python app.py

---

### 5️⃣ Open Browser

http://127.0.0.1:5000

---

### 6️⃣ Troubleshooting (Optional)

If packages fail:

pip install flask

---

## 📁 Project Structure

```text
farmkart/
│
├── app.py                  # Main Flask application
├── requirements.txt        # Dependencies
├── database.db             # SQLite database
│
├── templates/              # HTML pages
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── products.html
│   ├── cart.html
│   ├── orders.html
│   └── admin.html
│
├── static/
│   ├── css/
│   ├── images/
│   └── js/
│
└── README.md
