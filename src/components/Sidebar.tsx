import { IconChevronDown, IconChevronUp, IconMenu } from "@tabler/icons-react";
import { useState } from "react";
import Logo from "../assets/ventura.png";

const statuses = [
  { label: "On hold" },
  { label: "Planned" },
  { label: "Progress" },
  { label: "Review" },
  { label: "Completed" },
];

const topics = [
  { label: "Welcome", count: 5 },
  { label: "Improvement", count: 3 },
  { label: "Integrations", count: 1 },
  { label: "Styling", count: 2 },
];

const Sidebar = () => {
  const [showStatuses, setShowStatuses] = useState(true);
  const [showTopics, setShowTopics] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <header className="md:hidden fixed top-0 left-0 right-0 flex items-center justify-between bg-gray-50 p-4 border-b border-gray-200 z-50">
        <img src={Logo} alt="Logo" className="h-10 object-contain" />
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Toggle sidebar"
          aria-expanded={isSidebarOpen}
          className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none"
        >
          <IconMenu size={28} />
        </button>
      </header>

      <aside
        className={`
          fixed top-0 left-0 h-full  bg-gray-50 p-6 shadow-inner border-r border-gray-200 flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:shadow-none md:border-none
          z-40
        `}
      >
        <div className="mb-8 hidden md:flex">
          <img src={Logo} alt="Logo" width={200} height={150} />
        </div>

        <div className="space-y-6 flex-grow overflow-y-auto mt-15 md:mt-0">
          <div>
            <button
              onClick={() => setShowStatuses(!showStatuses)}
              className="w-full flex items-center justify-between py-2 px-4 rounded-md text-gray-700 font-medium text-lg hover:bg-gray-100 focus-visible:outline-none"
            >
              <span>Statuses</span>
              {showStatuses ? (
                <IconChevronDown size={20} />
              ) : (
                <IconChevronUp size={20} />
              )}
            </button>

            {showStatuses && (
              <ul className="mt-2 space-y-1">
                {statuses.map((status, idx) => (
                  <li key={idx}>
                    <button className="w-full text-sm text-left py-2 px-4 rounded-md hover:bg-gray-200 text-gray-800 font-medium focus-visible:outline-none">
                      {status.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <button
              onClick={() => setShowTopics(!showTopics)}
              className="w-full flex items-center justify-between py-2 px-4 rounded-md text-gray-700 font-medium text-lg hover:bg-gray-100 focus-visible:outline-none"
            >
              <span>Topics</span>
              {showTopics ? (
                <IconChevronDown size={20} />
              ) : (
                <IconChevronUp size={20} />
              )}
            </button>

            {showTopics && (
              <ul className="mt-2 space-y-1">
                {topics.map((topic, idx) => (
                  <li key={idx}>
                    <button className="w-full text-sm flex justify-between items-center py-2 px-4 rounded-md hover:bg-gray-200 text-gray-800 font-medium focus-visible:outline-none">
                      <span>{topic.label}</span>
                      <span className="bg-gray-300 text-sm text-gray-800 rounded-full px-2 py-0.5">
                        {topic.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Sidebar;
