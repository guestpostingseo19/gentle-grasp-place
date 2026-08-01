import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | RankBridge" },
      {
        name: "description",
        content:
          "The terms governing use of the RankBridge website and the delivery of our guest posting, link building and content services.",
      },
      { property: "og:title", content: "Terms & Conditions | RankBridge" },
      {
        property: "og:description",
        content: "Scope of services, client responsibilities, payment terms and liability.",
      },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="1 July 2026"
      intro="These terms govern your use of the RankBridge website and any services we provide. By engaging us or using this site you agree to them. Where a signed service agreement exists, that agreement takes precedence over anything stated here."
      sections={[
        {
          h: "1. Definitions",
          p: [
            "“We”, “us” and “RankBridge” refer to the studio providing the services. “You” and “Client” refer to the individual or organisation engaging those services. “Deliverables” means articles, placements, reports and other materials produced during an engagement.",
          ],
        },
        {
          h: "2. Scope of services",
          p: [
            "Services are defined in a written proposal or statement of work agreed before delivery begins. Anything not expressly included in that document is outside scope and may be quoted separately.",
            "We reserve the right to decline or discontinue work that would require misrepresentation, breach of a third party's terms, or publication of material we consider misleading.",
          ],
        },
        {
          h: "3. Client responsibilities",
          ul: [
            "Provide accurate information about your website, objectives and target pages",
            "Supply approvals, feedback and assets within agreed timeframes",
            "Ensure any material you supply does not infringe third-party rights",
            "Maintain your own site so that placements point to functioning, lawful pages",
          ],
          p: [
            "Delays caused by outstanding approvals may shift delivery timelines. We will always flag this before it affects a milestone.",
          ],
        },
        {
          h: "4. Approvals and revisions",
          p: [
            "Publication shortlists and article briefs are submitted for your approval before work proceeds. Each written deliverable includes one round of revision against the agreed brief. Additional revisions, or changes that alter the brief, may be chargeable.",
          ],
        },
        {
          h: "5. Placement assurance",
          p: [
            "Where a live placement is removed within twelve months of publication for reasons within our control, we will secure an equivalent replacement at no additional cost. This assurance does not apply where removal follows from changes to your own site, a request from you, or the closure of the host publication.",
          ],
        },
        {
          h: "6. No guarantee of rankings",
          p: [
            "Search engine results are determined by third parties using undisclosed and frequently changing criteria. We guarantee the delivery and quality of the contracted work; we do not and cannot guarantee any specific ranking, traffic figure or commercial outcome.",
          ],
        },
        {
          h: "7. Fees and payment",
          ul: [
            "Fees are set out in the proposal and are exclusive of applicable taxes",
            "Retainers are invoiced monthly in advance unless agreed otherwise",
            "Invoices are payable within fourteen days of issue",
            "We may pause delivery on accounts that remain overdue beyond thirty days",
          ],
        },
        {
          h: "8. Intellectual property",
          p: [
            "Ownership of commissioned content transfers to you upon full payment of the relevant invoice. Until then, all rights remain with RankBridge. Our internal templates, processes, prospect research and methodologies remain our property at all times.",
          ],
        },
        {
          h: "9. Confidentiality",
          p: [
            "Each party will keep the other's non-public information confidential and use it only for the purposes of the engagement. This obligation survives termination of the agreement by three years.",
          ],
        },
        {
          h: "10. Term and termination",
          p: [
            "Retainer engagements run month to month unless a fixed term is agreed, and either party may terminate with thirty days' written notice. Work already commissioned within the notice period will be completed and invoiced.",
          ],
        },
        {
          h: "11. Limitation of liability",
          p: [
            "To the fullest extent permitted by law, our total aggregate liability arising from an engagement is limited to the fees paid by you in the three months preceding the event giving rise to the claim. We are not liable for indirect or consequential loss, including loss of profit, revenue or anticipated savings.",
            "Nothing in these terms limits liability for death or personal injury caused by negligence, or for fraud.",
          ],
        },
        {
          h: "12. Governing law",
          p: [
            "These terms are governed by the laws of England and Wales, and both parties submit to the exclusive jurisdiction of its courts.",
          ],
        },
      ]}
    />
  );
}
