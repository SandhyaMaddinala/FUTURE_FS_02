import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");

  // Fetch customers
  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/leads");
      setCustomers(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch customers.");
    }
  };

  // Add or Update Customer
  const saveCustomer = async () => {
    if (!name.trim() || !email.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/leads/${editId}`, {
          name,
          email,
        });
        setEditId(null);
      } else {
        await axios.post("http://localhost:5000/api/leads", {
          name,
          email,
        });
      }

      setName("");
      setEmail("");
      fetchCustomers();
    } catch (err) {
      console.error(err);
      alert("Failed to save customer.");
    }
  };

  // Delete Customer
  const deleteCustomer = async (_id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this customer?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/leads/${_id}`);
      fetchCustomers();
    } catch (err) {
      console.error(err);
      alert("Failed to delete customer.");
    }
  };

  // Edit Customer
  const editCustomer = (customer) => {
    setEditId(customer._id);
    setName(customer.name);
    setEmail(customer.email);
  };

  // Search + Sort
  const filteredCustomers = customers
    .filter((customer) =>
      customer.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="container">
      <h1>Mini CRM Dashboard</h1>

      <div
        style={{
          background: "#007bff",
          color: "white",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "20px",
          width: "220px",
        }}
      >
        <h3>Total Customers</h3>
        <h2>{customers.length}</h2>
      </div>

      <div className="form">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={saveCustomer}>
          {editId ? "Update Customer" : "Add Customer"}
        </button>
      </div>

      <input
        type="text"
        placeholder="Search customer..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
        }}
      />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredCustomers.length === 0 ? (
            <tr>
              <td colSpan="4">No customers found.</td>
            </tr>
          ) : (
            filteredCustomers.map((customer) => (
              <tr key={customer._id}>
                <td>{customer._id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => editCustomer(customer)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteCustomer(customer._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <hr />

      <p style={{ textAlign: "center", marginTop: "20px" }}>
        Mini CRM Dashboard | Created by Sandhya Lakshmi
      </p>
    </div>
  );
}

export default App;