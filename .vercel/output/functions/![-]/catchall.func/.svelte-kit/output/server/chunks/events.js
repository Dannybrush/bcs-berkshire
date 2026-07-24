import { e as escape_html, b as attr } from "./index.js";
function EventCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { event } = $$props;
    $$renderer2.push(`<article class="card event-card svelte-14fxf3u"><p class="event-date svelte-14fxf3u">${escape_html(event.displayDate)}</p> <h3 class="svelte-14fxf3u">${escape_html(event.title)}</h3> <dl class="meta svelte-14fxf3u"><div><dt class="svelte-14fxf3u">Time</dt><dd class="svelte-14fxf3u">${escape_html(event.time)}</dd></div> <div><dt class="svelte-14fxf3u">Where</dt><dd class="svelte-14fxf3u">${escape_html(event.location)}</dd></div> <div><dt class="svelte-14fxf3u">Format</dt><dd class="svelte-14fxf3u">${escape_html(event.format)}</dd></div></dl> <p>${escape_html(event.summary)}</p> `);
    if (event.isPlaceholder) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<p class="tbc svelte-14fxf3u">Details to be confirmed — check back or ask events.berkshire@bcs.org.uk</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (event.registerUrl) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<a class="btn btn-outline svelte-14fxf3u"${attr("href", event.registerUrl)} target="_blank" rel="noreferrer">Register interest</a>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></article>`);
  });
}
const recurringFixtures = [
  {
    title: "Branch committee meeting",
    cadence: "First Tuesday of every month",
    time: "7:00pm – 9:00pm",
    description: "Open to all members online or in person. Contact the secretary for joining instructions — there is no obligation to join the committee."
  },
  {
    title: "Reading Geek Night",
    cadence: "Second Tuesday of every month",
    time: "From 7:00pm, talks from 8:00pm",
    description: "Short talks on science, tech, design and geekery, run in partnership with the wider Reading tech community, with plenty of time for networking."
  }
];
const upcomingEvents = [
  {
    slug: "reading-geek-night-february",
    title: "Reading Geek Night",
    date: "2026-02-10",
    displayDate: "Tuesday 10 February 2026",
    time: "7:00pm, till late",
    location: "Reading (venue confirmed nearer the time)",
    format: "In person",
    summary: "Our regular evening of short talks on science, technology, design and geekery, with plenty of time to chat over drinks. Free and open to all.",
    registerUrl: "https://forms.office.com/e/jRPc8RqFfV"
  },
  {
    slug: "satro-stemfest-volunteers",
    title: "SATRO STEMfest — call for volunteers",
    date: "2026-03-23",
    displayDate: "Monday 23 March 2026",
    time: "Daytime — school hours",
    location: "ACS International School, Cobham, Surrey",
    format: "In person",
    summary: "Marking ten years of BCS Berkshire's support for SATRO STEMfest, inspiring the next generation of engineers and technologists. Get in touch with our STEM Ambassador if you can help on the day."
  },
  {
    slug: "universities-apprenticeships-debate",
    title: "Universities, Professional Training and Apprenticeships: The Future Path to Success",
    date: "2026-04-01",
    displayDate: "Date to be confirmed",
    time: "Evening",
    location: "Henley Business School, University of Reading, Whiteknights Campus, Reading RG6 6UR",
    format: "In person",
    summary: "A panel debate on the routes into a technology career as apprenticeships gain ground alongside traditional degrees — bringing together voices from industry, academia and training providers.",
    isPlaceholder: true
  }
];
export {
  EventCard as E,
  recurringFixtures as r,
  upcomingEvents as u
};
