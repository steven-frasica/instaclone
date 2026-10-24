const comments = [
  { id: 1, username: "Bret", text: "Great work, Bret!" },
  { id: 2, username: "Antonette", text: "Love this profile." },
];

async function getComments() {
  return comments;
}

async function saveComment(newComment) {
  comments.push({ id: comments.length + 1, ...newComment})
}

export async function GET() {
  const comments = await getComments();
  return Response.json(comments)
}

export async function POST(request) {
  const newComment = await request.json();
  await saveComment(newComment)
  return Response.json({ success: true })
} 

