"use client";
import Container from "../layout/Container";
import { CONTACT_DATA } from "@/constants/data";
import FormField from "../ui/FormField";
import SectionHeader from "../ui/SectionHeader";

const Contact = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[url('/images/contact-bg.webp')] bg-cover bg-center py-20"
    >
      <Container>
        <SectionHeader
          primaryTitle={CONTACT_DATA.title.primary}
          secondaryTitle={CONTACT_DATA.title.secondary}
          description={CONTACT_DATA.description}
        />
        <form className="max-w-4xl mx-auto font-mona px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {CONTACT_DATA.fields.map((field, index) => (
              <FormField
                key={index}
                label={field.label}
                name={field.name}
                placeholder={field.placeholder}
                type={field.type}
                required={field.required}
                isFullWidth={field.isFullWidth}
              />
            ))}
          </div>
          <div className="gradientButton w-full font-mona-sans-medium mt-8">
            <button type="submit">
              <span className="text-primary">{CONTACT_DATA.buttonText}</span>
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Contact;
