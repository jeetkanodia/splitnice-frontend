import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import api from "../api/axios";
import { useAuthStore } from "../store/auth.store";

export default function Register() {
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await api.post("/auth/register", form);

      setToken(res.data.token);

      navigate("/");
    } catch (err: any) {
      alert(err.response?.data?.message || "Register failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <h1 className="text-2xl font-bold mb-6 text-center">
        Create Account
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <Input
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <Input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <Button type="submit" loading={loading}>
          Register
        </Button>
      </form>

      <p className="text-center text-sm mt-4">
        Already have an account?{" "}
        <Link to="/login" className="font-semibold">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
}
