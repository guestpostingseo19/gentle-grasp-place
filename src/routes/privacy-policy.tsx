import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | RankBridge" },
      {
        name: "description",
        content:
          "How RankBridge collects, uses, stores and protects personal information supplied by clients, contributors and website visitors.",
      },
      { property: "og:title", content: "Privacy Policy | RankBridge" },
      {
        property: "og:description",
        content: "Our commitments on data collection, storage, sharing and your rights.",
      },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="1 July 2026"
      intro="This policy explains what personal information RankBridge collects, why we collect it, how long we keep it, and the rights you hold over it. It applies to this website and to the services we provide to clients."
      sections={[
        {
          h: "1. Who we are",
          p: [
            "RankBridge is a guest posting and link building studio. For the purposes of data protection law we act as the data controller for information collected through this website and through direct correspondence with clients and contributors.",
          ],
        },
        {
          h: "2. Information we collect",
          ul: [
            "Contact details you send us by email, such as your name, company, role and email address",
            "Information contained in campaign briefs, including website URLs and target pages",
            "Correspondence history, so we can maintain continuity across a project",
            "Billing details required to raise and settle invoices",
            "Basic technical information from your visit, such as browser type, approximate region and pages viewed",
          ],
        },
        {
          h: "3. How we use your information",
          p: [
            "We use personal information to respond to enquiries, deliver contracted services, produce reporting, issue invoices and meet our legal and accounting obligations.",
            "We do not use your information to build advertising profiles, and we do not sell or rent personal data to any third party under any circumstances.",
          ],
        },
        {
          h: "4. Legal bases for processing",
          ul: [
            "Performance of a contract, where we are delivering services you have engaged us for",
            "Legitimate interests, where we respond to an enquiry you initiated or maintain business records",
            "Legal obligation, where tax and company law requires us to retain records",
            "Consent, where you have explicitly opted in to receive occasional updates",
          ],
        },
        {
          h: "5. Sharing with third parties",
          p: [
            "We share the minimum necessary information with service providers who support our operations, such as email hosting, accounting software and analytics. Each is bound by contractual confidentiality obligations.",
            "Where a campaign requires it, we may share a target URL and article with a publishing partner. We never share your commercial terms, internal data or contact details with publishers without your instruction.",
          ],
        },
        {
          h: "6. Data retention",
          p: [
            "Enquiry correspondence is retained for twenty-four months from last contact. Client project records are retained for the duration of the engagement plus six years, in line with statutory accounting requirements. You may request earlier deletion of anything not subject to a legal retention period.",
          ],
        },
        {
          h: "7. International transfers",
          p: [
            "Some of our service providers operate outside the UK and European Economic Area. Where personal data is transferred internationally, we rely on adequacy decisions or standard contractual clauses to maintain an equivalent level of protection.",
          ],
        },
        {
          h: "8. Security",
          p: [
            "We apply access controls, encryption in transit, multi-factor authentication on business systems and a least-privilege approach to internal access. No transmission over the internet can be guaranteed as entirely secure, but we take reasonable and proportionate steps to protect the information you entrust to us.",
          ],
        },
        {
          h: "9. Your rights",
          ul: [
            "Access a copy of the personal information we hold about you",
            "Request correction of information that is inaccurate or incomplete",
            "Request erasure where we have no continuing lawful basis to retain it",
            "Object to or request restriction of processing in certain circumstances",
            "Request portability of information you provided to us",
            "Withdraw consent at any time where processing relies on consent",
          ],
          p: [
            "To exercise any of these rights, email legal@rankbridge.com. We respond within one calendar month. If you are unsatisfied with our response, you may complain to your local supervisory authority.",
          ],
        },
        {
          h: "10. Children",
          p: [
            "Our services are directed at businesses. We do not knowingly collect personal information from anyone under sixteen years of age.",
          ],
        },
        {
          h: "11. Changes to this policy",
          p: [
            "We review this policy annually and whenever our processing activities change materially. The date at the top of this page reflects the most recent revision.",
          ],
        },
      ]}
    />
  );
}
