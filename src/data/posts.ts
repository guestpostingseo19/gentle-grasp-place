export type Post = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  body: { h?: string; p?: string[]; ul?: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "what-makes-a-guest-post-worth-publishing",
    title: "What Makes a Guest Post Worth Publishing in 2026",
    description:
      "Editors reject most guest post pitches in seconds. Here is what separates the articles that get published from the ones that never get a reply.",
    category: "Guest Posting",
    date: "2026-07-18",
    readTime: "7 min read",
    author: "RankBridge Editorial",
    body: [
      {
        p: [
          "Guest posting has not stopped working. What has stopped working is the version of guest posting that treats an editor as a distribution channel rather than a person with an audience to protect.",
          "We place hundreds of articles a year, and the pattern behind acceptance is remarkably consistent. It comes down to four things: relevance, specificity, evidence and restraint.",
        ],
      },
      {
        h: "Relevance is measured by the reader, not the domain",
        p: [
          "Most pitches are filtered on whether the topic matches the site's category. Editors filter on something narrower: whether this specific article gives their specific readers something they cannot get from the twenty existing articles on the same subject.",
          "Before pitching, read the last ten posts on the blog. If your angle could have been written before reading them, it is not ready.",
        ],
      },
      {
        h: "Specificity beats breadth every time",
        p: [
          "A pitch titled 'How to improve your SEO' is dead on arrival. A pitch titled 'What we learned auditing 40 e-commerce category pages that lost traffic after a redesign' has a shape, a boundary and an implied payoff.",
          "Narrow topics are easier to write well, easier to fact-check, and far easier for an editor to say yes to.",
        ],
      },
      {
        h: "Evidence is the price of admission",
        ul: [
          "First-hand data from your own work, even at small sample sizes",
          "Named examples with links to what you are describing",
          "Concrete numbers instead of directional claims",
          "Counter-examples that show you have considered the other side",
        ],
        p: [
          "Editors are not looking for authority signals in your bio. They are looking for sentences that could only have been written by someone who has done the work.",
        ],
      },
      {
        h: "Restraint on the link",
        p: [
          "The fastest way to lose a placement is to bend the article toward your product. One contextual link, placed where a reader would genuinely want more detail, is worth more than three forced ones — and it is the only version an editor will keep long term.",
          "Treat the link as a footnote to a useful article, not the reason the article exists. Everything else follows from that.",
        ],
      },
      {
        h: "A simple pre-send checklist",
        ul: [
          "Could this article only have been written by us?",
          "Does the headline promise something specific?",
          "Is there at least one piece of original evidence?",
          "Would we read this if a competitor published it?",
          "Does the link survive being removed? If the article still works, it belongs.",
        ],
      },
    ],
  },
  {
    slug: "how-to-evaluate-a-link-opportunity",
    title: "How to Evaluate a Link Opportunity Without Relying on Domain Metrics",
    description:
      "Third-party authority scores are a starting point, not a verdict. A practical framework for judging whether a placement is actually worth pursuing.",
    category: "Link Building",
    date: "2026-06-30",
    readTime: "8 min read",
    author: "RankBridge Editorial",
    body: [
      {
        p: [
          "Every link vendor leads with a domain metric because it is a single number that sorts a spreadsheet. Unfortunately, it is also the number easiest to manipulate, and the one least connected to whether a link will do anything for you.",
          "Here is the sequence we actually run before approving a placement.",
        ],
      },
      {
        h: "1. Does the site have organic traffic, and is it trending up?",
        p: [
          "A domain score can be inflated in weeks. A twelve-month organic traffic curve is much harder to fake. Look for stable or rising visibility, and be sceptical of a site whose traffic collapsed after a core update.",
        ],
      },
      {
        h: "2. Is the topical footprint real?",
        p: [
          "Check what the site ranks for. If a marketing blog ranks for cryptocurrency, pet insurance and legal advice, it is not a publication — it is a marketplace with a template.",
        ],
      },
      {
        h: "3. What does the outbound link profile look like?",
        ul: [
          "How many external links appear per post on average?",
          "Are the destinations topically coherent?",
          "Is there a visible pattern of paid placement across unrelated verticals?",
          "Do older posts still hold their links, or have they been stripped?",
        ],
      },
      {
        h: "4. Would a human find the article through the site?",
        p: [
          "Orphaned pages are a quiet signal. If a post is not reachable from the homepage, a category page or an internal link, the site is not treating it as content — it is treating it as inventory.",
        ],
      },
      {
        h: "5. Does the placement make sense in isolation?",
        p: [
          "Imagine a reader arriving on the host article with no knowledge of your brand. Does your link read as a helpful next step? If not, the metrics do not matter.",
          "Run these five checks and you will reject a lot of cheap opportunities. That is the point.",
        ],
      },
    ],
  },
  {
    slug: "anchor-text-distribution-explained",
    title: "Anchor Text Distribution Explained, With Sensible Defaults",
    description:
      "How to plan anchor text across a campaign so your profile looks earned rather than engineered, plus the ratios we start from.",
    category: "Strategy",
    date: "2026-06-11",
    readTime: "6 min read",
    author: "RankBridge Editorial",
    body: [
      {
        p: [
          "Anchor text is one of the few link variables you fully control, which is exactly why over-control is the most common mistake we see in audits.",
          "Natural profiles are messy. They contain brand names, bare URLs, awkward phrases and a lot of sentences that were never optimised for anything.",
        ],
      },
      {
        h: "A sensible starting distribution",
        ul: [
          "Branded: around 40–50% — your company name in various forms",
          "Natural language: around 20–25% — 'this guide', 'according to their research'",
          "Partial match: around 15–20% — a target phrase inside a longer sentence",
          "Bare URL: around 5–10%",
          "Exact match: 5% or less, and only on pages that can support it",
        ],
      },
      {
        h: "Why exact match stays small",
        p: [
          "Exact-match anchors are the strongest relevance signal you can send and the clearest fingerprint of intentional link building. Used sparingly on a profile that is otherwise natural, they help. Used repeatedly, they turn a page into an obvious target.",
        ],
      },
      {
        h: "Plan across the campaign, not per link",
        p: [
          "The mistake is optimising each placement in isolation. Keep a single anchor ledger across every link you earn, per target page, and let it guide the next brief. If a page has taken three partial-match anchors in a row, the next one should be branded.",
        ],
      },
      {
        h: "Let the host publication win ties",
        p: [
          "If an editor prefers a different anchor because it reads better in their sentence, take their version. A slightly weaker anchor on a placement that stays live beats a perfect anchor on one that gets stripped in the next content audit.",
        ],
      },
    ],
  },
  {
    slug: "niche-edits-vs-guest-posts",
    title: "Niche Edits vs Guest Posts: Choosing the Right Tactic",
    description:
      "Both earn contextual links, but they behave differently on speed, control and risk. A direct comparison to help you allocate budget.",
    category: "Guest Posting",
    date: "2026-05-22",
    readTime: "6 min read",
    author: "RankBridge Editorial",
    body: [
      {
        p: [
          "Teams often treat these as interchangeable line items. They are not. Each solves a different problem, and the strongest campaigns use both deliberately.",
        ],
      },
      {
        h: "Speed",
        p: [
          "Niche edits win. The host page is already indexed, already crawled on a schedule, and often already ranking, so discovery is measured in weeks rather than months. A new guest post has to earn its crawl budget from scratch.",
        ],
      },
      {
        h: "Control",
        p: [
          "Guest posts win. You choose the topic, the structure, the surrounding argument and the placement of the link. With an edit you are a guest in someone else's paragraph and must fit their existing voice.",
        ],
      },
      {
        h: "Perceived naturalness",
        p: [
          "It depends entirely on execution. A well-written insertion into a genuinely relevant article is indistinguishable from an original citation. A clumsy one is obvious to any human reviewer — and increasingly to automated ones.",
        ],
      },
      {
        h: "How to split the budget",
        ul: [
          "New domain with no history: weight toward guest posts to build topical breadth",
          "Established site pushing a page from position 11 to 5: weight toward edits for speed",
          "Profile dominated by one tactic: rebalance deliberately toward the other",
          "Seasonal page with a hard deadline: edits, planned early",
        ],
      },
      {
        h: "The common factor",
        p: [
          "Neither tactic rescues a weak destination page. Whichever you choose, the page receiving the link has to deserve the position you are asking for.",
        ],
      },
    ],
  },
  {
    slug: "measuring-link-building-roi",
    title: "Measuring Link Building ROI Beyond Referring Domain Counts",
    description:
      "Counting links tells you what you bought. These metrics tell you whether it worked.",
    category: "Strategy",
    date: "2026-04-29",
    readTime: "7 min read",
    author: "RankBridge Editorial",
    body: [
      {
        p: [
          "Referring domains are an activity metric. They confirm the work happened; they say nothing about whether it moved the business. Here is the reporting layer we recommend sitting on top.",
        ],
      },
      {
        h: "Target page position velocity",
        p: [
          "Track average position for the specific keyword cluster each target page owns, month over month. Link building should show up here before it shows up in revenue, and it is the earliest honest signal.",
        ],
      },
      {
        h: "Share of the top ten",
        p: [
          "Count how many of your priority keywords place a page in the top ten, and how that count changes. It is more stable than average position and easier to explain to stakeholders.",
        ],
      },
      {
        h: "Assisted conversions from organic landing pages",
        p: [
          "Attribute against the landing page, not the session source. Authority work lifts pages, and pages convert — often several visits later.",
        ],
      },
      {
        h: "Referral traffic quality",
        ul: [
          "Sessions from placements, and their bounce behaviour",
          "Whether referral visitors reach a pricing or contact page",
          "Which publications send visitors who come back",
        ],
        p: [
          "This is the metric most link reports ignore, and it is the fastest way to learn which publications genuinely reach your buyers.",
        ],
      },
      {
        h: "Cost per ranking keyword gained",
        p: [
          "Divide campaign spend by the net increase in keywords ranking in the top twenty. It is a blunt instrument, but tracked over quarters it exposes diminishing returns long before a rankings chart does.",
        ],
      },
    ],
  },
  {
    slug: "building-a-publisher-relationship",
    title: "Building a Publisher Relationship That Outlasts One Placement",
    description:
      "The economics of outreach change completely when editors start replying because they recognise your name.",
    category: "Outreach",
    date: "2026-04-08",
    readTime: "5 min read",
    author: "RankBridge Editorial",
    body: [
      {
        p: [
          "Cold outreach is expensive. Warm outreach is nearly free. The gap between them is a handful of habits most teams skip because they are optimising the wrong number.",
        ],
      },
      {
        h: "Deliver better than you promised",
        p: [
          "Send the article early, at the agreed length, formatted the way they asked, with images cleared. Editors remember the contributor who created no work for them.",
        ],
      },
      {
        h: "Stay in touch when you want nothing",
        p: [
          "Share their article. Send a correction privately rather than in the comments. Point them at a source that fits a piece they are working on. Three months of that turns a stranger into a contact.",
        ],
      },
      {
        h: "Bring them stories, not requests",
        p: [
          "The strongest position in outreach is being the person who occasionally emails a genuinely good idea with no ask attached.",
        ],
      },
      {
        h: "Keep a real record",
        ul: [
          "Who you spoke to and what they cover",
          "What they accepted and what they declined, and why",
          "Their preferred format, length and lead time",
          "When you last contacted them",
        ],
      },
      {
        h: "The compounding effect",
        p: [
          "A publisher network built this way becomes the single most valuable asset in a link programme, because it is the one competitors cannot buy from a vendor list.",
        ],
      },
    ],
  },
  {
    slug: "guest-post-outreach-emails-that-get-replies",
    title: "Guest Post Outreach: The Email Structure That Gets Replies",
    description:
      "A practical guest post outreach framework — how to research the editor, structure the pitch, and follow up once without becoming noise.",
    category: "Outreach",
    date: "2026-07-24",
    readTime: "8 min read",
    author: "RankBridge Editorial",
    body: [
      {
        p: [
          "Guest post outreach fails for one boring reason: the email is about the sender. Editors open dozens of pitches a week and almost all of them lead with a company introduction nobody asked for.",
          "The structure below is what we use across thousands of pitches a year. It is not clever. It is just built around the only question an editor is actually asking: will this help my readers?",
        ],
      },
      {
        h: "Step one: research that takes four minutes, not forty",
        ul: [
          "Read the three most recent articles and note the house style",
          "Find the editor's name on the masthead or a recent byline",
          "Check whether your angle has already been covered in the last year",
          "Note the typical article length and whether they use subheads and data",
        ],
      },
      {
        h: "Step two: the four-line pitch",
        p: [
          "Line one names the specific thing you read and why it prompted the email. Line two states the angle in a single sentence, as a working headline. Line three gives the evidence you can bring — original data, a case study, first-hand numbers. Line four offers the piece and stops.",
          "No attachments, no drafts, no boilerplate about your award-winning agency.",
        ],
      },
      {
        h: "Step three: follow up once",
        p: [
          "One follow-up after five to seven working days, adding something new — a sharper headline, a data point, a second angle. If there is no reply after that, move on. A third email costs you the relationship for a placement you were never getting.",
        ],
      },
      {
        h: "What good response rates look like",
        p: [
          "Personalised guest post outreach in a defined niche typically lands between eight and twenty per cent positive replies. If you are under three per cent, the problem is almost always the angle, not the subject line.",
        ],
      },
    ],
  },
  {
    slug: "saas-link-building-strategy",
    title: "SaaS Link Building: A Strategy That Survives Product Changes",
    description:
      "How SaaS and B2B teams should sequence link building across feature pages, comparison pages and the blog — and which assets actually attract links.",
    category: "Strategy",
    date: "2026-07-28",
    readTime: "9 min read",
    author: "RankBridge Editorial",
    body: [
      {
        p: [
          "SaaS link building has a structural problem: the pages that make money — feature pages, pricing, integrations — are the hardest pages in the world to earn a link to. Nobody cites a pricing page voluntarily.",
          "The fix is not to point every link at the homepage. It is to build a small number of link-worthy assets and route their authority internally to the pages that convert.",
        ],
      },
      {
        h: "Which assets actually earn links in B2B",
        ul: [
          "Original benchmark data drawn from your own product usage, anonymised",
          "Annual state-of-the-industry surveys with a repeatable methodology",
          "Free calculators and templates that solve one narrow job",
          "Genuinely opinionated teardowns written by a named practitioner",
          "Integration and migration guides that other tools' users search for",
        ],
      },
      {
        h: "Sequence matters more than volume",
        p: [
          "Quarter one earns links to assets. Quarter two strengthens the category and comparison pages that sit one click from those assets. Quarter three points a smaller number of high-relevance placements directly at the commercial pages, once the surrounding topic already has authority.",
          "Reversing that order is the most common reason a well-funded B2B link building programme produces referring domains and no pipeline.",
        ],
      },
      {
        h: "Internal linking is half of the work",
        p: [
          "Every link-earning asset should carry two or three contextual internal links to the commercial page it supports, using descriptive anchors. This is free, immediate, and consistently underused.",
        ],
      },
      {
        h: "E-commerce is the same problem with different pages",
        p: [
          "Swap feature pages for category pages and the model holds: earn links to buying guides and comparison content, then route equity to the categories that carry margin.",
        ],
      },
    ],
  },
  {
    slug: "link-building-pricing-explained",
    title: "Link Building Pricing Explained: What You Are Actually Paying For",
    description:
      "A transparent breakdown of link building pricing — what drives cost per placement, which pricing models exist, and how to compare quotes honestly.",
    category: "Buying Guide",
    date: "2026-08-01",
    readTime: "8 min read",
    author: "RankBridge Editorial",
    body: [
      {
        p: [
          "Link building pricing is opaque because most quotes bundle three separate costs into one number: research, content and placement. Separate them and comparison becomes straightforward.",
        ],
      },
      {
        h: "The three cost components",
        ul: [
          "Research and qualification — the hours spent finding and vetting a publication",
          "Content production — writing and editing to the host's standard",
          "Placement — what the publication charges, if anything, for editorial time",
        ],
      },
      {
        h: "What drives cost per placement",
        ul: [
          "Real organic traffic on the host publication, not domain score",
          "Topical closeness to your commercial pages",
          "Whether the site is genuinely selective about what it runs",
          "Editorial workload — data pieces cost more than commentary",
          "Speed: rushed timelines always cost more than planned cadence",
        ],
      },
      {
        h: "Pricing models you will encounter",
        p: [
          "Per placement gives you the clearest audit trail. Monthly retainers buy cadence and strategy. Cost-per-link packages priced on domain metrics alone are the model to be most careful with, because the metric can be inflated far more cheaply than the audience can.",
        ],
      },
      {
        h: "How to compare two quotes fairly",
        ul: [
          "Ask for a sample shortlist with traffic figures, not just domain scores",
          "Ask who writes the article and whether you approve it before submission",
          "Ask what happens if a placement is removed within twelve months",
          "Ask whether the publication is disclosed to you before outreach begins",
        ],
      },
      {
        h: "A sensible budget starting point",
        p: [
          "Most brands make more progress with four to eight well-chosen placements a month sustained for two quarters than with thirty cheap ones bought in a single burst. Consistency, not volume, is what compounds.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
