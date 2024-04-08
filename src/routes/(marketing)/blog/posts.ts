export const blogInfo = {
  name: "The AutoShops.com Blog",
  description: "Learn more about maintenance and taking care of your car",
}

export type BlogPost = {
  link: string
  date: string // date is a string 'YYYY-MM-DD'
  title: string
  description: string
  parsedDate?: Date // Optional because it's added dynamically
}

// Update this list with the actual blog post list
// Create a page in the "(posts)" directory for each entry
const blogPosts: BlogPost[] = [
  {
    title: "Using Synthetic Motor Oil",
    description:
      "Learn why synthetic motor oil is the better option for your vehicle",
    link: "/blog/synthetic-motor-oil",
    date: "2024-04-06",
  },
  {
    title: "Tire Rotations",
    description: "Learn how to determine if its time to rotate your tires",
    link: "/blog/tire-rotations",
    date: "2024-04-07",
  },
]

// Parse post dates from strings to Date objects
for (const post of blogPosts) {
  if (!post.parsedDate) {
    const dateParts = post.date.split("-")
    post.parsedDate = new Date(
      parseInt(dateParts[0]),
      parseInt(dateParts[1]) - 1,
      parseInt(dateParts[2]),
    ) // Note: months are 0-based
  }
}

export const sortedBlogPosts = blogPosts.sort(
  (a: BlogPost, b: BlogPost) =>
    (b.parsedDate?.getTime() ?? 0) - (a.parsedDate?.getTime() ?? 0),
)
