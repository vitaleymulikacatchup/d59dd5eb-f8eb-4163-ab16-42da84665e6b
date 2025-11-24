"use client"
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FooterSocial from '@/components/sections/footer/FooterSocial';

export default function AboutPage() {
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

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Master Craftsmanship"
          description={[
            "At Lusui Odyvan, we blend time-honored barbering traditions with contemporary techniques to deliver an unparalleled grooming experience.",
            "Our skilled barbers are dedicated to the art of precision cutting, classic shaving, and personalized styling that enhances your natural character."
          ]}
          buttons={[
            { text: "Meet Our Team", href: "/about" }
          ]}
          showBorder={true}
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