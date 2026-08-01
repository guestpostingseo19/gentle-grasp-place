import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy | RankBridge" },
      {
        name: "description",
        content:
          "What cookies and similar technologies the RankBridge website uses, why they are used, and how to control them in your browser.",
      },
      { property: "og:title", content: "Cookie Policy | RankBridge" },
      {
        property: "og:description",
        content: "Categories of cookies used on this site and how to manage your preferences.",
      },
    ],
  }),
  component: CookiePolicy,
});

function CookiePolicy() {
  return (
    <LegalPage
      title="Cookie Policy"
      updated="1 July 2026"
      intro="This policy explains how RankBridge uses cookies and similar technologies on this website, what each category does, and how you can control them."
      sections={[
        {
          h: "1. What cookies are",
          p: [
            "Cookies are small text files placed on your device when you visit a website. They allow a site to remember your actions and preferences between pages and across visits. Similar technologies include local storage and pixel tags, and this policy covers those too.",
          ],
        },
        {
          h: "2. Our approach",
          p: [
            "We keep this site deliberately light. We do not run advertising networks, retargeting pixels or social tracking widgets, and we do not build behavioural profiles of visitors.",
          ],
        },
        {
          h: "3. Categories we use",
          ul: [
            "Strictly necessary: required for the site to load, render and remain secure. These cannot be switched off.",
            "Preference: remember choices such as reduced-motion or display settings, so the site behaves consistently on your return.",
            "Analytics: aggregated, privacy-respecting measurement of which pages are read and how visitors arrive. Reports are anonymous and never identify an individual.",
          ],
        },
        {
          h: "4. Third-party services",
          p: [
            "Web fonts are loaded from a third-party font service, which necessarily receives your IP address as part of the request. Any analytics provider we use is configured to anonymise IP addresses and is contractually prohibited from using the data for its own purposes.",
          ],
        },
        {
          h: "5. Managing cookies",
          p: [
            "All major browsers allow you to view, block or delete cookies through their settings menu. Blocking strictly necessary cookies may cause parts of this site to behave unexpectedly; blocking analytics cookies has no effect on how the site works for you.",
            "You can also enable a global privacy or do-not-track signal in most browsers, which we honour where technically supported.",
          ],
        },
        {
          h: "6. Retention",
          p: [
            "Session cookies expire as soon as you close your browser. Persistent cookies used for preferences and analytics expire no later than twelve months after your most recent visit.",
          ],
        },
        {
          h: "7. Updates",
          p: [
            "If we add or remove a technology covered by this policy, we will update this page and revise the date shown above.",
          ],
        },
      ]}
    />
  );
}
