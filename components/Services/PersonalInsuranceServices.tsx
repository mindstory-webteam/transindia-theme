import React from "react";

interface InsuranceCard {
  image: string;
  iconBg: string;
  title: string;
  badge: string;
  badgeColor: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonColor: string;
}

const cards: InsuranceCard[] = [
  {
    image: "/images/services/life.svg",
    iconBg: "bg-slate-100",
    title: "Life Insurance",
    badge: "Popular",
    badgeColor: "bg-indigo-100 text-indigo-700",
    description:
      "Term plans, endowment, ULIPs, whole life — we compare all options from 20+ insurers and recommend the best fit for your income, age, and goals.",
    features: [
      "Term Life Insurance",
      "Endowment Plans",
      "ULIPs (Market Linked)",
      "Whole Life Cover",
    ],
    buttonText: "Get Life Quote",
    buttonColor: "bg-blue-700 hover:bg-blue-800",
  },
  {
    image: "/images/services/health.svg",
    iconBg: "bg-emerald-50",
    title: "Health Insurance",
    badge: "Critical need",
    badgeColor: "bg-teal-100 text-teal-700",
    description:
      "Individual, family floater, senior citizen, and critical illness plans. We help you find the right cover with maximum cashless hospital network.",
    features: [
      "Individual Health Plans",
      "Family Floater Policies",
      "Senior Citizen Cover",
      "Critical Illness Plans",
    ],
    buttonText: "Get Health Quote",
    buttonColor: "bg-teal-600 hover:bg-teal-700",
  },
  {
    image: "/images/services/motor.svg",
    iconBg: "bg-orange-50",
    title: "Motor Insurance",
    badge: "Mandatory",
    badgeColor: "bg-orange-100 text-orange-700",
    description:
      "Comprehensive and third-party motor plans for cars, bikes, and commercial vehicles. We compare premium, IDV, and cashless garage network.",
    features: [
      "Comprehensive Car Insurance",
      "Two-Wheeler Insurance",
      "Commercial Vehicle Cover",
      "Zero Depreciation Add-on",
    ],
    buttonText: "Get Motor Quote",
    buttonColor: "bg-orange-500 hover:bg-orange-600",
  },
  {
    image: "/images/services/home.svg",
    iconBg: "bg-purple-50",
    title: "Home Insurance",
    badge: "Underrated",
    badgeColor: "bg-purple-100 text-purple-700",
    description:
      "Structure and contents coverage against fire, flood, theft, earthquakes. Protect your biggest asset starting from \u20b92,000/year.",
    features: [
      "Building / Structure Cover",
      "Contents Insurance",
      "Fire & Natural Perils",
      "Burglary Protection",
    ],
    buttonText: "Get Home Quote",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
  },
  {
    image: "/images/services/travel.svg",
    iconBg: "bg-cyan-50",
    title: "Travel Insurance",
    badge: "Domestic & International",
    badgeColor: "bg-cyan-100 text-cyan-700",
    description:
      "Single trip, multi-trip, student travel, and senior citizen travel plans. Medical emergencies abroad, trip cancellation, and baggage cover.",
    features: [
      "Single & Multi-Trip Plans",
      "Medical Emergency Abroad",
      "Trip Cancellation",
      "Student Travel Cover",
    ],
    buttonText: "Get Travel Quote",
    buttonColor: "bg-cyan-500 hover:bg-cyan-600",
  },
  {
    image: "/images/services/risk.svg",
    iconBg: "bg-slate-100",
    title: "Risk Consultation",
    badge: "Free Assessment",
    badgeColor: "bg-slate-200 text-slate-700",
    description:
      "Our advisers review your entire insurance portfolio, identify gaps, and recommend optimisations — often reducing your total premium spend while improving coverage.",
    features: [
      "Portfolio Gap Analysis",
      "Premium Optimisation",
      "Policy Review & Advice",
      "Annual Policy Audit",
    ],
    buttonText: "Book Free Assessment",
    buttonColor: "bg-slate-800 hover:bg-slate-900",
  },
];

const PersonalInsuranceServices: React.FC = () => {
  return (
    <section className="bg-slate-50 py-16 px-6 md:px-12 pt-40">
      <div className="max-w-7xl mx-auto">
        <span className="inline-block bg-cyan-100 text-cyan-700 text-xs font-bold tracking-wider px-3 py-1.5 rounded-md mb-4">
          FOR INDIVIDUALS &amp; FAMILIES
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-10">
          Personal Insurance <span className="text-cyan-500">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="relative rounded-3xl overflow-hidden shadow-sm flex flex-col"
            >
              {/* Image panel */}
              <div
                className={`${card.iconBg} h-56 flex items-center justify-center relative z-0`}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Curved white content panel overlapping the image */}
              <div className="relative -mt-8 z-10 bg-white rounded-4xl p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-900">
                    {card.title}
                  </h3>
                  <span
                    className={`${card.badgeColor} text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap`}
                  >
                    {card.badge}
                  </span>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {card.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {card.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <span className="text-emerald-500 flex-shrink-0">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`${card.buttonColor} text-white font-semibold rounded-xl py-3 mt-auto transition-colors`}
                >
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalInsuranceServices;