// Writing. Plain data, no MDX: each post body is a list of blocks that the
// post page renders with the site's own typography.
//
// Both posts are drafts written from facts already on the site. Proloy needs
// to read and approve them before `draft` is switched off.

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  /** ISO date, YYYY-MM-DD. */
  date: string;
  summary: string;
  readingTime: string;
  /** True until the owner has reviewed the post. Shows a "Draft" badge. */
  draft?: boolean;
  body: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "designing-a-pos-for-a-5-inch-screen",
    title: "Designing a POS for a 5-inch screen",
    date: "2026-11-19",
    summary:
      "What changed when the billing counter moved into a cashier's hand: scanning without a tap, hiding controls instead of disabling them, and errors that don't block the queue.",
    readingTime: "4 min read",
    draft: true,
    body: [
      {
        type: "p",
        text: "Since 2024 I've been leading the design of the mobile POS stream at Ginesys One. The first thing it shipped was Quebuster, a POS that runs on a phone so store staff can bill customers in the aisle when the counters are backed up. It went out Pan-India in time for the festive peak, and it's now in use at more than 1,000 retailers.",
      },
      {
        type: "p",
        text: "When I started, the mobile flow was a straight port of the desktop POS. Dense screens, dialogs stacked on dialogs, forms with twelve fields visible at once. That works when someone sits at a counter all day with a keyboard and a scanner. It does not work for a person standing in a crowded shop, holding a phone in one hand and usually a garment in the other.",
      },
      {
        type: "p",
        text: "So most of the decisions came from one picture: a cashier, one free thumb, a queue, and a network that may or may not be there. A lot of these stores are in basements or in tier 2 and tier 3 cities where the connection is weak.",
      },
      { type: "h2", text: "Scanning should not need a tap" },
      {
        type: "p",
        text: "On Quebuster, holding a barcode in front of the camera adds the item. The phone beeps and a short message names what was added. The cashier doesn't have to look down to know the scan worked, and doesn't have to press anything to make it happen.",
      },
      {
        type: "p",
        text: "When scanning is finished, the Done button appears exactly where the Scan button was. I wrote this into the build notes as a rule: swap the label and the action, keep the position and the styling. If a button moves between two states of the same screen, people miss it with their thumb. It sounds small, but it's the kind of thing a developer would reasonably change if it wasn't written down.",
      },
      { type: "h2", text: "Hide it, don't grey it out" },
      {
        type: "p",
        text: "Every retailer on Ginesys sets its own billing policy. Some let cashiers edit prices, some don't. The usual move is to show the option greyed out. I asked for the opposite: if a retailer's policy doesn't allow price edits, the Edit Pricing option isn't on the screen at all.",
      },
      {
        type: "p",
        text: "On a desktop a disabled control is mostly harmless. On a phone it takes space you don't have, and it invites a question the cashier can't answer: why can't I tap this? There's nobody to ask in the middle of a bill. Taking it out is simpler for everyone.",
      },
      {
        type: "p",
        text: "Customer tagging followed the same idea of letting policy decide without the cashier thinking about it. Some retailers want the customer identified before the first scan, others only before the bill closes. I designed it as one flow with two entry points, and described it to engineering as a soft requirement at the start and a hard one at the end. If the phone number search finds nobody, the add customer form opens with that number already filled in.",
      },
      { type: "h2", text: "Errors that don't stop the queue" },
      {
        type: "p",
        text: "On a phone, a modal takes over the whole screen. If every failed request opens one, the cashier spends the rush closing popups. So I split errors into two kinds.",
      },
      {
        type: "ul",
        items: [
          "Recoverable errors, like a dropped connection, sit in a bar at the bottom with a retry. The cart stays visible and the cashier can keep going.",
          "Only destructive moments get a full sheet. Clearing a customer also empties the cart, so the app asks first, and both buttons get equal weight so the design doesn't push the cashier either way.",
        ],
      },
      {
        type: "p",
        text: "The connection itself is always shown. There's a status pill at the top of every screen, and the app has three modes: online, weak (the cart is held on the phone and the queue is visible), and offline (item lookup still works, billing waits). Each mode has its own colour and icon, so the cashier knows what will work right now and what will catch up later.",
      },
      { type: "h2", text: "What I'd tell myself at the start" },
      {
        type: "p",
        text: "Test on the real devices early. Some screens that felt fine in Figma didn't hold up on the scanner phones our clients actually use: different aspect ratios, different touch targets, different light. We started reviewing on hardware around month three, and that saved a redesign of the scan screen. I'd do it from week one now.",
      },
      {
        type: "p",
        text: "And write the rules down next to the screens. The Figma file has dated developer notes beside each flow, because a lot of the behaviour on a small screen can't be read off a static frame. The screen shows what it looks like. The note says what it does.",
      },
    ],
  },
  {
    slug: "shipping-my-own-front-end",
    title: "What changed when I started shipping my own front end",
    date: "2026-11-19",
    summary:
      "I designed Ginesys Insights and wrote its whole front end with coding agents. The handoff went away, and so did a lot of time spent making mockups look nice.",
    readingTime: "4 min read",
    draft: true,
    body: [
      {
        type: "p",
        text: "For most of my career the job ended at Figma. I designed the screens, wrote notes, and a developer rebuilt them. Since 2025 I've also been writing the front end of what I design. On Ginesys Insights, the new report builder for Ginesys One, I built the entire interface myself, and I still send changes as pull requests like the rest of the team.",
      },
      {
        type: "p",
        text: "This isn't a post about how designers should all code. It's about what actually changed in my work once I did.",
      },
      { type: "h2", text: "How I got here" },
      {
        type: "p",
        text: "The first real attempt was EaseCare, a home care marketplace I worked on as a freelancer, where the product owner built the backend. I started it in Figma Make, which was a good way to get something clickable quickly. Once I wanted more control over the code, I moved it to Claude Code.",
      },
      {
        type: "p",
        text: "For Insights I used Cursor and Claude, along with Grok. Claude is my daily driver. I use Grok for smaller changes and fixes. For bigger or more tangled tasks I sometimes split the work across several agents at once, each with its own part. I read and review what they produce. When something touches the backend, or I'm not sure the approach is right, I still ask the developers.",
      },
      {
        type: "p",
        text: "The stack is Next.js and React, with AG Grid for the tables. I wrote the field list, the rows, columns and values setup, the filters, the new sheet steps, and the share and schedule screens.",
      },
      { type: "h2", text: "The handoff loop went away" },
      {
        type: "p",
        text: "Before, a lot of the work was back and forth. A screen gets built, something doesn't match or a state is missing, I write a note, it gets fixed, and round it goes again. Nobody was doing anything wrong. That's just what happens when one person designs and another person rebuilds it from a picture.",
      },
      {
        type: "p",
        text: "On Insights that loop doesn't exist, because nobody rebuilds my screens. The module didn't need a separate front-end engineer. The conversations I do have with developers are better ones: is this query going to be slow, does the API return what I need, is there a reason not to do it this way. Those are questions I should have been asking anyway.",
      },
      { type: "h2", text: "Less polish, more function" },
      {
        type: "p",
        text: "This is the change I didn't expect. I spend much less time making designs pretty now. A polished mockup used to be the deliverable, so it had to look finished. Now the deliverable is the working thing, and a mockup is only useful until I can try the real version.",
      },
      {
        type: "p",
        text: "So my time goes into whether a feature works with real data, and more and more into whether it's needed at all. When building a feature is my own afternoon and not a ticket in someone else's sprint, I think harder about whether it should exist.",
      },
      {
        type: "p",
        text: "It also changed what I could show customers. Before building, I spent two weeks in sessions with reporting teams at several retailers. The prototype I took back to them afterwards was a working web app with sample data, not a set of frames, so people could build an actual report in it. One customer's team said it was better than their current tool and asked to trial it without being prompted. I'm not sure that happens with a Figma prototype.",
      },
      { type: "h2", text: "What it doesn't change" },
      {
        type: "p",
        text: "The research still comes first. On Insights the most useful thing I did wasn't the code. It was finding out that the people building reports cared more about trusting the numbers and knowing how long a run would take than about the interface. Writing the front end myself just meant I could act on that faster.",
      },
      {
        type: "p",
        text: "And it doesn't make me a backend engineer. Agents write a lot of code quickly, and that is exactly why reviewing it matters. I'd rather ask a developer a basic question than ship something I don't understand.",
      },
      {
        type: "p",
        text: "Insights is in pilot testing now and is planned to go live in February 2027. I'm still raising pull requests on it.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatPostDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
