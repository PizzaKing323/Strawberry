export default function Home() {
  return (
    <main>
      <h1>Strawberry 🍓</h1>
      <p>Welcome to Strawberry.</p>

      <button
        onClick={() => {
          window.location.href = "/auth/login";
        }}
      >
        Sign in with Discord
      </button>
    </main>
  );
}