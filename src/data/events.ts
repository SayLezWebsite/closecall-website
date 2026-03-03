export type EventItem = {
  title: string;
  venue: string;
  city: string;
  date: string;
  lineup: string[];
  flyer: string;
  eventUrl?: string;
};

export const closecallEvents: EventItem[] = [
  {
    title: "Closecall",
    venue: "Skatecafe",
    city: "Amsterdam",
    date: "27 February 2026 · 22:00–03:00",
    lineup: ["YEMZ", "DANN", "SAY LEZ", "DAVE NUNES", "MAEY", "BLACKSTA", "PASSION DEEZ"],
    flyer: "/events/closecall-2026-02-27.png",
    eventUrl: "https://skatecafe.weticket.io/closecall",
  },
  {
    title: "KUMO invites: CLOSECALL",
    venue: "Parallel",
    city: "Amsterdam",
    date: "5 December 2025 · 23:59–05:00",
    lineup: ["Ryota", "Yung Singh", "21-L", "DANN", "SAY LEZ", "Aures"],
    flyer: "/events/kumo-invites-closecall-2025-12-05.jpg",
    eventUrl: "https://parallel.am/programme/kumo-invites-closecall",
  },
];
