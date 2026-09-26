import { FormEvent, useEffect, useState } from "react";
import {
  ArrowRight,
  BedDouble,
  BriefcaseBusiness,
  Check,
  ChefHat,
  Clock3,
  Hammer,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Ruler,
  ShieldCheck,
  Sofa,
  Sparkles,
  Star,
  X,
} from "lucide-react";

const phone = "(31) 3181-9006";
const whatsappBase = "https://wa.me/553131819006";
const mapUrl = "https://www.google.com/maps/search/?api=1&query=Rua+Lu%C3%ADs+Lyrio+208%2C+Contagem+-+MG";

const areas = [
  { icon: ChefHat, title: "Cozinhas", text: "Fluxos inteligentes, armazenamento sob medida e acabamento que valoriza o encontro." },
  { icon: BedDouble, title: "Quartos", text: "Guarda-roupas e cabeceiras pensados para a sua rotina, com cada centímetro bem aproveitado." },
  { icon: Sofa, title: "Salas", text: "Painéis, estantes e racks que equilibram presença, leveza e organização visual." },
  { icon: BriefcaseBusiness, title: "Home office", text: "Um espaço produtivo, confortável e bonito para acompanhar seus dias de trabalho." },
];

const process = [
  { number: "01", title: "Conversa inicial", text: "Entendemos sua rotina, suas referências e o que você deseja transformar." },
  { number: "02", title: "Projeto exclusivo", text: "Desenhamos uma solução funcional em MDF, criada para o seu ambiente." },
  { number: "03", title: "Produção cuidadosa", text: "Cada detalhe é produzido com acabamento premium e atenção artesanal." },
  { number: "04", title: "Instalação no prazo", text: "Montagem profissional, organizada e entregue na data combinada." },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "", project: "" });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const openWhatsApp = (message: string) => {
    window.open(`${whatsappBase}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    openWhatsApp(`Olá! Sou ${form.name}. Gostaria de conversar sobre um projeto de móveis planejados. Meu contato é ${form.contact}. ${form.project}`);
  };

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <div className="container header-inner">
          <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Decora Marcenaria - início">
            <span className="brand-mark"><span>D</span></span>
            <span className="brand-copy"><strong>decora</strong><small>marcenaria de móveis planejados</small></span>
          </a>
          <nav className={`main-nav ${menuOpen ? "main-nav--open" : ""}`} aria-label="Navegação principal">
            <a href="#sobre" onClick={closeMenu}>A essência</a>
            <a href="#ambientes" onClick={closeMenu}>Ambientes</a>
            <a href="#processo" onClick={closeMenu}>Como fazemos</a>
            <a href="#contato" onClick={closeMenu}>Contato</a>
          </nav>
          <a className="header-cta" href={whatsappBase} target="_blank" rel="noreferrer">
            <span>Fale com a gente</span><ArrowRight size={16} />
          </a>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <img className="hero-image" src="/manus-storage/decora-hero_29450942.jpg" alt="Sala com painel de TV e móveis planejados em madeira" />
          <div className="hero-overlay" />
          <div className="container hero-content">
            <div className="hero-kicker"><span className="kicker-line" /> Contagem · Belo Horizonte · Betim</div>
            <h1>O seu espaço,<br /><em>do seu jeito.</em></h1>
            <p>Projetos de móveis planejados em MDF que transformam ambientes em lugares para viver bem — com beleza, função e a medida exata da sua rotina.</p>
            <div className="hero-actions">
              <a className="button button--copper" href={whatsappBase} target="_blank" rel="noreferrer">Solicitar orçamento <ArrowRight size={17} /></a>
              <a className="text-link text-link--light" href="#ambientes">Conheça nosso trabalho <ArrowRight size={16} /></a>
            </div>
            <div className="hero-proof"><span className="proof-stars"><Star size={14} fill="currentColor" /> <strong>5.0</strong></span><span className="proof-divider" /><span>48 avaliações no Google</span></div>
          </div>
          <div className="hero-caption"><span>01</span><span className="caption-rule" /><span>interiores que pertencem a você</span></div>
          <a href="#sobre" className="scroll-hint" aria-label="Rolar para conhecer a Decora"><span>scroll para descobrir</span><span className="scroll-arrow">↓</span></a>
        </section>

        <section className="trust-strip" aria-label="Diferenciais da Decora">
          <div className="container trust-grid">
            <div className="trust-item"><Ruler size={19} /><span>Projeto 100% personalizado</span></div>
            <div className="trust-item"><Clock3 size={19} /><span>Entrega no prazo combinado</span></div>
            <div className="trust-item"><ShieldCheck size={19} /><span>Acabamento e montagem profissional</span></div>
          </div>
        </section>

        <section className="about-section section-padding" id="sobre">
          <div className="container about-grid">
            <div className="section-index">01 <span /> A essência</div>
            <div className="about-copy">
              <p className="eyebrow">Marcenaria com intenção</p>
              <h2>Não fazemos apenas móveis.<br /><em>Desenhamos possibilidades.</em></h2>
              <p className="lead-copy">A Decora nasceu para criar ambientes que façam sentido na vida real. Unimos o olhar de projeto à precisão da marcenaria para entregar móveis planejados que organizam, acolhem e deixam a casa com a sua cara.</p>
              <p className="body-copy">Do primeiro rabisco à instalação, você acompanha um processo cuidadoso, transparente e próximo. Cada escolha — proporção, textura, ferragem e cor — é pensada para durar e fazer parte da sua história.</p>
              <a className="text-link" href={whatsappBase} target="_blank" rel="noreferrer">Conversar sobre meu projeto <ArrowRight size={16} /></a>
            </div>
            <div className="about-statement"><Sparkles size={20} /><p>“A melhor casa é aquela que reconhece quem mora nela.”</p><span>— Decora Marcenaria</span></div>
          </div>
        </section>

        <section className="spaces-section section-padding" id="ambientes">
          <div className="container">
            <div className="section-heading-row">
              <div><p className="eyebrow">Onde a sua rotina acontece</p><h2>Ambientes que<br /><em>evoluem com você.</em></h2></div>
              <p className="heading-note">Soluções sob medida para aproveitar melhor cada espaço, com a estética que você imaginou e a funcionalidade que o dia a dia pede.</p>
            </div>
            <div className="spaces-grid">
              {areas.map(({ icon: Icon, title, text }, index) => (
                <article className="space-card" key={title}>
                  <div className="space-number">0{index + 1}</div><Icon className="space-icon" size={27} strokeWidth={1.35} /><h3>{title}</h3><p>{text}</p><a href={whatsappBase} target="_blank" rel="noreferrer" aria-label={`Conhecer projetos de ${title}`}>Ver possibilidades <ArrowRight size={15} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="feature-section section-padding">
          <div className="container feature-grid">
            <div className="feature-photo-wrap"><img src="/manus-storage/decora-kitchen_0bd6714e.jpg" alt="Cozinha planejada em madeira natural e tons claros" /><div className="photo-label"><span>Projeto Decora</span><span>Cozinha · 2025</span></div></div>
            <div className="feature-copy"><p className="eyebrow">Matéria, luz e proporção</p><h2>A beleza mora<br /><em>nos detalhes.</em></h2><p>Materiais acolhedores, linhas precisas e soluções invisíveis se encontram para criar uma cozinha que funciona tão bem quanto encanta.</p><div className="feature-list"><div><Check size={16} /><span>Combinação de cores personalizada</span></div><div><Check size={16} /><span>MDF de alta qualidade e ferragens confiáveis</span></div><div><Check size={16} /><span>Instalação limpa e assistência próxima</span></div></div><a className="button button--dark" href={whatsappBase} target="_blank" rel="noreferrer">Quero um projeto assim <ArrowRight size={17} /></a></div>
          </div>
        </section>

        <section className="process-section section-padding" id="processo">
          <div className="container">
            <div className="section-heading-row process-heading"><div><p className="eyebrow">Do sonho à entrega</p><h2>Um processo claro,<br /><em>um resultado seu.</em></h2></div><p className="heading-note">Sem surpresas no caminho. A gente cuida do projeto, da produção e da montagem para você aproveitar o que realmente importa.</p></div>
            <div className="process-grid">{process.map((item) => <div className="process-item" key={item.number}><span className="process-number">{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></div>)}</div>
          </div>
        </section>

        <section className="testimonial-section section-padding">
          <div className="container testimonial-layout"><div className="testimonial-intro"><p className="eyebrow">Quem vive a experiência</p><h2>Feito para<br /><em>ser vivido.</em></h2><div className="google-rating"><div className="rating-number">5.0</div><div><div className="stars" aria-label="5 de 5 estrelas">★★★★★</div><span>48 avaliações no Google</span></div></div></div><div className="testimonial-quote"><span className="quote-mark">“</span><blockquote>Desde o atendimento para o orçamento até a entrega final o contato foi sempre rápido e atencioso. O Richard deu boas sugestões para o projeto ficar ainda mais bonito, funcional e com qualidade.</blockquote><div className="quote-footer"><strong>Erick Bernard</strong><span>Cliente Decora · há 5 meses</span></div></div></div>
        </section>

        <section className="contact-section section-padding" id="contato">
          <div className="container contact-grid"><div className="contact-intro"><p className="eyebrow">Vamos criar juntos?</p><h2>Seu próximo ambiente<br /><em>começa aqui.</em></h2><p>Conte um pouco do que você imagina. A nossa equipe retorna para entender seu projeto e preparar um orçamento sem compromisso.</p><div className="contact-details"><a href={`tel:+553131819006`}><Phone size={17} /><span><small>ligue ou mande uma mensagem</small>{phone}</span></a><a href={mapUrl} target="_blank" rel="noreferrer"><MapPin size={17} /><span><small>visite nosso endereço</small>Rua Luís Lyrio, 208 · Contagem — MG</span></a></div><div className="contact-social"><a href={whatsappBase} target="_blank" rel="noreferrer">WhatsApp <ArrowRight size={15} /></a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Instagram size={15} /> Instagram</a></div></div><form className="contact-form" onSubmit={handleSubmit}><div className="form-label">ORÇAMENTO SEM COMPROMISSO</div><label>Como podemos chamar você?<input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Seu nome" /></label><label>Seu telefone ou WhatsApp<input required value={form.contact} onChange={(event) => setForm({ ...form, contact: event.target.value })} placeholder="(00) 00000-0000" /></label><label>O que você gostaria de transformar?<textarea required value={form.project} onChange={(event) => setForm({ ...form, project: event.target.value })} placeholder="Ex.: cozinha, quarto, home office..." rows={3} /></label><button className="button button--copper button--full" type="submit">Enviar pelo WhatsApp <ArrowRight size={17} /></button><small className="form-note">Ao enviar, você será direcionado para uma conversa no WhatsApp da Decora.</small></form></div>
        </section>

        <section className="hours-bar"><div className="container hours-inner"><div className="hours-title"><Clock3 size={20} /><span><strong>Horário de atendimento</strong><small>Fale com a gente no melhor momento para você.</small></span></div><div className="hours-list"><span><strong>Seg–Sex</strong> 08:00–17:00</span><span><strong>Sábado</strong> 08:00–13:00</span><span className="closed">Domingo fechado</span></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><a className="brand brand--footer" href="#inicio"><span className="brand-mark"><span>D</span></span><span className="brand-copy"><strong>decora</strong><small>marcenaria de móveis planejados</small></span></a><p>Projetos que transformam espaços<br />em lugares para viver bem.</p><span className="footer-copy">© 2025 Decora Marcenaria · Contagem, MG</span></div></footer>
      <a className="floating-whatsapp" href={whatsappBase} target="_blank" rel="noreferrer" aria-label="Falar com a Decora pelo WhatsApp"><span>Fale com a Decora</span><Phone size={19} /></a>
    </div>
  );
}
