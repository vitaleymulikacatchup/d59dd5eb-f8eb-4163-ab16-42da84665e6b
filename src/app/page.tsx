"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import { Scissors } from "lucide-react";
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Instagram, Facebook } from "lucide-react";

export default function HomePage() {
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
            { name: "Services", id: "/services" },
            { name: "About", id: "/about" },
            { name: "Pricing", id: "/pricing" },
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

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Lusui Odyvan Barbershop"
          description="Experience traditional craftsmanship with modern style. Premium grooming services for the distinguished gentleman."
          tag="Premium Grooming"
          tagIcon={Scissors}
          buttons={[
            { text: "Book Appointment", href: "/contact" },
            { text: "View Services", href: "/services" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763972715152-udqq4f5f.jpg",
              imageAlt: "Lusui Odyvan barbershop interior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763972716370-yo4ha0va.jpg",
              imageAlt: "Professional hair cutting service"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763972717372-arxzjn2i.jpg",
              imageAlt: "Expert beard trimming"
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
              icon: Instagram,
              href: "https://instagram.com/lusuiodyvan",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/lusuiodyvan",
              ariaLabel: "Like us on Facebook"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}