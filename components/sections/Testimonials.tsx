import ClientFeedback from "@/components/ui/testimonial";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <div className="border-b border-border">
      <ClientFeedback items={testimonials} profileUrl="https://www.linkedin.com/in/kproloy" />
    </div>
  );
}
