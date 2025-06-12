import { motion } from "framer-motion";

const impactItems = [
  "50+ school outreach programs across rural and semi-urban India",
  "10,000+ first-generation learners supported through awareness drives",
  "25+ free counselling sessions for Class 9–12 students",
  "Collaboration with NGOs, local educators, and community centers",
  "Focus areas: career awareness, scholarship information, exam guidance",
  "Regional focus: Rajasthan, Maharashtra, Eastern UP, and Assam",
];

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.5,
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const CBSFoundationSection = () => {
  return (
    <section className="section-padding sm:px-4" id="foundation">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              CBS Foundation
            </h2>
            <p className="text-lg md:text-xl font-medium text-foreground/80">
              Empowering Education, Beyond Access
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="max-w-3xl mx-auto mb-12 text-center text-base md:text-lg text-foreground/70 leading-relaxed">
            <p>
              The CBS Foundation is the impact-driven arm of Career Basket,
              committed to educational equity and community engagement. We’ve
              impacted thousands of learners in underserved regions through:
            </p>
            <ul className="mt-6 space-y-4 text-left">
              {[
                "School outreach in Tier 2/3 cities",
                "Free counselling & scholarship awareness workshops",
                "Career discovery programs",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 mt-2 rounded-full bg-primary flex-shrink-0"></div>
                  <span className="text-base md:text-lg text-foreground/80 leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-4 font-semibold">
              Our mission is to ensure no learner is left behind due to lack of
              awareness or access.
            </p>
          </div>
        </motion.div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-primary">
            CBS Foundation Impact Highlights
          </h3>
          <p className="text-sm text-foreground/60">CBS Group 2023–24</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {impactItems.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col relative transition-all duration-300"
            >
              <div
                key={index}
                className="bg-white shadow-md p-5 rounded-xl text-sm md:text-base text-foreground/80 border-l-4 border-primary lg:min-h-[112px]"
              >
                <span className="block font-medium">{item}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CBSFoundationSection;
