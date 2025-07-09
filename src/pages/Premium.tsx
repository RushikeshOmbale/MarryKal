import React from 'react';
import { Crown, Check, Star, Zap, Shield, HeartHandshake } from 'lucide-react';

const Premium = () => {
  const features = [
    {
      icon: <Crown className="h-6 w-6" />,
      title: 'Priority Vendor Access',
      description: 'Get first access to the best vendors and premium venues before others'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Unlimited Customizations',
      description: 'Personalize every aspect of your wedding with unlimited customization options'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Dedicated Wedding Planner',
      description: '24/7 support from your personal wedding planning expert'
    },
    {
      icon: <HeartHandshake className="h-6 w-6" />,
      title: 'Exclusive Discounts',
      description: 'Save up to 25% on all bookings with exclusive premium member discounts'
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: 'Premium Vendor Network',
      description: 'Access to elite tier vendors with highest ratings and reviews'
    }
  ];

  const plans = [
    {
      name: 'Basic',
      price: 0,
      period: 'Free',
      features: [
        'Browse destinations',
        'Basic vendor listings',
        'Email support',
        'Standard booking'
      ],
      buttonText: 'Current Plan',
      buttonStyle: 'bg-gray-200 text-gray-800 cursor-not-allowed',
      popular: false
    },
    {
      name: 'Premium',
      price: 2999,
      period: 'per year',
      features: [
        'Priority vendor access',
        'Unlimited customizations',
        'Dedicated wedding planner',
        'Exclusive discounts up to 25%',
        'Premium vendor network',
        '24/7 priority support',
        'Advanced booking features',
        'Custom wedding timeline'
      ],
      buttonText: 'Upgrade to Premium',
      buttonStyle: 'bg-gradient-to-r from-rose-500 to-purple-600 text-white hover:from-rose-600 hover:to-purple-700',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Contact us',
      features: [
        'All Premium features',
        'Multiple wedding events',
        'Corporate wedding packages',
        'Custom vendor partnerships',
        'Bulk booking discounts',
        'Dedicated account manager',
        'Custom reporting',
        'API access'
      ],
      buttonText: 'Contact Sales',
      buttonStyle: 'bg-gray-900 text-white hover:bg-gray-800',
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Priya & Arjun',
      location: 'Udaipur Wedding',
      text: 'The premium service made our wedding planning so much easier. Our dedicated planner helped us create the perfect celebration.',
      rating: 5
    },
    {
      name: 'Neha & Rohit',
      location: 'Goa Wedding',
      text: 'The exclusive vendor access was amazing! We got the best photographers and decorators at discounted rates.',
      rating: 5
    },
    {
      name: 'Ananya & Vikram',
      location: 'Coorg Wedding',
      text: 'Premium customizations allowed us to create a unique experience that perfectly matched our vision.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold">Premium Experience</h1>
            </div>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Elevate your wedding planning with exclusive access to premium vendors, 
              unlimited customizations, and dedicated support from wedding experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Premium Journey
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Premium?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get access to exclusive features and services that make your wedding planning effortless and memorable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-500 to-purple-600 text-white rounded-full mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600">
              Select the perfect plan for your wedding planning needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg overflow-hidden ${plan.popular ? 'ring-2 ring-rose-500 transform scale-105' : ''}`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-rose-500 to-purple-600 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {typeof plan.price === 'number' ? `₹${plan.price.toLocaleString()}` : plan.price}
                    </div>
                    <div className="text-gray-600">{plan.period}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${plan.buttonStyle}`}>
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Premium Couples Say</h2>
            <p className="text-xl text-gray-600">
              Real experiences from couples who chose our premium service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-rose-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Premium Journey?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of couples who have created their dream weddings with our premium service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Upgrade Now
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;