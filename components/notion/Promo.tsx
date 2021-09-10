import { promoLink } from "@/utils/promoLink";
import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useState } from "react";

export default function Promo() {
  const [bannerShown, setBannerShown] = useState(true);
  return (
    bannerShown && (
      <div className="bg-indigo-600">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-indigo-800">
                <SpeakerphoneIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="md:hidden">
                  Get <span className="font-bold">43% off</span> with{" "}
                  <span className="font-mono text-lg tracking-wide py-1 px-1.5 bg-indigo-500 rounded-lg">
                    SEPTPROMO
                  </span>
                </span>
                <span className="hidden md:inline">
                  Limited time launch promo: Get{" "}
                  <span className="font-bold">43% off</span> with{" "}
                  <span className="font-mono text-lg tracking-wide py-1 px-1.5 bg-indigo-500 rounded-lg">
                    SEPTPROMO
                  </span>
                </span>
              </p>
            </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <Link href={promoLink}>
                <a className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50">
                  Claim your discount now
                </a>
              </Link>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                onClick={() => setBannerShown(false)}
              >
                <span className="sr-only">Dismiss</span>
                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
