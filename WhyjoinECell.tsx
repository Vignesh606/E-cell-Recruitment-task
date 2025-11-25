import {
  Lightbulb,
  Users,
  TrendingUp,
  Award,
  Network,
  Briefcase,
} from "lucide-react";
import { Badge } from "./ui/badge";

interface Benefit {
  icon: React.ElementType;
  title: string;
  description: string;
  stat?: string;
}

const benefits: Benefit[] = [
  {
    icon: Lightbulb,
    title: "Mentorship & Guidance",
    description: "Get personalized mentorship from successful founders, industry experts, and experienced VCs who've been there before.",
    stat: "20+ Mentors",
  },
  {
    icon: TrendingUp,
    title: "Funding Opportunities",
    description: "Access to seed funding, grants, and pitch competitions with direct connections to angel investors and VCs.",
    stat: "₹50L+ Raised",
  },
  {
    icon: Network,
    title: "Network & Community",
    description: "Join a vibrant community of 200+ like-minded entrepreneurs, co-founders, and industry professionals.",
    stat: "200+ Members",
  },
  {
    icon: Award,
    title: "Learning & Workshops",
    description: "Regular workshops, bootcamps, and masterclasses on product development, marketing, finance, and more.",
    stat: "50+ Events/Year",
  },
  {
    icon: Briefcase,
    title: "Resources & Infrastructure",
    description: "Access to co-working spaces, legal support, technology resources, and incubation facilities at VIT Bhopal.",
    stat: "24/7 Access",
  },
  {
    icon: Users,
    title: "Team Building",
    description: "Find co-founders, developers, designers, and marketing experts from our diverse talent pool.",
    stat: "Active Network",
  },
];

export function WhyJoinECell() {
  return (
    <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-chart-2/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-chart-2/20 text-chart-2 border-chart-2/30">
            Join the Movement
          </Badge>
          <h2 className="mb-4">Why Join E-Cell?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            E-Cell VIT Bhopal provides everything you need to transform your entrepreneurial dreams
            into successful ventures.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-chart-2 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-2">
                      <h4>{benefit.title}</h4>
                      {benefit.stat && (
                        <Badge variant="secondary" className="ml-2 text-xs">
                          {benefit.stat}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-primary via-chart-2 to-accent rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl mb-2">15+</div>
              <div className="text-sm opacity-90">Ventures Incubated</div>
            </div>
            <div>
              <div className="text-4xl mb-2">₹50L+</div>
              <div className="text-sm opacity-90">Total Funding</div>
            </div>
            <div>
              <div className="text-4xl mb-2">200+</div>
              <div className="text-sm opacity-90">Active Members</div>
            </div>
            <div>
              <div className="text-4xl mb-2">78%</div>
              <div className="text-sm opacity-90">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <div className="bg-card rounded-xl p-8 border border-border">
            <p className="text-lg italic text-foreground mb-4">
              "E-Cell VIT Bhopal was the turning point for my startup journey. The mentorship,
              resources, and community support helped us go from an idea on paper to a funded
              venture in just 8 months."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-chart-2 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">AS</span>
              </div>
              <div className="text-left">
                <p className="font-semibold">Ananya Sharma</p>
                <p className="text-sm text-muted-foreground">CEO, TechVenture AI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
