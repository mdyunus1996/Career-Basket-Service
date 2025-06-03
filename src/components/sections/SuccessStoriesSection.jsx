import { motion } from "framer-motion";
import { Award, Users, Briefcase, TrendingUp } from "lucide-react";
import Students from "../../asserts/students.jpeg";
const statsData = [
  {
    sl: 0,
    value: "52",
    label: "MEGA CAREER EVENTS",
    icon: <Award className="w-8 h-8 text-background" />,
  },
  {
    sl: 1,
    value: "42000",
    label: "SUCCESSFUL APPLICATIONS",
    icon: <Users className="w-8 h-8 text-background" />,
  },
  {
    sl: 2,
    value: "182000",
    label: "STUDENTS COUNSELLED",
    icon: <Briefcase className="w-8 h-8 text-background" />,
  },
  {
    sl: 3,
    value: "1800",
    label: "ENROLLMENTS",
    icon: <TrendingUp className="w-8 h-8 text-background" />,
  },
];

const Hexagon = ({ value, label, icon, delay, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      className={`relative w-48 h-[164px] md:w-56 md:h-[192px] flex flex-col items-center justify-center text-center p-4 m-2 ${
        index === 1 || index === 2
          ? "bg-white text-black"
          : "bg-black text-white"
      }`}
      style={{
        clipPath:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      }}
    >
      {/* <div className="mb-2 text-primary">{icon}</div> */}
      <p className="text-3xl md:text-4xl font-bold">{value}</p>
      <p className="text-xxs md:text-sm uppercase tracking-wider font-bold">
        {label}
      </p>
    </motion.div>
  );
};

const SuccessStory2023Section = () => {
  return (
    <section
      id="success-story"
      className="section-padding relative bg-background text-foreground overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={Students}
          alt="Success Story Background"
          className="w-full h-full object-cover blur-md brightness-75"
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="mb-10 md:mb-12"
            >
              <h2 className="text-3xl md:text-3xl font-bold mb-3 text-primary">
                SUCCESS STORY CBS GROUP IN 2023-24
              </h2>
              <p className="text-lg md:text-xl text-accent font-semibold">
                We believe in "Engage | Educate | Empower”
              </p>
            </motion.div>
          </div>

          {/* <div className="md:w-2/3 lg:w-1/2 flex flex-col items-center md:items-end text-center md:text-right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 place-items-center md:place-items-end">
              {statsData.map((stat, index) => (
                <div key={stat.label}>
                  <Hexagon
                    index={index}
                    value={stat.value}
                    label={stat.label}
                    icon={stat.icon}
                    delay={index * 0.2}
                  />
                </div>
              ))}
            </div>
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {statsData.map((stat, index) => {
              const isFirstRow = index < 2;
              const translateYValue =
                index === 2
                  ? "-40px"
                  : index === 3
                  ? "0px"
                  : index % 2 === 0
                  ? "0px"
                  : "40px";

              return (
                <div
                  key={stat.label}
                  className={`relative 
                              ${isFirstRow ? "md:translate-x-[108px]" : ""} 
                              ${index % 2 !== 0 ? "md:translate-y-[40px]" : ""}
                          `}
                >
                  <Hexagon
                    index={index}
                    value={stat.value}
                    label={stat.label}
                    icon={stat.icon}
                    delay={index * 0.2}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory2023Section;
