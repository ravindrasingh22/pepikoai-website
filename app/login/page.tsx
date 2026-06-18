import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function LoginPage() {
  return (
    <main>
      <SiteHeader />
      <section className="auth-shell">
        <div className="auth-card">
          <p className="post-kicker">Login</p>
          <h1>Access your Pepiko workspace</h1>
          <label>
            Email
            <input type="email" placeholder="you@company.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Password" />
          </label>
          <button className="btn primary auth-button" type="button">
            Login
          </button>
          <p>
            New to Pepiko? <Link href="/signup">Create an account</Link>
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
