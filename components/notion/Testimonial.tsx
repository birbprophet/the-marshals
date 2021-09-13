import Image from "next/image";

export default function Testimonial() {
  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-24 px-8 bg-indigo-500 rounded-xl shadow-2xl overflow-hidden lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply"></div>
          <div className="relative lg:col-span-1">
            <blockquote className="mt-6 text-white">
              <p className="text-xl font-medium sm:text-2xl">
                Dishan and Benjamin were very clear in demonstrating how we
                could use Notion for our use case. Notion has since been an
                essential part of our project management system.
              </p>
              <footer className="mt-6">
                <p className="flex flex-col font-medium">
                  <span>Takahito Irie</span>
                  <span>Chief Creative Officer at Runners Planet</span>
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
