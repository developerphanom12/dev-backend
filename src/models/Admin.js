import db from "../config/db.js";

const Admin = {
  create: async ({ name, email, password }) => {
    const [result] = await db.query(
      "INSERT INTO admins (name, email, password) VALUES (?, ?, ?)",
      [name, email, password]
    );
    return result.insertId;
  },

  findByEmail: async (email) => {
    const [rows] = await db.query("SELECT * FROM admins WHERE email = ?", [email]);
    return rows[0];
  },
};

export default Admin;
