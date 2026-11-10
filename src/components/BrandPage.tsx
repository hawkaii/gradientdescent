import { Theme } from '@astryxdesign/core/theme';
import { neutralTheme } from '@astryxdesign/theme-neutral/built';
import { Button } from '@astryxdesign/core/Button';
import { Badge } from '@astryxdesign/core/Badge';
import '../styles/brand.css';

export type Product = {
  name: string;
  tagline: string;
  status: string;
  kind: string;
  platforms: string[];
  url?: string;
};

const statusLabel: Record<string, string> = {
  live: 'Live',
  alpha: 'Alpha',
  building: 'Building',
  planned: 'Planned',
};

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

const marqueeWords = ['Software', 'AI', 'Media', 'Audience', 'Automation', 'Distribution', 'Products'];

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
            <a href="#products">Products</a>
            <a href="#approach">Approach</a>
            <a href="#contact">Contact</a>
            <Button label="Say hello" variant="primary" size="sm" href="mailto:hello@gradientdescent.wiki" className="nav-cta" />
          </div>
        </nav>

        <header className="hero">
          <div className="seal" aria-hidden="true">
            <svg viewBox="0 0 200 200" className="seal-svg">
              <defs>
                <path id="sealPath" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
              </defs>
              <text className="seal-text">
                <textPath href="#sealPath" startOffset="0">
                  BUILT TO RUN ITSELF · EST. 2026 ·
                </textPath>
              </text>
            </svg>
            <span className="seal-core">↓</span>
          </div>

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
              <Button label="See the lineup" variant="primary" size="lg" href="#products" />
              <Button label="Build with us" variant="ghost" size="lg" href="#contact" />
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

          <div className="grid-products">
            {products.map((p, i) => (
              <a
                className="product reveal"
                key={p.name}
                href={p.url ?? '#contact'}
                target={p.url ? '_blank' : undefined}
                rel={p.url ? 'noopener noreferrer' : undefined}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="shot">
                  <div className="glow" />
                  <span className="word">{p.name}</span>
                  <span className="arrow">↗</span>
                </div>
                <div className="meta">
                  <div className="top">
                    <h3>{p.name}</h3>
                    <Badge
                      label={statusLabel[p.status] ?? p.status}
                      variant={p.status === 'live' ? 'success' : 'pink'}
                    />
                  </div>
                  <p>{p.tagline}</p>
                  <div className="tags">
                    <span className="tag tag-status">{p.kind}</span>
                    {p.platforms.map((pl) => (
                      <span className="tag" key={pl}>{pl}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}

            <div className="product ghost reveal" style={{ transitionDelay: '160ms' }}>
              <div className="ghost-inner">
                <div>
                  <h3>In the workshop</h3>
                  <p>Cooking. Sport. The next obsession — built, shipped, and given an audience.</p>
                </div>
                <Badge label="Building" variant="pink" />
              </div>
            </div>
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
            <a href="#products">Products</a> · <a href="#approach">Approach</a> · <a href="mailto:hello@gradientdescent.wiki">Contact</a>
          </span>
        </footer>
      </div>
    </Theme>
  );
}
