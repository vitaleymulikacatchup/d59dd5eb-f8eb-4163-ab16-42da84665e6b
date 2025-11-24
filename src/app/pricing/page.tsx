"use client"
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Crown, DollarSign } from "lucide-react";

export default function PricingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="small"
      sizing="large"
      background="fluid"
      cardStyle="glass-elevated"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "/" },
            { name: "Services", id: "/services" },
            { name: "About", id: "/about" },
            { name: "Testimonials", id: "/testimonials" },
            { name: "Contact", id: "/contact" }
          ]}
          brandName="Lusui Odyvan"
          button={{
            text: "Book Now",
            href: "/contact"
          }}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Service Pricing"
          description="Transparent pricing for premium barbering services"
          tag="Pricing"
          tagIcon={DollarSign}
          animationType="slide-up"
          textboxLayout="default"
          plans={[
            {
              id: "classic-cut",
              price: "$45",
              name: "Classic Cut",
              buttons: [
                { text: "Book Now", href: "/contact" },
                { text: "Learn More", href: "/services" }
              ],
              features: [
                "Consultation and styling advice",
                "Precision cutting with premium tools",
                "Hair wash and conditioning",
                "Styling with quality products"
              ]
            },
            {
              id: "premium-package",
              badge: "Most Popular",
              badgeIcon: Crown,
              price: "$75",
              name: "Premium Package",
              buttons: [
                { text: "Book Now", href: "/contact" },
                { text: "Learn More", href: "/services" }
              ],
              features: [
                "Classic cut and styling",
                "Beard trim and shaping",
                "Hot towel treatment",
                "Premium grooming products",
                "Complimentary beverage"
              ]
            },
            {
              id: "full-service",
              price: "$95",
              name: "Full Service Experience",
              buttons: [
                { text: "Book Now", href: "/contact" },
                { text: "Learn More", href: "/services" }
              ],
              features: [
                "Complete haircut and styling",
                "Traditional straight razor shave",
                "Beard grooming and conditioning",
                "Scalp massage and treatment",
                "Premium aftercare products"
              ]
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Lusui Odyvan"
          copyrightText="© 2025 Lusui Odyvan Barbershop"
          columns={[
            {
              title: "Services",
              items: [
                { label: "Haircuts", href: "/services" },
                { label: "Beard Grooming", href: "/services" },
                { label: "Traditional Shaving", href: "/services" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "/about" },
                { label: "Master Barbers", href: "/about" },
                { label: "Location", href: "/contact" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Book Appointment", href: "/contact" },
                { label: "Hours", href: "/contact" },
                { label: "Location", href: "/contact" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: "Instagram",
              href: "https://instagram.com/lusuiodyvan",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: "Facebook",
              href: "https://facebook.com/lusuiodyvan",
              ariaLabel: "Like us on Facebook"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}