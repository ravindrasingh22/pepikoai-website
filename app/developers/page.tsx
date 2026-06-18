import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { developerLinks } from "@/lib/site-data";

const icons = ["⌘", "{ }", "↗", "▣", "⟳", "●"];

export default function DevelopersPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <div className="container">
          <h1>Build with Pepiko</h1>
          <p>Docs, SDKs, quickstarts, playgrounds, changelogs, and status for Pepiko APIs.</p>
        </div>
      </section>
      <section className="section tight">
        <div className="container">
          <div className="resource-grid">
            {developerLinks.map((link, index) => (
              <article className="resource-card" key={link.href}>
                <div className="card-icon">{icons[index]}</div>
                <h3>{link.name}</h3>
                <p>Focused developer documentation for {link.name.toLowerCase()}.</p>
                <Link className="link" href={link.href}>
                  Open {link.name} →
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
