"use client";

import { useRef, useState, Fragment } from "react";
import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import Logo01 from "@/public/images/logo-01.svg";
import Logo02 from "@/public/images/logo-02.svg";
import Logo03 from "@/public/images/logo-03.svg";
import Logo04 from "@/public/images/logo-04.svg";
import Logo05 from "@/public/images/logo-05.svg";
import Logo06 from "@/public/images/logo-06.svg";
import Logo07 from "@/public/images/logo-07.svg";
import Logo08 from "@/public/images/logo-08.svg";
import Logo09 from "@/public/images/logo-09.svg";

export default function PracticeAreaCategories() {
  const tabsRef = useRef<HTMLDivElement>(null);
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div>
          <TabGroup selectedIndex={selectedTab} onChange={setSelectedTab}>
            {/* Buttons */}
            <div className="flex justify-center">
              <TabList className="relative mb-8 inline-flex flex-wrap justify-center rounded-xl bg-white p-2 shadow-lg shadow-black/[0.03] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] max-[480px]:max-w-[180px] min-[480px]:mb-12">
                <Tab as={Fragment}>
                  <button
                    className={`ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-blue-300 flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-hidden ${selectedTab === 0 ? "bg-gray-800 text-gray-200" : "text-gray-700"}`}
                  >
                    <svg
                      className={`fill-current ${selectedTab === 0 ? "text-gray-400" : "text-gray-500"}`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 13c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v6z" />
                    </svg>
                    <span>Criminal Defense</span>
                  </button>
                </Tab>
                <Tab as={Fragment}>
                  <button
                    className={`ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-blue-300 flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-hidden ${selectedTab === 1 ? "bg-gray-800 text-gray-200" : "text-gray-700"}`}
                  >
                    <svg
                      className={`fill-current ${selectedTab === 1 ? "text-gray-400" : "text-gray-500"}`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path d="M14 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm-1 11H3V3h10v8z" />
                    </svg>
                    <span>Civil Litigation</span>
                  </button>
                </Tab>
                <Tab as={Fragment}>
                  <button
                    className={`ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-blue-300 flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-hidden ${selectedTab === 2 ? "bg-gray-800 text-gray-200" : "text-gray-700"}`}
                  >
                    <svg
                      className={`fill-current ${selectedTab === 2 ? "text-gray-400" : "text-gray-500"}`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm4-8H8V2h2v3h2v1z" />
                    </svg>
                    <span>White Collar</span>
                  </button>
                </Tab>
                <Tab as={Fragment}>
                  <button
                    className={`ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-blue-300 flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-hidden ${selectedTab === 3 ? "bg-gray-800 text-gray-200" : "text-gray-700"}`}
                  >
                    <svg
                      className={`fill-current ${selectedTab === 3 ? "text-gray-400" : "text-gray-500"}`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path d="M15 4h-4V1c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1v3H1c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1zM6 2h4v2H6V2zm8 12H2V6h12v8z" />
                    </svg>
                    <span>Professional Conduct</span>
                  </button>
                </Tab>
              </TabList>
            </div>

            {/* Tab panels */}
            <TabPanels className="relative flex h-[324px] items-center justify-center">
              {/* Small blue dots */}
              <div className="absolute -z-10">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={164}
                  height={41}
                  viewBox="0 0 164 41"
                  fill="none"
                >
                  <circle cx={1} cy={8} r={1} fillOpacity="0.24" />
                  <circle cx={1} cy={1} r={1} fillOpacity="0.16" />
                  <circle cx={1} cy={15} r={1} />
                  <circle cx={1} cy={26} r={1} fillOpacity="0.64" />
                  <circle cx={1} cy={33} r={1} fillOpacity="0.24" />
                  <circle cx={8} cy={8} r={1} />
                  <circle cx={8} cy={15} r={1} />
                  <circle cx={8} cy={26} r={1} fillOpacity="0.24" />
                  <circle cx={15} cy={15} r={1} fillOpacity="0.64" />
                  <circle cx={15} cy={26} r={1} fillOpacity="0.16" />
                  <circle cx={8} cy={33} r={1} />
                  <circle cx={1} cy={40} r={1} />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 164 7)"
                    fillOpacity="0.24"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 164 0)"
                    fillOpacity="0.16"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 164 14)"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 164 25)"
                    fillOpacity="0.64"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 164 32)"
                    fillOpacity="0.24"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 157 7)"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 157 14)"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 157 25)"
                    fillOpacity="0.24"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 150 14)"
                    fillOpacity="0.64"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 150 25)"
                    fillOpacity="0.16"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 157 32)"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 164 39)"
                  />
                </svg>
              </div>
              {/* Blue glow */}
              <div className="absolute -z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={432}
                  height={160}
                  viewBox="0 0 432 160"
                  fill="none"
                >
                  <g opacity="0.6" filter="url(#filter0_f_2044_9)">
                    <path
                      className="fill-blue-500"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M80 112C62.3269 112 48 97.6731 48 80C48 62.3269 62.3269 48 80 48C97.6731 48 171 62.3269 171 80C171 97.6731 97.6731 112 80 112ZM352 112C369.673 112 384 97.6731 384 80C384 62.3269 369.673 48 352 48C334.327 48 261 62.3269 261 80C261 97.6731 334.327 112 352 112Z"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_2044_9"
                      x={0}
                      y={0}
                      width={432}
                      height={160}
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation={32}
                        result="effect1_foregroundBlur_2044_9"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              {/* Horizontal lines */}
              <div className="absolute inset-x-0 top-0 -z-10 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-x-[200px] top-1/2 -z-10 h-px bg-linear-to-r from-transparent via-blue-500/60 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-x-0 top-1/2 -z-10 h-px -translate-y-[82px] bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_both] before:bg-linear-to-r before:via-blue-500"></div>
              <div className="absolute inset-x-0 top-1/2 -z-10 h-px translate-y-[82px] bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_5s_both] before:bg-linear-to-r before:via-blue-500"></div>
              {/* Diagonal lines */}
              <div className="absolute inset-x-[300px] top-1/2 -z-10 h-px rotate-[20deg] bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-x-[300px] top-1/2 -z-10 h-px -rotate-[20deg] bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
              {/* Vertical lines */}
              <div className="absolute inset-y-0 left-1/2 -z-10 w-px -translate-x-[216px] bg-linear-to-b from-gray-200 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-y-0 left-1/2 -z-10 w-px translate-x-[216px] bg-linear-to-t from-gray-200 to-transparent mix-blend-multiply"></div>
              {/* Scale of Justice Logo */}
              <div className="absolute before:absolute before:-inset-3 before:animate-[spin_3s_linear_infinite] before:rounded-full before:border before:border-transparent before:[background:conic-gradient(from_180deg,transparent,var(--color-blue-500))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <div className="animate-[breath_8s_ease-in-out_infinite_both]">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                    <Image
                      className="relative"
                      src={Logo01}
                      width={32}
                      height={32}
                      alt="Legal System"
                    />
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col" ref={tabsRef}>
                {/* Criminal Defense */}
                <TabPanel as={Fragment} static={true}>
                  <Transition
                    as="div"
                    show={selectedTab === 0}
                    className={`w-full h-full flex items-center justify-center transform transition ease-[cubic-bezier(0.38,0,0.32,1)] data-closed:absolute data-enter:data-closed:scale-90 data-leave:data-closed:scale-125 data-closed:opacity-0 data-enter:duration-700 data-leave:duration-300`}
                    unmount={false}
                    appear={true}
                  >
                    <>
                      <div className="absolute -translate-x-[136px]">
                        <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo02}
                              width={23}
                              height={22}
                              alt="Felony Defense"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute translate-x-[136px]">
                        <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo03}
                              width={22}
                              height={22}
                              alt="Misdemeanor Cases"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -translate-x-[216px] -translate-y-[82px]">
                        <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo04}
                              width={24}
                              height={22}
                              alt="Probation Violations"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -translate-y-[82px] translate-x-[216px]">
                        <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo05}
                              width={25}
                              height={25}
                              alt="Federal Cases"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute translate-x-[216px] translate-y-[82px]">
                        <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo06}
                              width={20}
                              height={18}
                              alt="Drug Charges"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -translate-x-[216px] translate-y-[82px]">
                        <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo07}
                              width={25}
                              height={25}
                              alt="DUI Defense"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -translate-x-[292px] opacity-40">
                        <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                            <Image
                              className="relative"
                              src={Logo08}
                              width={20}
                              height={20}
                              alt="Appeals"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute translate-x-[292px] opacity-40">
                        <div className="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                            <Image
                              className="relative"
                              src={Logo09}
                              width={21}
                              height={13}
                              alt="Parole Hearings"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  </Transition>
                </TabPanel>

                {/* Civil Litigation Panel */}
                <TabPanel as={Fragment} static={true}>
                  <Transition
                    as="div"
                    show={selectedTab === 1}
                    className={`w-full h-full flex items-center justify-center transform transition ease-[cubic-bezier(0.38,0,0.32,1)] data-closed:absolute data-enter:data-closed:scale-90 data-leave:data-closed:scale-125 data-closed:opacity-0 data-enter:duration-700 data-leave:duration-300`}
                    unmount={false}
                    appear={true}
                  >
                    <>
                      <div className="absolute -translate-x-[136px]">
                        <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo03}
                              width={22}
                              height={22}
                              alt="Contract Disputes"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute translate-x-[136px]">
                        <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo04}
                              width={24}
                              height={22}
                              alt="Personal Injury"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -translate-x-[216px] -translate-y-[82px]">
                        <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo05}
                              width={25}
                              height={25}
                              alt="Business Disputes"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -translate-y-[82px] translate-x-[216px]">
                        <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo02}
                              width={23}
                              height={22}
                              alt="Property Disputes"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute translate-x-[216px] translate-y-[82px]">
                        <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo07}
                              width={25}
                              height={25}
                              alt="Intellectual Property"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -translate-x-[216px] translate-y-[82px]">
                        <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo06}
                              width={20}
                              height={18}
                              alt="Class Actions"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -translate-x-[292px] opacity-40">
                        <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                            <Image
                              className="relative"
                              src={Logo09}
                              width={21}
                              height={13}
                              alt="Employment Law"
                            />
                          </div>
                        </div>
                      </div> 

                      <div className="absolute translate-x-[292px] opacity-40">
                        <div className="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                            <Image
                              className="relative"
                              src={Logo08}
                              width={20}
                              height={20}
                              alt="Insurance Disputes"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  </Transition>
                </TabPanel>

                {/* White Collar Panel */}
                <TabPanel as={Fragment} static={true}>
                  <Transition
                    as="div"
                    show={selectedTab === 2}
                    className={`w-full h-full flex items-center justify-center transform transition ease-[cubic-bezier(0.38,0,0.32,1)] data-closed:absolute data-enter:data-closed:scale-90 data-leave:data-closed:scale-125 data-closed:opacity-0 data-enter:duration-700 data-leave:duration-300`}
                    unmount={false}
                    appear={true}
                  >
                    <>
                      <div className="absolute -translate-x-[136px]">
                        <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo02}
                              width={23}
                              height={22}
                              alt="Securities Fraud"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute translate-x-[136px]">
                        <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo03}
                              width={22}
                              height={22}
                              alt="Tax Evasion"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -translate-x-[216px] -translate-y-[82px]">
                        <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo04}
                              width={24}
                              height={22}
                              alt="Money Laundering"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -translate-y-[82px] translate-x-[216px]">
                        <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo05}
                              width={25}
                              height={25}
                              alt="Insider Trading"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute translate-x-[216px] translate-y-[82px]">
                        <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo06}
                              width={20}
                              height={18}
                              alt="Embezzlement"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -translate-x-[216px] translate-y-[82px]">
                        <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo07}
                              width={25}
                              height={25}
                              alt="Bank Fraud"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -translate-x-[292px] opacity-40">
                        <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                            <Image
                              className="relative"
                              src={Logo08}
                              width={20}
                              height={20}
                              alt="RICO"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute translate-x-[292px] opacity-40">
                        <div className="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                            <Image
                              className="relative"
                              src={Logo09}
                              width={21}
                              height={13}
                              alt="Antitrust"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  </Transition>
                </TabPanel>

                {/* Professional Conduct Panel */}
                <TabPanel as={Fragment} static={true}>
                  <Transition
                    as="div"
                    show={selectedTab === 3}
                    className={`w-full h-full flex items-center justify-center transform transition ease-[cubic-bezier(0.38,0,0.32,1)] data-closed:absolute data-enter:data-closed:scale-90 data-leave:data-closed:scale-125 data-closed:opacity-0 data-enter:duration-700 data-leave:duration-300`}
                    unmount={false}
                    appear={true}
                  >
                    <>
                      <div className="absolute -translate-x-[136px]">
                        <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo03}
                              width={22}
                              height={22}
                              alt="Bar Complaints"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute translate-x-[136px]">
                        <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo04}
                              width={24}
                              height={22}
                              alt="Ethics Violations"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -translate-x-[216px] -translate-y-[82px]">
                        <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo05}
                              width={25}
                              height={25}
                              alt="Malpractice"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -translate-y-[82px] translate-x-[216px]">
                        <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo02}
                              width={23}
                              height={22}
                              alt="Licensing Issues"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute translate-x-[216px] translate-y-[82px]">
                        <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo07}
                              width={25}
                              height={25}
                              alt="Professional Boards"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -translate-x-[216px] translate-y-[82px]">
                        <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                            <Image
                              className="relative"
                              src={Logo06}
                              width={20}
                              height={18}
                              alt="Regulatory Compliance"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -translate-x-[292px] opacity-40">
                        <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                            <Image
                              className="relative"
                              src={Logo09}
                              width={21}
                              height={13}
                              alt="Administrative Hearings"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute translate-x-[292px] opacity-40">
                        <div className="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                            <Image
                              className="relative"
                              src={Logo08}
                              width={20}
                              height={20}
                              alt="License Defense"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  </Transition>
                </TabPanel>
              </div>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </section>
  );
}
