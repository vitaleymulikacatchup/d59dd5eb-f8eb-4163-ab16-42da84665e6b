"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { MessageCircle, Instagram, Facebook } from "lucide-react";

export default function TestimonialsPage() {
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
            { name: "Contact", id: "/contact" }
          ]}
          brandName="Lusui Odyvan"
          button={{
            text: "Book Now",
            href: "/contact"
          }}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Client Testimonials"
          description="What our valued clients say about their experience at Lusui Odyvan"
          tag="Reviews"
          tagIcon={MessageCircle}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "Marcus Thompson",
              role: "Executive",
              company: "Finance Professional",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763972721751-8g5nscx3.jpg",
              imageAlt: "Marcus Thompson portrait"
            },
            {
              id: "2",
              name: "David Rodriguez",
              role: "Entrepreneur",
              company: "Business Owner",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763972722694-3uktbjch.jpg",
              imageAlt: "David Rodriguez portrait"
            },
            {
              id: "3",
              name: "James Mitchell",
              role: "Attorney",
              company: "Legal Professional",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763972723624-k7ehlhfo.jpg",
              imageAlt: "James Mitchell portrait"
            },
            {
              id: "4",
              name: "Robert Chen",
              role: "Consultant",
              company: "Management Consulting",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763972724427-h3rmvc4c.jpg",
              imageAlt: "Robert Chen portrait"
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