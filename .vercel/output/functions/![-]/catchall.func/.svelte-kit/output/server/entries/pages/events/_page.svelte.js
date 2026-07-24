import { h as head, d as ensure_array_like, e as escape_html, b as attr } from "../../../chunks/index.js";
import { B as Breadcrumbs, P as PageHero } from "../../../chunks/Breadcrumbs.js";
import { E as EventCard, r as recurringFixtures, u as upcomingEvents } from "../../../chunks/events.js";
import { s as site } from "../../../chunks/site.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head("13hsgdq", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Events — ${escape_html(site.name)}</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Upcoming talks, panels, socials and volunteering dates from BCS Berkshire."/>`);
    });
    $$renderer2.push(`<div class="container">`);
    Breadcrumbs($$renderer2, { trail: [{ label: "Events" }] });
    $$renderer2.push(`<!----></div> `);
    PageHero($$renderer2, {
      eyebrow: "Events",
      title: "Talks, panels and nights out for Berkshire's tech community",
      lede: "Most of our events are free and open to everyone — you don't need to be a BCS member to come along."
    });
    $$renderer2.push(`<!----> <section class="section container"><h2>Regular fixtures</h2> <div class="grid-2 svelte-13hsgdq"><!--[-->`);
    const each_array = ensure_array_like(recurringFixtures);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let fixture = each_array[$$index];
      $$renderer2.push(`<div class="card fixture-card svelte-13hsgdq"><p class="cadence svelte-13hsgdq">${escape_html(fixture.cadence)}</p> <h3 class="svelte-13hsgdq">${escape_html(fixture.title)}</h3> <p class="time svelte-13hsgdq">${escape_html(fixture.time)}</p> <p>${escape_html(fixture.description)}</p></div>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section class="section container"><h2>Coming up</h2> <div class="grid-3 svelte-13hsgdq"><!--[-->`);
    const each_array_1 = ensure_array_like(upcomingEvents);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let event = each_array_1[$$index_1];
      EventCard($$renderer2, { event });
    }
    $$renderer2.push(`<!--]--></div></section> <section class="section container-narrow suggest-card card svelte-13hsgdq"><h2>Have an idea for a talk?</h2> <p>We're always looking for speakers and topics — from deep technical sessions to career and
		soft-skills talks. Tell us what you'd like to see, or offer to speak yourself.</p> <a class="btn btn-primary"${attr("href", `mailto:${site.contact.events}`)}>Email the events team</a></section>`);
  });
}
export {
  _page as default
};
