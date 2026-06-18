import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function PricingPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <div className="container">
          <h1>Simple pricing. Built for teams of any size.</h1>
          <p>Start free, scale as you grow, and add enterprise controls when you need them.</p>
        </div>
      </section>
      <section className="section tight">
        <div className="container">
          <div className="card-grid three">
            {["Developer", "Growth", "Enterprise"].map((plan) => (
              <article className="card" key={plan}>
                <div className="card-icon">▥</div>
                <h3>{plan}</h3>
                <p>Designed for {plan.toLowerCase()} teams building child-safe AI products.</p>
                <Link className="link" href="/signup">
                  Get started →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
