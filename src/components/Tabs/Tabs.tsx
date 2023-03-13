import { useState } from "react";

interface Tab {
  label: string;
  children: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const handleTabClick = (index: number) => {
    setShowContent(false);
    setTimeout(() => setActiveTab(index), 200);
    setTimeout(() => setShowContent(true), 400);
  };

  return (
    <div>
      <div className="tab-nav rounded-2xl h-9 flex justify-between mb-5">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab title-tab border-none cursor-pointer py-1.5 px-5 ${
              activeTab === index && "active"
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        className={`tab-content mt-5 ${showContent ? "show" : ""} ${
          activeTab === 0 && "show"
        }`}
      >
        {tabs[activeTab].children}
      </div>
    </div>
  );
};

export default Tabs;
