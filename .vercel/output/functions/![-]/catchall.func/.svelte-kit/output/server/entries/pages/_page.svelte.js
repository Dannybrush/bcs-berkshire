import { h as head, e as escape_html, d as ensure_array_like, b as attr } from "../../chunks/index.js";
import { B as BranchMark } from "../../chunks/BranchMark.js";
import { E as EventCard, u as upcomingEvents, r as recurringFixtures } from "../../chunks/events.js";
import { s as site } from "../../chunks/site.js";
import { o as officers } from "../../chunks/committee.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const nextEvents = upcomingEvents.slice(0, 3);
    const featuredOfficers = officers.slice(0, 3);
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(site.name)} — Home</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", site.description)}/>`);
    });
    $$renderer2.push(`<section class="hero svelte-1uha8ag"><div class="container hero-grid svelte-1uha8ag"><div class="hero-copy"><p class="eyebrow">`);
    BranchMark($$renderer2, { size: 60 });
    $$renderer2.push(`<!----> ${escape_html(site.parentOrg)}</p> <h1>Berkshire's community of IT professionals, 2,500 strong.</h1> <p class="lede">We're the local branch of BCS, run entirely by volunteers — bringing talks, networking,
				schools outreach and career support to everyone working in or curious about technology
				across the county.</p> <div class="hero-actions svelte-1uha8ag"><a class="btn btn-primary" href="/events">See upcoming events</a> <a class="btn btn-outline" href="/who-are-the-bcs/who-is-bcs-berkshire">Who we are</a></div> <dl class="hero-stats svelte-1uha8ag"><div><dt class="svelte-1uha8ag">Members</dt> <dd class="svelte-1uha8ag">${escape_html(site.memberCount)}</dd></div> <div><dt class="svelte-1uha8ag">Meets</dt> <dd class="svelte-1uha8ag">Monthly</dd></div> <div><dt class="svelte-1uha8ag">Since</dt> <dd class="svelte-1uha8ag">1957</dd></div></dl></div> <div class="hero-panel card svelte-1uha8ag"><h2 class="panel-title svelte-1uha8ag">Next up</h2> <!--[-->`);
    const each_array = ensure_array_like(recurringFixtures);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let fixture = each_array[$$index];
      $$renderer2.push(`<div class="fixture svelte-1uha8ag"><p class="fixture-cadence svelte-1uha8ag">${escape_html(fixture.cadence)}</p> <p class="fixture-title svelte-1uha8ag">${escape_html(fixture.title)}</p> <p class="fixture-time svelte-1uha8ag">${escape_html(fixture.time)}</p></div>`);
    }
    $$renderer2.push(`<!--]--> <a class="btn btn-gold svelte-1uha8ag" href="/events">Full events calendar</a></div></div></section> <section class="section container"><div class="section-head svelte-1uha8ag"><div><p class="eyebrow">Upcoming events</p> <h2>Talks, panels and nights out for the Berkshire tech community</h2></div> <a class="btn btn-outline" href="/events">View all events</a></div> <div class="grid-3 svelte-1uha8ag"><!--[-->`);
    const each_array_1 = ensure_array_like(nextEvents);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let event = each_array_1[$$index_1];
      EventCard($$renderer2, { event });
    }
    $$renderer2.push(`<!--]--></div></section> <section class="section band svelte-1uha8ag"><div class="container band-grid svelte-1uha8ag"><div><p class="eyebrow eyebrow--gold">AI Taskforce</p> <h2>Helping members make sense of AI — and use it responsibly</h2> <p class="lede">Our AI Taskforce runs briefings, roundtables and panels on applied and responsible AI for
				members across every sector, from ethics and governance to hands-on adoption in the
				workplace.</p> <a class="btn btn-primary" href="/ai-taskforce">Explore the AI Taskforce</a></div> <div class="band-card card svelte-1uha8ag"><h3 class="svelte-1uha8ag">Anthony Parker Memorial Prize</h3> <p>Awarded each year in memory of our former chairman, recognising an outstanding student
				computing project from young people across Berkshire.</p> <a class="btn btn-outline" href="/anthony-parker-memorial-prize">Read about the prize</a></div></div></section> <section class="section container"><div class="section-head svelte-1uha8ag"><div><p class="eyebrow">Meet the committee</p> <h2>Run entirely by volunteers, for the benefit of the profession</h2></div> <a class="btn btn-outline" href="/meet-the-committee">Meet the full committee</a></div> <div class="grid-3 svelte-1uha8ag"><!--[-->`);
    const each_array_2 = ensure_array_like(featuredOfficers);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let member = each_array_2[$$index_2];
      $$renderer2.push(`<article class="card officer-preview svelte-1uha8ag"><div class="avatar svelte-1uha8ag" aria-hidden="true">${escape_html(member.initials)}</div> <h3 class="svelte-1uha8ag">${escape_html(member.name)}</h3> <p class="role svelte-1uha8ag">${escape_html(member.role)}</p></article>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section class="section container-narrow cta-section svelte-1uha8ag"><h2>Join the conversation shaping IT in Berkshire</h2> <p class="lede">Whether you're taking your first step into a tech career or leading transformation at board
		level, there's a BCS grade for you — and a branch on your doorstep.</p> <div class="hero-actions svelte-1uha8ag"><a class="btn btn-primary" href="/who-are-the-bcs/registrations-and-memberships">Compare membership grades</a> <a class="btn btn-outline" href="/contact-us">Get in touch</a></div></section>`);
  });
}
export {
  _page as default
};
