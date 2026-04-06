import Link from "next/link";

const NAV_LINKS = [
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Blogs", href: "https://fitzip-newsletter-069955.beehiiv.com" },
  { label: "Contact Us", href: "mailto:erooney729@gmail.com" },
];

const SUPPORT_LINKS = [
  { label: "Shipping", href: "/shipping" },
  { label: "Return & Refund", href: "/returns" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const PAYMENT_METHODS = ["VISA", "MC", "AMEX", "APPLE PAY", "GOOGLE PAY", "STRIPE"];

function YoutubeIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#CC0000] border-t-4 border-black">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-14 pb-10 md:pt-16 md:pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="text-5xl font-black text-white hover:text-black transition-colors duration-200 tracking-normal"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              FitZip
            </Link>
            <p
              className="text-white/40 text-sm mt-3 leading-relaxed"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              We simplify fitness. Build strength, improve your joints, and feel stronger — no gym needed.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4 mt-5">
              <Link
                href="https://www.youtube.com/@fitzip"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-black transition-colors duration-150"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </Link>
              <Link
                href="mailto:erooney729@gmail.com"
                className="text-white/60 hover:text-black transition-colors duration-150"
                aria-label="Email"
              >
                <MailIcon />
              </Link>
            </div>
          </div>

          {/* Nav col */}
          <div>
            <p
              className="text-white font-black uppercase text-xs tracking-widest mb-5"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Navigate
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") || link.href.startsWith("mailto") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-white/50 hover:text-white text-sm font-medium transition-colors duration-150"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support col */}
          <div>
            <p
              className="text-white font-black uppercase text-xs tracking-widest mb-5"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Support
            </p>
            <ul className="space-y-3">
              {SUPPORT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm font-medium transition-colors duration-150"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter mini */}
          <div>
            <p
              className="text-white font-black uppercase text-xs tracking-widest mb-5"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Newsletter
            </p>
            <p
              className="text-white/40 text-sm mb-4 leading-relaxed"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Free weekly training tips in your inbox.
            </p>
            <Link
              href="https://fitzip-newsletter-069955.beehiiv.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded-full bg-black text-white text-xs font-black uppercase tracking-widest border-2 border-black transition-all duration-150"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                boxShadow: "3px 3px 0px #000000",
              }}
            >
              Subscribe Free
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className=" mt-10 md:mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Copyright */}
            <p
              className="text-black/60 text-xs order-2 md:order-1"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              © {new Date().getFullYear()}, FitZip. All rights reserved.
            </p>

            {/* Payment badges */}
            <div className="flex items-center flex-wrap justify-center gap-2 order-1 md:order-2">
              {PAYMENT_METHODS.map((method) => (
                <span
                  key={method}
                  className="px-2.5 py-1 rounded border border-black/30 text-black/50 text-[9px] font-black uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mega wordmark — full viewport width */}
      <div className="w-full border-t-4 border-black overflow-hidden" style={{ lineHeight: 0.85 }}>
        <p
          className="text-white font-black text-center select-none w-full"
          style={{
            fontFamily: "var(--font-poppins), sans-serif",
            fontSize: "24.5vw",
            fontWeight: 900,
            letterSpacing: "normal",
            lineHeight: 0.85,
            display: "block",
          }}
        >
          FITZIP
        </p>
      </div>
    </footer>
  );
}
