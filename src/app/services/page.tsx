"use client"
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Star } from "lucide-react";

export default function ServicesPage() {
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

      <div id="services" data-section="services">
        <FeatureCardOne
          title="Our Services"
          description="Discover our comprehensive range of premium grooming services designed for the modern gentleman"
          tag="Services"
          tagIcon={Star}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          features={[
            {
              title: "Classic Haircuts",
              description: "Precision cuts tailored to your face shape and personal style, executed with traditional techniques and modern flair.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763972716370-yo4ha0va.jpg",
              imageAlt: "Professional haircut service"
            },
            {
              title: "Beard Grooming",
              description: "Expert beard trimming, shaping, and styling to maintain your facial hair at its finest.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763972717372-arxzjn2i.jpg",
              imageAlt: "Beard trimming and grooming"
            },
            {
              title: "Traditional Shaving",
              description: "Experience the luxury of a traditional straight razor shave with hot towel treatment.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763972718375-zizfs6nz.png",
              imageAlt: "Traditional razor shaving service"
            },
            {
              title: "Hair Styling",
              description: "Professional styling services using premium products to achieve your desired look.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763972719603-5ayxv3ut.jpg",
              imageAlt: "Hair styling and finishing"
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