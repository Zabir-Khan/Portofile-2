// Blog post content. Each post has a `slug` used for its route
// (/blog/[slug]) and an `image` for the cover photo.
//
// `content` is an array of paragraphs rendered as <p> tags on the post page.

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO date string
  readTime: string;
  image: string;
  content: string[];
}

const UNSPLASH = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=1200&q=80&auto=format&fit=crop`;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "the-beauty-of-unplanned-journeys",
    title: "The Beauty of Unplanned Journeys",
    excerpt:
      "Some of my favorite photographs came from trips with no itinerary at all. Here's why I've learned to leave room for the unexpected.",
    date: "2024-03-12",
    readTime: "5 min read",
    image: UNSPLASH("1500964757637-c85e8a162699"),
    content: [
      "When I started traveling for photography, I planned everything — shot lists, sunrise times, locations scouted weeks in advance. The results were technically fine, but something was missing. The images felt like illustrations of a place rather than honest encounters with it.",
      "On a trip through the hills a few years ago, our planned route was blocked by weather, and we ended up taking a detour through a small village we'd never heard of. There was no plan, no golden-hour schedule — just light, people, and time to wander. That afternoon produced some of the most honest portraits I've ever taken.",
      "Since then, I always build unstructured time into every trip. A planned shot can be beautiful, but an unplanned one can be true. Both have their place, but it's the unplanned moments that tend to stay with me — and with the people who see the photographs.",
      "If you're a photographer who plans everything down to the minute, I'd encourage you to leave at least one afternoon completely open. Walk without a destination. You might come back with nothing — or with the best frame of the trip.",
    ],
  },
  {
    slug: "lessons-from-documentary-projects",
    title: "Lessons from Documentary Projects",
    excerpt:
      "Three years of long-form documentary work taught me more about patience, trust, and storytelling than any workshop ever could.",
    date: "2024-01-28",
    readTime: "7 min read",
    image: UNSPLASH("1522897048979-e407743f3603"),
    content: [
      "Documentary photography is fundamentally different from most other genres — it asks you to be present for a long time, often without knowing what story you're telling until much later. My first long-form project took over a year, and for the first few months I barely had any images I was proud of.",
      "The biggest lesson was about trust. People can tell when a camera is being pointed at them for a quick, transactional photo versus when someone is genuinely interested in their life. Building that trust takes time — sometimes weeks of simply showing up without taking a single frame.",
      "The second lesson was about restraint. Not every moment needs to be photographed. Some of the most meaningful images came after I'd put the camera down for an hour, just talking and listening — and then picked it back up when something real happened naturally.",
      "Finally, documentary work taught me to let the story reveal itself rather than forcing a narrative. The project I set out to make and the project I ended up with were almost entirely different — and the second one was far more honest.",
    ],
  },
  {
    slug: "why-i-love-natural-light-photography",
    title: "Why I Love Natural Light Photography",
    excerpt:
      "No softbox or strobe has ever moved me the way a single shaft of window light has. Here's what natural light teaches you about patience.",
    date: "2023-11-05",
    readTime: "4 min read",
    image: UNSPLASH("1469474968028-56623f02e42e"),
    content: [
      "Early in my career, I invested in a full studio lighting kit — strobes, softboxes, modifiers, the works. It's useful, and I still use it for commercial work. But for portraits and documentary images, I almost always reach for natural light first.",
      "Natural light forces you to slow down. You can't just flip a switch and get the look you want — you have to wait for the light to be right, move your subject, or come back at a different time of day. That waiting changes the entire dynamic of a shoot. It becomes collaborative rather than directed.",
      "There's also something about the quality of natural light — especially window light or golden hour — that feels emotionally honest in a way that's hard to replicate artificially. It has a history to it; it's the same light that's been falling on faces for all of human history.",
      "My advice to anyone starting out: before buying lighting gear, spend a year shooting only with whatever light is available. You'll learn to see light in a completely different way, and that skill will make every artificial light you ever use better too.",
    ],
  },
];
