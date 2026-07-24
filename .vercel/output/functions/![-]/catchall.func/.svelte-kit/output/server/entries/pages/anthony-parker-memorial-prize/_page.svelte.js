import { h as head, b as attr, e as escape_html } from "../../../chunks/index.js";
import { B as Breadcrumbs, P as PageHero } from "../../../chunks/Breadcrumbs.js";
import { s as site } from "../../../chunks/site.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head("159gpru", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Anthony Parker Memorial Prize — ${escape_html(site.name)}</title>`);
      });
      $$renderer3.push(`<meta name="description" content="An annual prize awarded by BCS Berkshire in memory of former branch chairman Anthony Parker, recognising outstanding student computing projects."/>`);
    });
    $$renderer2.push(`<div class="container">`);
    Breadcrumbs($$renderer2, { trail: [{ label: "Anthony Parker Memorial Prize" }] });
    $$renderer2.push(`<!----></div> `);
    PageHero($$renderer2, {
      eyebrow: "In memoriam",
      title: "The Anthony Parker Memorial Prize",
      lede: "Awarded each year in memory of Anthony Parker, a former chairman of BCS Berkshire, who died unexpectedly on 1 January 2021 at the age of 45."
    });
    $$renderer2.push(`<!----> <section class="section container-narrow"><h2>About the prize</h2> <p>The prize was established to honour Anthony's contribution to the branch and to the wider
		Berkshire technology community. It is awarded alongside the branch's annual student hackathon
		at the University of Reading, recognising an outstanding piece of work from a young person
		taking their first steps in computing.</p> <p>It sits within our broader <strong>Project of the Year</strong> programme, in which students
		aged 11–19 submit personal computing projects — anything from a smartphone app to an indie
		game — for the chance to win prizes and meet professionals from across the local IT industry.</p> <h2>Why it matters</h2> <p>Beyond the prize itself, the programme gives young people in Berkshire a genuine route into
		the profession: the chance to have their work seen by working technologists, to build
		confidence presenting it, and to make connections that can shape a future career.</p> <h2>Get involved</h2> <p>We welcome judges, mentors and sponsors for both the hackathon and Project of the Year. If
		you're a teacher, parent or student wanting to know more about entering, or a professional
		who'd like to help judge, please get in touch with our STEM and schools team.</p> <a class="btn btn-primary"${attr("href", `mailto:${site.contact.stem}`)}>Contact the STEM team</a></section> <section class="section container-narrow tribute svelte-159gpru"><blockquote class="svelte-159gpru">This prize keeps Anthony's commitment to Berkshire's technology community alive by giving the
		next generation the same encouragement he gave to so many during his time as chairman.</blockquote></section>`);
  });
}
export {
  _page as default
};
