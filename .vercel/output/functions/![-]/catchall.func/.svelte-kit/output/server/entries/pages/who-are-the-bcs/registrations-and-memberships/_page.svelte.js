import { h as head, d as ensure_array_like, e as escape_html } from "../../../../chunks/index.js";
import { B as Breadcrumbs, P as PageHero } from "../../../../chunks/Breadcrumbs.js";
import { s as site } from "../../../../chunks/site.js";
const membershipGrades = [
  {
    code: "Affiliate",
    name: "Affiliate membership",
    audience: "Anyone with an interest in IT, without a professional connection to it",
    description: "The most open route into BCS, for people who care about the impact of technology but don’t work in the sector day to day."
  },
  {
    code: "Student",
    name: "Student membership",
    audience: "Students on an IT-related course or Digital T-level",
    description: "Free or low-cost membership for those studying computing, giving early access to the professional community and events."
  },
  {
    code: "AMBCS",
    name: "Associate membership",
    audience: "IT apprentices, trainees, or those on a Skills Bootcamp",
    description: "The first step on the professional ladder — suited to around a year of IT experience and/or relevant entry-level qualifications."
  },
  {
    code: "MBCS",
    name: "Professional membership",
    audience: "Anyone working or teaching in computing and technology",
    description: "BCS’s core professional grade. Members practising, building, maintaining or teaching IT can typically apply directly, backed by a CV or LinkedIn profile."
  },
  {
    code: "FBCS",
    name: "Fellowship",
    audience: "Established leaders and role models in the IT field",
    description: "The most senior BCS grade, recognising significant, sustained contribution and seniority within the profession."
  }
];
const registrations = [
  {
    code: "CITP",
    name: "Chartered IT Professional",
    description: "BCS’s benchmark of IT excellence. Professional members holding CITP registration qualify as Chartered members of BCS, recognising broad, senior competence across the profession."
  },
  {
    code: "CEng",
    name: "Chartered Engineer",
    description: "Awarded by BCS under licence from the Engineering Council to members whose work centres on engineering practice within IT and software."
  },
  {
    code: "IEng",
    name: "Incorporated Engineer",
    description: "A professional engineering registration for members applying established techniques and technologies, awarded by BCS under licence from the Engineering Council."
  },
  {
    code: "RITTech",
    name: "Registered IT Technician",
    description: "Recognises practical, hands-on technical competence — often the first formal professional registration on the way to Chartered status."
  }
];
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head("152t40a", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Registrations &amp; Memberships — ${escape_html(site.name)}</title>`);
      });
      $$renderer3.push(`<meta name="description" content="A plain-English guide to BCS membership grades — AMBCS, MBCS, FBCS — and professional registrations like CITP."/>`);
    });
    $$renderer2.push(`<div class="container">`);
    Breadcrumbs($$renderer2, {
      trail: [
        { label: "Who are the BCS", href: "/who-are-the-bcs" },
        { label: "Registrations & Memberships" }
      ]
    });
    $$renderer2.push(`<!----></div> `);
    PageHero($$renderer2, {
      eyebrow: "Who are the BCS",
      title: "Registrations & Memberships",
      lede: "BCS membership is structured in grades that track your experience, with professional registrations layered on top to recognise Chartered-level standing."
    });
    $$renderer2.push(`<!----> <section class="section container"><h2>Membership grades</h2> <div class="table-wrap card svelte-152t40a"><table class="svelte-152t40a"><thead><tr><th scope="col" class="svelte-152t40a">Grade</th><th scope="col" class="svelte-152t40a">Who it's for</th><th scope="col" class="svelte-152t40a">What it means</th></tr></thead><tbody><!--[-->`);
    const each_array = ensure_array_like(membershipGrades);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let grade = each_array[$$index];
      $$renderer2.push(`<tr><th scope="row" class="svelte-152t40a">${escape_html(grade.code)}</th><td class="svelte-152t40a">${escape_html(grade.audience)}</td><td class="svelte-152t40a">${escape_html(grade.description)}</td></tr>`);
    }
    $$renderer2.push(`<!--]--></tbody></table></div> <p class="postnominal-note svelte-152t40a">Membership postnominals — AMBCS, MBCS or FBCS — are normally shown after any decorations,
		degrees and Chartered letters you hold, for example <em>Jo Smith BEng CEng MBCS</em>.</p></section> <section class="section band svelte-152t40a"><div class="container"><h2>Professional registrations</h2> <p class="lede">Registration is layered on top of membership and involves peer assessment against defined
			industry standards — it's how BCS recognises Chartered-level competence.</p> <div class="grid-2 svelte-152t40a"><!--[-->`);
    const each_array_1 = ensure_array_like(registrations);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let reg = each_array_1[$$index_1];
      $$renderer2.push(`<div class="card"><h3 class="svelte-152t40a">${escape_html(reg.code)} — ${escape_html(reg.name)}</h3> <p>${escape_html(reg.description)}</p></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></section> <section class="section container-narrow cta card svelte-152t40a"><h2>Ready to join, or thinking about upgrading?</h2> <p>Membership is managed centrally by BCS, not by the branch — but we're always happy to talk
		through which grade or registration fits where you are, and what Berkshire members get out of
		it locally.</p> <div class="cta-actions svelte-152t40a"><a class="btn btn-primary" href="https://www.bcs.org/membership-and-registrations/become-a-member/" target="_blank" rel="noreferrer">Join BCS</a> <a class="btn btn-outline" href="/contact-us">Ask the branch</a></div></section>`);
  });
}
export {
  _page as default
};
