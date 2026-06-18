import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { products } from "@/lib/site-data";

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Built for child-first AI products</span>
            <h1>Safety APIs for child-first AI products</h1>
            <p className="lead">
              Classify prompts, detect child-safety risks, and route responses with
              production-ready safety intelligence.
            </p>
            <div className="hero-actions">
              <Link className="btn primary" href="/developers/quickstart">
                Start building →
              </Link>
              <Link className="btn" href="/developers/docs">
                View API docs
              </Link>
            </div>
            <div className="hero-metrics">
              <div className="metric">
                <span className="status-dot" />
                <span>
                  <strong>Low latency</strong>&lt;150ms p95
                </span>
              </div>
              <div className="metric">
                <span className="status-dot" />
                <span>
                  <strong>99.9% uptime</strong>SLA-backed
                </span>
              </div>
              <div className="metric">
                <span className="status-dot" />
                <span>
                  <strong>Privacy-first</strong>No training on your data
                </span>
              </div>
              <div className="metric">
                <span className="status-dot" />
                <span>
                  <strong>SOC 2</strong>Type II compliant
                </span>
              </div>
            </div>
          </div>

          <div className="console" aria-label="API console">
            <div className="console-tabs">
              <div className="console-tab active">Child Safety</div>
              <div className="console-tab">Prompt Classifier</div>
              <div className="console-tab">Policy Route</div>
            </div>
            <div className="console-body">
              <div className="code-panel">
                <div className="code-title">
                  <span>Request</span>
                  <span className="pill">POST</span>
                </div>
                <pre>{`/v1/child-safety/classify

{
  "text": "How can I sneak out
    of my house at night?",
  "user_age": "13-15",
  "context": {
    "platform": "kids_app",
    "interaction_type": "prompt"
  },
  "language": "en"
}`}</pre>
              </div>
              <div className="code-panel">
                <div className="code-title">
                  <span>Response</span>
                  <span className="pill">200 OK · 142ms</span>
                </div>
                <pre>{`{
  "category": "child_safety",
  "risk_level": "high",
  "policy_bucket": "blocked",
  "recommended_action": 
    "refuse_and_redirect",
  "confidence": 0.97
}`}</pre>
              </div>
            </div>
            <div className="console-footer">
              <div className="select-like">curl</div>
              <Link className="btn primary small" href="/developers/playground">
                Send request
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container trust-strip">
          <div className="trust-title">Trusted by teams building safe experiences for children and families</div>
          <div className="logo-row">
            <div className="logo-chip">Khan Academy Kids</div>
            <div className="logo-chip">kidSAFE</div>
            <div className="logo-chip">TalkingPoints</div>
            <div className="logo-chip">BrightCHAMPS</div>
            <div className="logo-chip">Toca Boca</div>
            <div className="logo-chip">edapp</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Powerful safety products</h2>
          <p className="section-sub">Modular APIs that fit into your AI stack.</p>
          <div className="card-grid three home-product-grid">
            {products.slice(0, 3).map((product, index) => (
              <article className="card" key={product.slug}>
                <div className="card-icon">{["◇", "☷", "▤"][index]}</div>
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <Link className="link" href={`/products/${product.slug}`}>
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
          <div className="center-link">
            <Link className="link" href="/products">
              View all products →
            </Link>
          </div>
        </div>
      </section>

      <section className="section soft-band">
        <div className="container">
          <h2>Built for developers</h2>
          <p className="section-sub">Everything you need to ship safety into production.</p>
          <div className="feature-grid">
            <div className="feature">
              <div className="feature-icon">⌘</div>
              <div>
                <h3>REST API</h3>
                <p>Simple, predictable, and well-documented.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">{"{ }"}</div>
              <div>
                <h3>SDKs</h3>
                <p>JavaScript/TypeScript and Python SDKs.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <div>
                <h3>Low latency</h3>
                <p>Fast responses for real-time AI experiences.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">⛨</div>
              <div>
                <h3>Policy-aware outputs</h3>
                <p>Clear categories, risk levels, and recommended actions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Built for real-world use cases</h2>
          <div className="use-grid">
            <div className="use-case">
              <div className="use-icon">🎓</div>
              <h3>AI Tutors</h3>
              <p>Keep learning conversations safe.</p>
            </div>
            <div className="use-case">
              <div className="use-icon">🧩</div>
              <h3>Kids Apps</h3>
              <p>Protect young users in every interaction.</p>
            </div>
            <div className="use-case">
              <div className="use-icon">💬</div>
              <h3>Family-safe Chatbots</h3>
              <p>Support families with confidence.</p>
            </div>
            <div className="use-case">
              <div className="use-icon">🏫</div>
              <h3>EdTech Platforms</h3>
              <p>Ensure safe AI across the classroom.</p>
            </div>
            <div className="use-case">
              <div className="use-icon">🛡</div>
              <h3>Creator & Community Tools</h3>
              <p>Moderate content and manage risk at scale.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft-band">
        <div className="container">
          <h2>Accuracy and trust you can rely on</h2>
          <div className="trust-grid">
            <article className="trust-card">
              <div className="mini-bars">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div>
                <h3>Benchmarked for safety</h3>
                <p>Rigorous evaluations across real-world datasets.</p>
                <Link className="link" href="/resources/benchmarks">
                  View benchmarks →
                </Link>
              </div>
            </article>
            <article className="trust-card">
              <div className="people-icon">
                <span />
                <span />
                <span />
              </div>
              <div>
                <h3>Human-reviewed taxonomy</h3>
                <p>Built with child safety experts and human-reviewed labels.</p>
                <Link className="link" href="/resources/safety-research">
                  Learn more →
                </Link>
              </div>
            </article>
            <article className="trust-card">
              <div className="list-icon">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div>
                <h3>Transparent categories</h3>
                <p>Understand every decision with clear policy buckets.</p>
                <Link className="link" href="/developers/docs">
                  Explore taxonomy →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Easy to integrate</h2>
          <p className="section-sub">Get started in minutes.</p>
          <div className="integration-console">
            <div>
              <div className="integration-tabs">
                <span className="active">JavaScript SDK</span>
                <span>Python SDK</span>
                <span>cURL</span>
              </div>
              <pre>{`import { Pepiko } from "pepiko-sdk";

const client = new Pepiko({
  apiKey: "pk_live_xxx"
});

const res = await client.childSafety.classify({
  text: "How can I sneak out of my house at night?",
  user_age: "13-15",
  platform: "kids_app"
});`}</pre>
            </div>
            <div className="code-panel integration-response">
              <div className="code-title">
                <span>Response</span>
              </div>
              <pre>{`{
  "category": "child_safety",
  "risk_level": "high",
  "policy_bucket": "blocked",
  "recommended_action":
    "refuse_and_redirect",
  "confidence": 0.97
}`}</pre>
            </div>
          </div>
          <div className="center-link">
            <Link className="link" href="/developers/docs">
              View full docs →
            </Link>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <h2>Real results from real teams</h2>
          <p className="section-sub">Explore how teams use Pepiko to build safer AI experiences.</p>
          <div className="result-grid">
            <article className="result-card">
              <h3>How Khan Academy Kids improved safety coverage by 98%</h3>
              <Link className="link" href="/resources/case-studies">
                Read case study →
              </Link>
              <div className="result-logo">Khan Academy Kids</div>
            </article>
            <article className="result-card">
              <h3>TalkingPoints reduced inappropriate content by 95%</h3>
              <Link className="link" href="/resources/case-studies">
                Read case study →
              </Link>
              <div className="result-logo">TalkingPoints</div>
            </article>
            <article className="result-card">
              <h3>How Toca Boca keeps creativity safe for millions of kids</h3>
              <Link className="link" href="/resources/case-studies">
                Read case study →
              </Link>
              <div className="result-logo">TOCA BOCA</div>
            </article>
            <article className="result-card">
              <h3>Explore resources</h3>
              <Link className="link" href="/resources/benchmarks">
                Benchmarks →
              </Link>
              <Link className="link" href="/resources/safety-research">
                Safety research →
              </Link>
              <Link className="link" href="/resources/guides">
                Guides →
              </Link>
              <Link className="link" href="/resources/policy-templates">
                Policy templates →
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container pricing-band">
          <div>
            <h2>
              Simple pricing.
              <br />
              Built for teams of any size.
            </h2>
            <p>Start free, scale as you grow.</p>
          </div>
          <div className="pricing-actions">
            <Link className="btn primary" href="/pricing">
              View pricing
            </Link>
            <Link className="btn dark" href="/signup">
              Contact sales
            </Link>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container final-cta">
          <img src="/assets/img/pepiko-mark.svg" alt="" />
          <div>
            <h2>Start building safer AI experiences today</h2>
            <p>Pepiko gives you the safety intelligence to protect children and empower your product.</p>
          </div>
          <div className="cta-actions">
            <Link className="btn primary" href="/developers/quickstart">
              Start building
            </Link>
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
