import { h as head, e as escape_html, b as attr, d as ensure_array_like } from "../../../chunks/index.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils2.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/root.js";
import "../../../chunks/state.svelte.js";
import { B as Breadcrumbs, P as PageHero } from "../../../chunks/Breadcrumbs.js";
import { s as site } from "../../../chunks/site.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { form } = $$props;
    let submitting = false;
    const officerContacts = [
      { label: "Chair", email: site.contact.chair },
      { label: "Treasurer", email: site.contact.treasurer },
      { label: "Secretary", email: site.contact.secretary },
      { label: "Events", email: site.contact.events },
      { label: "STEM & schools", email: site.contact.stem },
      { label: "Volunteering", email: site.contact.volunteering }
    ];
    head("39ihk8", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Contact us — ${escape_html(site.name)}</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Get in touch with BCS Berkshire — email the committee directly or send us a message."/>`);
    });
    $$renderer2.push(`<div class="container">`);
    Breadcrumbs($$renderer2, { trail: [{ label: "Contact us" }] });
    $$renderer2.push(`<!----></div> `);
    PageHero($$renderer2, {
      eyebrow: "Contact us",
      title: "Get in touch with BCS Berkshire",
      lede: "Whether it's a question about membership, an idea for a talk, or an offer to volunteer, we'd love to hear from you."
    });
    $$renderer2.push(`<!----> <section class="section container contact-grid svelte-39ihk8"><div class="card form-card svelte-39ihk8"><h2 class="svelte-39ihk8">Send us a message</h2> `);
    if (form?.success) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<p class="success svelte-39ihk8" role="status">Thanks — your message has been sent. We usually reply within a few working days.</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<form method="POST">`);
      if (form?.errors?.form) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<p class="error svelte-39ihk8" role="alert">${escape_html(form.errors.form)}</p>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> <div class="honeypot svelte-39ihk8" aria-hidden="true"><label for="company" class="svelte-39ihk8">Company</label> <input type="text" id="company" name="company" tabindex="-1" autocomplete="off" class="svelte-39ihk8"/></div> <div class="field svelte-39ihk8"><label for="name" class="svelte-39ihk8">Full name</label> <input type="text" id="name" name="name" required=""${attr("value", form?.values?.name ?? "")}${attr("aria-invalid", !!form?.errors?.name)}${attr("aria-describedby", form?.errors?.name ? "name-error" : void 0)} class="svelte-39ihk8"/> `);
      if (form?.errors?.name) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<p class="error svelte-39ihk8" id="name-error">${escape_html(form.errors.name)}</p>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div> <div class="field svelte-39ihk8"><label for="email" class="svelte-39ihk8">Email address</label> <input type="email" id="email" name="email" required=""${attr("value", form?.values?.email ?? "")}${attr("aria-invalid", !!form?.errors?.email)}${attr("aria-describedby", form?.errors?.email ? "email-error" : void 0)} class="svelte-39ihk8"/> `);
      if (form?.errors?.email) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<p class="error svelte-39ihk8" id="email-error">${escape_html(form.errors.email)}</p>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div> <div class="field svelte-39ihk8"><label for="topic" class="svelte-39ihk8">What's this about?</label> `);
      $$renderer2.select(
        {
          id: "topic",
          name: "topic",
          value: form?.values?.topic ?? "",
          class: ""
        },
        ($$renderer3) => {
          $$renderer3.option({ value: "General enquiry" }, ($$renderer4) => {
            $$renderer4.push(`General enquiry`);
          });
          $$renderer3.option({ value: "Membership" }, ($$renderer4) => {
            $$renderer4.push(`Membership`);
          });
          $$renderer3.option({ value: "Speaking at an event" }, ($$renderer4) => {
            $$renderer4.push(`Speaking at an event`);
          });
          $$renderer3.option({ value: "Sponsorship or partnership" }, ($$renderer4) => {
            $$renderer4.push(`Sponsorship or partnership`);
          });
          $$renderer3.option({ value: "Schools &amp; STEM" }, ($$renderer4) => {
            $$renderer4.push(`Schools &amp; STEM`);
          });
          $$renderer3.option({ value: "Volunteering" }, ($$renderer4) => {
            $$renderer4.push(`Volunteering`);
          });
        },
        "svelte-39ihk8"
      );
      $$renderer2.push(`</div> <div class="field svelte-39ihk8"><label for="message" class="svelte-39ihk8">Message</label> <textarea id="message" name="message" rows="5" required="" minlength="10" maxlength="4000"${attr("aria-invalid", !!form?.errors?.message)}${attr("aria-describedby", form?.errors?.message ? "message-error" : void 0)} class="svelte-39ihk8">`);
      const $$body = escape_html(form?.values?.message ?? "");
      if ($$body) {
        $$renderer2.push(`${$$body}`);
      }
      $$renderer2.push(`</textarea> `);
      if (form?.errors?.message) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<p class="error svelte-39ihk8" id="message-error">${escape_html(form.errors.message)}</p>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div> <button class="btn btn-primary" type="submit"${attr("disabled", submitting, true)}>${escape_html("Send message")}</button></form>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="contact-side svelte-39ihk8"><div class="card"><h2 class="svelte-39ihk8">Branch officers</h2> <ul class="officer-list svelte-39ihk8"><!--[-->`);
    const each_array = ensure_array_like(officerContacts);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let c = each_array[$$index];
      $$renderer2.push(`<li class="svelte-39ihk8"><span class="officer-label svelte-39ihk8">${escape_html(c.label)}</span> <a${attr("href", `mailto:${c.email}`)}>${escape_html(c.email)}</a></li>`);
    }
    $$renderer2.push(`<!--]--></ul></div> <div class="card"><h2 class="svelte-39ihk8">Committee meetings</h2> <p>${escape_html(site.meeting.cadence)}</p> <p>${escape_html(site.meeting.note)}</p></div></div></section>`);
  });
}
export {
  _page as default
};
