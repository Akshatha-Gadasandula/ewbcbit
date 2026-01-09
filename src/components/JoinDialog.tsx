import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Bell, Clock } from "lucide-react";

interface JoinDialogProps {
  children: React.ReactNode;
}

const JoinDialog = ({ children }: JoinDialogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center sm:text-center">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Clock className="text-primary" size={32} />
          </div>
          <DialogTitle className="text-xl font-heading">No Openings Currently</DialogTitle>
          <DialogDescription className="text-base pt-2">
            Thank you for your interest in joining EWB CBIT! We currently don't have any openings, 
            but we encourage you to stay connected for future opportunities.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 p-4 bg-secondary/50 rounded-xl">
          <div className="flex items-start gap-3">
            <Bell className="text-primary mt-0.5 flex-shrink-0" size={20} />
            <div>
              <p className="font-medium text-foreground text-sm">Stay Updated</p>
              <p className="text-muted-foreground text-sm mt-1">
                Follow us on our social media channels to get notified when new positions open up.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JoinDialog;
