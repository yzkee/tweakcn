"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import Logo from "@/assets/logo.svg";
import Shadcraft from "@/assets/shadcraft.svg";
import FigmaIcon from "@/assets/figma.svg";
import { Check, X, ArrowUpRight, Figma, Cable, Paintbrush } from "lucide-react";
import Link from "next/link";
import { FIGMA_CONSTANTS, createPurchaseUrl } from "@/lib/figma-constants";
interface FigmaExportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FigmaExportDialog({ open, onOpenChange }: FigmaExportDialogProps) {
  const steps = FIGMA_CONSTANTS.steps.map((step, index) => ({
    ...step,
    icon:
      index === 0 ? (
        <Figma className="h-6 w-6" />
      ) : index === 1 ? (
        <Cable className="h-6 w-6" />
      ) : (
        <Paintbrush className="h-6 w-6" />
      ),
  }));

  const handlePurchase = () => {
    const url = createPurchaseUrl("/");
    window.open(url, "_blank");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-[600px] overflow-y-auto p-0">
        {/* Header */}
        <div className="p-8 pb-5">
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              <Logo className="h-6 w-6" />
              <div className="text-lg font-bold">tweakcn</div>
            </div>
            <X className="h-4 w-4" />
            <Link href={FIGMA_CONSTANTS.shadcraftUrl} target="_blank">
              <div className="flex items-center gap-2">
                <Shadcraft className="h-6 w-6" />
                <div className="text-lg font-bold">shadcraft</div>
              </div>
            </Link>
          </div>
        </div>

        <div className="space-y-16 px-8 pb-32">
          {/* Hero Section */}
          <div className="space-y-6 text-center">
            <h1 className="text-5xl leading-12 font-semibold tracking-tight">
              Apply your theme to the ultimate Figma UI kit
            </h1>

            <div className="flex justify-center gap-3.5">
              <Button size="lg" className="h-10 px-8" onClick={handlePurchase}>
                Get started
              </Button>
              <Link href={FIGMA_CONSTANTS.previewUrl} target="_blank">
                <Button variant="outline" size="lg" className="h-10 gap-2 px-8">
                  <FigmaIcon className="h-4 w-4" />
                  Preview
                </Button>
              </Link>
            </div>

            <div className="space-y-1.5 pt-1">
              <p className="text-muted-foreground text-sm">Trusted by top designers</p>
              <div className="flex justify-center -space-x-3">
                {FIGMA_CONSTANTS.designers.map((designer, index) => (
                  <Avatar key={index} className="border-background h-8 w-8 border-2">
                    <AvatarImage src={designer.avatar} alt={designer.name} />
                    <AvatarFallback className="text-xs">{designer.fallback}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>
          </div>

          {/* How it works */}
          <div className="space-y-4">
            <h2 className="text-center text-2xl font-semibold">How it works</h2>
            <div className="border-border rounded-2xl border px-6">
              <div className="divide-border grid grid-cols-3 divide-x">
                {steps.map((step, index) => (
                  <div key={index} className="space-y-2 px-6 py-6 text-center first:pl-0 last:pr-0">
                    <div className="text-foreground mb-2 flex justify-center">{step.icon}</div>
                    <p className="text-muted-foreground text-sm">{step.step}</p>
                    <h3 className="font-semibold">{step.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature Description */}
          <div className="space-y-6 text-center">
            <div className="mx-auto max-w-sm space-y-1.5">
              <h2 className="text-2xl font-semibold">Top quality Figma UI kit for professionals</h2>
              <p className="text-muted-foreground">
                Shadcraft is packed with top quality components, true to the shadcn/ui ethos.
              </p>
            </div>

            {/* Demo UI Preview */}
            <div className="border-border relative overflow-hidden rounded-2xl border">
              <img
                src="/figma-onboarding/shadcraft-preview.jpg"
                alt="Shadcraft Figma UI Kit Preview"
                className="h-auto w-full"
              />
            </div>

            <Link href={FIGMA_CONSTANTS.shadcraftUrl} target="_blank">
              <Button variant="link" className="gap-1 text-sm">
                More on Shadcraft
                <ArrowUpRight className="h-3 w-3" />
              </Button>
            </Link>
          </div>

          {/* Pricing */}
          <div className="space-y-6">
            <h2 className="text-center text-2xl font-semibold">Pricing</h2>

            <Card className="p-6">
              <div className="grid gap-7 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="font-semibold">What you get with Shadcraft</h3>
                  <div className="space-y-2">
                    {FIGMA_CONSTANTS.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-1.5">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <Badge variant="secondary" className="w-fit">
                    Introductory offer
                  </Badge>
                  <div className="space-y-1.5">
                    <div className="flex items-end gap-1">
                      <span className="text-5xl font-semibold">$89</span>
                    </div>
                    <div className="text-muted-foreground text-sm line-through">$119</div>
                  </div>
                  <div className="flex gap-3">
                    <Button className="flex-1" onClick={handlePurchase}>
                      Get started
                    </Button>
                    <Link href={FIGMA_CONSTANTS.previewUrl} target="_blank">
                      <Button variant="outline" className="gap-2">
                        <FigmaIcon className="h-4 w-4" />
                        Preview
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
            <p className="text-muted-foreground text-center text-xs">Prices in USD</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
