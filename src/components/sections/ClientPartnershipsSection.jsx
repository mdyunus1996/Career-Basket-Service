import React from "react";
import { motion } from "framer-motion";
import thaparLogo from "@/asserts/clients/thapar-institute.png";
import vit from "@/asserts/clients/vit.png";
import manipal from "@/asserts/clients/manipal.png";
import upes from "@/asserts/clients/upes.png";
import amrita from "@/asserts/clients/amrita.png";
import somaiya from "@/asserts/clients/somaiya.png";
import srm from "@/asserts/clients/srm.png";
import gitam from "@/asserts/clients/gitam.png";
import mit from "@/asserts/clients/mit.png";
import pdeu from "@/asserts/clients/pdeu.png";
import mody from "@/asserts/clients/mody.png";
import srmDelhi from "@/asserts/clients/srm-delhi.png";
import mahindra from "@/asserts/clients/mahindra.png";
import alliance from "@/asserts/clients/alliance.png";
import iilm from "@/asserts/clients/iilm.png";
import presidency from "@/asserts/clients/presidency.png";
import sru from "@/asserts/clients/sru.png";
import chanakya from "@/asserts/clients/chanakya.png";
import manavRachna from "@/asserts/clients/manav-rachna.png";
import sharda from "@/asserts/clients/sharda.png";
import shivNadar from "@/asserts/clients/shiv-nadar.png";
import sai from "@/asserts/clients/sai.png";
import atlas from "@/asserts/clients/atlas.png";
import spsu from "@/asserts/clients/spsu.png";
import bml from "@/asserts/clients/bml.png";
import mastersUnion from "@/asserts/clients/masters-union.png";
import jagsom from "@/asserts/clients/jagsom.png";
import sda from "@/asserts/clients/sda.png";
import bennett from "@/asserts/clients/bennett.png";
import aiu from "@/asserts/clients/aiu.png";
import mitAdt from "@/asserts/clients/mit-adt.png";

const clients = [
  {
    name: "Thapar Institute of Engineering & Technology",
    alt: "Logo of Thapar Institute of Engineering & Technology",
    src: thaparLogo,
  },
  {
    name: "VIT",
    alt: "Logo of VIT",
    src: vit,
  },
  {
    name: "Manipal",
    alt: "Logo of Thapar Manipal Institute of Engineering & Technology",
    src: manipal,
  },
  {
    name: "UPES",
    alt: "Logo of Thapar UPES",
    src: upes,
  },
  {
    name: "Amrita University",
    alt: "Logo of Amrita University",
    src: amrita,
  },
  {
    name: "Somaiya University",
    alt: "Logo of Somaiya University",
    src: somaiya,
  },
  {
    name: "SRM University",
    alt: "Logo of SRM University",
    src: srm,
  },
  {
    name: "GITAM University",
    alt: "Logo of GITAM University",
    src: gitam,
  },

  {
    name: "MIT University",
    alt: "Logo of MIT University",
    src: mit,
  },

  {
    name: "PDEU",
    alt: "Logo of PDEU",
    src: pdeu,
  },
  {
    name: "Mody University",
    alt: "Logo of Mody University",
    src: mody,
  },
  {
    name: "SRM Delhi-NCR",
    alt: "Logo of SRM Delhi-NCR",
    src: srmDelhi,
  },
  {
    name: "Mahindra University",
    alt: "Logo of Mahindra University",
    src: mahindra,
  },
  {
    name: "Alliance University",
    alt: "Logo of Alliance University",
    src: alliance,
  },
  {
    name: "IILM University",
    alt: "Logo of IILM University",
    src: iilm,
  },
  {
    name: "Presidency University",
    alt: "Logo of Presidency University",
    src: presidency,
  },
  {
    name: "SRU",
    alt: "Logo of SRU",
    src: sru,
  },
  {
    name: "Chanakya University",
    alt: "Logo of Chanakya University",
    src: chanakya,
  },
  {
    name: "Manav Rachna University",
    alt: "Logo of Manav Rachna University",
    src: manavRachna,
  },
  {
    name: "Sharda University",
    alt: "Logo of Sharda University",
    src: sharda,
  },
  {
    name: "Shiv Nadar University",
    alt: "Logo of Shiv Nadar University",
    src: shivNadar,
  },
  {
    name: "Sai University",
    alt: "Logo of Sai University",
    src: sai,
  },
  {
    name: "Atlas SkillTech University",
    alt: "Logo of Atlas SkillTech University",
    src: atlas,
  },
  {
    name: "SPSU",
    alt: "Logo of SPSU",
    src: spsu,
  },

  {
    name: "BML Munjal University",
    alt: "Logo of BML Munjal University",
    src: bml,
  },

  {
    name: "Masters' Union",
    alt: "Logo of Masters' Union",
    src: mastersUnion,
  },
  {
    name: "JAGSOM",
    alt: "Logo of JAGSOM",
    src: jagsom,
  },
  {
    name: "SDA Bocconi Asia Center",
    alt: "Logo of SDA Bocconi Asia Center",
    src: sda,
  },
  {
    name: "Bennett University",
    alt: "Logo of Bennett University",
    src: bennett,
  },
  {
    name: "AIU",
    alt: "Logo of AIU",
    src: aiu,
  },
  {
    name: "MIT ADT University",
    alt: "Logo of MIT ADT University",
    src: mitAdt,
  },
];

const ClientPartnershipsSection = () => {
  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="clients" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Valued Partners
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {clients.map((logo, index) => (
            <motion.div
              key={logo.name}
              custom={index}
              variants={logoVariants}
              initial="visible"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="flex justify-center"
            >
              <img
                className="h-16 md:h-20 object-contain hover:scale-105 ease-in-out transition-all duration-300 border border-orange-700 rounded-sm"
                alt={logo.alt}
                src={logo.src}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientPartnershipsSection;
