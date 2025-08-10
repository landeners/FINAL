import "./globals.css";


export const metadata = {
  title: "Letter",
  description: "Ayji sent you a letter!",
  metadataBase: new URL('https://Feyfey.com/Letter'),
  openGraph: {
    images: 'heart.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
