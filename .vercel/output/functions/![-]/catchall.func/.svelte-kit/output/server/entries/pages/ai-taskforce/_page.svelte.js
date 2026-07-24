import { h as head, d as ensure_array_like, e as escape_html, b as attr } from "../../../chunks/index.js";
import { B as Breadcrumbs, P as PageHero } from "../../../chunks/Breadcrumbs.js";
import { s as site } from "../../../chunks/site.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const focusAreas = [
      {
        title: "Applied AI briefings",
        body: "Practical sessions on using AI tools well at work — from prompt craft to evaluating vendor claims — pitched at people who use AI day to day, not just those who build it."
      },
      {
        title: "Ethics, governance & impact",
        body: "Roundtables on the responsible side of AI: bias, transparency, data protection and the real-world impact of automated decisions on people and society."
      },
      {
        title: "Sector spotlights",
        body: "Panels looking at how AI is reshaping specific fields locally — from AI in film and creative industries to its role in healthcare, finance and education."
      },
      {
        title: "Regional collaboration",
        body: "We work with regional partners including the Thames Valley AI Hub to widen the conversation beyond BCS membership and connect people doing similar work nearby."
      }
    ];
    head("nsb10o", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>AI Taskforce — ${escape_html(site.name)}</title>`);
      });
      $$renderer3.push(`<meta name="description" content="BCS Berkshire's AI Taskforce runs briefings, roundtables and panels on applied and responsible AI for the local tech community."/>`);
    });
    $$renderer2.push(`<div class="container">`);
    Breadcrumbs($$renderer2, { trail: [{ label: "AI Taskforce" }] });
    $$renderer2.push(`<!----></div> `);
    PageHero($$renderer2, {
      eyebrow: "AI Taskforce",
      tone: "deep",
      title: "Making sense of AI, together",
      lede: "Artificial intelligence now touches almost every role in IT. Our AI Taskforce exists to help Berkshire members understand it, use it responsibly, and separate genuine capability from hype."
    });
    $$renderer2.push(`<!----> <section class="section container"><div class="grid-2 svelte-nsb10o"><!--[-->`);
    const each_array = ensure_array_like(focusAreas);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let area = each_array[$$index];
      $$renderer2.push(`<div class="card"><h2 class="svelte-nsb10o">${escape_html(area.title)}</h2> <p>${escape_html(area.body)}</p></div>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section class="section container-narrow"><h2>Recent activity</h2> <p>The taskforce has recently convened an AI roundtable on ethics and impact, and is preparing a
		panel on how AI is reshaping the film industry — creatively, ethically and commercially.
		Details of upcoming taskforce sessions are published on our <a href="/events">events page</a> and in the branch <a href="/newsletter">newsletter</a>.</p> <h2>Get involved</h2> <p>Whether you're deep in machine learning research or simply trying to use AI tools sensibly at
		work, the taskforce welcomes members at every level. Get in touch if you'd like to speak at a
		session, suggest a topic, or help organise.</p> <a class="btn btn-primary"${attr("href", `mailto:${site.contact.events}`)}>Contact the AI Taskforce</a></section>`);
  });
}
export {
  _page as default
};
