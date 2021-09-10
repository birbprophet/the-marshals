/* This example requires Tailwind CSS v2.0+ */
import {
  DatabaseIcon,
  LightningBoltIcon,
  RefreshIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Database Demonstrations",
    description:
      "It be confusing to apply logic to real-life situations, and hence at the end of major milestones in the video, we included Database Demonstrations to better facilitate our teaching.",
    icon: DatabaseIcon,
  },
  {
    name: "The Miscellaneous Section",
    description:
      "Our videos will bring you through a detailed walkthrough of how specific templates are set up and how you can use them to empower your lives.",
    icon: ScaleIcon,
  },
  {
    name: "Constant Updates",
    description:
      "We are always trying to improve so we welcome any feedback that you might have for us. As Notion updates particular features, we will update our videos to match these features to ensure consistency.",
    icon: RefreshIcon,
  },
  {
    name: "Automations (coming soon)",
    description:
      "Automations are extremely tricky to get right, and most enterprise automation systems are not affordable and simple enough for consumers. We will show you the right way to build automations into Notion.",
    icon: LightningBoltIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-white overflow-hidden" id="features">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
          />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What makes our course special?
            </h2>
          </div>
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
