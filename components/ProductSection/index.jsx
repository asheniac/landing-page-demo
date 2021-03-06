import { CheckIcon } from "@heroicons/react/solid";
import Link from "next/link";
const plans = [
  {
    title: "Rocket",
    featured: false,
    description: "All your essential business finances, taken care of.",
    priceMonthly: 5,
    priceYearly: 56,
    mainFeatures: [
      { id: 1, value: "Basic invoicing" },
      { id: 2, value: "Easy to use accounting" },
      { id: 3, value: "Mutli-accounts" },
      { id: 4, value: "Easy to use accounting" },
      { id: 5, value: "Mutli-accounts" },
    ],
  },
  {
    title: "Lunar",
    featured: true,
    description: "The best financial services for your thriving business.",
    priceMonthly: 19,
    priceYearly: 220,
    mainFeatures: [
      { id: 1, value: "Advanced invoicing" },
      { id: 2, value: "Easy to use accounting" },
      { id: 3, value: "Mutli-accounts" },
      { id: 4, value: "Tax planning toolkit" },
      { id: 5, value: "VAT & VATMOSS filing" },
      { id: 6, value: "Free bank transfers" },
      { id: 7, value: "Mutli-accounts" },
      { id: 8, value: "Tax planning toolkit" },
      { id: 9, value: "VAT & VATMOSS filing" },
      { id: 10, value: "Free bank transfers" },
    ],
  },
  {
    title: "Martian",
    featured: false,
    description: "Convenient features to take your business to the next level.",
    priceMonthly: 12,
    priceYearly: 140,
    mainFeatures: [
      { id: 1, value: "Basic invoicing" },
      { id: 2, value: "Easy to use accounting" },
      { id: 3, value: "Mutli-accounts" },
      { id: 4, value: "Tax planning toolkit" },
      { id: 5, value: "Tax planning toolkit" },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductSection() {
  return (
    <div className="bg-gray-50" id="product">
      <div className="relative bg-[#247f18]">
        <div
          aria-hidden="true"
          className="hidden absolute bg-gray-50 w-full h-6 bottom-0 lg:block"
        />

        <div className="relative max-w-2xl mx-auto pt-16 px-4 text-center sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            <span className="block lg:inline">Simple pricing,</span>
            <span className="block lg:inline">no commitment.</span>
          </h1>
          <p className="mt-4 text-xl text-indigo-100">
            Everything you need, nothing you don't. Pick a plan that best suits
            your business.
          </p>
        </div>

        {/* Cards */}
        <div className="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
          <div
            aria-hidden="true"
            className="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-[#2ca01c] rounded-tl-lg rounded-tr-lg lg:block"
          />

          <div className="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className={classNames(
                  plan.featured
                    ? "bg-white ring-2 ring-[#2ca01c] shadow-md"
                    : "bg-[#2ca01c]  lg:bg-transparent",
                  "pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12"
                )}
              >
                <div>
                  <h3
                    className={classNames(
                      plan.featured ? "text-[#2ca01c] " : "text-white",
                      "text-sm font-semibold uppercase tracking-wide"
                    )}
                  >
                    {plan.title}
                  </h3>
                  <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                    <div className="mt-3 flex items-center">
                      <p
                        className={classNames(
                          plan.featured ? "text-[#2ca01c] " : "text-white",
                          "text-4xl font-extrabold tracking-tight"
                        )}
                      >
                        ${plan.priceMonthly}
                      </p>
                      <div className="ml-4">
                        <p
                          className={classNames(
                            plan.featured ? "text-gray-700" : "text-white",
                            "text-sm"
                          )}
                        >
                          AUD / mo
                        </p>
                        <p
                          className={classNames(
                            plan.featured ? "text-gray-500" : "text-white",
                            "text-sm"
                          )}
                        >
                          Billed yearly (${plan.priceYearly})
                        </p>
                      </div>
                    </div>
                    <Link href="/signup">
                      <a
                        className={classNames(
                          plan.featured
                            ? "bg-[#2ca01c]  text-white hover:bg-white hover:text-[#2ca01c] hover:border-[#2ca01c]"
                            : "bg-white text-[#2ca01c]  hover:bg-[#2ca01c] hover:text-white hover:border-white",
                          "mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full"
                        )}
                      >
                        Buy {plan.title}
                      </a>
                    </Link>
                  </div>
                </div>
                <h4 className="sr-only">Features</h4>
                <ul
                  role="list"
                  className={classNames(
                    plan.featured
                      ? "border-gray-200 divide-gray-200"
                      : "border-[#2ca01c] divide-[#2ca01c] divide-opacity-75",
                    "mt-7 border-t divide-y lg:border-t-0"
                  )}
                >
                  {plan.mainFeatures.map((mainFeature) => (
                    <li key={mainFeature.id} className="py-3 flex items-center">
                      <CheckIcon
                        className={classNames(
                          plan.featured ? "text-[#2ca01c]" : "text-indigo-200",
                          "w-5 h-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                      <span
                        className={classNames(
                          plan.featured ? "text-gray-600" : "text-white",
                          "ml-3 text-sm font-medium"
                        )}
                      >
                        {mainFeature.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
