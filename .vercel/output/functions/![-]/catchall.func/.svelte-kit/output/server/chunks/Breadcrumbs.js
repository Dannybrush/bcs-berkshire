import { c as attr_class, e as escape_html, d as ensure_array_like, b as attr } from "./index.js";
function PageHero($$renderer, $$props) {
  let { eyebrow, title, lede, tone = "light" } = $$props;
  $$renderer.push(`<section${attr_class("hero svelte-4s1vdh", void 0, { "deep": tone === "deep" })}><div class="container">`);
  if (eyebrow) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<p${attr_class("eyebrow", void 0, { "eyebrow--gold": tone === "deep" })}>${escape_html(eyebrow)}</p>`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--> <h1>${escape_html(title)}</h1> `);
  if (lede) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<p class="lede svelte-4s1vdh">${escape_html(lede)}</p>`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--></div></section>`);
}
function Breadcrumbs($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { trail } = $$props;
    $$renderer2.push(`<nav aria-label="Breadcrumb" class="breadcrumbs svelte-1jovwxm"><ol class="svelte-1jovwxm"><li class="svelte-1jovwxm"><a href="/" class="svelte-1jovwxm">Home</a></li> <!--[-->`);
    const each_array = ensure_array_like(trail);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let crumb = each_array[i];
      $$renderer2.push(`<li class="svelte-1jovwxm"><span aria-hidden="true">/</span> `);
      if (crumb.href && i !== trail.length - 1) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<a${attr("href", crumb.href)} class="svelte-1jovwxm">${escape_html(crumb.label)}</a>`);
      } else {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`<span aria-current="page" class="svelte-1jovwxm">${escape_html(crumb.label)}</span>`);
      }
      $$renderer2.push(`<!--]--></li>`);
    }
    $$renderer2.push(`<!--]--></ol></nav>`);
  });
}
export {
  Breadcrumbs as B,
  PageHero as P
};
