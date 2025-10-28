import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Presentation } from "lucide-react";

const Sessions = () => {
  const items = [
    {
      title: "The Power of Affirmations & Self-Love in Early Childhood",
      points: [
        "How positive self-talk builds confidence, resilience, and mental wellbeing from a young age.",
        "Practical affirmations parents and teachers can use daily.",
      ],
    },
    {
      title: "Spark the Talk: Using the CSI Strategy (Connect, Share, Imagine)",
      points: [
        "Linking storytelling to emotional literacy and conversation skills.",
        "Real examples from my books and activities schools/parents can adopt.",
      ],
    },
    {
      title: "Simple & Effective Classroom Management for Early Years",
      points: [
        "Playful and positive strategies (call-and-response cues, motivational gestures, visual signals).",
        "How consistency builds structure and confidence in children.",
      ],
    },
    {
      title: "Learning Through Play: Linking the 7 Areas of Learning",
      points: [
        "How play connects literacy, math, and personal development seamlessly.",
        "Ideas for parents to implement at home and teachers to bring into class.",
      ],
    },
    {
      title: "The Magic of Circle Time: Building Belonging & Communication",
      points: [
        "Why circle time matters for social-emotional growth.",
        "Easy activities for meaningful connections at home and school.",
      ],
    },
    {
      title: "Raising Readers: Fostering a Love for Books from FS1–Year 2 (NEW)",
      points: [
        "Beyond phonics: creating storytelling habits that stick.",
        "Simple strategies for busy parents to nurture daily reading.",
      ],
    },
    {
      title: "Emotional Literacy in Action: Helping Children Name, Manage & Celebrate Feelings (NEW)",
      points: [
        "How to integrate emotions into daily routines through games, stories, and visuals.",
        "Tools for both parents and teachers to support self-regulation.",
      ],
    },
    {
      title: "From Chaos to Calm: Routines & Rituals That Support Young Children (NEW)",
      points: [
        "Why routines are a child's “safe net” for wellbeing and learning.",
        "Transition tricks for smoother mornings, mealtimes, and classroom changeovers.",
      ],
    },
    {
      title: "Screen Time vs. Green Time: Finding the Right Balance (NEW, Parent-Focused)",
      points: [
        "Practical, guilt-free guidance for parents on digital boundaries.",
        "Alternative activities to foster focus, imagination, and wellbeing.",
      ],
    },
  ];

  return (
    <section id="sessions" className="py-16 lg:py-24 bg-background">
      <div className="container-width section-padding">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Presentation className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Webinars & Sessions
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            “Interactive sessions designed to inspire, connect, and transform.”
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4 justify-center">
            <Badge variant="outline" className="text-sm">Parents</Badge>
            <Badge variant="outline" className="text-sm">Educators</Badge>
            <Badge variant="outline" className="text-sm">Early Years Focus</Badge>
          </div>

          <Accordion type="single" collapsible className="space-y-2">
            {items.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-border rounded-xl px-4">
                <AccordionTrigger className="text-left font-semibold text-foreground py-3">
                  {idx + 1}. {item.title}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  <ul className="list-disc pl-6 space-y-2">
                    {item.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Sessions;








