import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Photographer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "This background remover saved me hours of editing. The results are insanely accurate!",
    rating: 5,
  },
  {
    name: "Priya Verma",
    role: "E-commerce Seller",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Perfect for product photos. Clean edges and super fast processing!",
    rating: 5,
  },
  {
    name: "Rahul Singh",
    role: "Designer",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    review:
      "I’ve tried many tools, but this one is by far the easiest and best.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">
        What Our Users Say
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            {/* Stars */}
            <div className="flex mb-3">
              {[...Array(t.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 mr-1" />
              ))}
            </div>

            {/* Review */}
            <p className="text-gray-600 mb-5">"{t.review}"</p>

            {/* User */}
            <div className="flex items-center gap-3">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">{t.name}</h4>
                <span className="text-sm text-gray-500">{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
