// Landing — Variação 2: EDITORIAL
// Pegada de jornal jurídico. Playfair em destaque. Régua, kicker, drop cap.
// Layout em colunas. Muito branco, navy e laranja como acentos editoriais.

function LandingV2({ density = 'comfortable', accent = 'navy', heroVariant = 'mockup', sections = {} }) {
  const C = {
    navy:    { solid: '#1a3a5c', tint: '#e8f1f8' },
    laranja: { solid: '#c46000', tint: '#f7ede4' },
    verde:   { solid: '#1a6040', tint: '#e8f4ee' },
  }[accent];
  const pad = density === 'compact' ? { sec: 80 } : { sec: 120 };
  const st = v2Styles(C, pad);

  const showHero = sections.hero !== false;
  const showProduct = sections.product !== false;
  const showFeatures = sections.features !== false;
  const showHow = sections.how !== false;
  const showPricing = sections.pricing !== false;
  const showSecurity = sections.security !== false;
  const showCta = sections.cta !== false;

  return (
    <div style={st.page}>
      {/* Masthead */}
      <header style={st.masthead}>
        <div style={st.mastheadInner}>
          <div style={st.mastTop}>
            <span style={st.mastDate}>SÃO PAULO · MAIO DE 2026</span>
            <span style={st.mastEdition}>EDIÇÃO PROFISSIONAL · Nº 01</span>
          </div>
          <div style={st.mastMid}>
            <img src={window.__resources?.logoBlue ?? "brand/advvia-logo-horizontal-blue.svg"} alt="Advvia" style={{ height: 32 }} />
            <nav style={st.mastNav}>
              <a style={st.mastNavLink}>PRODUTO</a>
              <a style={st.mastNavLink}>FUNCIONALIDADES</a>
              <a style={st.mastNavLink}>PREÇOS</a>
              <a style={st.mastNavLink}>SEGURANÇA</a>
              <a style={st.mastNavLink}>ENTRAR</a>
              <button style={st.btnPrimary}>Começar agora</button>
            </nav>
          </div>
          <div style={st.mastRule} />
          <div style={st.mastTagline}>
            Software jurídico — feito por advogados, para advogados que leem cada linha do processo.
          </div>
        </div>
      </header>

      {/* Hero — manchete + lead + linha fina */}
      {showHero && (
        <section style={st.hero}>
          <div style={st.heroInner}>
            <div style={st.kickerWrap}>
              <span style={st.kickerLine} />
              <span style={st.kicker}>MATÉRIA DE CAPA</span>
              <span style={st.kickerLine} />
            </div>
            <h1 style={st.h1}>
              Organização e <em style={st.h1Em}>comunicação inteligente</em><br/>entre o advogado e seu cliente.
            </h1>
            <div style={st.byline}>
              <span style={st.bylineText}>POR ADVVIA · TECNOLOGIA JURÍDICA</span>
            </div>

            <div style={st.heroBody}>
              <p style={st.dropP}>
                <span style={st.dropCap}>C</span>
                oloque em ordem o caos de planilhas, e-mails sem fim e mensagens de WhatsApp
                aleatórias — sem visão ampla do caso.
                <strong style={st.heroStrong}> Seu cliente terá visão clara de todos os processos, ações, atividades e documentação,</strong>
                não importa quantos estejam tramitando ao mesmo tempo.
              </p>
              <p style={st.heroP}>
                Advvia organiza fatos, decisões, prazos, petições e arquivos numa cronologia
                contínua — compartilhada com quem contratou. Cada evento entra com data, tipo
                e referência. Cada pendência aponta para a peça que precisa sair. Cada arquivo,
                para o evento que o gerou.
              </p>

              <div style={st.ctaRow}>
                <button style={st.btnPrimaryLg}>Começar agora</button>
                <button style={st.btnGhostLg}>Ver demonstração →</button>
                <span style={st.ctaSidenote}>14 dias grátis · sem cartão</span>
              </div>
            </div>

            {heroVariant !== 'text' && (
              <figure style={st.figure}>
                <HeroEditorialMockup />
                <figcaption style={st.figCap}>
                  <strong>FIG. 1 —</strong> Linha do tempo do "Caso Lucas Fontes Teles Peixoto", com
                  fatos (azul) e atos processuais (verde) em ordem cronológica decrescente.
                </figcaption>
              </figure>
            )}
          </div>
        </section>
      )}

      {/* Product showcase — quatro colunas estilo seções de jornal */}
      {showProduct && (
        <section style={st.product}>
          <div style={st.secInner}>
            <SecHead num="I." kicker="O PRODUTO" title="Quatro seções, um único caso." lead="Cada superfície resolve um problema diferente — e todas conversam." />
            <div style={st.fourCols}>
              <ColCard color="#1a3a5c" tint="#e8f1f8" name="TIMELINE" sample="Cronologia do caso" body="Eventos fatuais e processuais, com data, tipo, referência e destaque opcional para o que não pode passar." />
              <ColCard color="#c46000" tint="#f7ede4" name="PENDÊNCIAS" sample="Tarefas com prazo" body="Não é to-do. É prazo, vínculo e workflow. Aberta, em andamento, resolvida — com auditoria." />
              <ColCard color="#1a6040" tint="#e8f4ee" name="PROCESSOS" sample="Índice CNJ" body="Número, vara, status, partes. Vincule eventos e pendências ao processo certo, sem reescrever 20 vezes." />
              <ColCard color="#4a1a7a" tint="#f0e8f9" name="ARQUIVOS" sample="Biblioteca" body="Petições, decisões, anexos. Cada arquivo conectado ao evento que o gerou e à peça que ele resolve." />
            </div>
          </div>
        </section>
      )}

      {/* Features — modelo "anatomia" com índice numerado */}
      {showFeatures && (
        <section style={st.features}>
          <div style={st.secInner}>
            <SecHead num="II." kicker="ANATOMIA DO PRODUTO" title="Construído com vocabulário jurídico." lead="Não é um Trello pintado de azul. É uma ferramenta cuja gramática é a do processo civil brasileiro." />

            <div style={st.featList}>
              <EditFeat n="01" title="Eventos com tipo: fato ou processual" desc="Distinção visual e semântica entre o que aconteceu (fato) e o que foi praticado nos autos (processual). Filtre por tipo, marque destaques, ordene cronologicamente." />
              <EditFeat n="02" title="Códigos curtos auto-gerados" desc="Cada item recebe um código tabular: EV-012, PD-007, PR-003. Referencie em conversas, despachos e despachos sem ambiguidade. Tabular-nums em todo lugar." />
              <EditFeat n="03" title="Vínculos cruzados nativos" desc="Um evento pode ter pendências, processos e arquivos vinculados — não como tags soltas, mas como referências de primeira classe que aparecem nas duas pontas." />
              <EditFeat n="04" title="Cronologia em paper-feel" desc="Tipografia leve (Source Sans 3 weight 300), datas em Playfair, bordas frias 1.5px. Pensado para ser lido por horas sem fadiga." />
              <EditFeat n="05" title="API pública e exportação" desc="Sua planilha legada importa em CSV. Seus dados saem em JSON sempre que você quiser. Sem refém de plataforma." />
              <EditFeat n="06" title="PWA — funciona no celular" desc="Instalação sem App Store. Abre no metrô, no fórum, no carro do Uber a caminho da audiência." />
            </div>
          </div>
        </section>
      )}

      {/* How it works — espaço editorial com 4 passos numerados */}
      {showHow && (
        <section style={st.how}>
          <div style={st.secInner}>
            <SecHead num="III." kicker="MÉTODO" title="Do primeiro caso à audiência." lead="Quatro passos. Sem onboarding de uma semana." />
            <div style={st.steps}>
              <EditStep n="01" title="Crie o caso" desc="Título, descrição, partes envolvidas. Em menos de um minuto." />
              <EditStep n="02" title="Adicione eventos" desc="Cada fato e movimento processual entra com data, tipo e referência ao número CNJ." />
              <EditStep n="03" title="Vincule peças e prazos" desc="Petições, decisões, pendências — tudo linkado ao evento certo." />
              <EditStep n="04" title="Releia antes da audiência" desc="A timeline inteira em uma única tela. Sem caçar email às 23h." />
            </div>
          </div>
        </section>
      )}

      {/* Pricing — tabela editorial */}
      {showPricing && (
        <section style={st.pricing}>
          <div style={st.secInner}>
            <SecHead num="IV." kicker="PLANOS" title="Preços diretos, sem letra miúda." lead="Cancele quando quiser. Migração de dados gratuita em todos os planos." />

            <div style={st.priceTable}>
              <EditPrice tier="SOLO" price="R$ 49" desc="Pra advogados autônomos." features={['Até 25 casos ativos', 'Timeline completa', 'Pendências e arquivos', 'Suporte por email']} cta="Começar" />
              <EditPrice tier="ESCRITÓRIO" price="R$ 129" desc="Pra times pequenos e médios." features={['Casos ilimitados', 'Até 5 advogados', 'Permissões por caso', 'Histórico de auditoria', 'Suporte prioritário']} cta="Começar" featured />
              <EditPrice tier="BANCA" price="Sob consulta" desc="Pra escritórios grandes." features={['Tudo do Escritório', 'Usuários ilimitados', 'SSO e LGPD assistida', 'SLA dedicado', 'On-boarding com gerente']} cta="Falar com vendas" />
            </div>
          </div>
        </section>
      )}

      {/* Security — coluna editorial */}
      {showSecurity && (
        <section style={st.security}>
          <div style={st.secInner}>
            <SecHead num="V." kicker="SEGURANÇA E LGPD" title="Dados sob sigilo profissional." lead="" />
            <div style={st.secGrid}>
              <p style={st.secP}>
                <strong>Hospedagem em servidores no Brasil.</strong> A infraestrutura roda em
                AWS São Paulo (sa-east-1). Criptografia em trânsito (TLS 1.3) e em repouso
                (AES-256). Backup diário com retenção de 30 dias. Logs de auditoria por usuário
                e por caso.
              </p>
              <p style={st.secP}>
                <strong>DPO designado e processo formalizado.</strong> Atendemos requisições
                de titulares (acesso, retificação, eliminação) em até 15 dias. Acordo de
                processamento de dados (DPA) sob solicitação. 2FA obrigatório no plano
                Escritório+.
              </p>
              <ul style={st.secBadges}>
                <li style={st.secBadge}>AWS São Paulo (sa-east-1)</li>
                <li style={st.secBadge}>TLS 1.3 / AES-256</li>
                <li style={st.secBadge}>LGPD-ready · DPO</li>
                <li style={st.secBadge}>2FA obrigatório (Escritório+)</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      {showCta && (
        <section style={st.finalCta}>
          <div style={st.finalCtaInner}>
            <span style={st.kickerWhite}>FIM DA EDIÇÃO</span>
            <h2 style={st.finalH2}>O caso inteiro, <em style={st.finalEm}>compartilhado</em>.</h2>
            <p style={st.finalLead}>14 dias grátis. Sem cartão de crédito. Migração assistida.</p>
            <div style={st.ctaRow}>
              <button style={st.btnInverseLg}>Começar agora</button>
              <button style={st.btnGhostLgLight}>Falar com vendas</button>
            </div>
          </div>
        </section>
      )}

      <footer style={st.footer}>
        <div style={st.footInner}>
          <div style={st.footTop}>
            <div>
              <img src={window.__resources?.logoBlue ?? "brand/advvia-logo-horizontal-blue.svg"} alt="Advvia" style={{ height: 26 }} />
              <p style={st.footTag}>Software jurídico — feito por advogados, para advogados.</p>
            </div>
            <FootCol2 title="PRODUTO" links={['Timeline','Pendências','Processos','Arquivos']} />
            <FootCol2 title="EMPRESA" links={['Sobre','Blog','Carreiras','Contato']} />
            <FootCol2 title="LEGAL" links={['Termos','Privacidade','LGPD','DPA']} />
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

function SecHead({ num, kicker, title, lead }) {
  const st = {
    wrap: { display: 'grid', gridTemplateColumns: '120px 1fr', gap: 32, marginBottom: 56, alignItems: 'flex-start' },
    num: { fontFamily: "'Playfair Display', serif", fontSize: 56, fontWeight: 700, color: '#c46000', lineHeight: 1, fontStyle: 'italic', letterSpacing: '-0.02em' },
    body: {},
    kicker: { fontSize: 11, fontWeight: 700, letterSpacing: '0.28em', color: '#5a6470', textTransform: 'uppercase', marginBottom: 8 },
    title: { fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: 700, color: '#1c2730', lineHeight: 1.12, letterSpacing: '-0.015em', margin: '0 0 14px' },
    lead: { fontSize: 18, fontWeight: 300, color: '#2c3840', lineHeight: 1.65, margin: 0, maxWidth: 680, fontStyle: 'italic' },
  };
  return (
    <div style={st.wrap}>
      <div style={st.num}>{num}</div>
      <div style={st.body}>
        <div style={st.kicker}>{kicker}</div>
        <h2 style={st.title}>{title}</h2>
        {lead && <p style={st.lead}>{lead}</p>}
      </div>
    </div>
  );
}

function ColCard({ color, tint, name, sample, body }) {
  return (
    <div style={{ borderTop: '3px solid ' + color, paddingTop: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.24em', color, textTransform: 'uppercase' }}>{name}</div>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#1c2730', lineHeight: 1.25 }}>{sample}</div>
      <p style={{ fontSize: 15, fontWeight: 300, color: '#2c3840', lineHeight: 1.65, margin: 0 }}>{body}</p>
    </div>
  );
}

function EditFeat({ n, title, desc }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '70px 1fr', gap: 28, padding: '24px 0', borderTop: '1.5px solid #c8d8e8' }}>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: '#1a3a5c', lineHeight: 1, fontStyle: 'italic' }}>{n}</div>
      <div>
        <h3 style={{ fontSize: 20, fontWeight: 600, color: '#1c2730', margin: '0 0 8px', lineHeight: 1.3 }}>{title}</h3>
        <p style={{ fontSize: 16, fontWeight: 300, color: '#2c3840', lineHeight: 1.65, margin: 0, maxWidth: 720 }}>{desc}</p>
      </div>
    </div>
  );
}

