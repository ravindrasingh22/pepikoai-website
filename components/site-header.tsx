import Link from "next/link";
import { developerLinks, products, resources } from "@/lib/site-data";

const productIcons = ["◇", "☷", "▤", "◎", "⛨"];
const developerIcons = ["⌘", "{ }", "↗", "▣", "⟳", "●"];
const resourceIcons = ["▦", "✎", "☰", "⌁", "▥", "□"];

const developerDescriptions: Record<string, string> = {
  "API Docs": "Reference docs for every endpoint.",
  SDKs: "JavaScript, Python, and REST.",
  Quickstart: "Make your first request in minutes.",
  Playground: "Test prompts and policy outputs.",
  Changelog: "Product updates and API changes.",
  Status: "Availability and incidents."
};

const resourceDescriptions: Record<string, string> = {
  "Case Studies": "Real-world safety outcomes.",
  Blog: "Product, engineering, and safety insights.",
  Guides: "Step-by-step implementation advice.",
  "Safety Research": "Model behavior and taxonomy notes.",
  Benchmarks: "Model and policy performance.",
  "Policy Templates": "Ready-to-adapt safety policies."
};

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link className="brand" href="/">
          <img src="/assets/img/pepiko-mark.svg" alt="" />
          pepiko.ai
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          <div className="nav-item">
            <Link className="nav-link" href="/products">
              Products
            </Link>
            <div className="dropdown wide">
              {products.map((product, index) => (
                <Link className="drop-item" href={`/products/${product.slug}`} key={product.slug}>
                  <span className="drop-icon">{productIcons[index]}</span>
                  <span>
                    <span className="drop-title">{product.name}</span>
                    <span className="drop-copy">{product.desc}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="nav-item">
            <Link className="nav-link" href="/developers">
              Developers
            </Link>
            <div className="dropdown">
              {developerLinks.map((link, index) => (
                <Link className="drop-item" href={link.href} key={link.href}>
                  <span className="drop-icon">{developerIcons[index]}</span>
                  <span>
                    <span className="drop-title">{link.name}</span>
                    <span className="drop-copy">{developerDescriptions[link.name]}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="nav-item">
            <Link className="nav-link" href="/resources">
              Resources
            </Link>
            <div className="dropdown">
              {resources.map((resource, index) => (
                <Link className="drop-item" href={`/resources/${resource.slug}`} key={resource.slug}>
                  <span className="drop-icon">{resourceIcons[index]}</span>
                  <span>
                    <span className="drop-title">{resource.name}</span>
                    <span className="drop-copy">{resourceDescriptions[resource.name]}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <Link className="nav-link no-caret" href="/pricing">
            Pricing
          </Link>
        </nav>

        <div className="nav-actions">
          <Link className="btn ghost small" href="/login">
            Login
          </Link>
          <Link className="btn small" href="/signup">
            Sign up
          </Link>
          <Link className="btn primary small" href="/developers/quickstart">
            Start building
          </Link>
        </div>

        <button className="btn mobile-toggle small" aria-label="Open menu">
          Menu
        </button>
      </div>
    </header>
  );
}
