import "@/lib/schedule";
import { formatUTCDate, getCurrentSchedule } from "@/lib/schedule";

export default function Home() {
  const events = getCurrentSchedule();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-5 flex gap-x-5">
        <div className="flex items-center content-center">
          <img
            src="https://wow.zamimg.com/images/wow/icons/large/trade_archaeology.jpg"
            alt="Achievement icon of papers and magnifying glass"
            width="56px"
            height="56px"
            className="border-2 border-lime-200 rounded-md"
          />
        </div>
        <div>
          <h1 className="text-4xl mb-2">
            <a
              href="https://www.wowhead.com/achievement=10603/a-keen-eye"
              target="_blank"
              rel="noreferrer"
              className="text-lime-200"
            >
              A Keen Eye
            </a>{" "}
            — Achievement Schedule
          </h1>
          <p>
            I keep forgetting to check the schedule and rummage through the
            comments, so I made a schedule that should stay updated by itself.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 w-full">
        {events.map((event, i) => (
          <div className="flex-grow" key={event.start.getTime()}>
            <div className="flex gap-x-3 rounded-lg w-full border-2 border-lime-200/20 bg-neutral-900 px-5 py-4">
              <div>
                <span className="text-4xl text-lime-200">{event.order}</span>
              </div>
              <div>
                <a
                  className="text-xl font-semibold text-lime-200"
                  href={event.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {event.name}
                  {i === 0 && " (Active)"}
                </a>
                <p>
                  {formatUTCDate(event.start)} - {formatUTCDate(event.end)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
