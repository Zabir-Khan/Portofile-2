import {
  Aperture,
  Camera,
  Package,
  Briefcase,
  MapPin,
  Globe,
  Handshake,
  Mail,
  Phone,
  ArrowRight,
  ArrowLeft,
  Download,
  X,
  Menu,
  type LucideIcon,
} from "lucide-react";

export const ICONS: Record<string, LucideIcon> = {
  aperture: Aperture,
  camera: Camera,
  package: Package,
  briefcase: Briefcase,
  location: MapPin,
  globe: Globe,
  handshake: Handshake,
  mail: Mail,
  phone: Phone,
  arrowRight: ArrowRight,
  arrowLeft: ArrowLeft,
  download: Download,
  close: X,
  menu: Menu,
};

export type IconName = keyof typeof ICONS;
