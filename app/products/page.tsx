import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { products } from "@/lib/site-data";

const icons = ["◇", "☷", "▤", "◎", "⛨"];

export default function ProductsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <div className="container">
          <h1>Powerful safety products</h1>
          <p>Modular APIs for classifying, routing, and protecting AI interactions.</p>
        </div>
      </section>
      <section className="section tight">
        <div className="container">
          <div className="card-grid six">
            {products.map((product, index) => (
              <article className="card" key={product.slug}>
                <div className="card-icon">{icons[index]}</div>
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <Link className="link" href={`/products/${product.slug}`}>
                  Learn more →
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
