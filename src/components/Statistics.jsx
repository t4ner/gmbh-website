import React from "react";

const Statistics = ({ title, description, stats }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Dekoratif SVG Desenler */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#02C5DF", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#008FC7", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              d="M0,50 Q25,25 50,50 T100,50"
              stroke="url(#grad1)"
              strokeWidth="0.5"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M0,60 Q25,35 50,60 T100,60"
              stroke="url(#grad1)"
              strokeWidth="0.5"
              fill="none"
              className="animate-pulse delay-100"
            />
            <path
              d="M0,40 Q25,15 50,40 T100,40"
              stroke="url(#grad1)"
              strokeWidth="0.5"
              fill="none"
              className="animate-pulse delay-200"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-24">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r pb-2 from-[#02C5DF] to-[#008FC7] bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-gray-600 text-lg">{description}</p>
        </div>

        {/* Statistics Grid */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group relative ${
                  index === 1 ? "mt-8 md:mt-12" : ""
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#02C5DF] to-[#008FC7] rounded-2xl opacity-20 group-hover:opacity-30 transform transition-all duration-300 -rotate-6"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl transform transition-transform duration-300 hover:-translate-y-2">
                  <div className="text-center">
                    <span className="text-6xl font-bold text-[#02C5DF] mb-4 block">
                      {stat.value}
                    </span>
                    <h3 className="text-xl font-semibold mb-3 text-[#008FC7]">
                      {stat.title}
                    </h3>
                    <p className="text-gray-600">{stat.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
