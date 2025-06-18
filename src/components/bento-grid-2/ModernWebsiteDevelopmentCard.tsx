"use client";
import React from "react";

export const ModernWebsiteDevelopmentCard = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] relative items-center justify-center">
      {/* Static Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 via-purple-700/20 to-pink-700/20 blur-3xl" />

      {/* Browser Wireframe */}
      <div className="w-[280px] h-[150px] border border-neutral-700 rounded-xl flex flex-col bg-black/20 overflow-hidden transition-all duration-300 group-hover/bento:shadow-2xl group-hover/bento:shadow-blue-500/20">
        {/* Header bar */}
        <div className="flex items-center space-x-1.5 p-2 border-b border-neutral-700 bg-black/30 shrink-0">
          <div className="w-2 h-2 rounded-full bg-neutral-700" />
          <div className="w-2 h-2 rounded-full bg-neutral-700" />
          <div className="w-2 h-2 rounded-full bg-neutral-700" />
        </div>
        {/* Content with sections */}
        <div className="flex-1 p-3 flex space-x-2">
          {/* Sidebar section */}
          <div className="w-1/4 space-y-2">
            <div className="h-4 w-full bg-neutral-800 rounded-md border border-neutral-700 transition-all duration-300 group-hover/bento:translate-x-2 group-hover/bento:opacity-75" />
            <div className="h-2 w-full bg-neutral-700 rounded-full transition-all duration-300 group-hover/bento:translate-x-2 group-hover/bento:opacity-75" />
            <div className="h-2 w-3/4 bg-neutral-700 rounded-full transition-all duration-300 group-hover/bento:translate-x-2 group-hover/bento:opacity-75" />
            <div className="h-2 w-full bg-neutral-700 rounded-full transition-all duration-300 group-hover/bento:translate-x-2 group-hover/bento:opacity-75" />
          </div>
          {/* Main content section */}
          <div className="w-3/4 space-y-2">
            <div className="h-8 w-full bg-neutral-800 rounded-lg border border-neutral-700 transition-all duration-300 group-hover/bento:-translate-y-2" />
            <div className="grid grid-cols-2 gap-2">
              <div className="h-10 bg-neutral-800 rounded-lg border border-neutral-700 transition-all duration-300 group-hover/bento:scale-110" />
              <div className="h-10 bg-neutral-800 rounded-lg border border-neutral-700 transition-all duration-300 group-hover/bento:scale-110" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
