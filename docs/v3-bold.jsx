// Landing — Variação 3: BOLD / ASYMMETRIC
// Navy block hero, layouts assimétricos, mais cor, números grandes,
// stats. Mais marketing, mas ainda na gramática Advvia (sem gradient/blur).

function LandingV3({ density = 'comfortable', accent = 'navy', heroVariant = 'mockup', sections = {} }) {
  const C = {
    navy:    { solid: '#1a3a5c', tint: '#e8f1f8' },
    laranja: { solid: '#c46000', tint: '#f7ede4' },
    verde:   { solid: '#1a6040', tint: '#e8f4ee' },
  }[accent];
  const pad = density === 'compact' ? { sec: 80 } : { sec: 120 };
  const st = v3Styles(C, pad);

  const showHero = sections.hero !== false;
  const showProduct = sections.product !== false;
  const showFeatures = sections.features !== false;
  const showHow = sections.how !== false;
  const showPricing = sections.pricing !== false;
  const showSecurity = sections.security !== false;
  const showCta = sections.cta !== false;

  return (
    <div style={st.page}>
      {/* HERO — navy fullbleed */}
      {showHero && (
        <section style={st.hero}>
          {/* nav inside hero */}
          <nav style={st.nav}>
            <div style={st.navInner}>
              <img src={window.__resources?.logoLight ?? "brand/advvia-logo-horizontal-light.svg"} alt="Advvia" style={{ height: 28 }} />
              <div style={st.navLinks}>
                <a style={st.navLink}>Produto</a>
                <a style={st.navLink}>Como funciona</a>
                <a style={st.navLink}>Preços</a>
                <a style={st.navLink}>Segurança</a>
              </div>
              <div style={st.navRight}>
                <a style={st.navLink}>Entrar</a>
                <button style={st.btnInverse}>Começar agora</button>
              </div>
            </div>
          </nav>

          <div style={st.heroInner}>
            <div style={st.heroLeft}>
              <span style={st.kickerOnDark}>
                <span style={st.kickerDot} /> SOFTWARE JURÍDICO BRASILEIRO · 2026
              </span>
              <h1 style={st.h1}>
                Organização e<br/>
                <em style={st.h1Em}>comunicação</em><br/>
                <span style={st.h1Underline}>inteligente</span><br/>
                entre advogado<br/>
                e cliente.
              </h1>
              <p style={st.heroLead}>
                Coloque em ordem o caos de planilhas, e-mails sem fim e WhatsApps aleatórios.
                Seu cliente passa a ter visão clara de todos os processos, ações e documentos —
                não importa quantos estejam tramitando ao mesmo tempo.
              </p>
              <div style={st.ctaRow}>
                <button style={st.btnPrimaryLg}>Começar agora →</button>
                <button style={st.btnGhostLg}>Ver demo</button>
              </div>
              <div style={st.proofRow}>
                <span style={st.proofItem}>✓ 14 dias grátis</span>
                <span style={st.proofItem}>✓ Sem cartão</span>
                <span style={st.proofItem}>✓ Hospedagem BR</span>
              </div>
            </div>

            <div style={st.heroRight}>
              {heroVariant !== 'text' ? <Hero3Mockup /> : <HeroPullquote />}
            </div>
          </div>

          {/* stats strip */}
          <div style={st.statsStrip}>
            <Stat n="1.247" label="ESCRITÓRIOS USANDO" />
            <Stat n="38mil" label="CASOS ATIVOS" />
            <Stat n="2.1M" label="EVENTOS REGISTRADOS" />
            <Stat n="99.97%" label="UPTIME · 12 MESES" />
          </div>
        </section>
      )}

      {/* PRODUCT — quatro tiles grandes coloridas, alternando lado */}
      {showProduct && (
        <section style={st.product}>
          <div style={st.secInner}>
            <div style={st.secHead}>
              <div style={st.kickerSec}>O PRODUTO</div>
              <h2 style={st.h2}>Quatro superfícies. <span style={st.h2Light}>Um único caso.</span></h2>
            </div>

            <BigTile
              num="01"
              kicker="TIMELINE"
              color="#1a3a5c"
              tint="#e8f1f8"
              title="A cronologia do caso, em uma única tela."
              body="Eventos fatuais (azul) e processuais (verde) lado a lado. Filtros por tipo, ordenação por data, e destaque em vermelho pro que não pode passar. Datas em Playfair, a leitura é prazerosa mesmo às 23h."
              meta="EV-001 · EV-002 · EV-003 …"
              preview={<TimelinePreview />}
            />
            <BigTile
              num="02"
              kicker="PENDÊNCIAS"
              color="#c46000"
              tint="#f7ede4"
              reversed
              title="Tarefas com peso jurídico — não to-do list."
              body="Cada pendência tem prazo, status (Aberta · Em andamento · Resolvida), e vínculo a evento, processo e arquivo. Auditoria completa de quem moveu o quê e quando."
              meta="PD-001 → resolvida em 12 MAR"
              preview={<PendenciasPreview />}
            />
            <BigTile
              num="03"
              kicker="PROCESSOS"
              color="#1a6040"
              tint="#e8f4ee"
              title="Índice CNJ que se mantém sozinho."
              body="Cadastre o número CNJ uma vez. Vincule eventos, pendências e arquivos. Vara, classe, status e partes — tudo em um só lugar, com o número formatado em tabular-nums."
              meta="PR-003 · 0700182-27.2026.8.02.0090"
              preview={<ProcessosPreview />}
            />
            <BigTile
              num="04"
              kicker="ARQUIVOS"
              color="#4a1a7a"
              tint="#f0e8f9"
              reversed
              title="Cada peça conectada à origem."
              body="Petições, decisões, anexos, documentos da parte. Cada arquivo conhece o evento que o gerou e a pendência que ele resolve — busca por nome ou por vínculo."
              meta="42 documentos · 18 vinculados"
              preview={<ArquivosPreview />}
            />
          </div>
        </section>
      )}

      {/* FEATURES — grid de 6 com ícones grandes */}
      {showFeatures && (
        <section style={st.features}>
          <div style={st.secInner}>
            <div style={st.secHead}>
              <div style={st.kickerSec}>POR DENTRO DO ADVVIA</div>
              <h2 style={st.h2}>Construído com <em style={st.h2Em}>vocabulário jurídico</em>.</h2>
              <p style={st.lead}>Não é um Trello pintado de azul. É uma ferramenta cuja gramática é a do processo civil brasileiro.</p>
            </div>
            <div style={st.featGrid}>
              <Feat3 color="#1a3a5c" tint="#e8f1f8" title="Eventos com tipo" desc="Fato ou processual — distinção visual e semântica nativa." icon={<IconClock3 />} />
              <Feat3 color="#c46000" tint="#f7ede4" title="Códigos curtos" desc="EV-012, PD-007, PR-003. Tabular-nums, referenciáveis." icon={<IconHash />} />
              <Feat3 color="#1a6040" tint="#e8f4ee" title="Vínculos cruzados" desc="Eventos, pendências, processos e arquivos como referências de primeira classe." icon={<IconLink />} />
              <Feat3 color="#4a1a7a" tint="#f0e8f9" title="Paper-feel" desc="Tipografia leve, datas em Playfair, bordas frias 1.5px." icon={<IconType />} />
              <Feat3 color="#8c1a1a" tint="#f9eaea" title="API e exportação" desc="Importa CSV, exporta JSON. Sem refém de plataforma." icon={<IconCode />} />
              <Feat3 color="#5a6470" tint="#f0f2f4" title="PWA" desc="Instala no celular sem App Store. Funciona offline." icon={<IconPhone />} />
            </div>
          </div>
        </section>
      )}

      {/* HOW IT WORKS */}
      {showHow && (
        <section style={st.how}>
          <div style={st.secInner}>
            <div style={st.secHead}>
              <div style={st.kickerSec}>COMO FUNCIONA</div>
              <h2 style={st.h2}>Do primeiro caso à audiência.</h2>
            </div>
            <div style={st.stepsGrid}>
              <StepBig n="01" color="#1a3a5c" title="Crie o caso" desc="Título, descrição, partes envolvidas. Em menos de um minuto." />
              <StepBig n="02" color="#c46000" title="Adicione eventos" desc="Cada fato e movimento entra com data, tipo e referência ao processo." />
              <StepBig n="03" color="#1a6040" title="Vincule peças" desc="Petições, pendências e arquivos — tudo linkado ao evento certo." />
              <StepBig n="04" color="#4a1a7a" title="Releia em paz" desc="A timeline inteira do caso em uma única tela. Sem caçar email." />
            </div>
          </div>
        </section>
      )}

      {/* PRICING — cards bold */}
      {showPricing && (
        <section style={st.pricing}>
          <div style={st.secInner}>
            <div style={st.secHead}>
              <div style={st.kickerSec}>PLANOS</div>
              <h2 style={st.h2}>Preço direto. <span style={st.h2Light}>Cancele quando quiser.</span></h2>
            </div>
            <div style={st.priceGrid}>
              <Price3 tier="SOLO" price="R$ 49" desc="Pra advogados autônomos." features={['Até 25 casos ativos', 'Timeline completa', 'Pendências e arquivos', 'Suporte por email']} cta="Começar" color="#1a3a5c" />
              <Price3 tier="ESCRITÓRIO" price="R$ 129" desc="Pra times pequenos e médios." features={['Casos ilimitados', 'Até 5 advogados', 'Permissões por caso', 'Histórico de auditoria', 'Suporte prioritário']} cta="Começar" color="#c46000" featured />
              <Price3 tier="BANCA" price="Sob consulta" desc="Pra escritórios grandes." features={['Tudo do Escritório', 'Usuários ilimitados', 'SSO e LGPD assistida', 'SLA dedicado', 'On-boarding com gerente']} cta="Falar com vendas" color="#1a6040" />
            </div>
          </div>
        </section>
      )}

      {/* SECURITY — split com navy */}
      {showSecurity && (
        <section style={st.security}>
          <div style={st.secSplit}>
            <div style={st.secLeft}>
              <div style={st.kickerSec}>SEGURANÇA E LGPD</div>
              <h2 style={st.h2}>Dados sob <em style={st.h2Em}>sigilo profissional</em>.</h2>
              <p style={st.lead}>
                Hospedagem em servidores no Brasil. Criptografia em trânsito e em repouso.
                DPO designado, registro de operações de tratamento, e atendimento direto
                pra requisições de titulares.
              </p>
              <div style={st.secBadges}>
                <span style={st.secBadge}>AWS sa-east-1</span>
                <span style={st.secBadge}>TLS 1.3</span>
                <span style={st.secBadge}>AES-256</span>
                <span style={st.secBadge}>LGPD-ready</span>
                <span style={st.secBadge}>2FA obrigatório</span>
              </div>
            </div>
            <div style={st.secRight}>
              <SecMetric n="100%" label="Hospedagem em território nacional" />
              <SecMetric n="30d" label="Backup com retenção mínima" />
              <SecMetric n="15d" label="SLA de resposta a titulares (LGPD)" />
              <SecMetric n="0" label="Incidentes de vazamento desde 2024" />
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      {showCta && (
        <section style={st.finalCta}>
          <div style={st.finalCtaInner}>
            <h2 style={st.finalH2}>Comece a se comunicar<br/>com seu cliente <em style={st.finalEm}>como se deve</em>.</h2>
            <p style={st.finalLead}>14 dias grátis. Sem cartão de crédito. Migração assistida.</p>
            <div style={st.ctaRow}>
              <button style={st.btnInverseLg}>Começar agora →</button>
              <button style={st.btnGhostLgLight}>Falar com vendas</button>
            </div>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer style={st.footer}>
        <div style={st.footInner}>
          <div style={st.footTop}>
            <div style={st.footBrand}>
              <img src={window.__resources?.logoLight ?? "brand/advvia-logo-horizontal-light.svg"} alt="Advvia" style={{ height: 26 }} />
              <p style={st.footTag}>Software jurídico — feito por advogados, pra advogados que leem cada linha do processo.</p>
              <div style={st.footProof}>
                <span style={st.proofItemDark}>✓ Hospedagem BR</span>
                <span style={st.proofItemDark}>✓ LGPD-ready</span>
              </div>
            </div>
            <div style={st.footCols}>
              <FootCol3 title="PRODUTO" links={['Timeline','Pendências','Processos','Arquivos']} />
              <FootCol3 title="EMPRESA" links={['Sobre','Blog','Carreiras','Contato']} />
              <FootCol3 title="LEGAL" links={['Termos','Privacidade','LGPD','DPA']} />
            </div>
          </div>
          <div style={st.footBot}>
            <span>© 2026 Advvia Tecnologia Jurídica · CNPJ 00.000.000/0001-00</span>
            <span>São Paulo · Brasil</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ============== Components ============== */

function Stat({ n, label }) {
  return (
    <div style={{ flex: 1, minWidth: 0, padding: '0 12px' }}>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 38, fontWeight: 700, color: '#fff', lineHeight: 1, letterSpacing: '-0.02em' }}>{n}</div>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', color: 'rgba(255,255,255,.55)', marginTop: 8 }}>{label}</div>
    </div>
  );
}

function BigTile({ num, kicker, color, tint, title, body, meta, preview, reversed }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: reversed ? '1fr 1fr' : '1fr 1fr',
      gap: 56,
      alignItems: 'center',
      padding: '64px 0',
      borderBottom: '1.5px solid #e6ecf2',
      direction: reversed ? 'rtl' : 'ltr',
    }}>
      <div style={{ direction: 'ltr' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 18 }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 64, fontWeight: 700, color: tint, lineHeight: 0.9, letterSpacing: '-0.02em' }}>{num}</span>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.28em', color, textTransform: 'uppercase' }}>{kicker}</span>
        </div>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: '#1c2730', lineHeight: 1.18, letterSpacing: '-0.015em', margin: '0 0 18px' }}>{title}</h3>
        <p style={{ fontSize: 17, fontWeight: 300, color: '#2c3840', lineHeight: 1.65, margin: '0 0 18px', maxWidth: 480 }}>{body}</p>
        <div style={{ fontFamily: 'monospace', fontSize: 12, fontWeight: 500, color, letterSpacing: '0.04em', background: tint, display: 'inline-block', padding: '6px 12px', borderRadius: 4 }}>{meta}</div>
      </div>
      <div style={{ direction: 'ltr' }}>{preview}</div>
    </div>
  );
}

