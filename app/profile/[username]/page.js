const profiles = {
  steven: {
    name: "steven f",
    bio: "tech boi",
    followers: "3",
  },
  aicha: {
    name: "aïcha",
    bio: "sweetiepie traveler, miss you",
    followers: "69M",
  },
  bip: {
    name: "bip",
    bio: "raaaawwr meow",
    followers: "7B",
  },
};

export default async function ProfilePage({ params }) {
  const { username } = await params;
  console.log(username);
  const profile = profiles[username];

  if (!profile) {
    return <h1>User not found</h1>;
  }
  return (
    <main>
      <h1>@{username}</h1>
      <h2>{profile.name}</h2>
      <p>{profile.followers} followers</p>
      <p>{profile.bio}</p>
    </main>
  );
}
