import { Instagram, Youtube, Linkedin, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
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
  );
}

