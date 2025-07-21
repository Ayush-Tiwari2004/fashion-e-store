import TestimonialData from '../../API/TestimonialData.json'

export const Testimonials = () => (
  <section className="bg-pink-50 dark:bg-gray-800 py-16 px-6 md:px-20 text-center">
    <h2 className="text-4xl font-bold mb-10 dark:text-white text-gray-800">What Our Customers Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {TestimonialData.map((item, index) => (
        <div key={index} className={`bg-white dark:bg-gray-700 dark:text-white text-gray-800 p-6 rounded-2xl shadow-md hover:scale-[1.02] transition ${item.background}`}>
          <img src={item.image} alt={item.name} className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-pink-300" />
          <h3 className="text-xl font-bold ">{item.name}</h3>
          <p className="text-sm  italic">{item.role}</p>
          <p className="mt-3 ">“{item.review}”</p>
        </div>
      ))}
    </div>
  </section>
);
