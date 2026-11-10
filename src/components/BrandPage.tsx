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
  { src: '/media/channels/kikhobor.png', label: 'Ki Khobor', rot: -8, fit: 'cover', tone: 'plain' },
  { src: '/media/channels/setefootball.png', label: 'SeteFootball', rot: 3, fit: 'cover', tone: 'plain' },
  { src: '/media/obia/logo.svg', label: 'Obia', rot: 10, fit: 'contain', tone: 'dark' },
];

// The scroll-driven stack. Order matters: index 0 is revealed first.
const reels = [
  { src: '/media/video/shoku-reel.mp4', poster: '/media/video/shoku-reel-poster.jpg', label: 'Shoku — a recipe journal that keeps itself.', rot: -2.4, dx: -14 },
  { src: '/media/video/gta.mp4', poster: '/media/video/gta-poster.jpg', label: 'SeteFootball — a channel that publishes itself.', rot: 2.1, dx: 12 },
  { src: '/media/video/artcraft.mp4', poster: '/media/video/artcraft-poster.jpg', label: 'The same worker. A different obsession.', rot: -1.6, dx: -8 },
];

const marqueeWords = ['Software', 'AI', 'Media', 'Audience', 'Automation', 'Distribution', 'Products'];

const rules = [
  {
    n: '01',
    t: 'One obsession, one product',
    d: 'No platforms. No ten-tools-in-one. We take a single thing people do for love and finish it.',
  },
  {
    n: '02',
    t: 'Built whole',
    d: 'Software, content and audience ship together. A product without distribution is a demo.',
  },
  {
    n: '03',
    t: 'Built to run itself',
    d: 'If a product needs a full-time operator, it is not finished. It is a job with extra steps.',
  },
  {
    n: '04',
    t: 'Small on purpose',
    d: 'A few products, finished. Not a catalogue of maybes.',
  },
  {
    n: '05',
    t: 'Own the customer',
    d: 'No marketplace rent. People arrive at our door, not through someone else’s algorithm.',
  },
  {
    n: '06',
    t: 'Ship, then improve',
    d: 'Every release is a step downhill. The badges tell the truth either way.',
  },
];

export default function BrandPage({ products }: { products: Product[] }) {
  const live = products.filter((p) => p.status === 'live').length;
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
            <a href="#approach">Approach</a>
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

        <section className="section">
          <div className="stats reveal">
            <div className="stat">
              <div className="n">∞</div>
              <div className="l">Ceiling</div>
            </div>
            <div className="stat">
              <div className="n"><span data-count={live}>{live}</span></div>
              <div className="l">Products live</div>
            </div>
            <div className="stat">
              <div className="n"><span data-count={total}>{total}</span></div>
              <div className="l">In the lineup</div>
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

        <section className="section" id="approach">
          <div className="section-head reveal">
            <h2>How we work</h2>
            <span className="count">Six rules</span>
          </div>
          <div className="rules">
            {rules.map((r) => (
              <div className="rule reveal" key={r.n}>
                <div className="num">{r.n}</div>
                <div>
                  <h3>{r.t}</h3>
                  <p>{r.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="manifesto">
          <div className="inner reveal">
            <div className="kicker">The whole idea</div>
            <blockquote>
              Most software waits to be used.<br />
              Ours <em>goes to work.</em>
            </blockquote>
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
