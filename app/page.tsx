import Link from "next/link";

export default function Home() {
  return (
    <section className="rounded-lg border bg-card/60 p-8 shadow-sm">
        <h1 className="text-3xl font-bold mb-6">Welcome to 500errorgroup</h1>
        
        <p className="text-xl font-semibold mb-4 text-foreground">
          The world doesn't slow down. Neither should your business.
        </p>
        
        <p className="text-lg mb-6 text-muted-foreground">
          500errorgroup is a digital partner for small and growing businesses.
        </p>
        
        <p className="mb-8 text-foreground">
          We help you adapt faster, automate smarter, and stay ahead — by combining AI, analytics, design, and engineering into one streamlined service.
        </p>
        
        <div className="grid gap-4 md:grid-cols-2 mt-8">
          <Link
            href="/about"
            className="block rounded-lg border bg-card p-6 shadow-sm transition-all hover:bg-accent hover:shadow-md hover:border-primary/50"
          >
            <h2 className="text-xl font-semibold mb-2 text-foreground">About us</h2>
            <p className="text-muted-foreground">
              Learn more about our mission and approach to digital transformation.
            </p>
          </Link>
          
          <Link
            href="/services"
            className="block rounded-lg border bg-card p-6 shadow-sm transition-all hover:bg-accent hover:shadow-md hover:border-primary/50"
          >
            <h2 className="text-xl font-semibold mb-2 text-foreground">Services</h2>
            <p className="text-muted-foreground">
              Problem Solver as a Service (PSaaS) - execution on demand.
            </p>
          </Link>
          
          <Link
            href="/products"
            className="block rounded-lg border bg-card p-6 shadow-sm transition-all hover:bg-accent hover:shadow-md hover:border-primary/50"
          >
            <h2 className="text-xl font-semibold mb-2 text-foreground">Products</h2>
            <p className="text-muted-foreground">
              Discover our tools and solutions for business growth.
            </p>
          </Link>
          
          <Link
            href="/blog"
            className="block rounded-lg border bg-card p-6 shadow-sm transition-all hover:bg-accent hover:shadow-md hover:border-primary/50"
          >
            <h2 className="text-xl font-semibold mb-2 text-foreground">Blog</h2>
            <p className="text-muted-foreground">
              Insights on digital transformation and AI automation.
            </p>
          </Link>
        </div>
      </section>
  );
}
