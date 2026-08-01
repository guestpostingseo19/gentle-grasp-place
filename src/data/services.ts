export type Service = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  whatYouGet: { title: string; body: string }[];
  process: { step: string; title: string; body: string }[];
  idealFor: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "guest-posting",
    name: "Guest Posting",
    tagline: "Editorial placements on sites people actually read",
    summary:
      "Researched, written and placed guest articles on relevant publications with real audiences and clean link profiles.",
    metaTitle: "Guest Posting Services That Earn Real Editorial Links",
    metaDescription:
      "Guest posting services from RankBridge: hand-vetted publications, original guest post outreach and contextual editorial links. See what is included and what it costs.",
    intro: [
      "Guest posting is still the most durable way to earn contextual links, because it trades value for value: you give an editor a genuinely useful article, and their readers give you attention and a citation.",
      "Our guest post service covers the whole chain — prospecting, guest post outreach, writing, editing and placement — so guest blogging becomes a repeatable channel instead of a one-off favour.",
      "RankBridge runs guest posting as an editorial programme rather than a volume game. Every publication is vetted by hand for topical relevance, organic visibility and outbound-link hygiene before a single pitch is sent.",
      "The result is a link profile that reads like the natural footprint of a company people talk about — because that is exactly what it is.",
    ],
    whatYouGet: [
      {
        title: "Hand-vetted publication shortlist",
        body: "Before writing begins you receive a shortlist with domain, topical category, organic traffic band, and the reason each site fits your niche. Nothing is placed without your approval.",
      },
      {
        title: "Original, editor-ready writing",
        body: "Articles are written by subject-matter writers to the host publication's style guide — no spun text, no thin filler, no recycled drafts. Typically 1,000–1,600 words with original framing.",
      },
      {
        title: "Contextual, in-body placement",
        body: "Your link sits inside the argument of the article where it earns the click, not stranded in an author bio or a footer block.",
      },
      {
        title: "Anchor text strategy",
        body: "A balanced mix of branded, partial-match and natural-language anchors, mapped to your target pages and planned across the whole campaign rather than page by page.",
      },
      {
        title: "Live URL reporting",
        body: "Each month you receive a report with live URLs, publication metrics, anchor used, target page and placement date — everything you need for your own audit trail.",
      },
      {
        title: "Placement assurance",
        body: "If a live placement is removed within twelve months for reasons inside our control, we replace it on an equivalent publication at no additional cost.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery and mapping",
        body: "We review your site, current backlink profile, priority pages and competitors, then map which topics and publication categories will move the needle.",
      },
      {
        step: "02",
        title: "Prospecting and vetting",
        body: "Publications are sourced through manual research and long-standing editor relationships, then filtered on relevance, traffic trend and outbound-link quality.",
      },
      {
        step: "03",
        title: "Pitching and approval",
        body: "We pitch angles editors actually want. You approve the site list and the article briefs before anything is written.",
      },
      {
        step: "04",
        title: "Writing and editing",
        body: "A specialist writer drafts the piece, an editor reviews it against the host's guidelines, and you get a chance to review before submission.",
      },
      {
        step: "05",
        title: "Placement and reporting",
        body: "The article goes live, we verify indexation and link attributes, and the placement lands in your monthly report.",
      },
    ],
    idealFor: [
      "SaaS and B2B brands building topical authority",
      "E-commerce stores strengthening category pages",
      "Agencies who need reliable white-label fulfilment",
      "Startups establishing a credible first link profile",
    ],
    faqs: [
      {
        q: "How many placements should I start with?",
        a: "Most brands see meaningful movement with a steady cadence of four to ten placements a month sustained over two quarters. A single burst rarely holds; consistency does.",
      },
      {
        q: "Do you write the articles or do I?",
        a: "We write by default, with your input on angles and messaging. If you have an in-house content team, we can place your drafts instead.",
      },
      {
        q: "Are links dofollow?",
        a: "We target in-body dofollow placements. Where a publication's policy differs, we tell you before placement rather than after.",
      },
      {
        q: "How long until I see results?",
        a: "Indexation usually happens within days. Ranking movement typically becomes visible between eight and sixteen weeks, depending on competition and the strength of the target page.",
      },
      {
        q: "What is a guest posting service, exactly?",
        a: "A guest posting service researches relevant publications, pitches an editor an article idea, writes the piece to that publication's standard, and places a contextual link to your site inside it. The deliverable is a live, editorially approved article — not a directory listing or a paid banner.",
      },
      {
        q: "How much do guest posting services cost?",
        a: "Price tracks the publication, not the word count. Most programmes sit between a few hundred pounds per placement on strong niche publications and considerably more for national or trade titles. We quote per shortlist, so you approve the cost before anything is written.",
      },
      {
        q: "Is guest blogging still good for SEO?",
        a: "Yes, when the article is genuinely useful and the publication has real readers. What no longer works is bulk guest blogging on sites with no audience — exactly the inventory we refuse to touch.",
      },
    ],
  },
  {
    slug: "link-building",
    name: "Link Building",
    tagline: "A managed authority programme, not a list of URLs",
    summary:
      "Full-service link acquisition combining outreach, digital PR and editorial placement, planned around your commercial pages.",
    metaTitle: "Link Building Services | Managed Packages & Pricing",
    metaDescription:
      "Manual link building services with transparent packages and pricing: competitor gap analysis, editorial placements, white label delivery and monthly reporting.",
    intro: [
      "Search engines still treat links as votes, but they have become far better at reading intent. A link from a page nobody visits, on a site with no topical footprint, carries almost nothing.",
      "Our managed link building programme starts from your commercial goals and works backwards: which pages need to rank, what authority gap separates them from the current top three, and what mix of placements closes that gap credibly.",
      "You get a plan, a cadence, and a monthly record of exactly what was earned and why.",
      "We run SaaS link building, B2B link building and e-commerce link building programmes, plus white label link building for agencies who need fulfilment under their own brand.",
    ],
    whatYouGet: [
      {
        title: "Competitor link gap analysis",
        body: "We map the referring domains your top three competitors share and you lack, then prioritise the ones that are realistically winnable.",
      },
      {
        title: "Target page prioritisation",
        body: "Authority is directed at the pages that generate revenue, with internal link recommendations so equity flows onward through your site.",
      },
      {
        title: "Multi-channel acquisition",
        body: "Guest placements, resource inclusions, expert commentary, statistics citations and digital PR — blended so no single pattern dominates your profile.",
      },
      {
        title: "Velocity planning",
        body: "Link acquisition is paced to look like organic growth, which protects newer domains from an unnaturally sharp spike.",
      },
      {
        title: "Anchor and attribute control",
        body: "Every anchor is logged and balanced across the campaign, with attribute checks on each live link.",
      },
      {
        title: "Transparent monthly reporting",
        body: "Live URLs, metrics, anchors and target pages, alongside movement on the keywords the programme is designed to lift.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audit",
        body: "We review your existing profile for gaps, risks and quick wins, and benchmark it against direct competitors.",
      },
      {
        step: "02",
        title: "Strategy",
        body: "You receive a written plan: target pages, anchor distribution, monthly volume, publication categories and expected timeline.",
      },
      {
        step: "03",
        title: "Outreach",
        body: "Manual, personalised outreach from named team members to real editors. No scraped blast sequences.",
      },
      {
        step: "04",
        title: "Placement",
        body: "Content is produced, approved and published, then verified for indexation and link attributes.",
      },
      {
        step: "05",
        title: "Measure and adjust",
        body: "Monthly review of rankings, referring domains and traffic, with the next month's plan adjusted on the evidence.",
      },
    ],
    idealFor: [
      "Brands competing in high-difficulty search verticals",
      "Sites with strong content but thin authority",
      "In-house teams that need outreach capacity",
      "Businesses recovering from an unbalanced legacy profile",
    ],
    faqs: [
      {
        q: "Do you guarantee rankings?",
        a: "No responsible provider can. We guarantee the work, the quality standard and the reporting; rankings follow from consistent execution alongside your own site and content quality.",
      },
      {
        q: "What is a realistic monthly volume?",
        a: "Between five and thirty referring domains a month depending on niche difficulty and budget. We would rather place fewer strong links than many weak ones.",
      },
      {
        q: "Can you work alongside our existing agency?",
        a: "Frequently. We slot in as the acquisition arm while your agency owns on-page and technical work, sharing reporting so nothing is duplicated.",
      },
      {
        q: "How is your link building pricing structured?",
        a: "Per placement, not per report. Each shortlist shows the publication, the expected cost and the reason it fits, so you approve spend before outreach begins. A monthly retainer simply fixes the cadence and reporting rhythm around that.",
      },
      {
        q: "Do you offer link building packages by volume?",
        a: "We offer cadence tiers rather than fixed bundles, because a good month in a narrow niche looks different from a good month in a broad one. Most programmes run four to twelve editorial placements a month.",
      },
      {
        q: "Do you provide white label link building for agencies?",
        a: "Yes. Reporting can be delivered unbranded or inside your own template, and we never contact your client directly.",
      },
      {
        q: "What makes manual link building different from buying links?",
        a: "Manual link building earns a placement by giving a publisher something their audience wants. Bought links skip that step, which is precisely what makes them detectable and fragile.",
      },
    ],
  },
  {
    slug: "niche-edits",
    name: "Niche Edits",
    tagline: "Links inserted into content that already ranks",
    summary:
      "Placements added to established, indexed articles that already hold traffic and topical trust — faster to earn, quicker to count.",
    metaTitle: "Niche Edits & Link Insertion Service | Contextual Backlinks",
    metaDescription:
      "A link insertion service that places contextual backlinks inside aged, already-indexed articles with real traffic. Editor-approved niche edits, fully reported.",
    intro: [
      "A niche edit — also called a curated link, contextual backlink or link insertion — places your citation inside an article that has already been indexed, aged and, ideally, is already ranking.",
      "The advantage is speed and inherited trust: the host page has crawl history, internal links and often live traffic on day one, so the placement is discovered and valued faster than a brand-new post.",
      "The risk is that the tactic is easy to do badly. We only pursue edits where the insertion genuinely improves the article for its reader, and where the editor approves the change on the record.",
    ],
    whatYouGet: [
      {
        title: "Relevance-first page selection",
        body: "We identify pages whose existing topic makes your link a natural addition, not a bolt-on sentence that reads like an advert.",
      },
      {
        title: "Editor-approved insertions",
        body: "Every edit is negotiated with the site owner or editor. Nothing is placed through back doors or expired-domain networks.",
      },
      {
        title: "Traffic-verified host pages",
        body: "We prioritise host articles with measurable organic visibility, so the link can pass referral value as well as authority.",
      },
      {
        title: "Sentence-level copywriting",
        body: "Our writers craft the surrounding sentence or short paragraph so the citation flows with the original author's voice.",
      },
      {
        title: "Permanence checks",
        body: "Placements are re-verified periodically. If a link is removed within twelve months, we replace it.",
      },
      {
        title: "Full disclosure reporting",
        body: "Host URL, publication date of the original article, traffic band, anchor and target page — all documented.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Brief",
        body: "You share target pages, preferred anchors and any publications to avoid.",
      },
      {
        step: "02",
        title: "Prospecting",
        body: "We shortlist indexed articles that are topically adjacent and hold real search visibility.",
      },
      {
        step: "03",
        title: "Approval",
        body: "You confirm the shortlist. Nothing proceeds without your sign-off.",
      },
      {
        step: "04",
        title: "Negotiation and insertion",
        body: "We agree the edit with the editor, supply the copy, and confirm the change is live.",
      },
      {
        step: "05",
        title: "Verification",
        body: "Attribute, indexation and placement checks, followed by reporting.",
      },
    ],
    idealFor: [
      "Campaigns that need faster indexation than new posts allow",
      "Supporting a page that is stuck on the second results page",
      "Diversifying a profile dominated by one placement type",
      "Reinforcing seasonal pages ahead of a peak",
    ],
    faqs: [
      {
        q: "How are niche edits different from guest posts?",
        a: "A guest post creates a new article; a niche edit adds your citation to an existing one. Edits are faster and inherit the host page's history, while guest posts give you full control of the surrounding content.",
      },
      {
        q: "Is the tactic safe?",
        a: "It is safe when the host site is legitimate, the editor consents and the insertion is genuinely relevant. Those three conditions are non-negotiable in our process.",
      },
      {
        q: "How quickly do edits take effect?",
        a: "Because the page is already indexed, recrawl often happens within one to three weeks.",
      },
      {
        q: "Niche edits vs guest posts — which should I choose?",
        a: "Niche edits inherit an aged page's crawl history and traffic, so they tend to register faster and cost less per placement. Guest posts give you full control of the narrative, the anchor context and the target page. Most healthy profiles use both, weighted towards guest posts.",
      },
      {
        q: "Are contextual backlinks safe?",
        a: "A contextual backlink is only as safe as the page hosting it. We insist on topical relevance, a real traffic history, sane outbound-link counts and editorial approval on the record — the four things that separate a durable insertion from a footprint.",
      },
    ],
  },
  {
    slug: "blogger-outreach",
    name: "Blogger Outreach",
    tagline: "Real relationships with people who have real audiences",
    summary:
      "Personalised outreach to independent publishers, creators and niche bloggers who influence buying decisions in your category.",
    metaTitle: "Blogger Outreach Services | Personalised Creator Outreach",
    metaDescription:
      "Blogger outreach services built on real relationships: manual prospecting, personalised pitching and SEO outreach that earns coverage from creators with engaged audiences.",
    intro: [
      "Independent publishers punch far above their domain metrics. Their readers subscribe, comment, and buy — which is precisely why a mention from them tends to outperform a placement on a larger, more generic site.",
      "Our blogger outreach programme is relationship-led. We research who genuinely covers your category, learn what their audience responds to, and approach them with something worth their time.",
      "No templates sent to ten thousand addresses. Every message is written by a person who has read the blog.",
    ],
    whatYouGet: [
      {
        title: "Audience-fit prospecting",
        body: "We profile publishers by audience overlap and engagement, not just by domain score, so coverage reaches people who could actually become customers.",
      },
      {
        title: "Personalised pitching",
        body: "Each pitch references the publisher's own work and proposes a specific, useful angle.",
      },
      {
        title: "Content collaboration",
        body: "Reviews, interviews, expert roundups, tutorials and case studies — the format is chosen to suit the publisher's usual output.",
      },
      {
        title: "Relationship continuity",
        body: "Publishers who work well with your brand are kept warm for future campaigns rather than burned on a single ask.",
      },
      {
        title: "Compliance-aware coverage",
        body: "Where a relationship involves compensation, we follow the publisher's disclosure requirements without exception.",
      },
      {
        title: "Coverage reporting",
        body: "Live coverage, audience notes, social amplification and links, delivered monthly.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Category research",
        body: "We map the publishers, newsletters and creators who shape opinion in your niche.",
      },
      {
        step: "02",
        title: "Qualification",
        body: "Each prospect is scored on relevance, engagement, publishing consistency and audience quality.",
      },
      {
        step: "03",
        title: "Personal outreach",
        body: "Named team members reach out individually with a tailored angle.",
      },
      {
        step: "04",
        title: "Collaboration",
        body: "We support the publisher with information, assets or drafts, depending on how they prefer to work.",
      },
      {
        step: "05",
        title: "Amplify and report",
        body: "Coverage is verified, shared with you, and logged in the monthly report.",
      },
    ],
    idealFor: [
      "Consumer brands wanting audience reach alongside links",
      "Product launches that benefit from hands-on reviews",
      "Niches where independent voices drive purchase decisions",
      "Brands building a long-term publisher network",
    ],
    faqs: [
      {
        q: "Do you use influencer marketplaces?",
        a: "No. We approach publishers directly, which produces better placements and keeps the relationship with your brand rather than a platform.",
      },
      {
        q: "Can outreach include product reviews?",
        a: "Yes, where the publisher accepts them and discloses the relationship appropriately.",
      },
      {
        q: "What response rates are realistic?",
        a: "Well-researched, personalised outreach typically lands somewhere between eight and twenty per cent positive response, depending on the niche.",
      },
    ],
  },
  {
    slug: "digital-pr",
    name: "Digital PR",
    tagline: "Stories worth covering, placed where they carry weight",
    summary:
      "Data-led campaigns, expert commentary and newsworthy assets that earn coverage from journalists and major publications.",
    metaTitle: "Digital PR Agency | Data-Led Campaigns & Earned Links",
    metaDescription:
      "A digital PR agency built for search: data-led stories, expert commentary and newsworthy assets that earn journalist coverage and editorial links on major publications.",
    intro: [
      "Digital PR is the highest ceiling in link acquisition. A single well-placed story can earn coverage across dozens of publications that would never accept a pitch for a standard contributed article.",
      "It is also the most demanding, because journalists respond to news, data and expertise — not to marketing copy. Our approach starts with finding something genuinely worth saying about your category.",
      "We build the asset, place the story, and turn the resulting coverage into lasting search visibility.",
    ],
    whatYouGet: [
      {
        title: "Story mining",
        body: "We interrogate your internal data, industry datasets and customer insight to find angles a journalist can actually run.",
      },
      {
        title: "Asset production",
        body: "Surveys, data studies, indexes, maps and visual assets built to be quotable and easy to cite.",
      },
      {
        title: "Journalist outreach",
        body: "Targeted pitching to named reporters on the desks that cover your sector, timed to the news cycle.",
      },
      {
        title: "Reactive commentary",
        body: "We position your spokespeople as go-to experts, responding to breaking stories while the window is open.",
      },
      {
        title: "Coverage-to-SEO conversion",
        body: "Unlinked mentions are chased into links, and coverage is mapped to the pages that benefit most.",
      },
      {
        title: "Campaign reporting",
        body: "Pieces of coverage, publication reach, links earned, share of voice and search impact.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Angle development",
        body: "We generate and pressure-test story concepts against what journalists in your sector are currently publishing.",
      },
      {
        step: "02",
        title: "Research and build",
        body: "Data is gathered, verified and packaged into an asset with a clear headline finding.",
      },
      {
        step: "03",
        title: "Media list",
        body: "A targeted list of reporters and desks, built for this specific story rather than reused.",
      },
      {
        step: "04",
        title: "Launch",
        body: "Coordinated pitching, embargo management where useful, and rapid follow-up during the live window.",
      },
      {
        step: "05",
        title: "Consolidate",
        body: "Coverage tracking, unlinked-mention recovery and a full performance debrief.",
      },
    ],
    idealFor: [
      "Established brands seeking top-tier authority",
      "Companies with proprietary data worth publishing",
      "Categories where trust signals influence conversion",
      "Teams wanting brand awareness and links together",
    ],
    faqs: [
      {
        q: "How long does a campaign take?",
        a: "Six to ten weeks from concept to launch, with the coverage window typically running two to four weeks afterwards.",
      },
      {
        q: "What if the story does not land?",
        a: "We build contingency angles into every campaign and re-pitch with a new hook. Campaigns are reviewed at the concept stage precisely to reduce this risk.",
      },
      {
        q: "Do we need our own data?",
        a: "It helps, but it is not essential. We can commission surveys or build studies from public datasets.",
      },
    ],
  },
  {
    slug: "content-writing",
    name: "SEO Content Writing",
    tagline: "Pages built to rank and written to be read",
    summary:
      "Search-informed articles, landing pages and pillar content produced by writers who understand both your topic and search intent.",
    metaTitle: "SEO Content Writing Services | Intent-Led, Human Written",
    metaDescription:
      "SEO content writing services from RankBridge: intent-mapped briefs, subject-matter writers and human editing for articles, landing pages and pillar content that rank.",
    intro: [
      "Links point somewhere. If that destination is thin, generic or clearly written for an algorithm, the authority you earn has nothing to hold onto.",
      "Our writing team pairs search research with genuine subject knowledge, producing pages that satisfy the query, answer the follow-up questions, and give an editor a reason to cite them.",
      "Every piece is planned against intent, structured for scanability, and edited by a human being.",
    ],
    whatYouGet: [
      {
        title: "Intent-mapped briefs",
        body: "Each brief defines the query, the searcher's stage, the competing pages and the angle that will outperform them.",
      },
      {
        title: "Subject-matter writing",
        body: "Writers are matched to your vertical so the detail holds up to expert scrutiny.",
      },
      {
        title: "Structured for search",
        body: "Clear heading hierarchy, entity coverage, internal link suggestions and metadata written to earn the click.",
      },
      {
        title: "Human editing",
        body: "A second editor checks accuracy, flow and originality before delivery.",
      },
      {
        title: "Content refresh programmes",
        body: "Existing pages audited and rewritten where decay is costing you positions.",
      },
      {
        title: "Formats across the funnel",
        body: "Pillar pages, comparison pages, guides, glossaries and commercial landing copy.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Keyword and intent research",
        body: "We build a topic map showing what to write, in what order, and how the pieces should link together.",
      },
      {
        step: "02",
        title: "Briefing",
        body: "Detailed briefs are approved by you before writing starts.",
      },
      {
        step: "03",
        title: "Drafting",
        body: "A specialist writer produces the draft against the brief and your tone of voice.",
      },
      {
        step: "04",
        title: "Editing",
        body: "Editorial review for accuracy, originality, structure and readability.",
      },
      {
        step: "05",
        title: "Delivery and measurement",
        body: "Publish-ready files with metadata, plus performance review after indexation.",
      },
    ],
    idealFor: [
      "Sites earning links to pages that under-convert",
      "New domains building a topical foundation",
      "Teams that need consistent monthly publishing",
      "Brands refreshing decaying evergreen content",
    ],
    faqs: [
      {
        q: "Do you use AI to write?",
        a: "Research and outlining may use tooling, but drafting and editing are human. Every piece is checked for originality before delivery.",
      },
      {
        q: "Can you match our tone of voice?",
        a: "Yes. We build a short voice guide from your existing material and work to it.",
      },
      {
        q: "What turnaround should we expect?",
        a: "Standard articles are delivered within five to seven working days of brief approval; pillar pages take longer.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
