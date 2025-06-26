import { IconX } from "@tabler/icons-react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface OffcanvasProps {
  isOpen: boolean;
  onClose: () => void;
}

const Offcanvas = ({ isOpen, onClose }: OffcanvasProps) => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [description, setDescription] = useState("");

  const handleOutsideClick = () => {
    onClose();
  };

  const handleTopicClick = (topic: string) => {
    setSelectedTopic(topic === selectedTopic ? null : topic); // toggle
  };

  const topics = ["Improvement", "New Feature", "Styling", "Bug Report"];

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full md:w-1/2 h-full bg-black/50 transition ease-in-out duration-300 ${
          isOpen ? "-translate-x-0" : "-translate-x-full"
        }`}
        onClick={handleOutsideClick}
      ></div>
      <div
        className={`fixed top-0 right-0 w-full md:w-1/2 h-full bg-white shadow-lg z-50 transition ease-in-out duration-300 p-4 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black/70 transition"
          aria-label="Close"
        >
          <IconX size={28} />
        </button>
        <div className="flex flex-col gap-4 w-full p-8 rounded-lg">
          <h2 className="text-2xl font-semibold">Tell us your Idea!</h2>
          <input
            type="text"
            placeholder="Title"
            className="border border-gray-300 p-3 rounded-lg w-full mb-4"
          />

          <ReactQuill
            value={description}
            onChange={setDescription}
            placeholder="Describe your idea..."
            className="mb-4"
            theme="snow"
          />

          <div className="mb-4">
            <p className="font-medium">
              Choose <strong>one</strong> Topic
            </p>
            <div className="flex gap-2 flex-wrap mt-2">
              {topics.map((tag) => (
                <span
                  key={tag}
                  onClick={() => handleTopicClick(tag)}
                  className={`border px-3 py-1 rounded-sm text-sm cursor-pointer select-none ${
                    selectedTopic === tag
                      ? "border-red-700 text-red-700"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <p className="font-medium mb-3">Upload Image / Document</p>
            <label className="block">
              <span className="sr-only">Choose file</span>
              <input
                type="file"
                className="block w-full text-sm text-gray-500
    file:mr-4 file:py-2 file:px-4
    file:rounded-md file:border-0
    file:text-sm file:font-semibold
    file:bg-blue-50 file:text-blue-700
    hover:file:bg-blue-100
    cursor-pointer
  "
              />
            </label>
          </div>
          <button className="bg-red-700 text-white px-4 p-2 rounded hover:bg-red-800 self-start cursor-pointer">
            Submit Idea
          </button>
        </div>
      </div>
    </>
  );
};

export default Offcanvas;
