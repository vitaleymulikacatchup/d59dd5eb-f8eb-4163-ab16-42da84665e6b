"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Calendar, Instagram, Facebook } from "lucide-react";

export default function ContactPage() {
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
            { name: "Pricing", id: "/pricing" },
            { name: "Testimonials", id: "/testimonials" }
          ]}
          brandName="Lusui Odyvan"
          button={{
            text: "Book Now",
            href: "/contact"
          }}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Book Appointment"
          tagIcon={Calendar}
          title="Visit Lusui Odyvan Today"
          description="Schedule your appointment and experience the finest in traditional barbering and modern grooming."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763972720677-xqtxe9o5.jpg"
          imageAlt="Master barber at work"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Book Now"
          termsText="By booking, you confirm availability for your preferred appointment time."
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