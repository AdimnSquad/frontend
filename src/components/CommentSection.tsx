import apiClient from "../api/axios";
import React, { useState } from "react";

interface CommentFrom {
  name: string;
  email: string;
  komentar: string;
}

export default function CommentSection() {
  const [form, setFrom] = useState<CommentFrom>({
    name: "",
    email: "",
    komentar: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFrom({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      await apiClient.post("/komentar/store", form);

      setMessage("Komentar berhasil dikirim");
      setFrom({ name: "", email: "", komentar: "" });
    } catch (error: any) {
      setMessage(error.response?.data.message || "Gagal mengirim komentar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-3">Tulis Komentar</h5>
          {message && <div className="alert alert-info">{message}</div>}

          <form action="" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Nama
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Komentar
              </label>
              <textarea
                name="komentar"
                id=""
                className="form-control"
                rows={4}
                value={form.komentar}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button className="btn btn-primary" disabled={loading}>
                {loading ? "Mengirim..." : "Kirim Pesan"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
