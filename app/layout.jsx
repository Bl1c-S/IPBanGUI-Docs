import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import { Head, Search } from "nextra/components";
import TGIcon from "../content/components/svg/tg";
import { LastUpdated } from "../content/components/last-updated";

export const metadata = {
  // Your metadata
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head color={headColors} />
      <body>
        <Layout
          navbar={navbar}
          themeSwitch={themeSwitch}
          feedback={feedback}
          footer={footer}
          search={search}
          toc={toc}
          pageMap={await getPageMap()}
          lastUpdated={<LastUpdated />}
          sidebar={{ autoCollapse: true }}
          editLink={false}
          copyPageButton={false}
          docsRepositoryBase="https://github.com/Bl1c-S/IPBanGUI"
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}

const navbar = (
  <Navbar
    logo={
      <div className="nx-flex" style={{ display: "flex" }}>
        <img
          className="nx-mr-2"
          src="/assets/logo.png"
          alt="Logo"
          style={{ width: "auto", height: "30px" }}
        />
        <span>Torgsoft IPBanGUI</span>
      </div>
    }
    projectLink="https://github.com/Bl1c-S/IPBanGUI"
    chatIcon={<TGIcon />}
    chatLink="https://t.me/torgsoft_help"
  />
);

const footer = (
  <Footer>
    <div className="nx-flex nx-flex-col">
      MIT {new Date().getFullYear()} ©{" "}
      <a href="https://ipban-gui-docs.torgsoft.ua/" target="_blank">
        Torgsoft IPBanGUI
      </a>
    </div>
  </Footer>
);

const headColors = {
  hue: 40,
  saturation: 100,
  lightness: {
    light: 50,
    dark: 50,
  },
};

const search = (
  <Search
    placeholder="Пошук..."
    emptyResult="Нічого не знайдено."
    errorText="Помилка завантаження."
    loading="Завантаження..."
  />
);

const toc = {
  backToTop: false,
  title: "На цій сторінці:",
};

const feedback = {
  content: "З`явились запитання чи пропозиції?",
  link: "https://github.com/Bl1c-S/IPBanGUI/discussions",
  labels: "feedback",
};

const themeSwitch = {
  light: "Світла",
  dark: "Темна",
  system: "Система",
};
