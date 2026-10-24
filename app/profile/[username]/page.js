import CommentBox from "@/components/CommentBox";
import LikeButton from "@/components/LikeButton";

export default async function ProfilePage({ params }) {
  const { username } = await params;

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users?username=" + username,
  );

  const users = await response.json();
  console.log(users)
  const user = users[0];

  if (!user) {
    return <h1>User not found</h1>;
  }
  return (
    <main>
      <h1>@{user.username}</h1>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.company.name}</p>
      <LikeButton />
      <CommentBox username={user.username}/>
    </main>
  );
}
