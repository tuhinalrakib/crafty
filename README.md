#Crafty App

A modern gadgets product showcase web application built with **Next.js** featuring public and protected routes, NextAuth authentication, and a clean responsive design.  

---

## Features

### 1. Landing Page (`/`)
- **Navbar:** Navigation links to Home, Login, and Products pages.  
- **Hero Section:** Engaging hero with a call-to-action.  
- **Product Highlights:** Showcase featured products with brief details.  
- **Footer:** Contact information and quick links.  
- **Navigation:** Users can navigate to Login and Products pages without authentication.  

### 2. Login Page (`/login`)
- **Authentication:** Login via NextAuth using credentials or social login (e.g., Google).  
- **Redirection:** Successful login redirects to `/products`.  
- **Security:** Uses secure JWT-based sessions.  

### 3. Product List Page (`/products`)
- **Public Access:** Accessible without login.  
- **Product Display:** Lists products with name, description, price, and a "Details" button.  
- **Data Source:** Fetches products from a mock backend or static file.  

### 4. Product Details Page (`/products/[id]`)
- **Public Access:** Anyone can view product details.  
- **Full Information:** Displays complete product information including name, description, price, and additional details.  

### 5. Protected Page: Add Product (`/dashboard/add-product`)
- **Authentication Required:** Only accessible for logged-in users.  
- **Add Product Form:** Form to add a new product and save it in the database.  
- **Redirect:** Unauthenticated users are redirected to the login page.  

---

## Setup & Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd <project-folder>
