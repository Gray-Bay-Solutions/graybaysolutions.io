"use client";
import React from "react";

export const DigitalMarketingCard = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] relative flex-col items-center justify-center">
      {/* Static Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 blur-3xl" />

      {/* Digital Marketing Dashboard Wireframe */}
      <div className="w-full h-full border border-neutral-700 rounded-xl flex bg-black/20 overflow-hidden">
        <div className="grid grid-cols-2 grid-rows-1 gap-2 p-2 w-full">
          {/* Donut Chart */}
          <div className="col-span-1 row-span-1 border border-neutral-700 rounded-lg bg-neutral-800/50 p-2 flex justify-center items-center">
            <div className="relative w-20 h-20">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  className="text-neutral-700"
                  strokeWidth="10"
                  stroke="currentColor"
                  fill="transparent"
                  r="42"
                  cx="50"
                  cy="50"
                />
                <circle
                  className="text-blue-500/80"
                  strokeWidth="10"
                  strokeDasharray="165, 264"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="42"
                  cx="50"
                  cy="50"
                  transform="rotate(-90 50 50)"
                />
              </svg>
            </div>
          </div>
          {/* Bar Chart */}
          <div className="col-span-1 row-span-1 border border-neutral-700 rounded-lg bg-neutral-800/50 p-2 flex items-end space-x-2">
            <div className="w-1/4 h-full bg-teal-400/50 rounded-t-sm" />
            <div className="w-1/4 h-2/3 bg-teal-400/50 rounded-t-sm" />
            <div className="w-1/4 h-1/2 bg-teal-400/50 rounded-t-sm" />
            <div className="w-1/4 h-1/3 bg-teal-400/50 rounded-t-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};
