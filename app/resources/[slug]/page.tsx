import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { resources } from "@/lib/site-data";

type ResourcePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const posts = [
  ["Product", "Introducing Guardrail Orchestration", "A unified way to configure policies, routing, and responses across your AI stack.", "article-product.svg"],
  ["Engineering", "Building a Human-Reviewed Taxonomy for Child Safety", "How we built a taxonomy that combines expert review with real-world data.", "article-engineering.svg"],
  ["Safety", "4 Principles for Child-Safe AI Design", "Designing AI experiences that are safe, age-appropriate, and trustworthy.", "article-safety.svg"],
  ["Privacy", "PII Detection: What’s New", "Improved coverage for personal and sensitive data detection.", "article-privacy.svg"]
];

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);

  if (!resource) {
    notFound();
  }

  if (resource.slug === "benchmarks") {
    return <BenchmarksPage title={resource.name} />;
  }

  if (resource.slug === "case-studies") {
    return <CaseStudiesPage title={resource.name} />;
  }

  if (resource.slug === "blog") {
    return <BlogPage title={resource.name} />;
  }

  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Resources / {resource.name}</div>
          <h1>{resource.name}</h1>
          <p>Practical guidance for teams building safer AI products for children and families.</p>
        </div>
      </section>
      <section className="section tight">
        <div className="container">
          <div className="guide-list">
            {["Designing age-aware AI policies", "Routing unsafe prompts safely", "Preparing launch safety reviews"].map(
              (item, index) => (
                <article className="guide-item" key={item}>
                  <div className="guide-icon">{["☰", "⛨", "□"][index]}</div>
                  <div>
                    <h3>{item}</h3>
                    <p>Implementation guidance, review checklists, and patterns for production teams.</p>
                    <Link className="link" href="/developers/docs">
                      Read guide →
                    </Link>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

function BlogPage({ title }: { title: string }) {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Resources / {title}</div>
          <h1>{title}</h1>
          <p>Product updates, engineering insights, and news from the Pepiko team.</p>
        </div>
      </section>
      <section className="section tight">
        <div className="container blog-layout">
          <div className="post-list">
            {posts.map(([kicker, headline, description, image]) => (
              <article className="post-item" key={headline}>
                <img src={`/assets/img/${image}`} alt="" />
                <div>
                  <div className="post-kicker">{kicker}</div>
                  <h3>{headline}</h3>
                  <p>{description}</p>
                  <div className="post-meta">May 2026 · 6 min read</div>
                </div>
              </article>
            ))}
          </div>
          <aside>
            <div className="sidebar-card">
              <h3>Categories</h3>
              <Link href="/resources/blog">All</Link>
              <Link href="/resources/blog">Product</Link>
              <Link href="/resources/blog">Engineering</Link>
              <Link href="/resources/blog">Safety</Link>
            </div>
            <div className="sidebar-card">
              <h3>Subscribe</h3>
              <p>Get the latest updates and insights.</p>
              <input placeholder="Email address" />
              <Link className="btn primary" href="/signup">
                Subscribe
              </Link>
            </div>
          </aside>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

function CaseStudiesPage({ title }: { title: string }) {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Resources / {title}</div>
          <h1>{title}</h1>
          <p>See how leading teams use Pepiko to build safer AI products for children and families.</p>
          <div className="filters">
            {["All", "Kids Apps", "Education", "Chatbots", "Community", "Platforms"].map((filter, index) => (
              <span className={`filter ${index === 0 ? "active" : ""}`} key={filter}>
                {filter}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="section tight">
        <div className="container">
          <div className="case-grid">
            {["Khan Academy Kids", "Toca Boca", "TalkingPoints", "BrightCHAMPS", "edapp", "kidSAFE"].map((name) => (
              <article className="case-card" key={name}>
                <div className="case-logo">{name}</div>
                <h3>How {name} builds safer AI experiences with Pepiko.</h3>
                <Link className="link" href="/resources/case-studies">
                  Read case study →
                </Link>
                <div className="case-tag">Education</div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

function BenchmarksPage({ title }: { title: string }) {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Resources / {title}</div>
          <h1>{title}</h1>
          <p>Transparent evaluations of models and systems across key safety dimensions.</p>
          <div className="benchmark-tabs">
            <Link className="active" href="/resources/benchmarks">
              Overview
            </Link>
            <Link href="/resources/benchmarks">Model Benchmarks</Link>
            <Link href="/resources/benchmarks">Dataset</Link>
            <Link href="/resources/benchmarks">Methodology</Link>
          </div>
        </div>
      </section>
      <section className="section tight">
        <div className="container">
          <div className="metric-cards">
            <article className="metric-card">
              <div className="metric-number">98.6%</div>
              <p>Child Safety Accuracy</p>
              <span>↑ 2.4% vs baseline</span>
            </article>
            <article className="metric-card">
              <div className="metric-number">96.3%</div>
              <p>Harmful Content Recall</p>
              <span>↑ 3.1% vs baseline</span>
            </article>
            <article className="metric-card">
              <div className="metric-number">93.7%</div>
              <p>Policy Routing Accuracy</p>
              <span>↑ 2.0% vs baseline</span>
            </article>
            <article className="metric-card">
              <div className="metric-number">&lt;250ms</div>
              <p>Median Latency</p>
              <span>Global P95</span>
            </article>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Child Safety Accuracy</th>
                  <th>Harmful Recall</th>
                  <th>Policy Routing</th>
                  <th>Latency P95</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Pepiko v2.3</strong>
                  </td>
                  <td>98.6%</td>
                  <td>96.3%</td>
                  <td>93.7%</td>
                  <td>218ms</td>
                </tr>
                <tr>
                  <td>Baseline Open Source</td>
                  <td>92.1%</td>
                  <td>87.4%</td>
                  <td>82.2%</td>
                  <td>340ms</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
