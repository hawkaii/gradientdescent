import { Theme } from '@astryxdesign/core/theme';
import { neutralTheme } from '@astryxdesign/theme-neutral/built';
import { Button } from '@astryxdesign/core/Button';
import '../styles/brand.css';

export type Product = {
  name: string;
  tagline: string;
  status: string;
  kind: string;
  platforms: string[];
  url?: string;
  logo?: string;
  image?: string;
  screenshots?: string[];
  video?: string;
};

// Images that sit inside the hero, fanned like prints on a desk.
const heroPrints = [
  { src: '/media/shoku/icon.png', label: 'Shoku', rot: -8, fit: 'cover', tone: 'plain' },
  { src: '/media/channels/setefootball.png', label: 'SeteFootball', rot: 3, fit: 'cover', tone: 'plain' },
  { src: '/media/channels/kikhobor.png', label: 'Ki Khobor', rot: 10, fit: 'cover', tone: 'plain' },
];

// The scroll-driven stack. Order matters: index 0 is revealed first.
const reels = [
  { src: '/media/video/sete-ucl.mp4', poster: '/media/video/sete-ucl-poster.jpg', label: 'SeteFootball — the Champions League reaction.', rot: -2.4, dx: -14 },
  { src: '/media/video/sete-news.mp4', poster: '/media/video/sete-news-poster.jpg', label: 'SeteFootball — the weekly news drop.', rot: 2.1, dx: 12 },
  { src: '/media/video/gta.mp4', poster: '/media/video/gta-poster.jpg', label: 'SeteFootball — a leak, a chase, a reel.', rot: -1.6, dx: -8 },
  { src: '/media/video/shoku-reel.mp4', poster: '/media/video/shoku-reel-poster.jpg', label: 'Shoku — a recipe journal that keeps itself.', rot: 1.8, dx: 10 },
  { src: '/media/video/artcraft.mp4', poster: '/media/video/artcraft-poster.jpg', label: 'The same worker. A different obsession.', rot: -2.2, dx: -12 },
];

const marqueeWords = ['Software', 'AI', 'Media', 'Audience', 'Automation', 'Distribution', 'Products'];

