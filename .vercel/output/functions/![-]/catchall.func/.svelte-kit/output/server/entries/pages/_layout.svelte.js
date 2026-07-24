import { e as escape_html, b as attr, c as attr_class, d as ensure_array_like, u as unsubscribe_stores, f as derived, a as store_get, h as head } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import { B as BranchMark } from "../../chunks/BranchMark.js";
import { p as primaryNav, f as footerNav } from "../../chunks/navigation.js";
import { s as site } from "../../chunks/site.js";
function Header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let mobileOpen = false;
    let openDropdown = null;
    const currentPath = derived(() => store_get($$store_subs ??= {}, "$page", page).url.pathname);
    function isActive(href) {
      if (href === "/") return currentPath() === "/";
      return currentPath() === href || currentPath().startsWith(href + "/");
    }
    $$renderer2.push(`<header class="site-header svelte-1elxaub"><div class="container bar svelte-1elxaub"><a href="/" class="brand svelte-1elxaub">`);
    BranchMark($$renderer2, { size: 100 });
    $$renderer2.push(`<!----> <span class="brand-text svelte-1elxaub"><strong class="svelte-1elxaub">BCS Berkshire</strong> <span class="brand-sub svelte-1elxaub">${escape_html(site.parentOrg)}</span></span></a> <button class="menu-toggle svelte-1elxaub"${attr("aria-expanded", mobileOpen)} aria-controls="primary-nav"><span class="visually-hidden">${escape_html("Open menu")}</span> <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">`);
    {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<path d="M4 8h18M4 13h18M4 18h18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"></path>`);
    }
    $$renderer2.push(`<!--]--></svg></button> <nav id="primary-nav"${attr_class("primary-nav svelte-1elxaub", void 0, { "open": mobileOpen })} aria-label="Primary"><ul class="svelte-1elxaub"><!--[-->`);
    const each_array = ensure_array_like(primaryNav);
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let item = each_array[$$index_1];
      $$renderer2.push(`<li${attr_class("nav-item", void 0, { "has-children": !!item.children })}>`);
      if (item.children) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="dropdown-wrap svelte-1elxaub"><button${attr_class("nav-link dropdown-trigger svelte-1elxaub", void 0, { "active": isActive(item.href) })}${attr("aria-expanded", openDropdown === item.href)}>${escape_html(item.label)} <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"></path></svg></button> <ul${attr_class("dropdown-menu svelte-1elxaub", void 0, { "open": openDropdown === item.href })}><!--[-->`);
        const each_array_1 = ensure_array_like(item.children);
        for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
          let child = each_array_1[$$index];
          $$renderer2.push(`<li><a${attr("href", child.href)}${attr_class("dropdown-link svelte-1elxaub", void 0, { "active": currentPath() === child.href })}>${escape_html(child.label)}</a></li>`);
        }
        $$renderer2.push(`<!--]--></ul></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`<a${attr("href", item.href)}${attr_class("nav-link svelte-1elxaub", void 0, { "active": isActive(item.href) })}>${escape_html(item.label)}</a>`);
      }
      $$renderer2.push(`<!--]--></li>`);
    }
    $$renderer2.push(`<!--]--></ul> <a href="https://www.bcs.org/membership-and-registrations/become-a-member/" class="btn btn-gold nav-cta svelte-1elxaub">Join BCS</a></nav></div></header>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    $$renderer2.push(`<footer class="site-footer svelte-jz8lnl"><div class="container footer-grid svelte-jz8lnl"><div class="footer-brand svelte-jz8lnl"><a href="/" class="brand svelte-jz8lnl">`);
    BranchMark($$renderer2, { size: 34 });
    $$renderer2.push(`<!----> <span><strong>BCS Berkshire</strong></span></a> <p class="svelte-jz8lnl">${escape_html(site.description)}</p> <div class="socials svelte-jz8lnl"><a${attr("href", site.social.linkedin)} aria-label="BCS on LinkedIn" target="_blank" rel="noreferrer" class="svelte-jz8lnl">LinkedIn</a> <a${attr("href", site.social.facebook)} aria-label="BCS Berkshire on Facebook" target="_blank" rel="noreferrer" class="svelte-jz8lnl">Facebook</a> <a${attr("href", site.social.youtube)} aria-label="BCS on YouTube" target="_blank" rel="noreferrer" class="svelte-jz8lnl">YouTube</a></div></div> <nav class="footer-nav svelte-jz8lnl" aria-label="Footer"><h2 class="footer-heading svelte-jz8lnl">Explore</h2> <ul class="svelte-jz8lnl"><!--[-->`);
    const each_array = ensure_array_like(footerNav);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<li><a${attr("href", item.href)} class="svelte-jz8lnl">${escape_html(item.label)}</a></li>`);
    }
    $$renderer2.push(`<!--]--></ul></nav> <div class="footer-contact"><h2 class="footer-heading svelte-jz8lnl">Get in touch</h2> <ul class="contact-list svelte-jz8lnl"><li><a${attr("href", `mailto:${site.contact.chair}`)} class="svelte-jz8lnl">Chair</a></li> <li><a${attr("href", `mailto:${site.contact.secretary}`)} class="svelte-jz8lnl">Secretary</a></li> <li><a${attr("href", `mailto:${site.contact.events}`)} class="svelte-jz8lnl">Events</a></li> <li><a${attr("href", `mailto:${site.contact.volunteering}`)} class="svelte-jz8lnl">Volunteering</a></li></ul> <p class="meeting-note svelte-jz8lnl">${escape_html(site.meeting.cadence)}<br/>${escape_html(site.meeting.note)}</p></div></div> <div class="legal-bar svelte-jz8lnl"><div class="container legal-inner svelte-jz8lnl"><p class="svelte-jz8lnl">© ${escape_html(year)} BCS Berkshire — a branch of ${escape_html("BCS, The Chartered Institute for IT")},
				a Royal Chartered body and registered charity in England &amp; Wales (No.
				${escape_html(site.bcs.charityNumberEW)}) and Scotland (No. ${escape_html(site.bcs.charityNumberScotland)}).</p> <div class="legal-links svelte-jz8lnl"><a href="/who-are-the-bcs" class="svelte-jz8lnl">Who are the BCS</a> <a${attr("href", site.bcs.url)} target="_blank" rel="noreferrer" class="svelte-jz8lnl">bcs.org</a></div></div></div></footer>`);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children } = $$props;
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(site.name)} — ${escape_html(site.tagline)}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", site.description)}/> <meta property="og:site_name"${attr("content", site.name)}/> <meta property="og:type" content="website"/> <meta name="twitter:card" content="summary"/>`);
    });
    $$renderer2.push(`<a href="#main-content" class="skip-link">Skip to main content</a> `);
    Header($$renderer2);
    $$renderer2.push(`<!----> <main id="main-content">`);
    children($$renderer2);
    $$renderer2.push(`<!----></main> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _layout as default
};
