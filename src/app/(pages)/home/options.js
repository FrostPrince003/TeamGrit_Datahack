// components/FeatureOptions.js
export default function FeatureOptions() {
    const options = [
      { title: "Daily Trivia", description: "Start Now", color: "bg-teal-200" },
      { title: "Daily Play & Win", description: "Start Now", color: "bg-green-400" },
      { title: "Play Like King", description: "Start Now", color: "bg-blue-200" },
    ];
  
    return (
      <section className="py-12">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {options.map((option, index) => (
            <div key={index} className={`p-6 rounded-lg shadow-lg ${option.color}`}>
              <h3 className="text-xl font-bold mb-4">{option.title}</h3>
              <button className="text-sm text-white px-4 py-2 bg-green-600 rounded">Start Now</button>
            </div>
          ))}
        </div>
      </section>
    );
  }
  