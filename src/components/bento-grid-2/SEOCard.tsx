"use client";
import React from "react";

export const SEOCard = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] relative flex-col items-center justify-center">
      {/* Static Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 blur-3xl" />

      {/* SEO Dashboard Wireframe */}
      <div className="w-full h-full border border-neutral-700 rounded-xl flex bg-black/20 overflow-hidden">
        <div className="grid grid-cols-2 grid-rows-1 gap-2 p-2 w-full">
          {/* Area Chart */}
          <div className="col-span-1 row-span-1 border border-neutral-700 rounded-lg bg-neutral-800/50 p-2 flex flex-col justify-end relative overflow-hidden">
            <svg
              className="absolute bottom-0 left-0 w-full h-auto"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(34, 197, 94, 0.4)" />
                  <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
                </linearGradient>
              </defs>
              <path
                d="M0,100 L0,60 Q25,20 50,50 T100,40 L100,100 Z"
                fill="url(#areaGradient)"
              />
            </svg>
          </div>
          {/* Line Chart with dots */}
          <div className="col-span-1 row-span-1 border border-neutral-700 rounded-lg bg-neutral-800/50 p-2 flex flex-col justify-center items-center relative overflow-hidden">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute"
            >
              <path
                d="M10,80 C25,20 40,90 60,40 S 75,10 90,60"
                stroke="rgba(245, 158, 11, 0.7)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
