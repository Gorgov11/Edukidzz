import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useEmailActions } from "@/hooks/useEmailActions";

type NewsletterModalProps = {
  initialOpen?: boolean;
  autoOpenDelayMs?: number;
};

const STORAGE_KEY = "newsletter_modal_last_shown";

const NewsletterModal = ({ initialOpen = false, autoOpenDelayMs = 8000 }: NewsletterModalProps) => {
  const [open, setOpen] = useState(initialOpen);
  const [email, setEmail] = useState("");
  const { subscribeToNewsletter, isSubmitting } = useEmailActions();

  useEffect(() => {
    const lastShown = localStorage.getItem(STORAGE_KEY);
    const oneDayMs = 24 * 60 * 60 * 1000;
    const canShow = !lastShown || Date.now() - Number(lastShown) > oneDayMs;
    if (canShow) {
      const t = setTimeout(() => setOpen(true), autoOpenDelayMs);
      return () => clearTimeout(t);
    }
  }, [autoOpenDelayMs]);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const result = await subscribeToNewsletter(email, "", "modal_popup");
    if (result.success) {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
      setOpen(false);
      setEmail("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-secondary" />
            </span>
            Get Your Free Activity Pack
          </DialogTitle>
          <DialogDescription>
            Subscribe to receive updates on events, book releases and sessions
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubscribe} className="space-y-3">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" className="w-full btn-secondary" disabled={isSubmitting}>
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterModal;


