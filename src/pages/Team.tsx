import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { User } from "lucide-react";

const coreCommittee = [
  { name: "Arjun Reddy", role: "President", department: "Mechanical Engineering" },
  { name: "Priya Sharma", role: "Vice President", department: "Civil Engineering" },
  { name: "Sai Krishna", role: "General Secretary", department: "Electrical Engineering" },
  { name: "Ananya Rao", role: "Treasurer", department: "Computer Science" },
];

const teams = {
  events: [
    "Rahul Verma",
    "Sneha Gupta",
    "Vikram Singh",
    "Meera Patel",
  ],
  technical: [
    "Aditya Kumar",
    "Kavitha Nair",
    "Rohit Desai",
    "Divya Reddy",
  ],
  mediaPR: [
    "Nikhil Rao",
    "Pooja Sharma",
    "Karthik Iyer",
    "Riya Menon",
  ],
  design: [
    "Varun Krishnan",
    "Anjali Singh",
    "Pranav Joshi",
    "Ishita Das",
  ],
  deputySecretary: ["Bharat Reddy"],
  seniorCoordinators: [
    "Harsha Vardhan",
    "Lakshmi Priya",
    "Suresh Kumar",
    "Nandini Rao",
    "Vamsi Krishna",
    "Shreya Iyer",
  ],
};

const Team = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 section-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-widest mb-4">
              Our People
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Meet the <span className="text-primary">Team</span>
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
              The passionate students and leaders driving our mission forward,
              united by a commitment to sustainable development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Committee */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-widest mb-4">
              Leadership
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Core Committee
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {coreCommittee.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated p-6 lg:p-8 text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto mb-5
                              group-hover:bg-primary/10 transition-colors duration-300">
                  <User className="text-muted-foreground group-hover:text-primary transition-colors" size={40} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-2">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-xs">
                  {member.department}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Teams */}
      <section className="py-16 lg:py-24 section-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-widest mb-4">
              Teams
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Our Members
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Events Team */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-elevated p-6"
            >
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4 pb-3 border-b border-border">
                Events Team
              </h3>
              <ul className="space-y-2">
                {teams.events.map((name) => (
                  <li key={name} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {name}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Technical Team */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card-elevated p-6"
            >
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4 pb-3 border-b border-border">
                Technical Team
              </h3>
              <ul className="space-y-2">
                {teams.technical.map((name) => (
                  <li key={name} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {name}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Media & PR Team */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card-elevated p-6"
            >
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4 pb-3 border-b border-border">
                Media & PR Team
              </h3>
              <ul className="space-y-2">
                {teams.mediaPR.map((name) => (
                  <li key={name} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {name}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Design Team */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card-elevated p-6"
            >
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4 pb-3 border-b border-border">
                Design Team
              </h3>
              <ul className="space-y-2">
                {teams.design.map((name) => (
                  <li key={name} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {name}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Deputy Secretary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card-elevated p-6"
            >
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4 pb-3 border-b border-border">
                Deputy Secretary
              </h3>
              <ul className="space-y-2">
                {teams.deputySecretary.map((name) => (
                  <li key={name} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {name}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Senior Coordinators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="card-elevated p-6"
            >
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4 pb-3 border-b border-border">
                Senior Coordinators
              </h3>
              <ul className="space-y-2">
                {teams.seniorCoordinators.map((name) => (
                  <li key={name} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {name}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
