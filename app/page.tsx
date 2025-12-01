import Link from "next/link";
import AppBar from "./AppBar";

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="border-b bg-card">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="text-lg font-semibold">
            500errorgroup
          </Link>
          <AppBar />
        </div>
      </header>
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-12 px-6 py-10">
        <section
          id="about"
          className="scroll-mt-24 rounded-lg border bg-card/60 p-8 shadow-sm"
        >
          <h2 className="text-3xl font-bold mb-6">About us</h2>
          
          <p className="text-xl font-semibold mb-4 text-foreground">
            The world doesn't slow down. Neither should your business.
          </p>
          
          <p className="text-lg mb-6 text-muted-foreground">
            500errorgroup is a digital partner for small and growing businesses.
          </p>
          
          <p className="mb-8 text-foreground">
            We help you adapt faster, automate smarter, and stay ahead — by combining AI, analytics, design, and engineering into one streamlined service.
          </p>
          
          <p className="mb-6 text-foreground">
            In today's world, having a website or an Instagram account isn't enough.
          </p>
          
          <p className="mb-8 font-semibold text-foreground">
            Real growth comes from systems that think, learn, and save you time.
          </p>
          
          <p className="mb-6 text-foreground">
            We focus on practical, integrated digital transformation — without the agency fluff. We help you:
          </p>
          
          <ul className="list-disc list-inside space-y-3 mb-8 text-foreground ml-4">
            <li>Integrate AI into your real operations — not just as a buzzword</li>
            <li>Understand your business through data — and act on it</li>
            <li>Automate and simplify your workflows</li>
            <li>Build websites, apps, and digital tools that actually work</li>
            <li>Launch marketing that's lean, smart, and measurable</li>
          </ul>
          
          <p className="mb-6 text-foreground">
            We're also building our own tools — so we stay ahead, and you benefit.
          </p>
          
          <p className="mb-4 text-foreground">
            This isn't just "going digital."
          </p>
          
          <p className="text-lg font-semibold text-foreground">
            This is building a business that's ready for the next decade.
          </p>
        </section>

        <section
          id="products"
          className="scroll-mt-24 rounded-lg border bg-card/60 p-8 shadow-sm"
        >
          <h2 className="text-3xl font-bold mb-6">Products</h2>
          
          <a
            href="https://loyaacrm.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg border bg-card p-6 shadow-sm transition-all hover:bg-accent hover:shadow-md hover:border-primary/50"
          >
            <h3 className="text-2xl font-semibold mb-3 text-foreground">Loyaa</h3>
            <p className="text-foreground">
              Loyaa helps small businesses turn first-time customers into loyal regulars.
            </p>
          </a>
        </section>
      </main>
    </div>
  );
}
