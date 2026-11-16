export const metadata = {
  title: "Strawberry",
  description: "Welcome to Strawberry."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
