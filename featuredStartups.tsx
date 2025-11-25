import { useState } from "react";
import { ExternalLink, Quote } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type Category = "All" | "Tech" | "Fintech" | "Social Impact";

interface Startup {
  id: number;
  name: string;
  category: Category;
  description: string;
  founderName: string;
  founderTitle: string;
  testimonial: string;
  imageUrl: string;
  tags: string[];
  funding: string;
}

const startups: Startup[] = [
  {
    id: 1,
    name: "TechVenture AI",
    category: "Tech",
    description: "AI-powered automation platform helping businesses streamline operations and reduce costs by 40%.",
    founderName: "Ananya Sharma",
    founderTitle: "CEO & Co-founder",
    testimonial: "E-Cell provided the network we needed to secure our seed funding and connect with industry mentors.",
    imageUrl: "https://images.unsplash.com/photo-1665360755361-d8cd03c82b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwc3RhcnR1cCUyMHRlYW18ZW58MXx8fHwxNzYzOTg5MTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["AI/ML", "SaaS", "B2B"],
    funding: "₹25L Seed",
  },
  {
    id: 2,
    name: "PayFlow",
    category: "Fintech",
    description: "Digital payment solution for small merchants with instant settlements and zero setup fees.",
    founderName: "Rahul Verma",
    founderTitle: "Founder",
    testimonial: "The mentorship and resources from E-Cell accelerated our go-to-market strategy by months.",
    imageUrl: "https://images.unsplash.com/photo-1660673868711-981d95202f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc2Mzk2OTQ3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Payments", "Mobile", "B2C"],
    funding: "₹15L Pre-seed",
  },
  {
    id: 3,
    name: "EcoCircle",
    category: "Social Impact",
    description: "Connecting waste collectors with recycling centers through a mobile marketplace platform.",
    founderName: "Priya Patel",
    founderTitle: "Co-founder & COO",
    testimonial: "E-Cell's ecosystem helped us validate our model and scale to 5 cities within our first year.",
    imageUrl: "https://images.unsplash.com/photo-1762686485015-d0f1268fb99e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBpbXBhY3QlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzYzOTc2MDkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Sustainability", "Marketplace", "Social"],
    funding: "₹10L Grant",
  },
  {
    id: 4,
    name: "CodeCraft Academy",
    category: "Tech",
    description: "Ed-tech platform offering live coding bootcamps with guaranteed placement support.",
    founderName: "Vikram Singh",
    founderTitle: "CEO",
    testimonial: "The peer network at E-Cell was invaluable. We found our technical co-founder here!",
    imageUrl: "https://images.unsplash.com/photo-1665360755361-d8cd03c82b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwc3RhcnR1cCUyMHRlYW18ZW58MXx8fHwxNzYzOTg5MTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["EdTech", "Bootcamp", "B2C"],
    funding: "Bootstrapped",
  },
  {
    id: 5,
    name: "MicroLend",
    category: "Fintech",
    description: "Micro-lending platform for women entrepreneurs in tier 2 and tier 3 cities.",
    founderName: "Neha Gupta",
    founderTitle: "Founder & CEO",
    testimonial: "E-Cell's pitch workshops prepared us perfectly for our investor meetings. We closed our round in record time.",
    imageUrl: "https://images.unsplash.com/photo-1660673868711-981d95202f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc2Mzk2OTQ3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Lending", "Fintech", "Social"],
    funding: "₹20L Seed",
  },
  {
    id: 6,
    name: "SkillBridge",
    category: "Social Impact",
    description: "Bridging the skill gap by connecting underprivileged youth with industry-led training programs.",
    founderName: "Amit Kumar",
    founderTitle: "Co-founder",
    testimonial: "The E-Cell community believed in our vision when no one else did. That support was everything.",
    imageUrl: "https://images.unsplash.com/photo-1762686485015-d0f1268fb99e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBpbXBhY3QlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzYzOTc2MDkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Education", "Skills", "NGO"],
    funding: "CSR Funded",
  },
];

export function FeaturedStartups() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const categories: Category[] = ["All", "Tech", "Fintech", "Social Impact"];

  const filteredStartups =
    activeCategory === "All"
      ? startups
      : startups.filter((startup) => startup.category === activeCategory);

  return (
    <section id="startups" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Success Stories
          </Badge>
          <h2 className="mb-4">Featured Startups</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the innovative ventures incubated at E-Cell VIT Bhopal, transforming industries
            and creating impact.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "bg-primary hover:bg-primary/90"
                  : "hover:bg-secondary"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Startups Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStartups.map((startup) => (
            <div
              key={startup.id}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={startup.imageUrl}
                  alt={startup.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-background/90 backdrop-blur-sm">
                    {startup.funding}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Startup Info */}
                <div className="mb-4">
                  <h3 className="mb-2">{startup.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{startup.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {startup.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mt-auto">
                  <div className="bg-muted/50 rounded-lg p-4 mb-4 relative">
                    <Quote className="absolute top-2 right-2 w-4 h-4 text-primary/30" />
                    <p className="text-sm italic text-foreground/90">{startup.testimonial}</p>
                  </div>

                  {/* Founder Info */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-sm">{startup.founderName}</p>
                      <p className="text-xs text-muted-foreground">{startup.founderTitle}</p>
                    </div>
                    <Button size="sm" variant="ghost" className="gap-1">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-2">
            View All Startups
          </Button>
        </div>
      </div>
    </section>
  );
}
