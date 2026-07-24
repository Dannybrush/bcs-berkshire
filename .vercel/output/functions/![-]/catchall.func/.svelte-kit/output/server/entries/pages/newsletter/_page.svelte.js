import { h as head, d as ensure_array_like, c as attr_class, e as escape_html, b as attr } from "../../../chunks/index.js";
import { B as Breadcrumbs, P as PageHero } from "../../../chunks/Breadcrumbs.js";
import { s as site } from "../../../chunks/site.js";
const newsletterIssues = [
  {
    title: "BCS Berkshire Branch Newsletter — February 2026",
    date: "2026-02-01",
    url: "https://www.bcs.org/media/bsaiudof/berkshire-branch-newsletter-feb-2026.pdf",
    summary: "Reading Geek Night dates, a call for STEMfest volunteers, an AI-in-film panel, and a debate on universities, apprenticeships and the future path to an IT career."
  },
  {
    title: "BCS Berkshire Branch Newsletter — Autumn 2025",
    date: "2025-10-01",
    summary: "Round-up from the branch AGM, committee elections and a preview of the winter events programme. (Placeholder — replace with the confirmed archive link.)"
  },
  {
    title: "BCS Berkshire Branch Newsletter — Summer 2025",
    date: "2025-07-01",
    summary: "Highlights from the Great Debate on engineering and technology skills, plus schools outreach updates. (Placeholder — replace with the confirmed archive link.)"
  }
];
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    function formatDate(iso) {
      return new Date(iso).toLocaleDateString("en-GB", { month: "long", year: "numeric" });
    }
    head("12eivhs", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Newsletter — ${escape_html(site.name)}</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Read the latest BCS Berkshire branch newsletter, and browse the archive."/>`);
    });
    $$renderer2.push(`<div class="container">`);
    Breadcrumbs($$renderer2, { trail: [{ label: "Newsletter" }] });
    $$renderer2.push(`<!----></div> `);
    PageHero($$renderer2, {
      eyebrow: "Newsletter",
      title: "BCS Berkshire Newsletter",
      lede: "Edited by our Newsletter Editor, the branch newsletter rounds up upcoming events, schools outreach, partner news and committee updates a few times a year."
    });
    $$renderer2.push(`<!----> <section class="section container"><div class="issues svelte-12eivhs"><!--[-->`);
    const each_array = ensure_array_like(newsletterIssues);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let issue = each_array[i];
      $$renderer2.push(`<article${attr_class("card issue svelte-12eivhs", void 0, { "latest": i === 0 })}>`);
      if (i === 0) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<p class="tag svelte-12eivhs">Latest issue</p>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> <p class="issue-date svelte-12eivhs">${escape_html(formatDate(issue.date))}</p> <h2 class="svelte-12eivhs">${escape_html(issue.title)}</h2> <p>${escape_html(issue.summary)}</p> `);
      if (issue.url) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<a class="btn btn-outline"${attr("href", issue.url)} target="_blank" rel="noreferrer">Read the PDF</a>`);
      } else {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`<p class="tbc svelte-12eivhs">Archive link to be added.</p>`);
      }
      $$renderer2.push(`<!--]--></article>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section class="section container-narrow cta card svelte-12eivhs"><h2>Never miss an issue</h2> <p>The newsletter goes out to all Berkshire members automatically as part of your BCS
		membership. Not receiving it, or have news to share? Let our editor know.</p> <a class="btn btn-primary"${attr("href", `mailto:${site.contact.stem}`)}>Contact the branch</a></section>`);
  });
}
export {
  _page as default
};
