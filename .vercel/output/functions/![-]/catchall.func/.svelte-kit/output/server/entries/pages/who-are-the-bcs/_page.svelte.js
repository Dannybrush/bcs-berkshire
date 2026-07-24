import { h as head, d as ensure_array_like, b as attr, e as escape_html } from "../../../chunks/index.js";
import { B as Breadcrumbs, P as PageHero } from "../../../chunks/Breadcrumbs.js";
import { s as site } from "../../../chunks/site.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const subpages = [
      {
        href: "/who-are-the-bcs/registrations-and-memberships",
        title: "Registrations & Memberships",
        body: "What AMBCS, MBCS, FBCS and Chartered status actually mean, and which grade fits where you are in your career."
      },
      {
        href: "/who-are-the-bcs/branches",
        title: "BCS Branches",
        body: "How the UK-wide network of regional branches and specialist groups fits together — and where Berkshire sits within it."
      },
      {
        href: "/who-are-the-bcs/who-is-bcs-berkshire",
        title: "Who is BCS Berkshire?",
        body: "Our own branch, in more detail — history, activities and how we serve the local IT community."
      }
    ];
    head("nfkw3v", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Who are the BCS — ${escape_html(site.name)}</title>`);
      });
      $$renderer3.push(`<meta name="description" content="An introduction to BCS, The Chartered Institute for IT, and how the Berkshire branch fits within it."/>`);
    });
    $$renderer2.push(`<div class="container">`);
    Breadcrumbs($$renderer2, { trail: [{ label: "Who are the BCS" }] });
    $$renderer2.push(`<!----></div> `);
    PageHero($$renderer2, {
      eyebrow: "Who are the BCS",
      title: "BCS, The Chartered Institute for IT",
      lede: "BCS is the UK's professional body for IT, incorporated by Royal Charter and dedicated to making IT good for society. It sets standards, awards professional recognition, and connects a global community of members through branches and specialist groups — of which Berkshire is one."
    });
    $$renderer2.push(`<!----> <section class="section container"><div class="grid-3 svelte-nfkw3v"><!--[-->`);
    const each_array = ensure_array_like(subpages);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let page = each_array[$$index];
      $$renderer2.push(`<a class="card link-card svelte-nfkw3v"${attr("href", page.href)}><h2 class="svelte-nfkw3v">${escape_html(page.title)}</h2> <p>${escape_html(page.body)}</p> <span class="read-more svelte-nfkw3v">Read more →</span></a>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section class="section container-narrow"><h2>Our mission, locally</h2> <p>Nationally, BCS champions the global IT profession, sets professional standards, and works to
		make technology good for society. In Berkshire, we bring that mission to street level: free
		talks and networking for members, hands-on schools outreach, and support for anyone taking
		their next step in a technology career — whatever grade of membership or registration that
		involves.</p> <a class="btn btn-outline"${attr("href", site.bcs.url)} target="_blank" rel="noreferrer">Visit bcs.org</a></section>`);
  });
}
export {
  _page as default
};
