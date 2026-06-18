import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { products } from "@/lib/site-data";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Products / {product.name}</div>
          <h1>{product.name}</h1>
          <p>{product.desc}</p>
          <div className="hero-actions">
            <Link className="btn primary" href="/developers/quickstart">
              Start building →
            </Link>
            <Link className="btn" href="/developers/docs">
              API docs
            </Link>
          </div>
        </div>
      </section>
      <section className="section tight">
        <div className="container integration-console">
          <div>
            <div className="integration-tabs">
              <span className="active">Request</span>
              <span>Response</span>
              <span>Policy</span>
            </div>
            <pre>{`curl https://api.pepiko.ai/v1/classify \\
  -H "Authorization: Bearer $PEPIKO_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"text":"user message","user_age":"8-10"}'`}</pre>
          </div>
          <div className="code-panel integration-response">
            <div className="code-title">
              <span>Response</span>
              <span className="pill">200 OK</span>
            </div>
            <pre>{`{
  "category": "child_safety",
  "risk_level": "high",
  "policy_bucket": "blocked",
  "recommended_action": "refuse_and_redirect",
  "confidence": 0.97
}`}</pre>
          </div>
        </div>
      </section>
      <section className="section soft-band">
        <div className="container">
          <h2>Built for production decisions</h2>
          <div className="feature-grid">
            <div className="feature">
              <div className="feature-icon">▥</div>
              <div>
                <h3>Structured output</h3>
                <p>Use categories, risk levels, and confidence to route clearly.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">⛨</div>
              <div>
                <h3>Policy routing</h3>
                <p>Return recommended actions for block, allow, review, or redirect flows.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <div>
                <h3>Fast path</h3>
                <p>Designed for real-time AI product interactions.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">⌘</div>
              <div>
                <h3>Developer-ready</h3>
                <p>Integrate with REST, SDKs, and predictable schemas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