function Feat3({ color, tint, title, desc, icon }) {
  return (
    <div style={{ background: '#fff', border: '1.5px solid #c8d8e8', borderRadius: 8, padding: '26px 26px 22px' }}>
      <div style={{ width: 48, height: 48, borderRadius: 10, background: tint, color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>{icon}</div>
      <h3 style={{ fontSize: 19, fontWeight: 600, color: '#1c2730', margin: '0 0 8px', lineHeight: 1.3 }}>{title}</h3>
      <p style={{ fontSize: 15, fontWeight: 300, color: '#2c3840', lineHeight: 1.6, margin: 0 }}>{desc}</p>
    </div>
  );
}

function StepBig({ n, color, title, desc }) {
  return (
    <div style={{ position: 'relative', paddingLeft: 0 }}>
      <div style={{ width: 56, height: 56, borderRadius: '50%', background: color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, marginBottom: 18, boxShadow: '0 6px 20px rgba(0,0,0,.12)' }}>{n}</div>
      <h3 style={{ fontSize: 20, fontWeight: 600, color: '#1c2730', margin: '0 0 8px' }}>{title}</h3>
      <p style={{ fontSize: 15, fontWeight: 300, color: '#2c3840', lineHeight: 1.6, margin: 0 }}>{desc}</p>
    </div>
  );
}

function Price3({ tier, price, desc, features, cta, color, featured }) {
  return (
    <div style={{
      background: featured ? color : '#fff',
      border: featured ? `1.5px solid ${color}` : '1.5px solid #c8d8e8',
      borderRadius: 12,
      padding: '34px 30px 32px',
      display: 'flex', flexDirection: 'column', gap: 18,
      boxShadow: featured ? `0 16px 48px ${color}33` : 'none',
      position: 'relative',
      transform: featured ? 'translateY(-8px)' : 'none',
    }}>
      {featured && <span style={{ position: 'absolute', top: -12, left: 30, background: '#fff', color, fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', padding: '6px 12px', borderRadius: 4, textTransform: 'uppercase', border: `1.5px solid ${color}` }}>Mais escolhido</span>}
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.26em', color: featured ? 'rgba(255,255,255,.7)' : color, textTransform: 'uppercase' }}>{tier}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: 700, color: featured ? '#fff' : '#1c2730', lineHeight: 1, letterSpacing: '-0.015em' }}>{price}</span>
        {!price.includes('consulta') && <span style={{ fontSize: 13, fontWeight: 300, color: featured ? 'rgba(255,255,255,.7)' : '#5a6470' }}>/ mês</span>}
      </div>
      <p style={{ fontSize: 15, fontWeight: 300, color: featured ? 'rgba(255,255,255,.85)' : '#5a6470', margin: 0, fontStyle: 'italic' }}>{desc}</p>
      <div style={{ borderTop: featured ? '1.5px solid rgba(255,255,255,.2)' : '1.5px solid #e6ecf2' }} />
      <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {features.map((f) => (
          <li key={f} style={{ fontSize: 14, fontWeight: 300, color: featured ? 'rgba(255,255,255,.9)' : '#2c3840', display: 'flex', gap: 10 }}>
            <span style={{ color: featured ? '#fff' : color, fontWeight: 700 }}>✓</span>
            {f}
          </li>
        ))}
      </ul>
      <button style={{ marginTop: 10, padding: '13px 18px', fontSize: 14, fontWeight: 700, letterSpacing: '0.04em', borderRadius: 6, cursor: 'pointer', fontFamily: 'inherit', background: featured ? '#fff' : color, color: featured ? color : '#fff', border: 'none' }}>{cta}</button>
    </div>
  );
}

function SecMetric({ n, label }) {
  return (
    <div style={{ padding: '24px 0', borderBottom: '1.5px solid rgba(255,255,255,.15)', display: 'grid', gridTemplateColumns: '120px 1fr', gap: 24, alignItems: 'baseline' }}>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: 700, color: '#fff', lineHeight: 1, letterSpacing: '-0.02em' }}>{n}</div>
      <div style={{ fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,.78)', lineHeight: 1.5 }}>{label}</div>
    </div>
  );
}

function FootCol3({ title, links }) {
  return (
    <div>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.24em', color: 'rgba(255,255,255,.55)', marginBottom: 14, textTransform: 'uppercase' }}>{title}</div>
      <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
        {links.map((l) => <li key={l} style={{ fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,.85)', cursor: 'pointer' }}>{l}</li>)}
      </ul>
    </div>
  );
}

/* ============== Hero mockup (light, on navy bg) ============== */
function Hero3Mockup() {
  return (
    <div style={{ position: 'relative' }}>
      {/* card 1 - main timeline */}
      <div style={{
        background: '#fff',
        borderRadius: 12,
        boxShadow: '0 32px 80px rgba(0,0,0,.4), 0 12px 24px rgba(0,0,0,.2)',
        overflow: 'hidden',
        border: '1.5px solid #c8d8e8',
      }}>
        <div style={{ background: '#1a3a5c', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 10, borderBottom: '2px solid #2a5a8c' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,.3)' }} />
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,.3)' }} />
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,.3)' }} />
          <span style={{ color: 'rgba(255,255,255,.5)', fontSize: 12, marginLeft: 12, fontFamily: 'monospace' }}>advvia.com.br/casos/lucas</span>
        </div>
        <div style={{ padding: '22px 24px', background: '#fafbfc' }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', color: '#5a6470', marginBottom: 14 }}>EVENTOS · 5 RECENTES</div>
          <CompactEvent day="19" mon="MAR" code="EV-012" tag="AUDIÊNCIA" tCol="#1a6040" tint="#e8f4ee" title="Audiência de instrução e julgamento" />
          <CompactEvent day="12" mon="MAR" code="EV-011" tag="DECISÃO" tCol="#a93226" tint="#fde8e6" title="Decisão cautelar deferida" highlight />
          <CompactEvent day="04" mon="MAR" code="EV-010" tag="FATO" tCol="#2a5a8c" tint="#e8f1f8" title="Intimação recebida pelo procurador" last />
        </div>
      </div>
      {/* floating card 2 - pendência */}
      <div style={{
        position: 'absolute', right: -28, bottom: -32, width: 240,
        background: '#fff', borderRadius: 10, padding: 16,
        border: '1.5px solid #c46000',
        boxShadow: '0 18px 40px rgba(0,0,0,.3)',
      }}>
        <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
          <span style={{ background: '#f7ede4', color: '#c46000', fontSize: 9, fontWeight: 700, padding: '2px 7px', borderRadius: 3, fontFamily: 'monospace' }}>PD-007</span>
          <span style={{ background: '#f7ede4', color: '#c46000', fontSize: 9, fontWeight: 700, padding: '2px 7px', borderRadius: 3, letterSpacing: '0.1em' }}>PRAZO</span>
        </div>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#1c2730', lineHeight: 1.3, marginBottom: 6 }}>Manifestação sobre intimação</div>
        <div style={{ fontSize: 11, fontWeight: 300, color: '#5a6470' }}>Vence em 7 dias · Vinculado a EV-010</div>
      </div>
    </div>
  );
}

function CompactEvent({ day, mon, code, tag, tCol, tint, title, highlight, last }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '54px 1fr', gap: 14, padding: '12px 0', borderTop: last ? 'none' : '1px solid #e6ecf2' }}>
      <div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: '#1a3a5c', lineHeight: 1 }}>{day}</div>
        <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.18em', color: '#5a6470', marginTop: 3 }}>{mon} 2026</div>
      </div>
      <div style={{ background: '#fff', border: highlight ? '1.5px solid #c0392b' : '1.5px solid #c8d8e8', borderRadius: 6, padding: '8px 10px' }}>
        <div style={{ display: 'flex', gap: 5, marginBottom: 4 }}>
          <span style={{ background: tint, color: tCol, fontSize: 9, fontWeight: 700, padding: '1px 6px', borderRadius: 3, fontFamily: 'monospace', letterSpacing: '0.04em' }}>{code}</span>
          <span style={{ background: tint, color: tCol, fontSize: 9, fontWeight: 700, padding: '1px 6px', borderRadius: 3, letterSpacing: '0.1em' }}>{tag}</span>
        </div>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#1c2730', lineHeight: 1.3 }}>{title}</div>
      </div>
    </div>
  );
}

function HeroPullquote() {
  return (
    <div style={{ borderLeft: '4px solid #c46000', padding: '20px 0 20px 32px', maxWidth: 480 }}>
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.28em', color: '#c46000', textTransform: 'uppercase', marginBottom: 16 }}>O QUE FALAM</div>
      <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontStyle: 'italic', fontWeight: 400, color: '#fff', lineHeight: 1.35, margin: 0 }}>
        "Pela primeira vez consigo entrar numa audiência sabendo exatamente o que aconteceu — sem caçar email às 23h."
      </p>
      <div style={{ marginTop: 24, fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,.7)' }}>
        <strong style={{ color: '#fff', fontWeight: 600 }}>Bruno P.</strong> · Sócio · Advocacia Pexoto
      </div>
    </div>
  );
}

/* ============== small product previews ============== */
function TimelinePreview() {
  return (
    <div style={{ background: '#fff', border: '1.5px solid #c8d8e8', borderRadius: 10, padding: 18, boxShadow: '0 12px 36px rgba(20,40,60,.08)' }}>
      <CompactEvent day="19" mon="MAR" code="EV-012" tag="AUDIÊNCIA" tCol="#1a6040" tint="#e8f4ee" title="Audiência de instrução" />
      <CompactEvent day="12" mon="MAR" code="EV-011" tag="DECISÃO" tCol="#a93226" tint="#fde8e6" title="Cautelar deferida" highlight />
      <CompactEvent day="04" mon="MAR" code="EV-010" tag="FATO" tCol="#2a5a8c" tint="#e8f1f8" title="Intimação recebida" last />
    </div>
  );
}
function PendenciasPreview() {
  return (
    <div style={{ background: '#fff', border: '1.5px solid #c8d8e8', borderRadius: 10, padding: 18, boxShadow: '0 12px 36px rgba(20,40,60,.08)', display: 'flex', flexDirection: 'column', gap: 10 }}>
      {[
        { code: 'PD-005', t: 'Protocolar contrarrazões', s: 'Resolvida', col: '#1a6040', tint: '#e8f4ee' },
        { code: 'PD-006', t: 'Juntar procuração', s: 'Em andamento', col: '#c46000', tint: '#f7ede4' },
        { code: 'PD-007', t: 'Manifestação sobre intimação', s: 'Aberta · 7 dias', col: '#8c1a1a', tint: '#f9eaea' },
      ].map(p => (
        <div key={p.code} style={{ border: '1.5px solid #e6ecf2', borderRadius: 6, padding: '10px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <div>
            <div style={{ display: 'flex', gap: 6, marginBottom: 3 }}>
              <span style={{ fontFamily: 'monospace', fontSize: 9, fontWeight: 700, color: '#c46000', background: '#f7ede4', padding: '1px 6px', borderRadius: 3 }}>{p.code}</span>
            </div>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#1c2730' }}>{p.t}</div>
          </div>
          <span style={{ background: p.tint, color: p.col, fontSize: 9, fontWeight: 700, padding: '3px 8px', borderRadius: 16, letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{p.s}</span>
        </div>
      ))}
    </div>
  );
}
function ProcessosPreview() {
  return (
    <div style={{ background: '#fff', border: '1.5px solid #c8d8e8', borderRadius: 10, padding: 18, boxShadow: '0 12px 36px rgba(20,40,60,.08)', display: 'flex', flexDirection: 'column', gap: 8 }}>
      {[
        { code: 'PR-001', n: '0700045-12.2025.8.02.0090', vara: '4ª Câmara Cível', s: 'Em curso' },
        { code: 'PR-002', n: '0700182-27.2026.8.02.0090', vara: '2ª Vara Família', s: 'Suspenso' },
        { code: 'PR-003', n: '0701009-83.2026.8.02.0090', vara: '1ª Vara Empresarial', s: 'Em curso' },
      ].map(p => (
        <div key={p.code} style={{ borderLeft: '3px solid #1a6040', background: '#fafbfc', padding: '10px 14px', borderRadius: 4 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
            <span style={{ fontFamily: 'monospace', fontSize: 9, fontWeight: 700, color: '#1a6040', background: '#e8f4ee', padding: '1px 6px', borderRadius: 3 }}>{p.code}</span>
            <span style={{ fontSize: 9, fontWeight: 700, color: '#1a6040', letterSpacing: '0.14em', textTransform: 'uppercase' }}>{p.s}</span>
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: 12, fontWeight: 600, color: '#1c2730', fontVariantNumeric: 'tabular-nums' }}>{p.n}</div>
          <div style={{ fontSize: 11, fontWeight: 300, color: '#5a6470', fontStyle: 'italic', marginTop: 2 }}>{p.vara}</div>
        </div>
      ))}
    </div>
  );
}
function ArquivosPreview() {
  return (
    <div style={{ background: '#fff', border: '1.5px solid #c8d8e8', borderRadius: 10, padding: 18, boxShadow: '0 12px 36px rgba(20,40,60,.08)', display: 'flex', flexDirection: 'column', gap: 8 }}>
      {[
        { n: 'Petição inicial.pdf', m: 'PDF · 2.4 MB · Vinculado a EV-001' },
        { n: 'Decisão cautelar.pdf', m: 'PDF · 880 KB · Vinculado a EV-011' },
        { n: 'Procuração - Lucas.pdf', m: 'PDF · 320 KB · Vinculado a PD-006' },
      ].map(f => (
        <div key={f.n} style={{ display: 'flex', gap: 12, padding: '10px 12px', border: '1.5px solid #e6ecf2', borderRadius: 6, alignItems: 'center' }}>
          <div style={{ width: 32, height: 36, background: '#f0e8f9', color: '#4a1a7a', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, letterSpacing: '0.06em' }}>PDF</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#1c2730', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{f.n}</div>
            <div style={{ fontSize: 11, fontWeight: 300, color: '#5a6470', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{f.m}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* icons */
function IconClock3() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>; }
function IconHash() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 9h14M5 15h14M10 3L8 21M16 3l-2 18"/></svg>; }
function IconLink() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 14a4 4 0 005.66 0l3-3a4 4 0 10-5.66-5.66l-1.5 1.5"/><path d="M14 10a4 4 0 00-5.66 0l-3 3a4 4 0 105.66 5.66l1.5-1.5"/></svg>; }
function IconType() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 5h14M9 5v14M15 5v14"/></svg>; }
function IconCode() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>; }
function IconPhone() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="6" y="3" width="12" height="18" rx="2"/><path d="M11 18h2"/></svg>; }

/* ============== Styles ============== */
function v3Styles(C, pad) {
  return {
    page: { fontFamily: "'Source Sans 3', sans-serif", fontWeight: 300, color: '#1c2730', background: '#fafbfc', minHeight: '100%' },

    hero: { background: '#1a3a5c', color: '#fff', position: 'relative', overflow: 'hidden' },
    nav: { borderBottom: '1px solid rgba(255,255,255,.12)' },
    navInner: { maxWidth: 1280, margin: '0 auto', padding: '20px 32px', display: 'flex', alignItems: 'center', gap: 32 },
    navLinks: { display: 'flex', gap: 28, flex: 1 },
    navLink: { fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,.78)', cursor: 'pointer' },
    navRight: { display: 'flex', alignItems: 'center', gap: 18 },
    btnInverse: { background: '#fff', color: '#1a3a5c', border: 'none', padding: '8px 16px', fontSize: 13, fontWeight: 700, borderRadius: 6, cursor: 'pointer', fontFamily: 'inherit' },

    heroInner: { maxWidth: 1280, margin: '0 auto', padding: '90px 32px 80px', display: 'grid', gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 1fr)', gap: 64, alignItems: 'center' },
    heroLeft: { display: 'flex', flexDirection: 'column', gap: 24 },
    heroRight: {},
    kickerOnDark: { display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 12, fontWeight: 700, letterSpacing: '0.22em', color: '#f7ede4', background: 'rgba(196,96,0,.18)', border: '1.5px solid rgba(196,96,0,.5)', padding: '6px 14px', borderRadius: 50, alignSelf: 'flex-start', textTransform: 'uppercase' },
    kickerDot: { width: 6, height: 6, borderRadius: '50%', background: '#c46000' },
    h1: { fontFamily: "'Playfair Display', serif", fontSize: 96, fontWeight: 700, color: '#fff', lineHeight: 0.96, letterSpacing: '-0.035em', margin: 0 },
    h1Em: { fontStyle: 'italic', color: '#f7ede4', fontWeight: 700 },
    h1Underline: { color: '#fff', borderBottom: '4px solid #c46000', paddingBottom: 4 },
    heroLead: { fontSize: 19, fontWeight: 300, color: 'rgba(255,255,255,.78)', lineHeight: 1.65, margin: '6px 0 0', maxWidth: 520 },
    ctaRow: { display: 'flex', gap: 14, marginTop: 14, flexWrap: 'wrap', alignItems: 'center' },
    btnPrimaryLg: { background: '#c46000', color: '#fff', border: 'none', padding: '15px 30px', fontSize: 15, fontWeight: 700, borderRadius: 6, cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '0.02em', boxShadow: '0 8px 24px rgba(196,96,0,.4)' },
    btnGhostLg: { background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,.4)', padding: '14px 26px', fontSize: 15, fontWeight: 600, borderRadius: 6, cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '0.02em' },
    proofRow: { display: 'flex', gap: 22, marginTop: 6, flexWrap: 'wrap' },
    proofItem: { fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,.65)' },

    statsStrip: { borderTop: '1px solid rgba(255,255,255,.15)', padding: '36px 32px', display: 'flex', justifyContent: 'space-between', maxWidth: 1280, margin: '0 auto' },

    product: { padding: `${pad.sec}px 32px ${pad.sec - 30}px` },
    secInner: { maxWidth: 1240, margin: '0 auto' },
    secHead: { textAlign: 'center', maxWidth: 760, margin: '0 auto 56px' },
    kickerSec: { fontSize: 12, fontWeight: 700, letterSpacing: '0.28em', color: '#c46000', textTransform: 'uppercase', marginBottom: 12 },
    h2: { fontFamily: "'Playfair Display', serif", fontSize: 52, fontWeight: 700, color: '#1c2730', lineHeight: 1.1, letterSpacing: '-0.025em', margin: '0 0 16px' },
    h2Light: { fontWeight: 400, fontStyle: 'italic', color: '#5a6470' },
    h2Em: { fontStyle: 'italic', color: '#c46000' },
    lead: { fontSize: 18, fontWeight: 300, color: '#2c3840', lineHeight: 1.65, margin: 0 },

    features: { padding: `${pad.sec}px 32px`, background: '#fff', borderTop: '1.5px solid #e6ecf2', borderBottom: '1.5px solid #e6ecf2' },
    featGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 },

    how: { padding: `${pad.sec}px 32px` },
    stepsGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 36, marginTop: 8 },

    pricing: { padding: `${pad.sec}px 32px`, background: '#fff', borderTop: '1.5px solid #e6ecf2', borderBottom: '1.5px solid #e6ecf2' },
    priceGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, alignItems: 'stretch' },

    security: { padding: 0 },
    secSplit: { display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 520 },
    secLeft: { padding: `${pad.sec - 10}px 64px`, background: '#fafbfc' },
    secRight: { padding: `${pad.sec - 10}px 64px`, background: '#1a3a5c', color: '#fff', display: 'flex', flexDirection: 'column' },
    secBadges: { display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 22 },
    secBadge: { fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: '#1a6040', textTransform: 'uppercase', border: '1.5px solid #1a6040', padding: '6px 14px', borderRadius: 50, background: '#fff' },

    finalCta: { background: '#c46000', padding: `${pad.sec}px 32px`, color: '#fff' },
    finalCtaInner: { maxWidth: 880, margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 },
    finalH2: { fontFamily: "'Playfair Display', serif", fontSize: 64, fontWeight: 700, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.025em', margin: 0 },
    finalEm: { fontStyle: 'italic', color: '#1a3a5c' },
    finalLead: { fontSize: 17, fontWeight: 300, color: 'rgba(255,255,255,.85)', lineHeight: 1.6, margin: 0 },
    btnInverseLg: { background: '#fff', color: '#c46000', border: 'none', padding: '14px 28px', fontSize: 15, fontWeight: 700, borderRadius: 6, cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '0.02em' },
    btnGhostLgLight: { background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,.5)', padding: '13px 26px', fontSize: 15, fontWeight: 600, borderRadius: 6, cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '0.02em' },

    footer: { background: '#1a3a5c', color: '#fff', padding: '64px 32px 32px' },
    footInner: { maxWidth: 1240, margin: '0 auto' },
    footTop: { display: 'grid', gridTemplateColumns: '1.4fr 2fr', gap: 56, paddingBottom: 40 },
    footBrand: {},
    footTag: { fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,.7)', maxWidth: 320, marginTop: 14, lineHeight: 1.6 },
    footProof: { display: 'flex', gap: 18, marginTop: 18 },
    proofItemDark: { fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,.7)' },
    footCols: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 },
    footBot: { borderTop: '1px solid rgba(255,255,255,.15)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'rgba(255,255,255,.5)', fontWeight: 300 },
  };
}

window.LandingV3 = LandingV3;
