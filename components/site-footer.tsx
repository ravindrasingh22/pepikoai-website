import Link from "next/link";
import { developerLinks, products, resources } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand" href="/">
            <img src="/assets/img/pepiko-mark.svg" alt="" />
            pepiko
          </Link>
          <p>Safety infrastructure for AI products used by children, families, and education platforms.</p>
          <p>© 2026 Pepiko, Inc. All rights reserved.</p>
        </div>
        <div>
          <h4>Products</h4>
          {products.slice(0, 4).map((product) => (
            <Link href={`/products/${product.slug}`} key={product.slug}>
              {product.name}
            </Link>
          ))}
          <Link href="/products">All Products →</Link>
        </div>
        <div>
          <h4>Developers</h4>
          {developerLinks
            .filter((link) => link.name !== "Changelog")
            .map((link) => (
              <Link href={link.href} key={link.href}>
                {link.name}
              </Link>
            ))}
        </div>
        <div>
          <h4>Resources</h4>
          {resources
            .filter((resource) => resource.name !== "Safety Research")
            .map((resource) => (
              <Link href={`/resources/${resource.slug}`} key={resource.slug}>
                {resource.name}
              </Link>
            ))}
        </div>
        <div>
          <h4>Company</h4>
          <Link href="/resources/safety-research">Trust Center</Link>
          <Link href="/resources/blog">Company Blog</Link>
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign up</Link>
        </div>
      </div>
    </footer>
  );
}
