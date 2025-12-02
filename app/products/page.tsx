export default function ProductsPage() {
  return (
    <section className="rounded-lg border bg-card/60 p-8 shadow-sm">
        <h1 className="text-3xl font-bold mb-6">Products</h1>
        
        <a
          href="https://loyaacrm.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lg border bg-card p-6 shadow-sm transition-all hover:bg-accent hover:shadow-md hover:border-primary/50"
        >
          <h2 className="text-2xl font-semibold mb-3 text-foreground">Loyaa</h2>
          <p className="text-foreground">
            Loyaa helps small businesses turn first-time customers into loyal regulars.
          </p>
        </a>
      </section>
  );
}

