// Landing — Variação 1: SÓBRIA / CLEAN
// Fiel ao app. Muito branco, navy como acento, tipografia restrita,
// sem imagens decorativas. Tom: "advogado sério, ferramenta séria".

function LandingV1({ density = 'comfortable', accent = 'navy', heroVariant = 'mockup', sections = {} }) {
  const C = {
    navy:   { solid: '#1a3a5c', hover: '#2a5a8c', tint: '#e8f1f8' },
    laranja:{ solid: '#c46000', hover: '#a35000', tint: '#f7ede4' },
    verde:  { solid: '#1a6040', hover: '#134a32', tint: '#e8f4ee' },
  }[accent];
  const pad = density === 'compact' ? { hero: 64, sec: 72 } : { hero: 96, sec: 110 };

  const st = v1Styles(C, pad);

  const showHero = sections.hero !== false;
  const showProduct = sections.product !== false;
  const showFeatures = sections.features !== false;
  const showHow = sections.how !== false;
  const showPricing = sections.pricing !== false;
  const showSecurity = sections.security !== false;
  const showCta = sections.cta !== false;

  return (
    <div style={st.page}>
      <style>{`
        .v1-hero-inner { display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1.05fr); gap:64px; align-items:center; max-width:1240px; margin:0 auto; }
        .v1-sec-row    { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; }
        @media(max-width:900px){
          .v1-hero-inner { grid-template-columns:1fr; gap:40px; }
          .v1-sec-row    { grid-template-columns:1fr; gap:36px; }
          .v1-hero-mockup { display:none; }
        }
      `}</style>
      {/* NAV */}
      <nav style={st.nav}>
        <div style={st.navInner}>
          <img src={window.__resources?.logoBlue ?? "brand/advvia-logo-horizontal-blue.svg"} alt="Advvia" style={{ height: 28 }} />
          <div style={st.navLinks}>
            <a style={st.navLink}>Produto</a>
            <a style={st.navLink}>Como funciona</a>
            <a style={st.navLink}>Preços</a>
            <a style={st.navLink}>Segurança</a>
          </div>
          <div style={st.navRight}>
            <a style={st.navLink}>Entrar</a>
            <button style={st.btnPrimary}>Começar agora</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      {showHero && (
        <section style={st.hero}>
          <div style={st.heroInner} className="v1-hero-inner">
            <div style={st.heroLeft}>
              <div style={st.kicker}>SOFTWARE JURÍDICO BRASILEIRO</div>
              <h1 style={st.h1}>
                Organização e<br/><em style={st.h1Em}>comunicação inteligente</em><br/>entre advogado e cliente.
              </h1>
              <p style={st.heroLead}>
                Coloque em ordem o caos de planilhas, e-mails sem fim e mensagens de WhatsApp
                aleatórias. Seu cliente terá visão clara de todos os processos, ações, atividades
                e documentação do caso — não importa quantos processos estejam tramitando ao
                mesmo tempo.
              </p>
              <div style={st.ctaRow}>
                <button style={st.btnPrimaryLg}>Começar agora</button>
                <button style={st.btnGhostLg}>Ver demonstração →</button>
              </div>
              <div style={st.proof}>
                <span style={st.proofItem}><span style={st.proofDot} /> Sem cartão de crédito</span>
                <span style={st.proofItem}><span style={st.proofDot} /> 14 dias grátis</span>
                <span style={st.proofItem}><span style={st.proofDot} /> Hospedagem no Brasil</span>
              </div>
            </div>

            {heroVariant !== 'text' && (
              <div style={st.heroRight} className="v1-hero-mockup">
                <HeroMockup accent={C} variant={heroVariant} />
              </div>
            )}
          </div>
        </section>
      )}

      {/* PRODUCT SHOWCASE */}
      {showProduct && (
        <section style={st.product}>
          <div style={st.secInner}>
            <div style={st.secHead}>
              <div style={st.kicker}>O PRODUTO</div>
              <h2 style={st.h2}>Quatro superfícies que conversam.</h2>
              <p style={st.lead}>
                Timeline, Pendências, Processos e Arquivos — não são abas soltas.
                Cada item criado em uma aparece, vinculado, nas outras.
              </p>
            </div>
            <ProductScreenshot accent={C} />
          </div>
        </section>
      )}

      {/* FEATURES */}
      {showFeatures && (
        <section style={st.features}>
          <div style={st.secInner}>
            <div style={st.secHead}>
              <div style={st.kicker}>FUNCIONALIDADES</div>
              <h2 style={st.h2}>Na linguagem que seu cliente vai entender.</h2>
            </div>

            <div style={st.featGrid}>
              <FeatureCard
                kicker="TIMELINE"
                color="#1a3a5c"
                tint="#e8f1f8"
                title="Cronologia do caso"
                desc="Tudo o que aconteceu no caso — fatos, decisões e movimentos — numa linha do tempo contínua, em ordem cronológica. Seu cliente entende sem precisar de explicação."
                icon={<IconClock />}
              />
              <FeatureCard
                kicker="PENDÊNCIAS"
                color="#c46000"
                tint="#f7ede4"
                title="Tarefas com prazo e responsável"
                desc="Cada ação necessária fica registrada com prazo, responsável e status. Nada cai no esquecimento, e o cliente vê o que está sendo feito."
                icon={<IconCheckCircle />}
              />
              <FeatureCard
                kicker="PROCESSOS"
                color="#1a6040"
                tint="#e8f4ee"
                title="Todos os tipos de processo, no mesmo lugar"
                desc="Processos judiciais no padrão CNJ, administrativos, boletins de ocorrência, termos circunstanciados e muito mais — tudo centralizado, com vara, status e partes registradas."
                icon={<IconScale />}
              />
              <FeatureCard
                kicker="ARQUIVOS"
                color="#4a1a7a"
                tint="#f0e8f9"
                title="Biblioteca de documentos do caso"
                desc="Petições, decisões, procurações e documentos da parte, organizados e sempre acessíveis. Cada arquivo conectado ao evento que o gerou."
                icon={<IconFolder />}
              />
              <FeatureCard
                kicker="STATUS REPORT"
                color="#1a3a5c"
                tint="#e8f1f8"
                title="Resumo automático gerado por IA"
                desc="A cada atualização, a Advvia gera automaticamente um resumo do caso em linguagem simples — pra você compartilhar com seu cliente sem precisar redigir."
                icon={<IconClock />}
              />
              <FeatureCard
                kicker="SEGURANÇA"
                color="#1a6040"
                tint="#e8f4ee"
                title="Seus dados protegidos e em conformidade com a LGPD"
                desc="Hospedagem no Brasil, criptografia de ponta a ponta e total conformidade com a LGPD. Você e seu cliente podem confiar que as informações do caso estão seguras."
                icon={<IconScale />}
              />
              <FeatureCard
                kicker="INTEGRAÇÕES"
                color="#4a1a7a"
                tint="#f0e8f9"
                title="Integração com outros sistemas"
                desc="API completa para conectar com seu sistema de faturamento, agenda, assinatura digital ou qualquer outra ferramenta que você já usa."
                icon={<IconFolder />}
              />
              <FeatureCard
                kicker="ACESSO FÁCIL"
                color="#c46000"
                tint="#f7ede4"
                title="Acesse de qualquer lugar, sem instalar nada"
                desc="Funciona no computador, no celular e no tablet — pelo navegador, sem precisar baixar nenhum aplicativo. Você e seu cliente acessam de onde estiverem."
                icon={<IconCheckCircle />}
              />
            </div>
          </div>
        </section>
      )}

      {/* HOW IT WORKS */}
      {showHow && (
        <section style={st.how}>
          <div style={st.secInner}>
            <div style={st.secHead}>
              <div style={st.kicker}>COMO FUNCIONA</div>
              <h2 style={st.h2}>Do primeiro caso à audiência.</h2>
            </div>
            <div style={st.steps}>
              <Step n="01" title="Crie o caso" desc="Nome, partes envolvidas, descrição. Em menos de um minuto." />
              <Step n="02" title="Cadastre os processos" desc="Todos os processos vinculados ao caso: judiciais, administrativos, boletins de ocorrência e outros." />
              <Step n="03" title="Adicione os eventos" desc="Cada fato e cada movimento processual entra com data e tipo — automaticamente em ordem cronológica." />
              <Step n="04" title="Vincule peças e prazos" desc="Petições, decisões, pendências — tudo conectado ao evento certo, sem duplicar informação." />
              <Step n="05" title="Compartilhe com seu cliente" desc="O cliente acessa a visão do caso em tempo real. A IA gera um resumo automático a cada atualização." />
            </div>
          </div>
        </section>
      )}

      {/* PRICING */}
      {showPricing && (
        <section style={st.pricing}>
          <div style={st.secInner}>
            <div style={st.secHead}>
              <div style={st.kicker}>PLANOS</div>
              <h2 style={st.h2}>Preços diretos, sem surpresa.</h2>
              <p style={st.lead}>Cancele quando quiser. Migração de dados gratuita em todos os planos.</p>
            </div>
            <div style={st.priceGrid}>
              <PriceCard
                tier="SOLO"
                price="R$ 49"
                desc="Pra advogados autônomos."
                features={['Até 25 casos ativos', 'Timeline completa', 'Pendências e arquivos', 'Suporte por email']}
                cta="Começar"
                accent={C}
              />
              <PriceCard
                tier="ESCRITÓRIO"
                price="R$ 129"
                desc="Pra times pequenos e médios."
                features={['Casos ilimitados', 'Até 5 advogados', 'Permissões por caso', 'Histórico de auditoria', 'Suporte prioritário']}
                cta="Começar"
                accent={C}
                featured
              />
              <PriceCard
                tier="BANCA"
                price="Sob consulta"
                desc="Pra escritórios grandes."
                features={['Tudo do Escritório', 'Usuários ilimitados', 'SSO e LGPD assistida', 'SLA dedicado', 'On-boarding com gerente']}
                cta="Falar com vendas"
                accent={C}
              />
            </div>
          </div>
        </section>
      )}

      {/* SECURITY */}
      {showSecurity && (
        <section style={st.security}>
          <div style={st.secInner}>
            <div style={st.secRow} className="v1-sec-row">
              <div style={st.secLeft}>
                <div style={st.kicker}>SEGURANÇA E LGPD</div>
                <h2 style={st.h2}>Dados sob sigilo profissional.</h2>
                <p style={st.lead}>
                  Hospedagem em servidores no Brasil. Criptografia em trânsito e em repouso.
                  DPO designado, registro de operações de tratamento, e atendimento direto
                  pra requisições de titulares.
                </p>
              </div>
              <ul style={st.secList}>
                <SecItem text="Hospedagem AWS São Paulo (sa-east-1)" />
                <SecItem text="TLS 1.3 + AES-256 em repouso" />
                <SecItem text="Backup diário com retenção de 30 dias" />
                <SecItem text="Logs de auditoria por usuário e por caso" />
                <SecItem text="Acordo de processamento de dados (DPA) sob solicitação" />
                <SecItem text="2FA obrigatório no plano Escritório+" />
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      {showCta && (
        <section style={st.finalCta}>
          <div style={st.finalCtaInner}>
            <div style={st.kickerLight}>COMECE HOJE</div>
            <h2 style={st.h2Light}>Seu próximo caso merece uma timeline.</h2>
            <p style={st.leadLight}>14 dias grátis. Sem cartão de crédito. Migração assistida.</p>
            <div style={st.ctaRow}>
              <button style={st.btnInverseLg}>Começar agora</button>
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
              <img src={window.__resources?.logoBlue ?? "brand/advvia-logo-horizontal-blue.svg"} alt="Advvia" style={{ height: 26 }} />
              <p style={st.footTag}>Software jurídico para advogados que leem cada linha do processo.</p>
            </div>
            <div style={st.footCols}>
              <FootCol title="PRODUTO" links={['Timeline','Pendências','Processos','Arquivos']} />
              <FootCol title="EMPRESA" links={['Sobre','Blog','Carreiras','Contato']} />
              <FootCol title="LEGAL" links={['Termos','Privacidade','LGPD','DPA']} />
            </div>
          </div>
          <div style={st.footBot}>
            <span>© 2026 Advvia Tecnologia Jurídica Ltda · CNPJ 00.000.000/0001-00</span>
            <span>São Paulo · Brasil</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ============== Sub-components ============== */

function FeatureCard({ kicker, color, tint, title, desc, icon }) {
  const st = {
    card: { background: '#fff', border: '1.5px solid #c8d8e8', borderRadius: 8, padding: '28px 28px 26px', display: 'flex', flexDirection: 'column', gap: 14 },
    iconBox: { width: 44, height: 44, borderRadius: 8, background: tint, color, display: 'flex', alignItems: 'center', justifyContent: 'center' },
    kicker: { fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', color, textTransform: 'uppercase' },
    title: { fontSize: 20, fontWeight: 600, color: '#1c2730', margin: 0, lineHeight: 1.3 },
    desc: { fontSize: 15, fontWeight: 300, color: '#2c3840', lineHeight: 1.6, margin: 0 },
  };
  return (
    <div style={st.card}>
      <div style={st.iconBox}>{icon}</div>
      <div style={st.kicker}>{kicker}</div>
      <h3 style={st.title}>{title}</h3>
      <p style={st.desc}>{desc}</p>
    </div>
  );
}

function Step({ n, title, desc }) {
  const st = {
    wrap: { display: 'flex', flexDirection: 'column', gap: 12 },
    n: { fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: 700, color: '#1a3a5c', lineHeight: 1, letterSpacing: '-0.02em' },
    title: { fontSize: 18, fontWeight: 600, color: '#1c2730', margin: 0 },
    desc: { fontSize: 15, fontWeight: 300, color: '#2c3840', lineHeight: 1.6, margin: 0 },
  };
  return (
    <div style={st.wrap}>
      <div style={st.n}>{n}</div>
      <h3 style={st.title}>{title}</h3>
      <p style={st.desc}>{desc}</p>
    </div>
  );
}

function PriceCard({ tier, price, desc, features, cta, accent, featured }) {
  const st = {
    card: {
      background: featured ? '#1a3a5c' : '#fff',
      border: featured ? '1.5px solid #1a3a5c' : '1.5px solid #c8d8e8',
      borderRadius: 10,
      padding: '32px 28px 30px',
      display: 'flex', flexDirection: 'column', gap: 18,
      boxShadow: featured ? '0 12px 36px rgba(26,58,92,.18)' : 'none',
      position: 'relative',
    },
    tier: {
      fontSize: 11, fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase',
      color: featured ? 'rgba(255,255,255,.7)' : '#5a6470',
    },
    priceRow: { display: 'flex', alignItems: 'baseline', gap: 6 },
    price: {
      fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 700,
      color: featured ? '#fff' : '#1a3a5c', lineHeight: 1, letterSpacing: '-0.01em',
    },
    permo: { fontSize: 14, fontWeight: 300, color: featured ? 'rgba(255,255,255,.65)' : '#5a6470' },
    desc: { fontSize: 15, fontWeight: 300, color: featured ? 'rgba(255,255,255,.8)' : '#2c3840', lineHeight: 1.5, margin: 0 },
    sep: { borderTop: featured ? '1.5px solid rgba(255,255,255,.18)' : '1.5px solid #e6ecf2', margin: '4px 0' },
    feats: { display: 'flex', flexDirection: 'column', gap: 10, padding: 0, margin: 0, listStyle: 'none' },
    feat: { fontSize: 14, fontWeight: 300, color: featured ? 'rgba(255,255,255,.85)' : '#2c3840', display: 'flex', gap: 10, alignItems: 'flex-start' },
    check: { color: featured ? '#fff' : accent.solid, flexShrink: 0, marginTop: 2 },
    cta: {
      marginTop: 8, padding: '12px 18px', fontSize: 14, fontWeight: 600, letterSpacing: '0.04em',
      borderRadius: 6, cursor: 'pointer', fontFamily: 'inherit',
      background: featured ? '#fff' : accent.solid,
      color: featured ? '#1a3a5c' : '#fff',
      border: featured ? 'none' : '1.5px solid ' + accent.solid,
    },
    badge: {
      position: 'absolute', top: -10, right: 24,
      background: '#c46000', color: '#fff', fontSize: 10, fontWeight: 700,
      letterSpacing: '0.2em', padding: '5px 10px', borderRadius: 4, textTransform: 'uppercase',
    },
  };
  const isCustom = price.toLowerCase().includes('consulta');
  return (
    <div style={st.card}>
      {featured && <span style={st.badge}>Mais escolhido</span>}
      <div style={st.tier}>{tier}</div>
      <div style={st.priceRow}>
        <span style={st.price}>{price}</span>
        {!isCustom && <span style={st.permo}>/ mês por usuário</span>}
      </div>
      <p style={st.desc}>{desc}</p>
      <div style={st.sep} />
      <ul style={st.feats}>
        {features.map((f) => (
          <li key={f} style={st.feat}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={st.check}><path d="M5 13l4 4L19 7"/></svg>
            {f}
          </li>
        ))}
      </ul>
      <button style={st.cta}>{cta}</button>
    </div>
  );
}

function SecItem({ text }) {
  return (
    <li style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 0', borderBottom: '1px solid #e6ecf2', fontSize: 15, fontWeight: 300, color: '#2c3840' }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a6040" strokeWidth="2" style={{ flexShrink: 0, marginTop: 2 }}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      {text}
    </li>
  );
}

function FootCol({ title, links }) {
  return (
    <div>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#5a6470', marginBottom: 14 }}>{title}</div>
      <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
        {links.map((l) => <li key={l} style={{ fontSize: 14, fontWeight: 300, color: '#2c3840', cursor: 'pointer' }}>{l}</li>)}
      </ul>
    </div>
  );
}

/* ============== Hero mockup (simplified Timeline preview) ============== */

function HeroMockup({ accent, variant }) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 12,
      border: '1.5px solid #c8d8e8',
      boxShadow: '0 24px 60px rgba(20,40,60,.18), 0 8px 18px rgba(20,40,60,.08)',
      overflow: 'hidden',
      transform: 'perspective(1600px) rotateY(-3deg) rotateX(2deg)',
      transformOrigin: 'left center',
    }}>
      {/* mini header */}
      <div style={{ background: '#1a3a5c', padding: '12px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <img src={window.__resources?.logoLight ?? "brand/advvia-logo-horizontal-light.svg"} alt="" style={{ height: 22 }} />
        <span style={{ color: 'rgba(255,255,255,.25)', fontSize: 16 }}>|</span>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ color: '#fff', fontSize: 13, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Caso Lucas Fontes Teles Peixoto</div>
          <div style={{ color: 'rgba(255,255,255,.55)', fontSize: 11 }}>Medida cautelar · 4ª Câmara Cível</div>
        </div>
        <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(255,255,255,.18)', border: '1.5px solid rgba(255,255,255,.35)', color: '#fff', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>B</div>
      </div>
      {/* sub-nav */}
      <div style={{ background: '#fff', padding: '0 18px', borderBottom: '1.5px solid #c8d8e8', display: 'flex', gap: 4, height: 36, alignItems: 'center' }}>
        {['Timeline','Pendências','Processos','Arquivos'].map((n, i) => (
          <span key={n} style={{ padding: '8px 10px', fontSize: 11, fontWeight: i === 0 ? 700 : 500, color: i === 0 ? '#1a3a5c' : '#5a6470', borderBottom: i === 0 ? '2px solid #1a3a5c' : 'none' }}>{n}</span>
        ))}
      </div>
      {/* filter bar */}
      <div style={{ background: '#fff', padding: '8px 18px', borderBottom: '1.5px solid #c8d8e8', display: 'flex', gap: 6, alignItems: 'center' }}>
        <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.18em', color: '#5a6470' }}>FILTRAR:</span>
        <span style={{ background: '#1a3a5c', color: '#fff', fontSize: 10, fontWeight: 700, padding: '3px 9px', borderRadius: 16 }}>Todos</span>
        <span style={{ border: '1.5px solid #c8d8e8', color: '#3a4a5a', fontSize: 10, fontWeight: 500, padding: '3px 9px', borderRadius: 16 }}>Fatos</span>
        <span style={{ border: '1.5px solid #c8d8e8', color: '#3a4a5a', fontSize: 10, fontWeight: 500, padding: '3px 9px', borderRadius: 16 }}>Processuais</span>
      </div>
      {/* events */}
      <div style={{ padding: '20px 22px 26px', background: '#fafbfc' }}>
        <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.24em', color: '#5a6470', marginBottom: 14 }}>EVENTOS</div>
        <MiniEvent day="19" mon="MAR" code="EV-012" tag="Audiência" tint="#e8f4ee" tCol="#1a6040" title="Audiência de instrução e julgamento" desc="Designada pela 4ª Câmara. Oitiva das testemunhas." dot="#1a6040" />
        <MiniEvent day="12" mon="MAR" code="EV-011" tag="Decisão" tint="#fde8e6" tCol="#a93226" title="Decisão cautelar deferida" desc="Suspensão do ato impugnado." dot="#c0392b" highlight />
        <MiniEvent day="04" mon="MAR" code="EV-010" tag="Fato" tint="#e8f1f8" tCol="#2a5a8c" title="Intimação recebida" desc="Prazo de 15 dias para manifestação." dot="#1a3a5c" last />
      </div>
    </div>
  );
}

function MiniEvent({ day, mon, code, tag, tint, tCol, title, desc, dot, highlight, last }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '52px 18px 1fr', marginBottom: last ? 0 : 14 }}>
      <div style={{ paddingTop: 2 }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#1a3a5c', lineHeight: 1 }}>{day}</div>
        <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', color: '#5a6470', marginTop: 2 }}>{mon} 2026</div>
      </div>
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: 9, height: 9, borderRadius: '50%', background: dot, marginTop: 6, zIndex: 2, border: '2px solid #fafbfc' }} />
        {!last && <div style={{ position: 'absolute', top: 14, bottom: -14, width: 1.5, background: '#c8d8e8' }} />}
      </div>
      <div style={{
        background: '#fff',
        border: highlight ? '1.5px solid #c0392b' : '1.5px solid #c8d8e8',
        borderRadius: 6, padding: '10px 12px',
        boxShadow: highlight ? '0 2px 12px rgba(192,57,43,.12)' : 'none',
      }}>
        <div style={{ display: 'flex', gap: 5, marginBottom: 5 }}>
          <span style={{ background: tint, color: tCol, fontSize: 9, fontWeight: 700, padding: '1px 6px', borderRadius: 3, fontFamily: 'monospace', letterSpacing: '0.04em' }}>{code}</span>
          <span style={{ background: tint, color: tCol, fontSize: 9, fontWeight: 700, padding: '1px 6px', borderRadius: 3, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{tag}</span>
        </div>
        <div style={{ fontSize: 12, fontWeight: 600, color: '#1c2730', lineHeight: 1.3, marginBottom: 3 }}>{title}</div>
        <div style={{ fontSize: 11, fontWeight: 300, color: '#5a6470', lineHeight: 1.5 }}>{desc}</div>
      </div>
    </div>
  );
}

/* ============== Product showcase (4 surfaces preview) ============== */

function ProductScreenshot({ accent }) {
  return (
    <div style={{
      background: '#fff',
      border: '1.5px solid #c8d8e8',
      borderRadius: 12,
      padding: 24,
      boxShadow: '0 12px 36px rgba(20,40,60,.06)',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
        <SurfaceTile color="#1a3a5c" tint="#e8f1f8" name="Timeline" sample="EV-012 · Audiência" icon={<IconClock />} />
        <SurfaceTile color="#c46000" tint="#f7ede4" name="Pendências" sample="PD-007 · Em andamento" icon={<IconCheckCircle />} />
        <SurfaceTile color="#1a6040" tint="#e8f4ee" name="Processos" sample="PR-003 · 0700182-27" icon={<IconScale />} />
        <SurfaceTile color="#4a1a7a" tint="#f0e8f9" name="Arquivos" sample="42 documentos" icon={<IconFolder />} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 18, color: '#5a6470', fontSize: 13, fontWeight: 300, fontStyle: 'italic' }}>
        Tudo conectado: clique em um evento e veja sua pendência, processo e arquivos vinculados.
      </div>
    </div>
  );
}

function SurfaceTile({ color, tint, name, sample, icon }) {
  return (
    <div style={{ background: '#fafbfc', border: '1.5px solid #e6ecf2', borderRadius: 8, padding: 18, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ width: 36, height: 36, borderRadius: 8, background: tint, color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</div>
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color, textTransform: 'uppercase' }}>{name}</div>
        <div style={{ fontSize: 12, fontWeight: 300, color: '#5a6470', marginTop: 4, fontFamily: 'monospace' }}>{sample}</div>
      </div>
    </div>
  );
}

/* ============== Heroicons (outline, 1.5 stroke) ============== */
function IconClock() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>; }
function IconCheckCircle() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/></svg>; }
function IconScale() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 4v16M5 8h14M5 8l-2 6h4zm14 0l-2 6h4zM8 21h8"/></svg>; }
function IconFolder() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"/></svg>; }

/* ============== Styles ============== */

function v1Styles(C, pad) {
  return {
    page: { fontFamily: "'Source Sans 3', sans-serif", fontWeight: 300, color: '#1c2730', background: '#fafbfc', minHeight: '100%' },

    nav: { background: 'rgba(255,255,255,.92)', borderBottom: '1.5px solid #c8d8e8', position: 'sticky', top: 0, zIndex: 50 },
    navInner: { maxWidth: 1240, margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' },
    navLinks: { display: 'flex', gap: 20, flex: 1 },
    navLink: { fontSize: 14, fontWeight: 500, color: '#3a4a5a', cursor: 'pointer', textDecoration: 'none' },
    navRight: { display: 'flex', alignItems: 'center', gap: 16 },
    btnPrimary: { background: C.solid, color: '#fff', border: 'none', padding: '8px 16px', fontSize: 13, fontWeight: 600, borderRadius: 6, cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '0.02em' },

    hero: { padding: `${pad.hero}px 24px ${pad.hero + 20}px` },
    heroInner: { maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.05fr)', gap: 64, alignItems: 'center' },
    heroLeft: { display: 'flex', flexDirection: 'column', gap: 22 },
    heroRight: {},
    kicker: { fontSize: 12, fontWeight: 700, letterSpacing: '0.24em', color: C.solid, textTransform: 'uppercase' },
    h1: { fontFamily: "'Playfair Display', serif", fontSize: 'clamp(42px, 5vw, 68px)', fontWeight: 700, color: '#1c2730', lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0 },
    h1Em: { fontStyle: 'italic', color: C.solid, fontWeight: 700 },
    heroLead: { fontSize: 18, fontWeight: 300, color: '#2c3840', lineHeight: 1.65, margin: '6px 0 0', maxWidth: 540 },
    ctaRow: { display: 'flex', gap: 14, marginTop: 12, flexWrap: 'wrap' },
    btnPrimaryLg: { background: C.solid, color: '#fff', border: 'none', padding: '14px 28px', fontSize: 15, fontWeight: 600, borderRadius: 6, cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '0.02em', boxShadow: '0 4px 14px rgba(26,58,92,.18)' },
    btnGhostLg: { background: 'transparent', color: C.solid, border: '1.5px solid ' + C.solid, padding: '13px 26px', fontSize: 15, fontWeight: 600, borderRadius: 6, cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '0.02em' },
    proof: { display: 'flex', gap: 20, marginTop: 8, flexWrap: 'wrap' },
    proofItem: { fontSize: 13, fontWeight: 400, color: '#5a6470', display: 'flex', alignItems: 'center', gap: 8 },
    proofDot: { width: 6, height: 6, borderRadius: '50%', background: C.solid },

    product: { padding: `${pad.sec}px 24px ${pad.sec - 30}px`, background: '#fff', borderTop: '1.5px solid #e6ecf2', borderBottom: '1.5px solid #e6ecf2' },
    secInner: { maxWidth: 1240, margin: '0 auto' },
    secHead: { textAlign: 'center', maxWidth: 720, margin: '0 auto 56px', padding: '0 8px' },
    h2: { fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 700, color: '#1c2730', lineHeight: 1.15, letterSpacing: '-0.015em', margin: '12px 0 14px' },
    lead: { fontSize: 17, fontWeight: 300, color: '#2c3840', lineHeight: 1.65, margin: 0 },

    features: { padding: `${pad.sec}px 24px` },
    featGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 },

    how: { padding: `${pad.sec}px 24px`, background: '#fff', borderTop: '1.5px solid #e6ecf2', borderBottom: '1.5px solid #e6ecf2' },
    steps: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 28, marginTop: 20 },

    pricing: { padding: `${pad.sec}px 24px` },
    priceGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20, alignItems: 'stretch' },

    security: { padding: `${pad.sec}px 24px`, background: '#fff', borderTop: '1.5px solid #e6ecf2' },
    secRow: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 48, alignItems: 'center' },
    secLeft: {},
    secList: { padding: 0, margin: 0, listStyle: 'none' },

    finalCta: { background: '#1a3a5c', padding: `${pad.sec}px 24px`, color: '#fff' },
    finalCtaInner: { maxWidth: 800, margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, padding: '0 8px' },
    kickerLight: { fontSize: 12, fontWeight: 700, letterSpacing: '0.24em', color: 'rgba(255,255,255,.6)', textTransform: 'uppercase' },
    h2Light: { fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: '#fff', lineHeight: 1.15, letterSpacing: '-0.015em', margin: 0 },
    leadLight: { fontSize: 17, fontWeight: 300, color: 'rgba(255,255,255,.78)', lineHeight: 1.6, margin: 0 },
    btnInverseLg: { background: '#fff', color: C.solid, border: 'none', padding: '14px 28px', fontSize: 15, fontWeight: 600, borderRadius: 6, cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '0.02em' },
    btnGhostLgLight: { background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,.35)', padding: '13px 26px', fontSize: 15, fontWeight: 600, borderRadius: 6, cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '0.02em' },

    footer: { background: '#fafbfc', padding: '60px 24px 30px', borderTop: '1.5px solid #c8d8e8' },
    footInner: { maxWidth: 1240, margin: '0 auto' },
    footTop: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 40, paddingBottom: 40 },
    footBrand: {},
    footTag: { fontSize: 14, fontWeight: 300, color: '#5a6470', maxWidth: 320, marginTop: 14, lineHeight: 1.6 },
    footCols: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: 24 },
    footBot: { borderTop: '1.5px solid #e6ecf2', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, fontSize: 12, color: '#5a6470', fontWeight: 300 },
  };
}

window.LandingV1 = LandingV1;
