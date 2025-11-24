import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 px-4 py-2 border border-muted bg-card"
          >
            <span className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
              Get In Touch
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Let's Work Together
          </h2>

          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Open to new opportunities and collaborations. Feel free to reach out through any of the channels below.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary hover:border-accent transition-smooth group"
            >
              <a
                href="https://www.linkedin.com/in/manish-kumar-maharjan-513412309/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-smooth" />
                <span>LinkedIn</span>
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary hover:border-accent transition-smooth group"
            >
              <a
                href="mailto:mmaharjan699@gmail.com"
                className="flex items-center gap-2"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-smooth" />
                <span>Email</span>
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 pt-8 border-t border-border"
          >
            <p className="text-muted-foreground text-sm">
              © 2025 Manish Kumar Maharjan. Built with React & Tailwind CSS.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