function EditStep({ n, title, desc }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '0 12px', borderLeft: '1.5px solid #c8d8e8' }}>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: '#c46000', lineHeight: 1, fontStyle: 'italic' }}>{n}</div>
      <h3 style={{ fontSize: 18, fontWeight: 600, color: '#1c2730', margin: 0 }}>{title}</h3>
      <p style={{ fontSize: 15, fontWeight: 300, color: '#2c3840', lineHeight: 1.6, margin: 0 }}>{desc}</p>
    </div>
  );
}

function EditPrice({ tier, price, desc, features, cta, featured }) {
  const st = {
    card: { padding: '36px 32px 32px', borderTop: featured ? '4px solid #c46000' : '1.5px solid #c8d8e8', borderBottom: featured ? 'none' : '1.5px solid #c8d8e8', borderLeft: featured ? '1.5px solid #c8d8e8' : 'none', borderRight: featured ? '1.5px solid #c8d8e8' : 'none', background: featured ? '#fff' : 'transparent', display: 'flex', flexDirection: 'column', gap: 18, position: 'relative', boxShadow: featured ? '0 12px 36px rgba(196,96,0,.12)' : 'none' },
    tier: { fontSize: 11, fontWeight: 700, letterSpacing: '0.28em', color: featured ? '#c46000' : '#5a6470', textTransform: 'uppercase' },
    price: { fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 700, color: '#1a3a5c', lineHeight: 1, letterSpacing: '-0.01em' },
    permo: { fontSize: 13, fontWeight: 300, color: '#5a6470', marginLeft: 6 },
    desc: { fontSize: 15, fontWeight: 300, fontStyle: 'italic', color: '#5a6470', margin: 0 },
    feats: { padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 },
    feat: { fontSize: 14, fontWeight: 300, color: '#2c3840', padding: '10px 0', borderTop: '1px solid #e6ecf2', display: 'flex', gap: 10 },
    cta: { marginTop: 12, padding: '12px 18px', fontSize: 14, fontWeight: 600, letterSpacing: '0.04em', borderRadius: 6, cursor: 'pointer', fontFamily: 'inherit', background: featured ? '#c46000' : 'transparent', color: featured ? '#fff' : '#1a3a5c', border: featured ? 'none' : '1.5px solid #1a3a5c' },
    badge: { position: 'absolute', top: -14, left: 32, background: '#c46000', color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', padding: '5px 10px', textTransform: 'uppercase' },
  };
  const isCustom = price.toLowerCase().includes('consulta');
  return (
    <div style={st.card}>
      {featured && <span style={st.badge}>Recomendado</span>}
      <div style={st.tier}>{tier}</div>
      <div>
        <span style={st.price}>{price}</span>
        {!isCustom && <span style={st.permo}>/ mês</span>}
      </div>
      <p style={st.desc}>{desc}</p>
      <ul style={st.feats}>
        {features.map((f, i) => (
          <li key={f} style={{ ...st.feat, borderTop: i === 0 ? '1px solid #e6ecf2' : '1px solid #e6ecf2' }}>
            <span style={{ color: '#c46000', fontWeight: 700 }}>↳</span>
            {f}
          </li>
        ))}
      </ul>
      <button style={st.cta}>{cta}</button>
    </div>
  );
}

function FootCol2({ title, links }) {
  return (
    <div>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.24em', color: '#5a6470', marginBottom: 14, textTransform: 'uppercase' }}>{title}</div>
      <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
        {links.map((l) => <li key={l} style={{ fontSize: 14, fontWeight: 300, color: '#2c3840', cursor: 'pointer' }}>{l}</li>)}
      </ul>
    </div>
  );
}

function HeroEditorialMockup() {
  return (
    <div style={{ background: '#fff', border: '1.5px solid #c8d8e8', padding: 28, position: 'relative' }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.26em', color: '#5a6470', marginBottom: 18, textTransform: 'uppercase' }}>EVENTOS · CASO LUCAS FONTES TELES PEIXOTO</div>
      <MiniEvent2 day="19" mon="MAR 2026" code="EV-012" tag="AUDIÊNCIA" tCol="#1a6040" title="Audiência de instrução e julgamento" desc="Designada pela 4ª Câmara Cível. Oitiva das testemunhas arroladas pela parte autora." />
      <MiniEvent2 day="12" mon="MAR 2026" code="EV-011" tag="DECISÃO" tCol="#a93226" title="Decisão cautelar deferida" desc="O juízo deferiu a medida cautelar pleiteada em sede de agravo, suspendendo o ato impugnado." highlight />
      <MiniEvent2 day="04" mon="MAR 2026" code="EV-010" tag="FATO" tCol="#2a5a8c" title="Intimação recebida" desc="Prazo de 15 dias corridos para manifestação." last />
    </div>
  );
}

function MiniEvent2({ day, mon, code, tag, tCol, title, desc, highlight, last }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 20, padding: '18px 0', borderTop: '1.5px solid #e6ecf2' }}>
      <div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: '#1a3a5c', lineHeight: 1 }}>{day}</div>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: '#5a6470', marginTop: 4 }}>{mon}</div>
      </div>
      <div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
          <span style={{ fontFamily: 'monospace', fontSize: 10, fontWeight: 700, color: tCol, letterSpacing: '0.06em' }}>{code}</span>
          <span style={{ fontSize: 10, fontWeight: 700, color: tCol, letterSpacing: '0.16em' }}>{tag}</span>
          {highlight && <span style={{ fontSize: 10, fontWeight: 700, color: '#c0392b', letterSpacing: '0.1em' }}>★ DESTAQUE</span>}
        </div>
        <div style={{ fontSize: 16, fontWeight: 600, color: '#1c2730', lineHeight: 1.3, marginBottom: 4 }}>{title}</div>
        <div style={{ fontSize: 14, fontWeight: 300, fontStyle: 'italic', color: '#5a6470', lineHeight: 1.5 }}>{desc}</div>
      </div>
    </div>
  );
}

