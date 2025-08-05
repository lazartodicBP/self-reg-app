const printWeekly = {
  src: "/digital-weekly.webp",
  width: 240,
  height: 100,
};

const digitalBasic = {
  src: "/digital-basic.webp",
  width: 240,
  height: 100,
};

const digitalAndPrint = {
  src: "/digitalweeklyprint.webp",
  width: 240,
  height: 100,
};


export const descriptions = {
  "14057": {
    title: "Consumer - Digital (Basic)",
    description: "",
    images: [digitalBasic],
  },
  "14058": {
    title: "Consumer - Digital (Premium)",
    description: "",
    images: [digitalBasic],
  },
  "14059": {
    title: "Consumer - Digital & Print (Premium)",
    description: "",
    images: [digitalAndPrint],
  },
  "14060": {
    title: "Consumer - Print (Weekly)",
    description: "",
    images: [printWeekly],
  },
};

export type Product = {
  Id: string;
  Name: string;
  Rate: string;
  CurrencySign?: string;
  Amount?: string;
  Status?: string;
};

export const productsData: Product[] = [
  { Id: '14057',    Name: 'Consumer - Digital (Basic)',             Rate: '$8.00' },
  { Id: '14058',    Name: 'Consumer - Digital (Premium)',           Rate: '$15.00', Status: 'ACTIVE' },
  { Id: '14059',    Name: 'Consumer - Digital & Print (Premium)',   Rate: '$19.00', Status: 'ACTIVE' },
  { Id: '14060',    Name: 'Consumer - Print (Weekly)',              Rate: '$7.00' },
]
