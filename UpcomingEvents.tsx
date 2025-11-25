import { Calendar, MapPin, Users, Clock, Sparkles } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: string;
  description: string;
  imageUrl: string;
  category: string;
  isFlagship?: boolean;
  timeline: "This Month" | "Next Month" | "Ongoing Series";
}

const events: Event[] = [
  {
    id: 1,
    title: "E-Summit 2025",
    date: "Dec 15-17, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "VIT Bhopal Campus",
    attendees: "500+ Expected",
    description: "Our flagship annual entrepreneurship summit featuring keynote speakers, panel discussions, startup expo, and pitch competitions with ₹10L+ in prizes.",
    imageUrl: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBldmVudHxlbnwxfHx8fDE3NjM5MjkyODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Summit",
    isFlagship: true,
    timeline: "This Month",
  },
  {
    id: 2,
    title: "Hack & Innovate 2.0",
    date: "Dec 8-9, 2025",
    time: "24 Hours",
    location: "Innovation Lab, VIT Bhopal",
    attendees: "150 Hackers",
    description: "48-hour hackathon focused on sustainable tech solutions. Win prizes, mentorship, and incubation opportunities.",
    imageUrl: "https://images.unsplash.com/photo-1638029202288-451a89e0d55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrYXRob24lMjBjb2Rpbmd8ZW58MXx8fHwxNzY0MDAwMDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Hackathon",
    timeline: "This Month",
  },
  {
    id: 3,
    title: "Pitch Perfect Workshop",
    date: "Dec 5, 2025",
    time: "4:00 PM - 7:00 PM",
    location: "Seminar Hall B",
    attendees: "50 Seats",
    description: "Learn the art of pitching from successful founders. Practice sessions and feedback included.",
    imageUrl: "https://images.unsplash.com/photo-1599592187465-6dc742367282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwcGl0Y2glMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzYzOTUzNzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Workshop",
    timeline: "This Month",
  },
  {
    id: 4,
    title: "Founder Fireside Chat",
    date: "Jan 12, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "Virtual & In-person",
    attendees: "200+ Expected",
    description: "Intimate conversation with unicorn startup founders sharing their journey, failures, and learnings.",
    imageUrl: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBldmVudHxlbnwxfHx8fDE3NjM5MjkyODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Talk",
    timeline: "Next Month",
  },
  {
    id: 5,
    title: "Startup Saturday",
    date: "Every Saturday",
    time: "10:00 AM - 12:00 PM",
    location: "E-Cell Office",
    attendees: "Open for All",
    description: "Weekly meetups for aspiring entrepreneurs. Brainstorm ideas, get feedback, and build your network.",
    imageUrl: "https://images.unsplash.com/photo-1599592187465-6dc742367282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwcGl0Y2glMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzYzOTUzNzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Meetup",
    timeline: "Ongoing Series",
  },
];

export function UpcomingEvents() {
  const flagshipEvent = events.find((e) => e.isFlagship);
  const timelineGroups = {
    "This Month": events.filter((e) => e.timeline === "This Month" && !e.isFlagship),
    "Next Month": events.filter((e) => e.timeline === "Next Month"),
    "Ongoing Series": events.filter((e) => e.timeline === "Ongoing Series"),
  };

  return (
    <section id="events" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent/20 text-accent-foreground border-accent/30">
            What's Happening
          </Badge>
          <h2 className="mb-4">Upcoming Events</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join workshops, hackathons, and networking events designed to accelerate your
            entrepreneurial journey.
          </p>
        </div>

        {/* Flagship Event - Large Card */}
        {flagshipEvent && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-accent" />
              <h3>Flagship Event</h3>
            </div>
            <div className="relative bg-gradient-to-br from-primary/10 via-chart-2/10 to-accent/10 rounded-2xl overflow-hidden border-2 border-primary/20">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-auto">
                  <ImageWithFallback
                    src={flagshipEvent.imageUrl}
                    alt={flagshipEvent.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    {flagshipEvent.category}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <h2 className="mb-4">{flagshipEvent.title}</h2>
                  <p className="text-muted-foreground mb-6">{flagshipEvent.description}</p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Date</p>
                        <p className="font-semibold">{flagshipEvent.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Time</p>
                        <p className="font-semibold">{flagshipEvent.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-semibold">{flagshipEvent.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Attendees</p>
                        <p className="font-semibold">{flagshipEvent.attendees}</p>
                      </div>
                    </div>
                  </div>

                  <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                    Register Now - Early Bird Discount
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Timeline Sections */}
        {Object.entries(timelineGroups).map(([timeline, timelineEvents]) => {
          if (timelineEvents.length === 0) return null;
          
          return (
            <div key={timeline} className="mb-12">
              <h3 className="mb-6 flex items-center gap-2">
                <span className="text-primary">●</span> {timeline}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {timelineEvents.map((event) => (
                  <div
                    key={event.id}
                    className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative h-40 overflow-hidden">
                      <ImageWithFallback
                        src={event.imageUrl}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm">
                        {event.category}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-grow">
                      <h4 className="mb-2">{event.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4 flex-grow">
                        {event.description}
                      </p>

                      <div className="space-y-2 mb-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-2">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
}
