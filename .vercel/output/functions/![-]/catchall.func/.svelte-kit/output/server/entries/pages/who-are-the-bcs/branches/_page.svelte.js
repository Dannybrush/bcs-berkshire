import { h as head, d as ensure_array_like, e as escape_html, c as attr_class, b as attr } from "../../../../chunks/index.js";
import { B as Breadcrumbs, P as PageHero } from "../../../../chunks/Breadcrumbs.js";
import { s as site } from "../../../../chunks/site.js";
const nearbyBranches = [
  "Oxfordshire",
  "Hampshire",
  "Surrey",
  "Wiltshire",
  "Beds, Bucks and Northants",
  "London (West)"
];
const allBranches = [
  "Aberdeen",
  "Beds, Bucks and Northants",
  "Berkshire",
  "Birmingham",
  "Bristol and Bath",
  "Cheltenham and Gloucester",
  "Chester and North Wales",
  "Coventry",
  "Cumbria (North)",
  "Dorset",
  "Edinburgh",
  "Glasgow",
  "Hampshire",
  "Hereford and Worcester",
  "Hertfordshire",
  "Humberside",
  "Kent",
  "Leicester",
  "London (Central)",
  "London (North)",
  "London (South)",
  "London (West)",
  "Manchester",
  "Merseyside",
  "Mid-Wales",
  "Newcastle upon Tyne",
  "Northern Ireland",
  "Nottingham and Derby",
  "Oxfordshire",
  "Preston and District",
  "Shropshire",
  "South Wales",
  "South West",
  "South Yorkshire",
  "Stoke-on-Trent and Staffordshire",
  "Surrey",
  "Sussex",
  "Tayside and Fife",
  "Teesside and District",
  "West Yorkshire",
  "Wiltshire",
  "Wolverhampton"
];
const featuredSpecialistGroups = [
  {
    name: "Artificial Intelligence",
    blurb: "Covers the theory, practice and governance of AI — a natural link to our own AI Taskforce."
  },
  {
    name: "Information Security (ISSG)",
    blurb: "One of BCS’s largest groups, focused on cyber and information security practice."
  },
  {
    name: "Green IT",
    blurb: "Sustainable computing, from datacentre efficiency to net-zero digital strategy."
  },
  {
    name: "BCSWomen",
    blurb: "Supporting women working in and studying towards careers in technology."
  },
  {
    name: "Enterprise Architecture",
    blurb: "Best practice for architecting large, complex technology estates."
  },
  {
    name: "Digital Accessibility",
    blurb: "Promoting accessible, inclusive design and engineering across digital services."
  }
];
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head("1scywva", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>BCS Branches — ${escape_html(site.name)}</title>`);
      });
      $$renderer3.push(`<meta name="description" content="How BCS's UK-wide network of regional branches and specialist groups fits together, and where Berkshire sits within it."/>`);
    });
    $$renderer2.push(`<div class="container">`);
    Breadcrumbs($$renderer2, {
      trail: [
        { label: "Who are the BCS", href: "/who-are-the-bcs" },
        { label: "BCS Branches" }
      ]
    });
    $$renderer2.push(`<!----></div> `);
    PageHero($$renderer2, {
      eyebrow: "Who are the BCS",
      title: "Regional and specialist communities",
      lede: "Beyond national membership, BCS members can get involved locally through regional branches, and by subject through specialist groups. Most members belong to both."
    });
    $$renderer2.push(`<!----> <section class="section container two-col svelte-1scywva"><div><h2>Regional branches</h2> <p>BCS's network spans almost fifty branches across the UK, from Aberdeen to Belfast and
			Sussex to the South West — each run by local volunteers, holding its own programme of
			talks, socials and outreach. Berkshire is one of them.</p> <h3>Neighbouring branches</h3> <ul class="chip-list svelte-1scywva"><!--[-->`);
    const each_array = ensure_array_like(nearbyBranches);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let branch = each_array[$$index];
      $$renderer2.push(`<li class="svelte-1scywva">${escape_html(branch)}</li>`);
    }
    $$renderer2.push(`<!--]--></ul> <details class="all-branches svelte-1scywva"><summary class="svelte-1scywva">See all UK branches</summary> <ul class="chip-list svelte-1scywva"><!--[-->`);
    const each_array_1 = ensure_array_like(allBranches);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let branch = each_array_1[$$index_1];
      $$renderer2.push(`<li${attr_class("svelte-1scywva", void 0, { "current": branch === "Berkshire" })}>${escape_html(branch)}</li>`);
    }
    $$renderer2.push(`<!--]--></ul></details></div> <div><h2>Specialist groups</h2> <p>Alongside regional branches, over fifty specialist groups let members go deep on a subject —
			from Artificial Intelligence to Fortran. A few with particular relevance to our members:</p> <div class="sg-list svelte-1scywva"><!--[-->`);
    const each_array_2 = ensure_array_like(featuredSpecialistGroups);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let sg = each_array_2[$$index_2];
      $$renderer2.push(`<div class="card sg-card svelte-1scywva"><h3 class="svelte-1scywva">${escape_html(sg.name)}</h3> <p class="svelte-1scywva">${escape_html(sg.blurb)}</p></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></section> <section class="section container-narrow cta card svelte-1scywva"><h2>Regional or specialist — why not both?</h2> <p>Most active BCS members belong to their local branch for networking and community, and to one
		or more specialist groups for depth in their field. Membership of both is normally included in
		your BCS subscription.</p> <a class="btn btn-outline"${attr("href", `${site.bcs.url}/membership-and-registrations/member-communities/`)} target="_blank" rel="noreferrer">Browse all member communities on bcs.org</a></section>`);
  });
}
export {
  _page as default
};
