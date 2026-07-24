import { h as head, e as escape_html, d as ensure_array_like } from "../../../../chunks/index.js";
import { B as Breadcrumbs, P as PageHero } from "../../../../chunks/Breadcrumbs.js";
import { s as site } from "../../../../chunks/site.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const activities = [
      {
        title: "Monthly talks & networking",
        body: "A regular programme of speakers and panels on technology, careers and ethics, plus the informal Reading Geek Night every second Tuesday."
      },
      {
        title: "Schools & outreach",
        body: "Hands-on support for schools and colleges across Berkshire through STEMfest, TeenTech Surrey and the Bucks Skills Show, connecting students with real IT careers."
      },
      {
        title: "Student & early careers support",
        body: "A close relationship with the University of Reading Computer Science Society and BCS student chapter, plus an annual hackathon and the Anthony Parker Memorial Prize."
      },
      {
        title: "AI Taskforce",
        body: "Briefings, roundtables and panels helping members use AI well and think seriously about its ethics and impact."
      }
    ];
    head("13czamg", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Who is BCS Berkshire? — ${escape_html(site.name)}</title>`);
      });
      $$renderer3.push(`<meta name="description" content="The story of BCS Berkshire — a volunteer-run branch of over 2,500 IT professionals and enthusiasts."/>`);
    });
    $$renderer2.push(`<div class="container">`);
    Breadcrumbs($$renderer2, {
      trail: [
        { label: "Who are the BCS", href: "/who-are-the-bcs" },
        { label: "Who is BCS Berkshire?" }
      ]
    });
    $$renderer2.push(`<!----></div> `);
    PageHero($$renderer2, {
      eyebrow: "Who are the BCS",
      title: "Who is BCS Berkshire?",
      lede: "We're a community of IT professionals and enthusiasts based in and around Berkshire, committed to working with organisations, schools and colleges to raise the profile of computing and IT in the local area — for children, students and adults alike."
    });
    $$renderer2.push(`<!----> <section class="section container stats-row svelte-13czamg"><div class="stat card svelte-13czamg"><p class="stat-num svelte-13czamg">${escape_html(site.memberCount)}</p> <p class="stat-label svelte-13czamg">Members across the county</p></div> <div class="stat card svelte-13czamg"><p class="stat-num svelte-13czamg">Monthly</p> <p class="stat-label svelte-13czamg">Committee meetings, open to all</p></div> <div class="stat card svelte-13czamg"><p class="stat-num svelte-13czamg">1957</p> <p class="stat-label svelte-13czamg">Founding year of BCS nationally</p></div></section> <section class="section container"><h2>What we do</h2> <div class="grid-2 svelte-13czamg"><!--[-->`);
    const each_array = ensure_array_like(activities);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let activity = each_array[$$index];
      $$renderer2.push(`<div class="card"><h3 class="svelte-13czamg">${escape_html(activity.title)}</h3> <p>${escape_html(activity.body)}</p></div>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section class="section container-narrow"><h2>Run by volunteers</h2> <p>Like every BCS branch, Berkshire is run entirely by members giving their own time — elected
		each September at our AGM, with specialist skills co-opted onto the committee as needed. Read
		more about the people involved on our <a href="/meet-the-committee">committee page</a>, or
		come along to a meeting to see how it works.</p> <a class="btn btn-primary" href="/meet-the-committee">Meet the committee</a></section>`);
  });
}
export {
  _page as default
};
