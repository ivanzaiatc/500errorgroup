import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ServicesPage() {
  return (
    <section className="rounded-lg border bg-card/60 p-8 shadow-sm">
        <h1 className="text-3xl font-bold mb-6">Services</h1>
        
        <h2 className="text-2xl font-semibold mb-4 text-foreground">
          Problem Solver as a Service (PSaaS)
        </h2>
        
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
  );
}

