import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseSection, HighlightList, PullQuote } from "@/components/case-study/Section";
import { NextCase } from "@/components/case-study/NextCase";
import { Footer } from "@/components/sections/Footer";
import { getCaseStudy } from "@/content/caseStudies";
import { FlowFigure } from "@/components/case-study/FlowFigure";
import { Sparkles, Tv, Smartphone, Code2, ShieldCheck, TestTube2, ExternalLink } from "lucide-react";

export const metadata = {
  title: "BAWAAL Case Study | Proloy Karmakar",
  description:
    "A personal project: desi party games where the TV is the board and every phone is a controller. Designed and built solo.",
};

export default function PlayBawaalCaseStudy() {
  const caseStudy = getCaseStudy("playbawaal");
  if (!caseStudy) return null;

  return (
    <>
      <CaseStudyHero caseStudy={caseStudy} />

      <CaseSection eyebrow="Why I built it" title="Everyone was home. Everyone was on their phone." icon={Sparkles}>
        <p>
          During Diwali all my cousins were at home, and most of them spent the
          evening on their own phones. I was feeling a bit off about it, so I
          decided to build something we could all enjoy together, using the
          phones they were already holding.
        </p>
        <p>
          The idea was simple: put the game on the TV, and let every phone in
          the room become a controller. The games are ones most Indian
          families already know, like Housie, Antakshari and Raja Mantri Chor
          Sipahi.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://playbawaal.vercel.app/"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:opacity-90"
          >
            Play it <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
          <a
            href="https://github.com/exonxo/playbawaal"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-surface-elevated"
          >
            Code on GitHub <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </CaseSection>

      <CaseSection eyebrow="How it plays" title="The TV is the board. Phones are the controllers." icon={Tv}>
        <p>
          The host opens BAWAAL on a TV or laptop and signs in with Google. The
          screen shows a 4-letter room code and a QR code. Everyone else opens
          the link on their phone, types their name, picks a sticker and they
          are in. Players don&rsquo;t install anything or make an account;
          only the host signs in.
        </p>
        <FlowFigure
          src="/case-studies/playbawaal/party.jpg"
          width={2600}
          height={1120}
          alt="The host's big screen showing room code XSLS, five players and the game shelf, next to two phones: the join screen with name and sticker, and the lobby saying Aa gaye, Riya!"
          caption="The big screen lobby, and joining from a phone"
        />
        <p>
          There are 13 games: Housie, Chor Kaun?, Dumb Charades, Antakshari,
          Raja Mantri Chor Sipahi, Ludo Yatra, Draw &amp; Guess, Emoji
          Picture, Kaun Banega Champion and more. Every game card shows the
          age range and how many people it needs, so the host can pick one
          that fits whoever is in the room.
        </p>
      </CaseSection>

      <CaseSection eyebrow="Design" title="Designed for a noisy living room." icon={Smartphone}>
        <p>
          The phone is where the secrets live: your Housie ticket, your word
          in Chor Kaun?, your role in Raja Mantri. The TV only shows what
          everyone is allowed to see. Some of the decisions:
        </p>
        <HighlightList
          items={[
            "Secrets are hidden until you choose to look. In Chor Kaun? the screen says to hide your phone first, then press and hold the envelope to see your word.",
            "The copy is Hinglish, the way my family talks: “Chalo, join karo”, “Aapka ticket chhap raha hai”. It reads like the room, not like an app.",
            "Answers are forgiving. In Emoji Picture a slightly wrong spelling still counts.",
            "Housie has an auto-mark switch for anyone who would rather just watch the numbers.",
            "Refreshing the TV mid-game resumes the game, and a second device trying to host is asked before it takes over.",
          ]}
        />
        <FlowFigure
          src="/case-studies/playbawaal/housie.jpg"
          width={2400}
          height={1120}
          alt="Housie on the big screen, with the called number, a countdown to the next number and the host's ticket, next to a player's phone ticket with prize lines below."
          caption="Housie: numbers called on the TV, tickets on each phone"
        />
        <FlowFigure
          src="/case-studies/playbawaal/phones.jpg"
          width={1800}
          height={1100}
          alt="Three phones: the Chor Kaun envelope with a press and hold to reveal note, an Emoji Picture puzzle with a guess box, and a Housie ticket."
          caption="What players hold: Chor Kaun?, Emoji Picture and Housie"
        />
      </CaseSection>

      <CaseSection eyebrow="Building it" title="One host runs the game. Everyone else follows." icon={Code2}>
        <p>
          It is a Next.js and React app with Tailwind, backed by Supabase. I
          set up the database, the Google sign-in and the realtime channels
          myself.
        </p>
        <HighlightList
          items={[
            "The host's device runs the game. Each game is its own module with a pure reducer, a public view for the TV and a private view for each player.",
            "Phones and the TV talk over Supabase Realtime broadcast channels. Game state isn't stored in the database; the host keeps it in memory and in local storage, so a refresh picks up where it left off.",
            "The database only records which signed-in host owns which room code.",
            "Without Supabase keys it falls back to a demo mode that syncs tabs in one browser, which is how I developed and tested it.",
          ]}
        />
        <p>
          I built it with AI coding agents, Claude Code and Cursor, and
          merged the work through pull requests, the same way I work at my
          job. The design, the decisions and the reviews were mine.
        </p>
      </CaseSection>

      <CaseSection eyebrow="Keeping it fair" title="Cousins will cheat if they can." icon={ShieldCheck}>
        <p>
          A party game with secret roles is only fun if nobody can peek. So the
          security had to be real, not decorative.
        </p>
        <HighlightList
          items={[
            "Every update from the host is signed (ECDSA P-256 with WebCrypto). Phones only accept updates signed with the key on record for that room, so nobody can pretend to be the host.",
            "Each phone agrees a secret key with the host (ECDH, then AES-GCM). Tickets, roles and words are encrypted for their owner, so players can't read each other's secrets.",
            "Room codes can't be listed from the database; the app looks them up one at a time.",
          ]}
        />
        <PullQuote>
          Still open: anyone with the code can join and flood the channel with
          junk, and the code lookup has no rate limit. Both are written down in
          the README rather than hidden.
        </PullQuote>
      </CaseSection>

      <CaseSection eyebrow="Testing" title="Every game played by bots first." icon={TestTube2}>
        <p>
          I set up Playwright scripts that open a host and four phones and play
          through every game: starting, a few moves, ending and switching
          games, plus refreshing the host and players mid-game and opening
          the host on a second device. One run caught that a game could start
          with more players than it supports if the button check was bypassed;
          now the host refuses to start a game outside its player limits.
        </p>
        <FlowFigure
          src="/case-studies/playbawaal/chor-kaun.jpg"
          width={2400}
          height={1120}
          alt="Chor Kaun on the big screen with the sealed envelope, the voting list of players and a timer, next to a player's phone showing the same round."
          caption="Chor Kaun?, captured from one of the test runs"
        />
      </CaseSection>

      <NextCase currentSlug="playbawaal" />
      <Footer />
    </>
  );
}
