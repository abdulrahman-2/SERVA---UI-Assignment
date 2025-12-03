import { menu } from "@/constant";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { twMerge } from "tailwind-merge";
import PageHeader from "./PageHeader";

const PageLayout = ({ children }) => {
  return (
    <main lang="en">
      <Header />
      <div className={twMerge("flex")}>
        <Sidebar links={menu} />
        <div className="flex-1">
          <div className="py-6 px-4 lg:px-12 lg:py-6">
            <PageHeader />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PageLayout;
