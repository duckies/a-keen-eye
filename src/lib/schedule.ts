import { format, intervalToDuration } from "date-fns";

const config = {
  name: "Achievement — A Keen Eye",
  firstStart: "2023-08-23T00:00:00.000Z",
  firstEnd: "2023-09-05T00:00:00.000Z",
  rotation: [
    {
      name: "Crystalline Eye",
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
      name: "Crown Jewels",
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
      name: "Purple Hills",
      link: "https://www.wowhead.com/item=131732/purple-hills-of-eredath",
    },
    {
      name: "Spirit of Eche'ro",
      link: "https://www.wowhead.com/item=131734/spirit-of-echero",
    },
  ],
};

const DAY_IN_MS = 1000 * 60 * 60 * 24;

export function getCurrentSchedule() {
  let start = new Date(config.firstStart);
  let end = new Date(config.firstEnd);

  const duration = end.getTime() - start.getTime();
  const now = new Date();
  const events = [];
  let currentEvent: null | number = null;

  for (let i = 0; events.length < config.rotation.length; i++) {
    // It's active, or in the future.
    if (now.getTime() < end.getTime()) {
      if (currentEvent === null) {
        currentEvent = i;
      }

      events.push({
        order: (i % config.rotation.length) + 1,
        name: config.rotation[i % config.rotation.length].name,
        link: config.rotation[i % config.rotation.length].link,
        start: new Date(start.getTime()),
        end: new Date(end.getTime()),
      });
    }

    start = new Date(end.getTime() + DAY_IN_MS);
    end = new Date(start.getTime() + duration);
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

  return format(utc, "MMM do yyyy");
}
