import { promoLink } from "@/utils/promoLink";
import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useState } from "react";

export default function Promo() {
  const [bannerShown, setBannerShown] = useState(true);
  return (
    bannerShown && (
      <div className="bg-indigo-700">
        <div className="px-3 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center flex-1 w-0">
              <span className="flex p-2 bg-indigo-800 rounded-lg">
                <SpeakerphoneIcon
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="md:hidden">
                  Get <span className="font-bold">43% off</span> with{" "}
                  <span className="font-mono text-lg tracking-wide py-1 px-1.5 bg-indigo-600 rounded-lg">
                    WELCOME
                  </span>
                </span>
                <span className="hidden md:inline">
                  Black Friday Sale: Get{" "}
                  <span className="font-bold">43% off</span> with{" "}
                  <span className="font-mono text-lg tracking-wide py-1 px-1.5 bg-indigo-600 rounded-lg">
                    WELCOME
                  </span>
                </span>
              </p>
            </div>
            <div className="flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto">
              <Link
                href={
                  "https://www.udemy.com/course/notion-from-head-to-toe/?couponCode=WELCOME"
                }
              >
                <a className="flex items-center justify-center px-4 py-2 text-sm font-medium text-indigo-600 bg-white border border-transparent rounded-md shadow-sm hover:bg-indigo-50">
                  Claim your discount now
                </a>
              </Link>
            </div>
            <div className="flex-shrink-0 order-2 sm:order-3 sm:ml-3">
              <button
                type="button"
                className="flex p-2 -mr-1 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                onClick={() => setBannerShown(false)}
              >
                <span className="sr-only">Dismiss</span>
                <XIcon className="w-6 h-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
