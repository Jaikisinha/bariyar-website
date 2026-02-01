export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Bariyar — Sustainable Jute Products</title>
        <meta name="description" content="Sustainable jute products for bags, folders, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
