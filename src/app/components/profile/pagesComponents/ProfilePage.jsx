"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaUser, FaPen } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillPicture } from "react-icons/ai";

export default function ProjectPage() {
  const [preview, setPreview] = useState("/images/profile/AvatarCircle.svg");

  const handleUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  const handleDrop = (event) => {
    e.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  // Warper for all column (divider) 
  const Row = ({ icon, label, children }) => (
    <>
      <div className="flex flex-col sm:grid sm:grid-cols-[180px_1fr] lg:grid-cols-[220px_1fr] items-start sm:items-center gap-2 sm:gap-0 py-5 px-5 sm:px-8">
        <div className="flex items-center gap-3 text-gray-700">
          <span className="text-base">{icon}</span>
          <p className="text-sm font-medium">{label}</p>
        </div>
        <div className="w-full">{children}</div>
      </div>
      <hr className="border-gray-200 mx-5 sm:mx-8" />
    </>
  );

  return (
    <section className="overflow-hidden">
      <AnimatePresence>
        <motion.h1
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 25 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="text-2xl sm:text-3xl font-semibold text-[#3A3845] ml-5 sm:ml-9 mt-10 sm:mt-15"
        >
          Profile
        </motion.h1>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="w-full p-4 sm:p-6 lg:p-10"
        >
          <div className="bg-white w-full rounded-2xl shadow-md overflow-hidden">
            {/* Full Name */}
            <Row icon={<FaUser />} label="Full name">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 shadow-sm"
                placeholder="John Carter"
              />
            </Row>

            {/* Email */}
            <Row icon={<MdEmail />} label="Email address">
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 shadow-sm"
                placeholder="john@dashdark.com"
              />
            </Row>

            {/* Photo */}
            <Row icon={<AiFillPicture />} label="Photo">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex flex-col items-center gap-1 shrink-0">
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                    <Image
                      src={preview}
                      alt="avatar"
                      width={5}
                      height={5}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    onClick={() =>
                      setPreview("/images/profile/AvatarCircle.svg")
                    }
                    className="text-xs text-purple-400 hover:underline"
                  >
                    Delete
                  </button>
                </div>

                {/* Dropzone */}
                <label
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                  className="w-full border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center py-5 px-3 gap-2 cursor-pointer hover:bg-gray-50 transition"
                >
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleUpload}
                  />
                  <div className="bg-purple-100 p-3 rounded-full">
                    <AiFillPicture className="text-purple-400 text-xl" />
                  </div>
                  <p className="text-sm text-center text-gray-600">
                    <span className="text-purple-500 font-medium">
                      Click to upload
                    </span>{" "}
                    or drag and drop
                  </p>
                  <p className="text-xs text-gray-400 text-center">
                    SVG, PNG, JPG or GIF (max. 800 x 400px)
                  </p>
                </label>
              </div>
            </Row>

            {/* Description */}
            <Row icon={<FaPen />} label="Short description">
              <textarea
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 shadow-sm resize-none"
                placeholder="Write a short bio about you..."
              />
            </Row>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
