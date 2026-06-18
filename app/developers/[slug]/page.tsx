import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { developerLinks } from "@/lib/site-data";

type DeveloperPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return developerLinks.map((link) => ({
    slug: link.href.replace("/developers/", "")
  }));
}

export default async function DeveloperPage({ params }: DeveloperPageProps) {
  const { slug } = await params;
  const page = developerLinks.find((link) => link.href === `/developers/${slug}`);

  if (!page) {
    notFound();
  }

  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Developers / {page.name}</div>
          <h1>{page.name}</h1>
          <p>Everything you need to integrate Pepiko safety intelligence into production workflows.</p>
        </div>
      </section>
      <section className="section tight">
        <div className="container integration-console">
          <div>
            <div className="integration-tabs">
              <span className="active">cURL</span>
              <span>JavaScript</span>
              <span>Python</span>
            </div>
            <pre>{`curl https://api.pepiko.ai/v1/classify \\
  -H "Authorization: Bearer $PEPIKO_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"text":"user message","user_age":"8-10"}'`}</pre>
          </div>
          <div className="code-panel integration-response">
            <div className="code-title">
              <span>Response</span>
            </div>
            <pre>{`{
  "risk_level": "high",
  "policy_bucket": "blocked",
  "recommended_action": "refuse_and_redirect"
}`}</pre>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