export default function BrandPage({ products }: { products: Product[] }) {
  const total = products.length;

  return (
    <Theme theme={neutralTheme}>
      <div className="page">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="orb orb-c" />

        <nav className="nav">
          <a href="/" className="brand">
            <span className="tick" />
            Gradient Descent
          </a>
          <div className="nav-links">
            <a href="#reels">Work</a>
            <a href="#products">Products</a>
            <Button label="Say hello" variant="primary" size="sm" href="mailto:hello@gradientdescent.wiki" className="nav-cta" />
          </div>
        </nav>

        <header className="hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">An automation studio</div>
              <h1>
                <span className="line"><span>Every hobby</span></span>
                <span className="line"><span>is a company</span></span>
                <span className="line"><span><em>waiting</em> to happen.</span></span>
              </h1>
              <div className="hero-body">
                <p>
                  We build the software, the audience, and the machine that runs them.
                  One obsession at a time — finished, live, and improving while we sleep.
                </p>
                <div className="hero-cta">
                  <Button label="Watch the work" variant="primary" size="lg" href="#reels" />
                  <Button label="Build with us" variant="ghost" size="lg" href="#contact" />
                </div>
              </div>
            </div>

            <div className="hero-stack" aria-label="Our work">
              {heroPrints.map((p, i) => (
                <figure
                  className={`print print-${p.fit} tone-${p.tone}`}
                  key={p.src}
                  style={{ ['--rot' as string]: `${p.rot}deg`, zIndex: i }}
                >
                  <img src={p.src} alt={p.label} loading="eager" />
                </figure>
              ))}
            </div>
          </div>
        </header>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[0, 1].map((dup) => (
              <div className="marquee-group" key={dup} aria-hidden={dup === 1}>
                {marqueeWords.map((w) => (
                  <span key={w}>{w}</span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Videos first: pinned card stack that reveals on scroll */}
        <section
          className="reel-pin"
          id="reels"
          style={{ height: `calc(100vh + ${(reels.length - 1) * 90}vh)` }}
        >
          <div className="reel-stage">
            <div className="reel-head">
              <span className="reel-kicker">In motion</span>
              <span className="reel-counter"><span data-reel-index>1</span> / {reels.length}</span>
            </div>

            <div className="reel-cards">
              {reels.map((r, i) => (
                <figure
                  className={`reel-card${i === 0 ? ' is-revealed' : ''}`}
                  key={r.src}
                  data-label={r.label}
                  style={{
                    ['--rot' as string]: `${r.rot}deg`,
                    ['--dx' as string]: `${r.dx}px`,
                    zIndex: i + 1,
                  }}
                >
                  <video
                    src={r.src}
                    poster={r.poster}
                    muted
                    loop
                    playsInline
                    preload={i === 0 ? 'auto' : 'none'}
                    className="reel-video"
                  />
                </figure>
              ))}
            </div>

            <p className="reel-caption" data-reel-caption>{reels[0].label}</p>
          </div>
        </section>

        {/* The cast: two characters, one holding the ball, one greeting */}
        <section className="cast" aria-label="The cast">
          <div className="cast-inner">
            <div className="cast-side cast-sete">
              <img className="sete-char" src="/media/sete-idle.webp" alt="Sete, the football character" loading="lazy" />
            </div>

            <div className="cast-copy">
              <span className="cast-kicker">The cast</span>
              <p>Two characters.<br />One machine.</p>
            </div>

            <div className="cast-side cast-ki">
              <span className="ki-wrap">
                <img src="/media/channels/kikhobor.png" alt="Ki Khobor character" loading="lazy" />
              </span>
              <span className="namaste" aria-hidden="true">🙏</span>
            </div>
          </div>
        </section>

        <section className="section" id="products">
          <div className="section-head reveal">
            <h2>The lineup</h2>
            <span className="count">0{total} products</span>
          </div>

          <div className="stories">
            {products.map((p, i) => (
              <a
                className="story reveal"
                key={p.name}
                href={p.url ?? '#contact'}
                target={p.url ? '_blank' : undefined}
                rel={p.url ? 'noopener noreferrer' : undefined}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span className="story-ring">
                  <span className="story-inner">
                    {p.logo ? (
                      <img src={p.logo} alt={`${p.name} logo`} loading="lazy" />
                    ) : (
                      <span className="story-letter">{p.name[0]}</span>
                    )}
                  </span>
                </span>
                <span className="story-name">{p.name}</span>
                <span className="story-sub">{p.tagline}</span>
                <span className="story-tags">
                  {p.platforms.map((pl) => (
                    <span className="tag" key={pl}>{pl}</span>
                  ))}
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="manifesto" id="idea">
          <div className="inner reveal">
            <div className="kicker">The whole idea</div>
            <blockquote>
              Most software waits to be used.<br />
              Ours <em>goes to work.</em>
            </blockquote>

            {/* automation in one line: the loop never stops */}
            <div className="pipe" aria-hidden="true">
              <span className="pipe-node">Idea</span>
              <span className="pipe-track"><i className="pipe-pulse" /></span>
              <span className="pipe-node">Script</span>
              <span className="pipe-track"><i className="pipe-pulse" style={{ animationDelay: '.55s' }} /></span>
              <span className="pipe-node">Cut</span>
              <span className="pipe-track"><i className="pipe-pulse" style={{ animationDelay: '1.1s' }} /></span>
              <span className="pipe-node">Post</span>
              <span className="pipe-loop">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M20 12a8 8 0 1 1-2.34-5.66" />
                  <path d="M20 3v4h-4" />
                </svg>
              </span>
            </div>

            <div className="platforms">
              <span className="platform">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M23 12s0-3.8-.5-5.6a2.9 2.9 0 0 0-2-2C18.7 4 12 4 12 4s-6.7 0-8.5.4a2.9 2.9 0 0 0-2 2C1 8.2 1 12 1 12s0 3.8.5 5.6a2.9 2.9 0 0 0 2 2C5.3 20 12 20 12 20s6.7 0 8.5-.4a2.9 2.9 0 0 0 2-2C23 15.8 23 12 23 12ZM9.8 15.5v-7l6 3.5-6 3.5Z" />
                </svg>
                YouTube
              </span>

              <span className="platform">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5.4" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.3" cy="6.7" r="1.15" fill="currentColor" stroke="none" />
                </svg>
                Instagram
              </span>

              <span className="platform">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M3.6 1.9 14.8 12 3.6 22.1c-.4-.3-.6-.8-.6-1.3V3.2c0-.5.2-1 .6-1.3Z" />
                  <path d="M16.3 10.9 19 12l-2.7 1.1-1.9-1.1 1.9-1.1Z" opacity="0.75" />
                  <path d="M5.4 1.4 16.9 7.9l-2 2L5.4 1.4Zm0 21.2 9.5-8.5 2 2L5.4 22.6Z" opacity="0.55" />
                </svg>
                Play Store
              </span>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="reveal">
            <h2>Bring us<br />your obsession.</h2>
            <p>If you are building something people love, we want to hear it. Or just say hello.</p>
            <a className="mail" href="mailto:hello@gradientdescent.wiki">hello@gradientdescent.wiki</a>
          </div>
        </section>

        <footer className="footer">
          <span className="brand"><span className="tick" /> Gradient Descent</span>
          <span className="sig">Built to run itself.</span>
          <span>
            <a href="#reels">Work</a> · <a href="#products">Products</a> · <a href="mailto:hello@gradientdescent.wiki">Contact</a>
          </span>
        </footer>
      </div>
    </Theme>
  );
}
