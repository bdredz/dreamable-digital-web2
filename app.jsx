const { useState, useEffect, useRef } = React;

// ---------- DATA ----------
const PACKAGES = [
  { id: 'starter', name: 'Starter', leads: 200, price: 97, blurb: 'Test the waters with a focused list of high-intent homeowners.' },
  { id: 'grow', name: 'Grow', leads: 400, price: 175, blurb: 'A reliable monthly pipeline for the agent ready to scale outreach.' },
  { id: 'pro', name: 'Pro', leads: 600, price: 250, blurb: 'For teams ready to dominate a farm area with proactive contact.', popular: true },
  { id: 'elite', name: 'Elite', leads: 800, price: 325, blurb: 'Maximum reach for top producers and growing brokerages.' },
];

const FAQS = [
  { q: 'Where do the leads come from?', a: 'We synthesize dozens of public and licensed data points — life-stage signals, property tenure, equity position, household changes, search behavior — into a predictive score. The result is a monthly list of homeowners in your service area most likely to list within the next 90 days.' },
  { q: 'How are these different from Zillow or realtor.com leads?', a: 'Those are reactive — a homeowner has already started shopping, often after talking to three other agents. Our list is anticipatory. You reach the seller before they go online, which is when the relationship — and the listing — is actually won.' },
  { q: 'What do I get with each package?', a: 'A fresh monthly lead list delivered straight to your inbox or CRM, paired with our calling scripts, text templates, mailer copy, and an onboarding playbook so you can start contacting in under an hour.' },
  { q: 'Can I cancel anytime?', a: 'Yes. Plans are month-to-month with no annual contract. Pause or cancel from your dashboard before your next billing cycle.' },
  { q: 'How fast do I get my list?', a: 'Your first list is delivered within 24 hours of signup. Subsequent lists arrive on the 1st of each month.' },
  { q: 'Do you cover my market?', a: 'We currently service the continental U.S. After ordering you select your target ZIP codes and we filter the predictive model to that geography.' },
];

const STEPS = [
  { n: '01', t: 'Pick your package', d: 'Choose the monthly lead volume that matches your capacity — from a focused 200 to a high-output 800.' },
  { n: '02', t: 'Set your territory', d: 'Tell us the ZIP codes you want to farm. We filter the predictive model to your market only.' },
  { n: '03', t: 'Get your list', d: 'Your first list lands in your inbox within 24 hours, with scripts and templates ready to deploy.' },
  { n: '04', t: 'Contact & convert', d: 'Reach out before competitors even know the seller exists. Win the listing on the first call.' },
];

// ---------- HELPERS ----------
const Logo = ({ size = 32, className = '' }) => (
  <img src="assets/dreamable-logo.png" alt="Dreamable Digital" style={{ height: size }} className={className} />
);

const Sparkle = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2 L13.5 9 L21 12 L13.5 15 L12 22 L10.5 15 L3 12 L10.5 9 Z" fill={color}/>
  </svg>
);

// ---------- NAV ----------
function Nav({ onOrder }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  const scrollTo = (id) => (e) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  return (
    <header className={'nav ' + (scrolled ? 'nav--scrolled' : '')}>
      <div className="nav__inner">
        <a href="#top" className="nav__brand" onClick={scrollTo('top')}>
          <Logo size={34} />
          <span className="nav__wordmark">Dreamable<span className="nav__wordmark-light"> Digital</span></span>
        </a>
        <nav className="nav__links">
          <a href="#problem" onClick={scrollTo('problem')}>The Problem</a>
          <a href="#how" onClick={scrollTo('how')}>How it works</a>
          <a href="#pricing" onClick={scrollTo('pricing')}>Pricing</a>
          <a href="#faq" onClick={scrollTo('faq')}>FAQ</a>
        </nav>
        <div className="nav__cta">
          <a href="#login" className="nav__login">Sign in</a>
          <button className="btn btn--primary btn--sm" onClick={() => onOrder()}>Get started</button>
        </div>
      </div>
    </header>
  );
}

