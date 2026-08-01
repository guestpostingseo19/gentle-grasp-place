import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer | RankBridge" },
      {
        name: "description",
        content:
          "Important information about the accuracy, limitations and intended use of content published on the RankBridge website.",
      },
      { property: "og:title", content: "Disclaimer | RankBridge" },
      {
        property: "og:description",
        content: "How to interpret the guidance, examples and figures published on this site.",
      },
    ],
  }),
  component: Disclaimer,
});

function Disclaimer() {
  return (
    <LegalPage
      title="Disclaimer"
      updated="1 July 2026"
      intro="The material on this website is published for general information. It is written carefully and reviewed before publication, but it is not professional advice tailored to your circumstances."
      sections={[
        {
          h: "1. General information only",
          p: [
            "Articles, guides and service descriptions on this site describe approaches that have worked in specific contexts. Your market, competition, site history and resources differ, and outcomes will differ accordingly. Nothing here should be treated as a promise of results.",
          ],
        },
        {
          h: "2. No professional advice relationship",
          p: [
            "Reading this website does not create a client relationship. Before acting on anything published here, consider taking advice appropriate to your own situation — including legal, financial or regulatory advice where relevant.",
          ],
        },
        {
          h: "3. Search engine independence",
          p: [
            "RankBridge is not affiliated with, endorsed by, or acting on behalf of any search engine. Search engines publish their own guidelines and change their systems without notice. Where we describe how something works, we are describing our observations, not official positions.",
          ],
        },
        {
          h: "4. Figures and examples",
          ul: [
            "Statistics quoted are accurate to the best of our knowledge at the time of publication",
            "Case examples may be anonymised or generalised to protect client confidentiality",
            "Performance figures describe past campaigns and do not indicate future results",
            "Third-party metrics are supplied by external tools and are estimates, not measurements",
          ],
        },
        {
          h: "5. External links",
          p: [
            "This site links to third-party resources for the reader's convenience. We do not control those sites, do not endorse their content, and accept no responsibility for their accuracy, availability or practices.",
          ],
        },
        {
          h: "6. Guest contributions",
          p: [
            "Articles credited to external contributors reflect the views of their authors. We edit for clarity and check for obvious factual problems, but publication does not mean we endorse every opinion expressed.",
          ],
        },
        {
          h: "7. Accuracy and availability",
          p: [
            "We aim to keep this site accurate and available, but we make no warranty that it will be uninterrupted, error-free or current. Content may be updated or removed at any time without notice.",
          ],
        },
        {
          h: "8. Limitation of liability",
          p: [
            "To the fullest extent permitted by law, RankBridge accepts no liability for any loss arising from reliance on material published on this website. Your use of this site is at your own discretion and risk.",
          ],
        },
      ]}
    />
  );
}
