import { h as head, d as ensure_array_like, e as escape_html, b as attr } from "../../../chunks/index.js";
import { B as Breadcrumbs, P as PageHero } from "../../../chunks/Breadcrumbs.js";
import { s as site } from "../../../chunks/site.js";
const partners = [
  {
    name: "University of Reading — Computer Science Society & BCS Student Chapter",
    category: "Academic",
    description: "Our closest academic partnership, connecting students with the branch, our hackathon and volunteering opportunities, and a regular source of committee talent."
  },
  {
    name: "Henley Business School, University of Reading",
    category: "Academic",
    description: "Host venue for branch debates and panel events on careers, education and technology."
  },
  {
    name: "ISC2 Thames Valley Chapter",
    category: "Community & industry",
    description: "Our cybersecurity partner chapter, with whom we co-promote AGMs, briefings and technical talks across the Thames Valley.",
    url: "https://isc2tvch.co.uk"
  },
  {
    name: "Thames Valley AI Hub",
    category: "Community & industry",
    description: "A regional community for AI practitioners that we cross-promote events with, including panels on applied and responsible AI.",
    url: "https://www.tvaihub.co.uk"
  },
  {
    name: "Reading Geek Night",
    category: "Community & industry",
    description: "The long-running monthly tech talks night we help support and promote across Reading."
  },
  {
    name: "SATRO STEMfest",
    category: "Schools & outreach",
    description: "A schools STEM festival we have proudly supported for a decade, inspiring the next generation of engineers and technologists."
  },
  {
    name: "TeenTech Surrey",
    category: "Schools & outreach",
    description: "Co-sponsored with the BBC, connecting students aged 11–19 with real technology careers and role models."
  },
  {
    name: "Bucks Skills Show",
    category: "Schools & outreach",
    description: "A regional skills fair where we help showcase computing and IT careers to students and families."
  }
];
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const categories = ["Academic", "Community & industry", "Schools & outreach"];
    function byCategory(cat) {
      return partners.filter((p) => p.category === cat);
    }
    head("1s1gc6o", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Partners, Sponsors, Affiliations &amp; Friends — ${escape_html(site.name)}</title>`);
      });
      $$renderer3.push(`<meta name="description" content="The academic, industry and schools partners who help BCS Berkshire run events, outreach and student programmes."/>`);
    });
    $$renderer2.push(`<div class="container">`);
    Breadcrumbs($$renderer2, {
      trail: [{ label: "Partners, Sponsors, Affiliations & Friends" }]
    });
    $$renderer2.push(`<!----></div> `);
    PageHero($$renderer2, {
      eyebrow: "Partners",
      title: "Partners, Sponsors, Affiliations & Friends",
      lede: "None of what we do would happen without the organisations who host us, co-promote events, and open doors for students across Berkshire."
    });
    $$renderer2.push(`<!----> <!--[-->`);
    const each_array = ensure_array_like(categories);
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let cat = each_array[$$index_1];
      $$renderer2.push(`<section class="section container"><h2>${escape_html(cat)}</h2> <div class="grid-3 svelte-1s1gc6o"><!--[-->`);
      const each_array_1 = ensure_array_like(byCategory(cat));
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let partner = each_array_1[$$index];
        $$renderer2.push(`<div class="card partner-card svelte-1s1gc6o"><h3 class="svelte-1s1gc6o">${escape_html(partner.name)}</h3> <p>${escape_html(partner.description)}</p> `);
        if (partner.url) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<a${attr("href", partner.url)} target="_blank" rel="noreferrer" class="svelte-1s1gc6o">Visit site →</a>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></div>`);
      }
      $$renderer2.push(`<!--]--></div></section>`);
    }
    $$renderer2.push(`<!--]--> <section class="section container-narrow cta card svelte-1s1gc6o"><h2>Interested in partnering with us?</h2> <p>We work with universities, employers, schools and other technology communities across
		Berkshire. If your organisation would like to sponsor an event, host a talk, or support our
		schools programme, we'd love to hear from you.</p> <a class="btn btn-primary"${attr("href", `mailto:${site.contact.chair}`)}>Talk to the branch chair</a></section>`);
  });
}
export {
  _page as default
};