// ---------- HERO ----------
function Hero({ onOrder }) {
  return (
    <section id="top" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__cloud hero__cloud--1"></div>
        <div className="hero__cloud hero__cloud--2"></div>
        <div className="hero__cloud hero__cloud--3"></div>
      </div>
      <div className="container hero__inner">
        <div className="kicker">
          <Sparkle size={12} />
          <span>Predictive Seller Intelligence for Real Estate</span>
        </div>
        <h1 className="hero__title">
          Reach the seller<br/>
          <em>before</em> they reach Zillow.
        </h1>
        <p className="hero__sub">
          <strong>Right Time, Right Place Leads</strong> uses predictive data to surface the homeowners most likely to list in the next 90 days — so you make contact before your competition even knows their name.
        </p>
        <div className="hero__ctas">
          <button className="btn btn--primary btn--lg" onClick={() => onOrder()}>
            See lead packages
            <span className="btn__arrow">→</span>
          </button>
          <a href="#problem" className="btn btn--ghost btn--lg" onClick={(e) => { e.preventDefault(); document.getElementById('problem').scrollIntoView({ behavior: 'smooth' }); }}>
            How it works
          </a>
        </div>
        <div className="hero__meta">
          <div className="hero__meta-item">
            <span className="hero__meta-num">90<span className="hero__meta-unit">d</span></span>
            <span className="hero__meta-label">Forecast window<br/>per lead</span>
          </div>
          <div className="hero__meta-divider"></div>
          <div className="hero__meta-item">
            <span className="hero__meta-num">24<span className="hero__meta-unit">h</span></span>
            <span className="hero__meta-label">From signup<br/>to first list</span>
          </div>
          <div className="hero__meta-divider"></div>
          <div className="hero__meta-item">
            <span className="hero__meta-num">$0.12<span className="hero__meta-unit">/ea</span></span>
            <span className="hero__meta-label">Starting cost<br/>per lead</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- PROBLEM ----------
function Problem() {
  return (
    <section id="problem" className="problem section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">01 · The Problem</span>
          <h2 className="section-title">By the time you find the lead, the listing is already gone.</h2>
        </div>
        <div className="problem__grid">
          <div className="problem__copy">
            <p className="lead-p">
              Real estate is one of the best businesses to be in — you help people with the place where they spend so much of their lives, build families, and create meaning. And it can be <em>really</em> lucrative.
            </p>
            <p>
              But there's a structural problem most agents have learned to live with: there aren't many leading indicators that someone will move <em>before</em> they do. So nearly every lead source captures buyers and sellers <em>after</em> they've started searching on Zillow, realtor.com, or their cousin's brokerage.
            </p>
            <p className="muted">
              The first agent in the conversation almost always wins the listing. The current lead market makes sure that's never you.
            </p>
          </div>
          <div className="problem__diagram">
            <div className="diag">
              <div className="diag__row diag__row--old">
                <div className="diag__head">
                  <div className="diag__rank">Agent #3</div>
                  <h4 className="diag__name">Traditional leads</h4>
                  <p className="diag__sub">Reactive — they're already shopping.</p>
                </div>
                <div className="diag__chart">
                  <div className="diag__above">
                    <div className="diag__ann" style={{ left: '78%' }}>
                      <div className="diag__ann-text diag__ann-text--right">
                        <span className="diag__ann-label">Seller hits Zillow</span>
                        <span className="diag__ann-day">Day 70</span>
                      </div>
                      <div className="diag__ann-line"></div>
                    </div>
                  </div>
                  <div className="diag__bar">
                    <div className="diag__bar-fill diag__bar-fill--old"></div>
                    <div className="diag__pip" style={{ left: '78%' }}></div>
                    <div className="diag__pip diag__pip--late" style={{ left: '92%' }}></div>
                  </div>
                  <div className="diag__below">
                    <div className="diag__ann" style={{ left: '92%' }}>
                      <div className="diag__ann-line"></div>
                      <div className="diag__ann-text diag__ann-text--right diag__ann-text--late">
                        <span className="diag__ann-label">You get the lead</span>
                        <span className="diag__ann-day">Day 83</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="diag__row diag__row--ours">
                <div className="diag__head">
                  <div className="diag__rank diag__rank--ours">Agent #1</div>
                  <h4 className="diag__name diag__name--ours">Dreamable</h4>
                  <p className="diag__sub">Predictive — you're already in the door.</p>
                </div>
                <div className="diag__chart">
                  <div className="diag__above">
                    <div className="diag__ann" style={{ left: '14%' }}>
                      <div className="diag__ann-text diag__ann-text--left diag__ann-text--early">
                        <span className="diag__ann-label">We flag them</span>
                        <span className="diag__ann-day">Day 5</span>
                      </div>
                      <div className="diag__ann-line"></div>
                    </div>
                  </div>
                  <div className="diag__bar">
                    <div className="diag__bar-fill diag__bar-fill--ours"></div>
                    <div className="diag__pip diag__pip--early" style={{ left: '14%' }}></div>
                    <div className="diag__pip diag__pip--ours" style={{ left: '32%' }}></div>
                  </div>
                  <div className="diag__below">
                    <div className="diag__ann" style={{ left: '32%' }}>
                      <div className="diag__ann-line"></div>
                      <div className="diag__ann-text diag__ann-text--left">
                        <span className="diag__ann-label">You make contact</span>
                        <span className="diag__ann-day">Day 18</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="diag__axis">
                <span>Considering a move</span>
                <span className="diag__axis-arrow">90-day window →</span>
                <span>Listed elsewhere</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- SOLUTION ----------
function Solution() {
  const cards = [
    { t: 'Predictive', d: 'Dozens of data points — tenure, equity, life-stage signals, household changes — feed a model that scores every homeowner in your market.', n: '↗' },
    { t: 'Proactive', d: 'You get a fresh list every month of the homeowners most likely to list soon. Reach out before they ever open a search tab.', n: '↻' },
    { t: 'Targeted', d: 'No more dialing the neighbor who moved in 25 years ago to "age in place." Every name on your list is a real candidate.', n: '◎' },
    { t: 'Equipped', d: 'Every package ships with calling scripts, text templates, and mailer copy proven to convert anticipatory leads.', n: '✦' },
  ];
  return (
    <section className="solution section section--soft">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">02 · The Solution</span>
          <h2 className="section-title">An anticipatory approach to seller leads.</h2>
          <p className="section-sub">
            By analyzing dozens of datapoints across the homeowners in your service area, we identify the ones most likely to move — and hand you the list <em>before</em> they reach your competitors.
          </p>
        </div>
        <div className="solution__grid">
          {cards.map((c, i) => (
            <article className="sol-card" key={i}>
              <div className="sol-card__num">{c.n}</div>
              <h3 className="sol-card__title">{c.t}</h3>
              <p className="sol-card__desc">{c.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- HOW IT WORKS ----------
function How() {
  return (
    <section id="how" className="how section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">03 · How it works</span>
          <h2 className="section-title">From signup to your first listing call, in a day.</h2>
        </div>
        <ol className="steps">
          {STEPS.map((s, i) => (
            <li className="step" key={i}>
              <div className="step__num">{s.n}</div>
              <div className="step__body">
                <h3 className="step__title">{s.t}</h3>
                <p className="step__desc">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ---------- INCLUDED ----------
function Included() {
  const items = [
    { t: 'Predictive lead list', d: 'Fresh monthly list of high-intent homeowners filtered to your ZIPs.', m: 'CSV · CRM-ready' },
    { t: 'Listing-call scripts', d: 'Word-for-word openers, objection handlers, and appointment closers.', m: 'PDF · Editable' },
    { t: 'SMS & email templates', d: 'A cadence of follow-ups that warm the lead between calls.', m: '10+ templates' },
    { t: 'Mailer copy & layouts', d: 'Direct-mail variants designed for anticipatory outreach.', m: 'Print-ready' },
    { t: 'Onboarding playbook', d: 'A 60-minute setup to be contacting your first lead today.', m: 'Step-by-step' },
    { t: 'Performance reporting', d: 'See connect rates, appointments set, and ROI by cohort.', m: 'Dashboard' },
  ];
  return (
    <section className="included section section--soft">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">04 · What's included</span>
          <h2 className="section-title">Every package ships with the closing kit.</h2>
          <p className="section-sub">A list alone isn't a strategy. Every Dreamable plan includes the scripts, templates, and playbooks that turn anticipatory leads into signed listing agreements.</p>
        </div>
        <div className="inc-grid">
          {items.map((it, i) => (
            <div className="inc-item" key={i}>
              <div className="inc-item__head">
                <h3 className="inc-item__title">{it.t}</h3>
                <span className="inc-item__meta">{it.m}</span>
              </div>
              <p className="inc-item__desc">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- PRICING ----------
function Pricing({ onOrder }) {
  return (
    <section id="pricing" className="pricing section">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">05 · Pricing</span>
          <h2 className="section-title">Pick your monthly lead volume.</h2>
          <p className="section-sub">All plans are month-to-month. Cancel anytime. Every package ships with the full closing kit — scripts, templates, and the onboarding playbook.</p>
        </div>
        <div className="price-grid">
          {PACKAGES.map((p) => (
            <article className={'price-card ' + (p.popular ? 'price-card--popular' : '')} key={p.id}>
              {p.popular && <div className="price-card__badge">Most popular</div>}
              <div className="price-card__head">
                <h3 className="price-card__name">{p.name}</h3>
                <div className="price-card__leads">{p.leads.toLocaleString()} <span>leads / month</span></div>
              </div>
              <div className="price-card__price">
                <span className="price-card__dollar">$</span>
                <span className="price-card__amount">{p.price}</span>
                <span className="price-card__per">/mo</span>
              </div>
              <p className="price-card__blurb">{p.blurb}</p>
              <ul className="price-card__feat">
                <li>{p.leads} predictive leads / month</li>
                <li>Full closing kit (scripts + templates)</li>
                <li>Unlimited ZIP code targeting</li>
                <li>Email + CRM delivery</li>
                <li>Cancel anytime</li>
              </ul>
              <button className={'btn btn--lg ' + (p.popular ? 'btn--primary' : 'btn--outline')} onClick={() => onOrder(p.id)}>
                Order {p.name}
              </button>
              <div className="price-card__unit">${(p.price / p.leads).toFixed(2)} per lead</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- FAQ ----------
function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="faq section section--soft">
      <div className="container faq__container">
        <div className="faq__head">
          <span className="eyebrow">06 · FAQ</span>
          <h2 className="section-title">Questions, answered.</h2>
          <p className="section-sub">Still curious? Email <a href="mailto:hello@dreamabledigital.com">hello@dreamabledigital.com</a> and we'll get back within the day.</p>
        </div>
        <div className="faq__list">
          {FAQS.map((f, i) => (
            <div className={'faq-item ' + (open === i ? 'faq-item--open' : '')} key={i}>
              <button className="faq-item__q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{f.q}</span>
                <span className="faq-item__icon">{open === i ? '–' : '+'}</span>
              </button>
              <div className="faq-item__a"><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- FINAL CTA ----------
function FinalCTA({ onOrder }) {
  return (
    <section className="final section">
      <div className="container">
        <div className="final__card">
          <div className="final__bg" aria-hidden="true">
            <div className="hero__cloud hero__cloud--1" style={{opacity:.12}}></div>
            <div className="hero__cloud hero__cloud--3" style={{opacity:.10}}></div>
          </div>
          <div className="final__inner">
            <span className="kicker kicker--light"><Sparkle size={12} color="#EEF3FB"/> Get started today</span>
            <h2 className="final__title">Stop chasing. Start <em>anticipating</em>.</h2>
            <p className="final__sub">Your first list of high-intent sellers ships within 24 hours. Pick your package and we'll handle the rest.</p>
            <div className="final__ctas">
              <button className="btn btn--white btn--lg" onClick={() => onOrder()}>Order now <span className="btn__arrow">→</span></button>
              <a href="#pricing" className="btn btn--ghost-light btn--lg" onClick={(e) => { e.preventDefault(); document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' }); }}>Compare packages</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- FOOTER ----------
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo size={40} />
          <p className="footer__tag">Predictive seller intelligence for real estate professionals.</p>
        </div>
        <div className="footer__cols">
          <div className="footer__col">
            <h4>Product</h4>
            <a href="#pricing">Pricing</a>
            <a href="#how">How it works</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="footer__col">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
          </div>
          <div className="footer__col">
            <h4>Legal</h4>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Data sources</a>
          </div>
        </div>
      </div>
      <div className="footer__base container">
        <span>© 2026 Dreamable Digital. All rights reserved.</span>
        <span className="footer__mono">v1.0 · Made for agents who close</span>
      </div>
    </footer>
  );
}

// ---------- CHECKOUT MODAL ----------
function Checkout({ open, initialPkgId, onClose }) {
  const [step, setStep] = useState(1);
  const [pkgId, setPkgId] = useState(initialPkgId || 'pro');
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    brokerage: '', zips: '',
    card: '', exp: '', cvc: '', zip: '',
  });
  const [confirmEmail, setConfirmEmail] = useState('');

  useEffect(() => {
    if (open) {
      setStep(1);
      if (initialPkgId) setPkgId(initialPkgId);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [open, initialPkgId]);

  if (!open) return null;
  const pkg = PACKAGES.find(p => p.id === pkgId);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const detailsValid = form.firstName && form.lastName && form.email.includes('@') && form.phone && form.zips;
  const paymentValid = form.card.replace(/\s/g,'').length >= 15 && form.exp.length >= 4 && form.cvc.length >= 3;

  const submit = () => {
    setConfirmEmail(form.email);
    setStep(4);
  };

  return (
    <div className="modal" onMouseDown={(e) => { if (e.target.classList.contains('modal')) onClose(); }}>
      <div className="modal__panel">
        <button className="modal__close" onClick={onClose} aria-label="Close">×</button>
        {step < 4 && (
          <div className="modal__steps">
            <Stepper step={step} />
          </div>
        )}
        <div className="modal__body">
          {step === 1 && (
            <div className="checkout">
              <h3 className="checkout__title">Choose your package</h3>
              <p className="checkout__sub">All plans are month-to-month. Switch or cancel anytime.</p>
              <div className="checkout__pkgs">
                {PACKAGES.map(p => (
                  <button key={p.id} className={'co-pkg ' + (pkgId === p.id ? 'co-pkg--sel' : '')} onClick={() => setPkgId(p.id)}>
                    <div className="co-pkg__head">
                      <span className="co-pkg__name">{p.name}</span>
                      {p.popular && <span className="co-pkg__pop">Popular</span>}
                    </div>
                    <div className="co-pkg__leads">{p.leads.toLocaleString()} leads / mo</div>
                    <div className="co-pkg__price">${p.price}<span>/mo</span></div>
                    <div className="co-pkg__unit">${(p.price / p.leads).toFixed(2)} per lead</div>
                  </button>
                ))}
              </div>
              <div className="checkout__actions">
                <div className="checkout__cart">
                  <span className="muted">Selected</span>
                  <strong>{pkg.name} — ${pkg.price}/mo</strong>
                </div>
                <button className="btn btn--primary btn--lg" onClick={() => setStep(2)}>Continue →</button>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="checkout">
              <h3 className="checkout__title">Your details</h3>
              <p className="checkout__sub">We'll send your first list and login here.</p>
              <div className="form-grid">
                <Field label="First name" value={form.firstName} onChange={set('firstName')} />
                <Field label="Last name" value={form.lastName} onChange={set('lastName')} />
                <Field label="Email" type="email" value={form.email} onChange={set('email')} full />
                <Field label="Phone" type="tel" value={form.phone} onChange={set('phone')} />
                <Field label="Brokerage (optional)" value={form.brokerage} onChange={set('brokerage')} />
                <Field label="Target ZIP codes" value={form.zips} onChange={set('zips')} placeholder="e.g. 78704, 78745, 78748" full hint="Separate with commas. You can refine later." />
              </div>
              <div className="checkout__actions">
                <button className="btn btn--ghost" onClick={() => setStep(1)}>← Back</button>
                <button className="btn btn--primary btn--lg" disabled={!detailsValid} onClick={() => setStep(3)}>Continue to payment →</button>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="checkout">
              <h3 className="checkout__title">Payment</h3>
              <p className="checkout__sub">You'll be charged ${pkg.price} today, then ${pkg.price}/mo. Cancel anytime.</p>
              <div className="form-grid">
                <Field label="Card number" value={form.card} onChange={(e) => setForm({...form, card: formatCard(e.target.value)})} placeholder="1234 1234 1234 1234" full />
                <Field label="Expiration" value={form.exp} onChange={(e) => setForm({...form, exp: formatExp(e.target.value)})} placeholder="MM/YY" />
                <Field label="CVC" value={form.cvc} onChange={(e) => setForm({...form, cvc: e.target.value.replace(/\D/g,'').slice(0,4)})} placeholder="123" />
                <Field label="Billing ZIP" value={form.zip} onChange={set('zip')} placeholder="78704" />
              </div>
              <OrderSummary pkg={pkg} />
              <div className="checkout__actions">
                <button className="btn btn--ghost" onClick={() => setStep(2)}>← Back</button>
                <button className="btn btn--primary btn--lg" disabled={!paymentValid} onClick={submit}>Place order — ${pkg.price}</button>
              </div>
              <p className="checkout__legal">By placing your order you agree to our Terms and Privacy Policy. This is a demo checkout — no card will be charged.</p>
            </div>
          )}
          {step === 4 && <Confirmation email={confirmEmail} pkg={pkg} onClose={onClose} />}
        </div>
      </div>
    </div>
  );
}

function Stepper({ step }) {
  const labels = ['Package', 'Details', 'Payment'];
  return (
    <div className="stepper">
      {labels.map((l, i) => {
        const n = i + 1;
        const state = n < step ? 'done' : n === step ? 'cur' : 'next';
        return (
          <div key={l} className={'stepper__item stepper__item--' + state}>
            <div className="stepper__dot">{n < step ? '✓' : n}</div>
            <span className="stepper__label">{l}</span>
            {i < labels.length - 1 && <div className="stepper__bar"></div>}
          </div>
        );
      })}
    </div>
  );
}

function Field({ label, value, onChange, type = 'text', full, placeholder, hint }) {
  return (
    <label className={'field ' + (full ? 'field--full' : '')}>
      <span className="field__label">{label}</span>
      <input className="field__input" type={type} value={value} onChange={onChange} placeholder={placeholder} />
      {hint && <span className="field__hint">{hint}</span>}
    </label>
  );
}

function OrderSummary({ pkg }) {
  return (
    <div className="summary">
      <div className="summary__row">
        <span>{pkg.name} — {pkg.leads.toLocaleString()} leads/mo</span>
        <span>${pkg.price}.00</span>
      </div>
      <div className="summary__row">
        <span className="muted">Closing kit (scripts, templates, playbook)</span>
        <span className="muted">Included</span>
      </div>
      <div className="summary__row summary__row--total">
        <span>Due today</span>
        <span>${pkg.price}.00</span>
      </div>
    </div>
  );
}

function Confirmation({ email, pkg, onClose }) {
  return (
    <div className="confirm">
      <div className="confirm__icon" aria-hidden="true">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="22" fill="#0B1F3F"/>
          <path d="M13 22.5L19 28.5L31 16.5" stroke="#FAF8F4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h3 className="confirm__title">You're in. Welcome to Dreamable.</h3>
      <p className="confirm__sub">
        Your <strong>{pkg.name}</strong> plan is active — {pkg.leads.toLocaleString()} predictive leads per month for ${pkg.price}/mo.
      </p>
      <div className="confirm__email">
        <div className="confirm__email-icon">✉</div>
        <div>
          <div className="confirm__email-title">Confirmation sent to <strong>{email}</strong></div>
          <div className="confirm__email-body">
            Check your inbox in the next few minutes. We've included your receipt, your account login, the closing kit (scripts + templates), and instructions for refining your ZIP targeting.
          </div>
        </div>
      </div>
      <div className="confirm__next">
        <h4>What happens next</h4>
        <ol>
          <li><strong>Within 1 hour</strong> — Confirmation + onboarding playbook in your inbox.</li>
          <li><strong>Within 24 hours</strong> — Your first predictive lead list, delivered.</li>
          <li><strong>1st of each month</strong> — A fresh list of high-intent sellers, every month.</li>
        </ol>
      </div>
      <div className="confirm__actions">
        <button className="btn btn--primary btn--lg" onClick={onClose}>Back to site</button>
        <a href="#" className="btn btn--ghost btn--lg">Open dashboard</a>
      </div>
    </div>
  );
}

function formatCard(v) {
  return v.replace(/\D/g,'').slice(0,16).replace(/(.{4})/g, '$1 ').trim();
}
function formatExp(v) {
  const d = v.replace(/\D/g,'').slice(0,4);
  if (d.length <= 2) return d;
  return d.slice(0,2) + '/' + d.slice(2);
}

// ---------- APP ----------
function App() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [pkgId, setPkgId] = useState(null);
  const openCheckout = (id) => { setPkgId(id || null); setCheckoutOpen(true); };

  return (
    <>
      <Nav onOrder={() => openCheckout()} />
      <main>
        <Hero onOrder={() => openCheckout()} />
        <Problem />
        <Solution />
        <How />
        <Included />
        <Pricing onOrder={openCheckout} />
        <FAQ />
        <FinalCTA onOrder={() => openCheckout()} />
      </main>
      <Footer />
      <Checkout open={checkoutOpen} initialPkgId={pkgId} onClose={() => setCheckoutOpen(false)} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
