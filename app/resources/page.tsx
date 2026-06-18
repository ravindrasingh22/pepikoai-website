import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { resources } from "@/lib/site-data";

const icons = ["▦", "✎", "☰", "⌁", "▥", "□"];
const copy: Record<string, string> = {
  "Case Studies": "Real-world stories from teams building safer AI experiences.",
  Blog: "Product updates, company news, and engineering insights.",
  Guides: "Step-by-step guides and best practices for AI safety.",
  "Safety Research": "Original research on child safety, policy, and model behavior.",
  Benchmarks: "Model evaluations and benchmark results you can trust.",
  "Policy Templates": "Ready-to-use policy templates for your safety program."
};

export default function ResourcesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <div className="container">
          <h1>Resources</h1>
          <p>Guides, research, benchmarks, and templates to help you build safer AI products for children and families.</p>
          <div className="search-box">
            <input placeholder="Search resources..." aria-label="Search resources" />
          </div>
        </div>
      </section>
      <section className="section tight">
        <div className="container">
          <div className="resource-grid">
            {resources.map((resource, index) => (
              <article className="resource-card" key={resource.slug}>
                <div className="card-icon">{icons[index]}</div>
                <h3>{resource.name}</h3>
                <p>{copy[resource.name]}</p>
                <Link className="link" href={`/resources/${resource.slug}`}>
                  Explore {resource.name} →
                </Link>
              </article>
            ))}
          </div>
          <div className="inline-cta">
            <div>
              <h3>Looking for API docs?</h3>
              <p>Go to our developer docs to get started.</p>
            </div>
            <Link className="btn" href="/developers/docs">
              View API docs
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
