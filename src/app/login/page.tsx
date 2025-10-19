"use client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  async function onSubmit(e: React.FormEvent) { e.preventDefault(); /* NextAuthへ委譲 */ }
  return (
    <main>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <input placeholder="email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" placeholder="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button type="submit">Sign in</button>
      </form>
    </main>
  );
}
