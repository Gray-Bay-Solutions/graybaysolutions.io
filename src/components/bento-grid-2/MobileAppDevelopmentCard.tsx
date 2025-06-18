"use client";
import React from "react";

export const MobileAppDevelopmentCard = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] relative items-center justify-center">
      {/* Static Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 blur-3xl" />

      <div className="flex items-end space-x-2">
        {/* Phone */}
        <div className="w-[90px] h-[180px] border border-neutral-700 rounded-2xl flex flex-col bg-black/20 overflow-hidden relative p-1">
          {/* Status Bar with speaker slit */}
          <div className="absolute top-2.5 left-0 right-0 px-2 flex justify-between items-center">
            <div className="w-3" /> {/* Spacer */}
            <div className="w-8 h-1 bg-neutral-700 rounded-full" />
            <div className="w-3 h-1.5 border border-neutral-700 rounded-sm" />
          </div>
          {/* Content */}
          <div className="flex-1 pt-6 px-1 flex flex-col space-y-2">
            <div className="h-10 w-full bg-neutral-800 rounded-md border border-neutral-700" />
            <div className="space-y-1">
              <div className="h-2 w-full bg-neutral-700 rounded-full" />
              <div className="h-2 w-4/5 bg-neutral-700 rounded-full" />
            </div>
            <div className="grid grid-cols-2 gap-1">
              <div className="h-6 bg-neutral-800 rounded-md border border-neutral-700" />
              <div className="h-6 bg-neutral-800 rounded-md border border-neutral-700" />
            </div>
          </div>
          {/* Dock */}
          <div className="h-8 border-t border-neutral-800 flex items-center justify-evenly">
            <div className="h-4 w-4 bg-neutral-700 rounded-full" />
            <div className="h-4 w-4 bg-neutral-700 rounded-full" />
            <div className="h-4 w-4 bg-neutral-700 rounded-full" />
          </div>
        </div>

        {/* iPad */}
        <div className="w-[180px] h-[140px] border border-neutral-700 rounded-2xl flex flex-col bg-black/20 overflow-hidden relative p-1">
          {/* Status bar */}
          <div className="absolute top-2.5 right-2">
            <div className="w-4 h-2 border border-neutral-700 rounded" />
          </div>
          {/* Content */}
          <div className="flex-1 pt-6 px-1 flex space-x-2">
            <div className="w-1/3 space-y-2">
              <div className="h-2 w-full bg-neutral-700 rounded-full" />
              <div className="h-2 w-full bg-neutral-700 rounded-full" />
              <div className="h-2 w-4/5 bg-neutral-700 rounded-full" />
            </div>
            <div className="w-2/3 space-y-2">
              <div className="h-8 w-full bg-neutral-800 rounded-lg border border-neutral-700" />
              <div className="grid grid-cols-2 gap-2">
                <div className="h-8 bg-neutral-800 rounded-lg border border-neutral-700" />
                <div className="h-8 bg-neutral-800 rounded-lg border border-neutral-700" />
              </div>
            </div>
          </div>
          {/* Dock */}
          <div className="h-10 border-t border-neutral-800 flex items-center justify-center space-x-2">
            <div className="h-5 w-5 rounded-md bg-neutral-700" />
            <div className="h-5 w-5 rounded-md bg-neutral-700" />
            <div className="h-5 w-5 rounded-md bg-neutral-700" />
            <div className="h-5 w-5 rounded-md bg-neutral-700" />
          </div>
        </div>
      </div>
    </div>
  );
};
