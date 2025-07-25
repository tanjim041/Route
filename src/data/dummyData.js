export const post = {
  id: 1,
  title: "Lorem Ipsum Post Title",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  author: { name: "Author Name", id: 101 },
  date: "7 January 2025",
};

export const comments = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  text: `This is a sample comment number ${i + 1}`,
  author: { name: `User ${i + 1}`, id: 200 + i },
  date: "10 February 2025",
}));