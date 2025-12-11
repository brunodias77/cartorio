// shared/components/ui/Badge/Badge.types.ts

export type BadgeVariant = "pending" | "success" | "error";

export interface BadgeProps {
  status: string;
  onClick?: () => void;
  isInteractive?: boolean;
  variant?: BadgeVariant;
}
