import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function SignupPage() {
  return (
    <main>
      <SiteHeader />
      <section className="auth-shell">
        <div className="auth-card">
          <p className="post-kicker">Sign up</p>
          <h1>Start building with Pepiko</h1>
          <label>
            Work email
            <input type="email" placeholder="you@company.com" />
          </label>
          <label>
            Company
            <input type="text" placeholder="Company name" />
          </label>
          <button className="btn primary auth-button" type="button">
            Create account
          </button>
          <p>
            Already have an account? <Link href="/login">Login</Link>
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
