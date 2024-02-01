import { format, intervalToDuration } from "date-fns";

const config = {
  name: "Achievement — A Keen Eye",
  seed: "2016-08-31T00:00:00.000Z",
  event_duration: 14 * 60 * 60 * 24 * 1000,
  rotation: [
    {
      name: "Crystalline Eye of Undravius",
      link: "https://www.wowhead.com/item=131724/crystalline-eye-of-undravius",
    },
    {
      name: "Starlight Beacon",
      link: "https://www.wowhead.com/item=131717/starlight-beacon",
    },
    {
      name: "Spear of Rethu",
      link: "https://www.wowhead.com/item=131733/spear-of-rethu",
    },
    {
      name: "Crown Jewels of Suramar",
      link: "https://www.wowhead.com/item=131740/crown-jewels-of-suramar",
    },
    {
      name: "Imp Generator",
      link: "https://www.wowhead.com/item=131735/imp-generator",
    },
    {
      name: "Black Rook Key",
      link: "https://www.wowhead.com/item=131745/key-of-kalyndras",
    },
    {
      name: "Wyrmy Tunkins",
      link: "https://www.wowhead.com/item=136922/wyrmy-tunkins",
    },
    {
      name: "Shard of Sciallax",
      link: "https://www.wowhead.com/quest=41182/uncovering-the-orb-of-sciallax",
    },
    {
      name: "Prizerock Neckband",
      link: "https://www.wowhead.com/item=131736/prizerock-neckband",
    },
    {
      name: "Blood of Young Mannoroth",
      link: "https://www.wowhead.com/item=131743/blood-of-young-mannoroth",
    },
    {
      name: "Key to Nar'thalas Academy",
      link: "https://www.wowhead.com/item=131744/key-to-narthalas-academy",
    },
    {
      name: "Purple Hills of Eredath",
      link: "https://www.wowhead.com/item=131732/purple-hills-of-eredath",
    },
    {
      name: "Spirit of Eche'ro",
      link: "https://www.wowhead.com/item=131734/spirit-of-echero",
    },
  ],
};

export function getSchedule() {
  const now = new Date();
  const seed = new Date(2016, 7, 31);
  const num_events = config.rotation.length;

  const events_completed = Math.floor(
    (now.getTime() - seed.getTime()) / config.event_duration
  );
  const current_event_index = events_completed % num_events;
  const current_event_date = new Date(
    seed.getTime() + events_completed * config.event_duration
  );

  const events = [];

  for (let i = 0; i < num_events; i++) {
    const event_index = (current_event_index + i) % num_events;
    const metadata = config.rotation[event_index];

    events.push({
      step: event_index + 1,
      date: new Date(current_event_date.getTime() + i * config.event_duration),
      name: metadata.name,
      link: metadata.link,
    });
  }

  return events;
}

export function formatUTCDate(date: Date = new Date()) {
  // Pretend the UTC values are local.
  const utc = new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );

  return format(utc, "MMMM do, yyyy");
}
