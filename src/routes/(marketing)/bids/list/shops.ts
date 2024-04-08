export const info = {
  name: "Your Bids",
}

export type AutoShop = {
  name: string
  address: string
  rating: number
  num_ratings: number
}

export const autoShops: AutoShop[] = [
  {
    name: "Mike's Auto",
    address: "1234 Main Street, Orlando, FL 32222",
    rating: 8.8,
    num_ratings: 145,
  },
  {
    name: "Paul & Son's Automative",
    address: "800 International Drive, Orlando, FL 32121",
    rating: 7.5,
    num_ratings: 23,
  },
]
