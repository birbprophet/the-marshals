import Image from "next/image";

export default function Example() {
  return (
    <div className="bg-white" id="instructors">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Our Instructors
            </h2>
            <p className="text-xl text-gray-500">
              We are entrepreneurs and students who began using Notion together
              and understood the applications facilities incrementally
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
            >
              <li key="Dishan Timbadia">
                <div className="space-y-4">
                  <div className="aspect-w-1 aspect-h-1">
                    <Image
                      className="object-cover shadow-lg rounded-lg"
                      src="/assets/notion/dishan.jpg"
                      alt=""
                      layout="fill"
                    />
                  </div>
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3>Dishan Timbadia</h3>
                    <p className="text-indigo-600">
                      Public Speaker | Mentor | Educator
                    </p>
                  </div>

                  <ul role="list" className="flex space-x-5">
                    <li>
                      <a
                        href={"https://www.linkedin.com/in/dishan98/"}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li key="Benjamin Tang">
                <div className="space-y-4">
                  <div className="aspect-w-1 aspect-h-1">
                    <Image
                      className="object-cover shadow-lg rounded-lg"
                      src="/assets/notion/benjamin.jpg"
                      alt=""
                      layout="fill"
                    />
                  </div>
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3>Benjamin Tang</h3>
                    <p className="text-indigo-600">
                      Musician | Entrepreneur | Athlete
                    </p>
                  </div>

                  <ul role="list" className="flex space-x-5">
                    <li>
                      <a
                        href={
                          "https://open.spotify.com/artist/2gE1XNxB2VZ5Ibb3ZvQByA?si=sltzaNAMS0-yHLri2DH6sA&dl_branch=1"
                        }
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Spotify</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          viewBox="0 0 168 168"
                          className="w-5 h-5"
                        >
                          <path
                            fill="currentColor"
                            d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href={"https://www.linkedin.com/in/benjamintanghz/"}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
