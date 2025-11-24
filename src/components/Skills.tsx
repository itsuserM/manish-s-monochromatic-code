import { motion } from "framer-motion";
import { Code2, Server, Database, Cloud, GitBranch } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  {
    category: "Frontend Development",
    icon: Code2,
    items: ["HTML, CSS, JavaScript", "Responsive UI/UX", "React (Intermediate)", "Tailwind CSS"],
  },
  {
    category: "Backend Development",
    icon: Server,
    items: ["PHP (Laravel)", "JavaScript (Backend)"],
  },
  {
    category: "Databases",
    icon: Database,
    items: ["SQLite", "MySQL / PostgreSQL basics"],
  },
  {
    category: "DevOps & Deployment",
    icon: Cloud,
    items: [
      "Linux server management",
      "Nginx reverse proxy",
      "VPS deployment",
      "HTTPS / SSL setup",
      "Docker basics",
    ],
  },
  {
    category: "Version Control & Tools",
    icon: GitBranch,
    items: ["Git & GitHub"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4 px-4 py-2 border border-muted bg-card"
            >
              <span className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
                Expertise
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Technical Skills
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive skill set spanning full-stack development, deployment, and modern tooling
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-border bg-card hover:border-accent transition-smooth group">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-secondary rounded group-hover:bg-accent transition-smooth">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                      <CardTitle className="text-xl font-display">
                        {skill.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {skill.items.map((item, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-accent mt-1.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
