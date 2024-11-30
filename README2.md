# Late Submission Explanation

Hi Professor,

I wanted to explain why this submission is late and why my project is different from what I originally proposed. My first idea was to create an AI SaaS platform, and everything seemed to go fine initially. However, just before the presentation day, I ran into major issues. I realized that I had misunderstood the instructions and my entire project was built the wrong way. Fixing it would have taken more time than I had, so I decided to change my project completely and start fresh with a **Sales and Invoice Management System**.

I also missed the presentation because I didn’t have a complete project to show at the time. Instead, I chose to take the extra time to finish this project properly and submit it now.

I also need to admit that I don’t have a proper commit history. This is partly because I worked on this new project non-stop in just two sessions, trying to make up for lost time. Another reason is that I didn’t commit changes as often as I should have because everything was saving locally on my machine automatically, and I just forgot.

---

## Project Details

### Name of Web Application
**Sales and Invoice Management System**

### Short Description
This web app is designed to help manage sales, customers, suppliers, products, and invoices. While you can view and manage most data directly in the app, adding suppliers and customers currently requires running SQL commands directly on the database.

---

## How to Add Suppliers and Customers (SQL Instructions)

Since the app doesn’t currently support adding suppliers and customers through the interface, here’s how you can do it using SQL:

1. Open your MySQL client or use a tool like phpMyAdmin.
2. Run the following commands to insert a new **supplier**:
   ```sql
   INSERT INTO suppliers (name, mobile, address, details, previous_balance, created_at, updated_at) 
   VALUES ('Supplier Name', '12345678901', 'Supplier Address', 'Details about supplier', '0.00', NOW(), NOW());
   ```
3. Run the following commands to insert a new **customer**:
   ```sql
   INSERT INTO customers (name, mobile, address, details, previous_balance, created_at, updated_at) 
   VALUES ('Customer Name', '09876543210', 'Customer Address', 'Details about customer', '0.00', NOW(), NOW());
   ```
4. You can verify the records were added by running:
   ```sql
   SELECT * FROM suppliers;
   SELECT * FROM customers;
   ```

---

## Models, Properties, and Relationships

### Models and Relationships Diagram
```plaintext
Customer
  - id (PK)
  - name
  - mobile
  - address
  - details
  - previous_balance
  - created_at
  - updated_at

Supplier
  - id (PK)
  - name
  - mobile
  - address
  - details
  - previous_balance
  - created_at
  - updated_at

Product
  - id (PK)
  - name
  - category_id (FK)
  - supplier_id (FK)
  - unit_id (FK)
  - price
  - stock
  - description
  - created_at
  - updated_at

Category
  - id (PK)
  - name
  - created_at
  - updated_at

Invoice
  - id (PK)
  - customer_id (FK)
  - date
  - total_amount
  - discount
  - created_at
  - updated_at

Sales
  - id (PK)
  - invoice_id (FK)
  - product_id (FK)
  - qty
  - price
  - discount
  - amount
  - created_at
  - updated_at

Unit
  - id (PK)
  - name
  - created_at
  - updated_at
```

### Relationships
- **Customer** → has many **Invoices**.
- **Supplier** → provides many **Products**.
- **Category** → groups many **Products**.
- **Product** → belongs to a **Category**, a **Supplier**, and a **Unit**.
- **Invoice** → has many **Sales**.
- **Sales** → belongs to a **Product** and an **Invoice**.

---

Let me know if this explanation and the details align with what you want!