import { e as escape_html, b as attr, h as head, d as ensure_array_like } from "../../../chunks/index.js";
import { B as Breadcrumbs, P as PageHero } from "../../../chunks/Breadcrumbs.js";
import { s as site } from "../../../chunks/site.js";
import { o as officers, g as generalMembers } from "../../../chunks/committee.js";
function CommitteeCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { member } = $$props;
    $$renderer2.push(`<article class="card member-card svelte-w30by3"><div class="avatar svelte-w30by3" aria-hidden="true">${escape_html(member.initials)}</div> <div><h3 class="svelte-w30by3">${escape_html(member.name)}</h3> <p class="role svelte-w30by3">${escape_html(member.role)}</p> <p class="bio svelte-w30by3">${escape_html(member.bio)}</p> `);
    if (member.linkedin) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<a class="linkedin svelte-w30by3"${attr("href", member.linkedin)} target="_blank" rel="noreferrer">LinkedIn profile</a>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></article>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head("10mguam", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Meet the Committee — ${escape_html(site.name)}</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Meet the volunteers who run BCS Berkshire, elected each year at the branch AGM."/>`);
    });
    $$renderer2.push(`<div class="container">`);
    Breadcrumbs($$renderer2, { trail: [{ label: "Meet the Committee" }] });
    $$renderer2.push(`<!----></div> `);
    PageHero($$renderer2, {
      eyebrow: "Meet the committee",
      title: "Run by volunteers, elected by members",
      lede: "The Berkshire branch is run by a committee elected at the branch AGM each September. Committee members with specialist skills are also co-opted from time to time."
    });
    $$renderer2.push(`<!----> <section class="section container"><h2>Officers</h2> <div class="grid-2 svelte-10mguam"><!--[-->`);
    const each_array = ensure_array_like(officers);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let member = each_array[$$index];
      CommitteeCard($$renderer2, { member });
    }
    $$renderer2.push(`<!--]--></div></section> <section class="section container"><h2>General committee members</h2> <div class="grid-2 svelte-10mguam"><!--[-->`);
    const each_array_1 = ensure_array_like(generalMembers);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let member = each_array_1[$$index_1];
      CommitteeCard($$renderer2, { member });
    }
    $$renderer2.push(`<!--]--></div></section> <section class="section container-narrow card join-card svelte-10mguam"><h2>Join the committee</h2> <p>Meetings run from 7 to 9pm on the first Tuesday of every month, online or in person when we
		can. They're open to all members — come along to learn more about what we do, with no
		obligation to join. Ask our secretary for joining instructions.</p> <a class="btn btn-primary"${attr("href", `mailto:${site.contact.secretary}`)}>Email the secretary</a></section>`);
  });
}
export {
  _page as default
};
