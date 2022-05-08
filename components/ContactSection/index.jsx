const contactDetails = [
  {
    name: "Collaborate",
    email: "support@example.com",
    telephone: "+1 (555) 123-4567",
  },
  {
    name: "Press",
    email: "support@example.com",
    telephone: "+1 (555) 123-4567",
  },
  {
    name: "Join our team",
    email: "support@example.com",
    telephone: "+1 (555) 123-4567",
  },
  {
    name: "Say hello",
    email: "support@example.com",
    telephone: "+1 (555) 123-4567",
  },
];
const locations = [
  {
    city: "Sydney",
    address: ["123 Pitt Street", "Sydney, NSW 2000"],
  },
  { city: "New York", address: ["123 New York street", "New York, NY 12345"] },
  { city: "Toronto", address: ["456 Toronto ave", "Toronto, ON N3Y 4H8"] },
  { city: "Chicago", address: ["726 Chicago road", "Chicago, IL 60601"] },
];
const faqs = [
  {
    id: 1,
    question: "HDolores dolor corrupti quisquam veritatis earum?",
    answer:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolor corrupti quisquam veritatis earum ut tempore aperiam quia ullam repellendus!",
  },
  {
    id: 2,

    question: "Dolores dolor corrupti quisquam veritatis earum?",
    answer:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolor corrupti quisquam veritatis earum ut tempore aperiam quia ullam repellendus!",
  },
  {
    id: 3,
    question: "Dolores dolor corrupti quisquam veritatis earum?",
    answer:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolor corrupti quisquam veritatis earum ut tempore aperiam quia ullam repellendus!",
  },
  {
    id: 4,
    question: "Dolores dolor corrupti quisquam veritatis earum?",
    answer:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolor corrupti quisquam veritatis earum ut tempore aperiam quia ullam repellendus!",
  },
];

export default function ContactSection() {
  return (
    <div className="bg-gray-50 z-0 -mt-4">
      {/* Side-by-side grid */}
      <div className="bg-gray-50">
        <div className="max-w-md mx-auto py-24 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="divide-y divide-warm-gray-200">
            <section
              className="lg:grid lg:grid-cols-3 lg:gap-8"
              aria-labelledby="contact-heading"
            >
              <h2
                id="contact"
                className="text-2xl font-extrabold text-[#2ca01c] sm:text-3xl "
              >
                Get in touch
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                {contactDetails.map((item) => (
                  <div key={item.name}>
                    <h3 className="text-lg font-medium text-warm-gray-900">
                      {item.name}
                    </h3>
                    <dl className="mt-2 text-base text-warm-gray-500">
                      <div>
                        <dt className="sr-only">Email</dt>
                        <dd>{item.email}</dd>
                      </div>
                      <div className="mt-1">
                        <dt className="sr-only">Phone number</dt>
                        <dd>{item.telephone}</dd>
                      </div>
                    </dl>
                  </div>
                ))}
              </div>
            </section>
            <section
              className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8"
              aria-labelledby="location-heading"
            >
              <h2
                id="location-heading"
                className="text-2xl font-extrabold text-[#2ca01c] sm:text-3xl"
              >
                Locations
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                {locations.map((location) => (
                  <div key={location.city}>
                    <h3 className="text-lg font-medium text-warm-gray-900">
                      {location.city}
                    </h3>
                    <div className="mt-2 text-base text-warm-gray-500 space-y-1">
                      {location.address.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-warm-gray-50">
        <div className="max-w-md mx-auto py-24 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-[#2ca01c]">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-lg text-warm-gray-500">
                Can’t find the answer you’re looking for? Reach out to our{" "}
                <a
                  href="#"
                  className="font-medium text-[#2ca01c] hover:text-cyan-600"
                >
                  customer support
                </a>{" "}
                team.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <dl className="space-y-12">
                {faqs.map((faq) => (
                  <div key={faq.id}>
                    <dt className="text-lg font-medium text-warm-gray-900">
                      {faq.question}
                    </dt>
                    <dd className="mt-2 text-base text-warm-gray-500">
                      {faq.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="relative mb-4">
        <div
          className="absolute left-0 right-0 h-1/2 bg-warm-gray-50 mb-2"
          aria-hidden="true"
        />
        <div className="relative max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="py-10 px-6 bg-gradient-to-l from-[#247f18] to-[#0fd197] rounded-3xl sm:py-16 sm:px-12 lg:py-20 lg:px-20 lg:flex lg:items-center">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-3xl font-extrabold tracking-tight text-white">
                Sign up for our newsletter
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-cyan-100">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                Lorem cupidatat commodo. Elit sunt amet fugiat.
              </p>
            </div>
            <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
              <form className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full border-white px-5 py-3 placeholder-warm-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-700 focus:ring-white rounded-md"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#2ca01c] hover:bg-white hover:text-[#2ca01c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-700 focus:ring-green-400 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                >
                  Notify me
                </button>
              </form>
              <p className="mt-3 text-sm text-cyan-100">
                We care about the protection of your data. Read our{" "}
                <a href="#" className="text-white font-medium underline">
                  Privacy Policy.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
