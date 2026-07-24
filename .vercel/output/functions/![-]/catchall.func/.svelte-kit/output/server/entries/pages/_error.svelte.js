import { h as head, e as escape_html, a as store_get, u as unsubscribe_stores } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import { s as site } from "../../chunks/site.js";
function _error($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    head("1j96wlh", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(store_get($$store_subs ??= {}, "$page", page).status)} — ${escape_html(site.name)}</title>`);
      });
    });
    $$renderer2.push(`<section class="section container-narrow error-page svelte-1j96wlh"><p class="eyebrow">Error ${escape_html(store_get($$store_subs ??= {}, "$page", page).status)}</p> <h1>`);
    if (store_get($$store_subs ??= {}, "$page", page).status === 404) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`We couldn't find that page`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`Something went wrong`);
    }
    $$renderer2.push(`<!--]--></h1> <p class="lede">`);
    if (store_get($$store_subs ??= {}, "$page", page).status === 404) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`The page you're looking for may have moved or no longer exists. Try the links below, or
			head back to the homepage.`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`${escape_html(store_get($$store_subs ??= {}, "$page", page).error?.message ?? "An unexpected error occurred. Please try again shortly.")}`);
    }
    $$renderer2.push(`<!--]--></p> <div class="actions svelte-1j96wlh"><a class="btn btn-primary" href="/">Back to homepage</a> <a class="btn btn-outline" href="/contact-us">Contact us</a></div></section>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _error as default
};
