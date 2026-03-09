import './globals.css';

export const metadata = {
  title: 'Echo Labs AI',
  description: 'Echo Labs AI Agent',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
