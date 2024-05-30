import React from 'react';
import '../index.css';

const servicesData = [
  {
    title: "Web Development",
    description: "Building responsive and modern websites using the latest technologies.",
    image: "/service/web_development_image.jpg",

  },
  {
    title: "UI/UX Design",
    description: "Creating user-friendly and aesthetic designs for your applications.",
    image: "/service/ui_ux.jpg",
  },
  {
    title: "Mobile Development",
    description: "Developing mobile applications for both Android and iOS platforms.",
    image: "/service/mobile_app_development.jpg",
  },
  {
    title: "SEO Optimization",
    description: "Improving your website's visibility on search engines.",
    image: "/service/seo.png",
  },
];

const Service = () => {
 return (
      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">My Services</h2>
          <div className="flex flex-wrap -mx-4">
            {servicesData.map((service, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-32 object-cover mb-4 rounded"
                  />
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };


export default Service;