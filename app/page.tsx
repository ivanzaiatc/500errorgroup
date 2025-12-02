import Link from "next/link";
import AppBar from "./AppBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Instagram, Youtube, Linkedin, Mail, MessageCircle } from "lucide-react";

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
          id="services"
          className="scroll-mt-24 rounded-lg border bg-card/60 p-8 shadow-sm"
        >
          <h2 className="text-3xl font-bold mb-6">Services</h2>
          
          <h3 className="text-2xl font-semibold mb-4 text-foreground">
            Problem Solver as a Service (PSaaS)
          </h3>
          
          <p className="mb-6 text-foreground">
            Modern business doesn't need another developer.
          </p>
          
          <p className="mb-8 font-semibold text-foreground">
            It needs problems solved — fast, lean, and without hiring a full team.
          </p>
          
          <p className="mb-4 text-foreground">
            500errorgroup offers on-demand digital execution:
          </p>
          
          <ul className="list-disc list-inside space-y-2 mb-8 text-foreground ml-4">
            <li>We identify the problem</li>
            <li>We design and implement the solution</li>
            <li>You get measurable results</li>
          </ul>
          
          <p className="mb-8 text-foreground">
            No endless meetings. No bloated roadmaps. No dependency hell.
          </p>
          
          <p className="mb-4 text-foreground font-semibold">
            🔧 Services we deliver:
          </p>
          
          <ul className="list-disc list-inside space-y-3 mb-8 text-foreground ml-4">
            <li>MVP Development (web/app/AI-powered)</li>
            <li>Business process automation using AI tools</li>
            <li>Analytics & performance dashboards</li>
            <li>Conversion optimization for landing pages</li>
            <li>Digital growth systems (CRM, funnels, integrations)</li>
          </ul>
          
          <p className="mb-6 text-foreground">
            We're your external product team — without the overhead.
          </p>
          
          <p className="mb-4 text-foreground">
            You plug us in. We solve your problem.
          </p>
          
          <p className="mb-8 text-foreground">
            Then we disappear (until you need us again).
          </p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="pricing">
              <AccordionTrigger>Pricing</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p className="text-foreground">
                  Pay only for execution. No payroll. No long-term commitments.
                </p>
                
                <p className="text-foreground">
                  Whether you need a quick fix, a rapid MVP, or a dedicated external product team — choose the execution power that fits your problem.
                </p>
                
                <div className="mt-4">
                  <h5 className="font-semibold mb-3">Pricing Table</h5>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 font-semibold">Plan</th>
                          <th className="text-left p-2 font-semibold">Duration</th>
                          <th className="text-left p-2 font-semibold">Price</th>
                          <th className="text-left p-2 font-semibold">Best For</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2">1-Week Sprint</td>
                          <td className="p-2">1 week</td>
                          <td className="p-2">1,900€</td>
                          <td className="p-2">Quick fixes, audits, prototypes, automations</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">1-Month Execution</td>
                          <td className="p-2">4 weeks</td>
                          <td className="p-2">6,900€</td>
                          <td className="p-2">MVPs, integrations, AI workflows, growth systems</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">2-Month Accelerator</td>
                          <td className="p-2">8 weeks</td>
                          <td className="p-2">12,900€</td>
                          <td className="p-2">Product expansion, multi-system automation, scaling</td>
                        </tr>
                        <tr>
                          <td className="p-2">3-Month Transformation</td>
                          <td className="p-2">12 weeks</td>
                          <td className="p-2">17,900€</td>
                          <td className="p-2">Long-term product ownership & operational transformation</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="mt-4 space-y-2 text-foreground">
                  <p>You scale up or down anytime.</p>
                  <p className="font-semibold">You pay for outcomes — not headcount.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="why-us">
              <AccordionTrigger>Why Us</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <h4 className="font-semibold text-lg">Why Us (Instead of Hiring a Developer)</h4>
                
                <div className="space-y-4">
                  <p className="font-semibold text-foreground">
                    <strong>You don't need another developer.</strong>
                  </p>
                  <p className="font-semibold text-foreground">
                    <strong>You need the problem solved.</strong>
                  </p>
                  
                  <div className="mt-4">
                    <p className="font-semibold mb-2">Hiring an in-house developer comes with:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-foreground">
                      <li>4,000–6,000€ monthly salary (plus taxes & benefits)</li>
                      <li>Recruitment, interviews, onboarding</li>
                      <li>Managing tasks, deadlines, priorities</li>
                      <li>One person = one skillset</li>
                      <li>No guarantee of speed or results</li>
                    </ul>
                  </div>
                  
                  <div className="mt-4">
                    <p className="font-semibold mb-2">With 500errorgroup, you get:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-foreground">
                      <li>Execution on demand — plug us in when you need us</li>
                      <li>Pay-for-results work model — no downtime, no overhead</li>
                      <li>Product + development + automation + analytics in one place</li>
                      <li>Faster delivery — we cut meetings, not corners</li>
                      <li>Zero hiring, zero management, zero risk</li>
                    </ul>
                  </div>
                  
                  <div className="mt-4">
                    <p className="font-semibold mb-2">PSaaS is the smarter choice when:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-foreground">
                      <li>You want something shipped fast (MVP, feature, automation)</li>
                      <li>You're testing ideas or validating opportunities</li>
                      <li>You don't want to manage devs or build a team</li>
                      <li>You need multiple skillsets without multiple hires</li>
                      <li>You care about output, not about who sits in a chair</li>
                    </ul>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <p className="font-semibold text-foreground">In short:</p>
                    <p className="text-foreground">
                      You plug us in → we solve the problem → you get measurable results.
                    </p>
                    <p className="text-foreground">
                      No commitments. No overhead. No friction.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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

        <section
          id="blog"
          className="scroll-mt-24 rounded-lg border bg-card/60 p-8 shadow-sm"
        >
          <h2 className="text-3xl font-bold mb-6">Blog</h2>
          <p className="text-muted-foreground">
            Coming soon. Check back for insights on digital transformation, AI automation, and building better businesses.
          </p>
        </section>

        <section
          id="contact"
          className="scroll-mt-24 rounded-lg border bg-card/60 p-8 shadow-sm"
        >
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Get in touch</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:hello@500errorgroup.xyz"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>hello@500errorgroup.xyz</span>
                </a>
                
                <a
                  href="https://wa.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp</span>
                </a>
                
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Telegram</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Follow us</h3>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span>Instagram</span>
                </a>
                
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                  <span>YouTube</span>
                </a>
                
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
