"use client";
import { BesideAnimation } from "@/components/beside-animation";

export default function HeroCard() {
  return (
    <div className="font-sans flex flex-col items-center justify-end min-h-screen">
      {/* Background ripple circles */}
      <div className="circle-wrapper">
        <div className="w-embed circle-pulse is--1">
          <svg
            className="circle-pulse"
            viewBox="0 0 2000 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="1000"
              cy="1000"
              rx="1000"
              ry="1000"
              stroke="url(#paint0_linear_1_2)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_2"
                x1="1000"
                y1="0"
                x2="1000"
                y2="2000"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="hsla(var(--palette-purple))" />
                <stop
                  offset="0.5"
                  stopColor="hsla(var(--palette-teal))"
                  stopOpacity="0.3"
                />
                <stop offset="1" stopColor="hsla(var(--palette-yellow))" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="w-embed circle-pulse is--2">
          <svg
            className="circle-pulse"
            viewBox="0 0 2000 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="1000"
              cy="1000"
              rx="1000"
              ry="1000"
              stroke="url(#paint0_linear_2_2)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2_2"
                x1="1000"
                y1="0"
                x2="1000"
                y2="2000"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="hsla(var(--palette-purple))" />
                <stop
                  offset="0.5"
                  stopColor="hsla(var(--palette-teal))"
                  stopOpacity="0.3"
                />
                <stop offset="1" stopColor="hsla(var(--palette-yellow))" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="w-embed circle-big">
          <svg
            className="circle-big"
            viewBox="0 0 2000 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="1000"
              cy="1000"
              rx="1000"
              ry="1000"
              stroke="url(#paint0_linear_3_2)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_3_2"
                x1="1000"
                y1="0"
                x2="1000"
                y2="2000"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="hsla(var(--palette-purple))" />
                <stop
                  offset="0.5"
                  stopColor="hsla(var(--palette-teal))"
                  stopOpacity="0.3"
                />
                <stop offset="1" stopColor="hsla(var(--palette-yellow))" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="w-embed circle-small">
          <svg
            className="circle-small"
            viewBox="0 0 2000 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="1000"
              cy="1000"
              rx="1000"
              ry="1000"
              stroke="url(#paint0_linear_4_2)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_4_2"
                x1="1000"
                y1="0"
                x2="1000"
                y2="2000"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="hsla(var(--palette-purple))" />
                <stop
                  offset="0.5"
                  stopColor="hsla(var(--palette-teal))"
                  stopOpacity="0.3"
                />
                <stop offset="1" stopColor="hsla(var(--palette-yellow))" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Beside Animation Component */}
      <BesideAnimation interval={3.5} />
    </div>
  );
}
