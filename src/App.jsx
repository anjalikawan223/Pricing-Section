import PricingCard from "./components/PricingCards"

function App() {

    const list= [
      {
        id:"01",
        price: '$80',
        title: 'Base',
        description: 'For most businesses that want to optimize web queries',
        buttonText: "Downgrade"
      },
      {
        id:"02",
        price: '$120',
        title: 'Pro',
        description: 'For most businesses that want to optimize web queries',
        buttonText: "Upgrade",
        isPopular: "true"
      },
      {
        id:"03",
        price: '$260',
        title: 'Base',
        description: 'For most businesses that want to optimize web queries',
        buttonText: "Upgrade"
      },

    ];

    const feature = [
      "All limited links",
      "Own analytics platform",
      "Chat support",
      "Optimize hashtags",
      "Unlimited users"
    ];
  
  return(
      
      
      <section className="min-h-screen px-6 py-16 text-center bg-[#151932] text-white">

          <h1 className="text-4xl md:text-5xl font-semibold">
            Simple Transparent Pricing
          </h1>

          <p className="mt-3 text-sm text-gray-300">
            No contract. No surprise fees.
          </p>
          
          {/* Monthly/Yearly */}
          <div className="inline-flex items-center mt-8 p-1 rounded-full bg-slate-800 border border-slate-700">
            <button className="px-6 py-2 rounded-full bg-indigo-500 text-white text-xs font-bold shadow-lg">
              Monthly
            </button>

            <button className="px-6 py-2 rounded-full text-slate-400 text-xs font-bold">
              Yearly
            </button>
          </div>
          
          {/* Pricing Cards */}
          <div className="mx-auto mt-10 grid w-full max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
              {
                list.map((pricing) => (

                    <PricingCard 
                      key= {pricing.id} 
                      price= {pricing.price} 
                      title= {pricing.title} 
                      description= {pricing.description}
                      buttonText={pricing.buttonText}
                      feature={feature}
                      isPopular={pricing. isPopular}
                    />
              
                ))
              }
          </div>

      </section>

  )

}

export default App
