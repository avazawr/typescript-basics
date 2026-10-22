type TicketTier = "standing" | "seated" | "vip";
type Seat = [string, number];

interface Ticket {
  readonly id: number;
  tier: TicketTier;
  seat?: Seat;
}

type VipTicket = Ticket & { loungeAccess: boolean };

function ticketPrice(tier: TicketTier): number {
  switch (tier) {
    case "standing":
      return 10;
    case "seated":
      return 50;
    case "vip":
      return 150;
  }
}

function describeSeat(seat: Seat): string {
  return `Row ${seat[0]}, seat ${seat[1]}`;
}

function parseQuantity(input: unknown): number {
  if (typeof input === "number") {
    return input;
  } else return 0;
}

const ticket1: Ticket = {
  id: 1,
  tier: "standing",
};

const ticket2: Ticket = {
  id: 2,
  tier: "seated",
  seat: ["B", 16],
};

const ticket3: VipTicket = {
  id: 3,
  tier: "vip",
  seat: ["A", 8],
  loungeAccess: true,
};

console.log(parseQuantity(12));
console.log(parseQuantity("12"));
console.log(parseQuantity(JSON.parse("3")));

console.log(ticket1);
console.log(ticket2);
console.log(ticket3);