function v2Styles(C, pad) {
  return {
    page: { fontFamily: "'Source Sans 3', sans-serif", fontWeight: 300, color: '#1c2730', background: '#faf8f4', minHeight: '100%' },

    masthead: { background: '#faf8f4', borderBottom: '3px double #1a3a5c', padding: '20px 32px 18px' },
    mastheadInner: { maxWidth: 1240, margin: '0 auto' },
    mastTop: { display: 'flex', justifyContent: 'space-between', fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', color: '#5a6470', textTransform: 'uppercase', marginBottom: 12 },
    mastDate: {},
    mastEdition: {},
    mastMid: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 },
    mastNav: { display: 'flex', alignItems: 'center', gap: 24 },
    mastNavLink: { fontSize: 12, fontWeight: 700, letterSpacing: '0.16em', color: '#1c2730', cursor: 'pointer' },
    btnPrimary: { background: '#1a3a5c', color: '#fff', border: 'none', padding: '9px 18px', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', borderRadius: 4, cursor: 'pointer', fontFamily: 'inherit', textTransform: 'uppercase' },
    mastRule: { borderTop: '1px solid #c8d8e8', marginTop: 14 },
    mastTagline: { fontFamily: "'Playfair Display', serif", fontSize: 14, fontStyle: 'italic', color: '#5a6470', marginTop: 8, textAlign: 'center' },

    hero: { padding: `${pad.sec - 30}px 32px ${pad.sec}px` },
    heroInner: { maxWidth: 1080, margin: '0 auto', textAlign: 'center' },
    kickerWrap: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 28 },
    kickerLine: { display: 'block', width: 60, height: 1, background: '#c46000' },
    kicker: { fontSize: 11, fontWeight: 700, letterSpacing: '0.32em', color: '#c46000', textTransform: 'uppercase' },
    h1: { fontFamily: "'Playfair Display', serif", fontSize: 84, fontWeight: 700, color: '#1c2730', lineHeight: 1.02, letterSpacing: '-0.025em', margin: 0 },
    h1Em: { fontStyle: 'italic', color: '#1a3a5c', fontWeight: 700 },
    byline: { marginTop: 22, marginBottom: 38 },
    bylineText: { fontSize: 11, fontWeight: 700, letterSpacing: '0.28em', color: '#5a6470' },

    heroBody: { maxWidth: 720, margin: '0 auto', textAlign: 'left' },
    dropP: { fontSize: 18, fontWeight: 300, color: '#1c2730', lineHeight: 1.7, margin: 0 },
    dropCap: { fontFamily: "'Playfair Display', serif", fontSize: 78, fontWeight: 700, color: '#1a3a5c', float: 'left', lineHeight: 0.85, paddingTop: 8, paddingRight: 12, marginBottom: -8 },
    heroStrong: { fontWeight: 600, color: '#1a3a5c' },
    heroP: { fontSize: 18, fontWeight: 300, color: '#1c2730', lineHeight: 1.7, margin: '20px 0 0' },
    ctaRow: { display: 'flex', gap: 14, marginTop: 32, alignItems: 'center', flexWrap: 'wrap' },
    btnPrimaryLg: { background: '#1a3a5c', color: '#fff', border: 'none', padding: '14px 28px', fontSize: 13, fontWeight: 700, borderRadius: 4, cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '0.12em', textTransform: 'uppercase' },
    btnGhostLg: { background: 'transparent', color: '#1a3a5c', border: '1.5px solid #1a3a5c', padding: '13px 26px', fontSize: 13, fontWeight: 700, borderRadius: 4, cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '0.12em', textTransform: 'uppercase' },
    ctaSidenote: { fontSize: 13, fontStyle: 'italic', color: '#5a6470', fontWeight: 300 },

    figure: { maxWidth: 980, margin: '64px auto 0', textAlign: 'left' },
    figCap: { fontSize: 13, color: '#5a6470', marginTop: 14, fontStyle: 'italic', fontWeight: 300, textAlign: 'center', maxWidth: 640, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.55 },

    product: { padding: `${pad.sec}px 32px`, borderTop: '1.5px solid #c8d8e8' },
    secInner: { maxWidth: 1240, margin: '0 auto' },
    fourCols: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28 },

    features: { padding: `${pad.sec}px 32px`, borderTop: '1.5px solid #c8d8e8' },
    featList: { borderBottom: '1.5px solid #c8d8e8' },

    how: { padding: `${pad.sec}px 32px`, background: '#1a3a5c', color: '#fff' },
    steps: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28, marginTop: 8 },

    pricing: { padding: `${pad.sec}px 32px`, borderTop: '1.5px solid #c8d8e8' },
    priceTable: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, marginTop: 12 },

    security: { padding: `${pad.sec}px 32px`, borderTop: '1.5px solid #c8d8e8' },
    secGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'flex-start' },
    secP: { fontSize: 17, fontWeight: 300, color: '#2c3840', lineHeight: 1.7, margin: 0 },
    secBadges: { padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: 8, gridColumn: '1 / -1', marginTop: 16 },
    secBadge: { fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', color: '#1a6040', textTransform: 'uppercase', border: '1.5px solid #1a6040', padding: '6px 14px', borderRadius: 50 },

    finalCta: { background: '#1a3a5c', padding: `${pad.sec}px 32px`, color: '#fff', borderTop: '3px double rgba(255,255,255,.3)' },
    finalCtaInner: { maxWidth: 800, margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 },
    kickerWhite: { fontSize: 11, fontWeight: 700, letterSpacing: '0.32em', color: 'rgba(255,255,255,.6)', textTransform: 'uppercase' },
    finalH2: { fontFamily: "'Playfair Display', serif", fontSize: 56, fontWeight: 700, color: '#fff', lineHeight: 1.12, letterSpacing: '-0.02em', margin: 0 },
    finalEm: { fontStyle: 'italic', color: '#f7ede4' },
    finalLead: { fontSize: 17, fontWeight: 300, color: 'rgba(255,255,255,.78)', lineHeight: 1.6, margin: 0 },
    btnInverseLg: { background: '#fff', color: '#1a3a5c', border: 'none', padding: '14px 28px', fontSize: 13, fontWeight: 700, borderRadius: 4, cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '0.12em', textTransform: 'uppercase' },
    btnGhostLgLight: { background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,.4)', padding: '13px 26px', fontSize: 13, fontWeight: 700, borderRadius: 4, cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '0.12em', textTransform: 'uppercase' },

    footer: { background: '#faf8f4', padding: '60px 32px 30px', borderTop: '3px double #1a3a5c' },
    footInner: { maxWidth: 1240, margin: '0 auto' },
    footTop: { display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40, paddingBottom: 36 },
    footTag: { fontSize: 13, fontStyle: 'italic', fontWeight: 300, color: '#5a6470', maxWidth: 280, marginTop: 14, lineHeight: 1.6 },
    footBot: { borderTop: '1px solid #c8d8e8', paddingTop: 24, display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#5a6470', fontWeight: 300 },
  };
}

window.LandingV2 = LandingV2;
