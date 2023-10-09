import "@styles/globals.css";

export const metadata = {
  title: "Promptai",
  description: "Sharing and having fun with AI Prompts",
};

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
