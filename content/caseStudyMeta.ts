// Per-case extras for the case study pages. Every decision here restates
// something the case study page itself already says; nothing new is claimed.

export type KeyDecision = {
  /** The decision, in a short line. */
  decision: string;
  /** One sentence on why, or what it traded off. */
  why: string;
};

export const keyDecisions: Record<string, KeyDecision[]> = {
  "ginesys-pos": [
    {
      decision: "Hide Edit Pricing when policy forbids it, rather than greying it out.",
      why: "A disabled control on a phone takes up space and invites a question the cashier can't answer.",
    },
    {
      decision: "Recoverable errors sit in a footer bar with a retry, not in a modal.",
      why: "Only destructive states get a full sheet, so a dropped connection doesn't take over the screen.",
    },
    {
      decision: "Done appears exactly where Scan was.",
      why: "A button that moves between two states of the same screen is a button people miss with their thumb.",
    },
  ],
  "reports-insights": [
    {
      decision: "The slow, freezing report went to engineering, not into the redesign.",
      why: "It needed a queue, a cancel button and an admin permission, so I logged it as its own item rather than make it wait on the new builder.",
    },
    {
      decision: "Pivot is the default view.",
      why: "Two accounts asked for it by name, and one team kept four separate reports where one pivoted report would do.",
    },
    {
      decision: "Nothing is queried until you press Generate.",
      why: "Arranging a report costs nothing, which is what the customer most attached to their old tool valued: looking around without committing to anything.",
    },
  ],
  "ginesys-wms": [
    {
      decision: "Every screen has to work with the thumb of one hand.",
      why: "That one rule ruled out centre-screen dialogs, top tab bars and dense tables, and committed the app to bottom sheets and card lists.",
    },
    {
      decision: "The 15-field goods receipt form became four guided steps.",
      why: "Fields are context aware, so the worker is never asked for something the system already knows.",
    },
    {
      decision: "Task cards instead of data tables.",
      why: "Each card shows the two or three numbers the worker actually needs, and everything else is one tap away.",
    },
  ],
  easecare: [
    {
      decision: "Two apps that share one model, not one app for both sides.",
      why: "Requests, bids, bookings and conversations let the apps work together without either side learning the other's vocabulary.",
    },
    {
      decision: "Swipe to shortlist incoming bids.",
      why: "It compresses comparing providers into a single screen for a family that wants to choose quickly.",
    },
    {
      decision: "Messages live inside the booking thread.",
      why: "Providers and families talk where the booking is, not in a separate inbox to manage.",
    },
  ],
  playbawaal: [
    {
      decision: "The TV shows only what everyone may see; secrets stay on each phone.",
      why: "Tickets, words and roles are on your phone, hidden until you choose to look.",
    },
    {
      decision: "No install and no account for players; only the host signs in.",
      why: "Everyone else joins from their phone with a name, a sticker and a 4-letter code.",
    },
    {
      decision: "The host's device runs the game and keeps its state, not the database.",
      why: "State lives in the host's memory and local storage, so refreshing the TV mid-game picks up where it left off.",
    },
  ],
};
