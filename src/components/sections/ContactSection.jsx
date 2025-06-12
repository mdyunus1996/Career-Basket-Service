import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxullzgW9r3AyWD0QUvpYj8Bl1yevHczqDkxDzCMd-TavWMU4kEM4a_XbrRrrSCrcRM/exec",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll be in touch soon.",
      });
      e.target.reset();
    } else {
      toast({
        title: "Error",
        description: "Submission failed. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="section-padding pb-16 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            <span className="font-bold">Partner With CBS :</span> Let’s build
            meaningful opportunities together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="space-y-11"
          >
            <div className="flex items-start space-x-4 p-6 bg-background rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Locations</h3>
                <p className="text-foreground/70 text-sm">
                  Chennai | Mumbai | Delhi | Kota | Hyderbad | Vijayawada |
                  Visakhapatnam
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-background rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Email Us</h3>
                <p className="text-foreground/70">info@careerbasket.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-background rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Call Us</h3>
                <p className="text-foreground/70">+91- 9444334755</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="space-y-6 p-8 bg-background rounded-xl shadow-xl"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-2 border border-input rounded-md focus:ring-primary focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-input rounded-md focus:ring-primary focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="1"
                required
                className="w-full px-4 py-2 border border-input rounded-md focus:ring-primary focus:border-primary transition-colors"
              ></textarea>
            </div>
            <div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-primary charcoal-gray hover:opacity-90 transition-opacity neumorphism-button"
              >
                Send Message
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
