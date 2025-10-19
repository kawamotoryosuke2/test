import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Welcome</h1>
      <p><Link href="/login">Login</Link> / <Link href="/signup">Sign up</Link> / <Link href="/dashboard">Dashboard</Link></p>
    </main>
  );
}
