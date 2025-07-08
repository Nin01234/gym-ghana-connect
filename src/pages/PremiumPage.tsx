import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  Star, 
  Crown, 
  Zap, 
  Users,
  Calendar,
  Video,
  Award,
  Target,
  TrendingUp
} from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export const PremiumPage = () => {
  const plans = [
    {
      name: "Basic",
      price: "₵50",
      period: "/month",
      description: "Perfect for getting started",
      features: [
        "Access to basic workout videos",
        "Community forum access",
        "Basic progress tracking",
        "Email support"
      ],
      popular: false,
      color: "border-muted"
    },
    {
      name: "Premium",
      price: "₵120",
      period: "/month",
      description: "Most popular choice",
      features: [
        "All Basic features",
        "Unlimited workout videos",
        "Personal trainer consultations",
        "Custom workout plans",
        "Nutrition guidance",
        "Priority support",
        "Mobile app access"
      ],
      popular: true,
      color: "border-primary"
    },
    {
      name: "Elite",
      price: "₵200",
      period: "/month",
      description: "For serious fitness enthusiasts",
      features: [
        "All Premium features",
        "1-on-1 virtual training sessions",
        "Personalized meal plans",
        "Advanced analytics",
        "Exclusive workshops",
        "24/7 dedicated support",
        "Early access to new features"
      ],
      popular: false,
      color: "border-warning"
    }
  ];

  const benefits = [
    {
      icon: Video,
      title: "Premium Content",
      description: "Access to exclusive workout videos and training programs from certified trainers."
    },
    {
      icon: Users,
      title: "Personal Training",
      description: "One-on-one sessions with experienced trainers tailored to your fitness goals."
    },
    {
      icon: Target,
      title: "Custom Plans",
      description: "Personalized workout and nutrition plans designed specifically for you."
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Advanced analytics to monitor your fitness journey and celebrate achievements."
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Book training sessions and classes at times that work best for your schedule."
    },
    {
      icon: Award,
      title: "Expert Support",
      description: "24/7 access to fitness experts and nutritionists for guidance and motivation."
    }
  ];

  const testimonials = [
    {
      name: "Kwame Asante",
      location: "Accra",
      text: "The premium plan transformed my fitness journey. The personal trainers are exceptional!",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Ama Osei",
      location: "Kumasi",
      text: "Custom workout plans and nutrition guidance helped me achieve my goals faster than I imagined.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Kofi Mensah",
      location: "Tema",
      text: "The convenience of virtual training sessions fits perfectly with my busy schedule.",
      rating: 5,
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Crown className="w-4 h-4 mr-2" />
            Premium Plans
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Unlock Your
            <span className="text-primary"> Full Potential</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of Ghanaians who have transformed their lives with our premium fitness plans. 
            Get personalized training, nutrition guidance, and expert support.
          </p>
        </div>

        {/* Benefits Slider */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Premium?</h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="!pb-12"
          >
            {benefits.map((benefit, index) => (
              <SwiperSlide key={index}>
                <Card className="h-full hover:shadow-hero transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.color} ${plan.popular ? 'scale-105' : ''} hover:shadow-hero transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold">
                    {plan.price}<span className="text-sm font-normal text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-success mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Members Say</h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="!pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm mb-4 italic">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-sm font-semibold text-primary">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-hero rounded-lg p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Life?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join over 10,000 Ghanaians who have already started their fitness transformation. 
            Start your premium journey today with a 7-day free trial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Crown className="w-4 h-4 mr-2" />
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};