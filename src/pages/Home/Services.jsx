import { Box, Flex, Text, Title, useMantineTheme } from "@mantine/core";
import React from "react";
import { useStyles } from "./styles";
import { useMediaQuery } from "@mantine/hooks";
import ServiceCard from "./ServiceCard";
import a1 from "../../assets/a1.png";
import a2 from "../../assets/a2.png";
import a3 from "../../assets/a3.png";
import a4 from "../../assets/a4.png";
import a5 from "../../assets/a5.png";
import a6 from "../../assets/a6.png";
import a7 from "../../assets/a8.png";
import a8 from "../../assets/a7.png";

const Services = () => {
  const { classes } = useStyles();
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const isMobile2 = useMediaQuery("(max-width: 800px)");
  const theme = useMantineTheme();
  let services = [
    {
      image: a6,
      title: "Tech Executive Advisory",
      bullets:
        "This company offers CIO as a service, providing experienced technology executives to help businesses develop and execute their IT strategies. CTO Boost provides CTO as a service, offering expert guidance on technology strategy, product development, and team management. This company provides ICT Director as a service, offering experienced technology executives to help businesses develop and implement their technology strategies. TechCXO offers a range of tech executive advisory services, including CIO as a service, CTO as a service, and other executive-level technology consulting. This company provides Tech Executive as a service, offering experienced technology executives to help businesses transform their IT organizations and drive innovation",
      content:
        "Blockchain development involves designing and implementing smart contracts, consensus algorithms, and cryptographic techniques to ensure data integrity and trust among network participants.",
    },
    {
      image: a1,
      title: "Software Development",
      bullets:
        "Mobile App Development. Web Application Development. E-commerce Website Development. Custom Software Development. Cloud-based Software Development. Artificial Intelligence and Machine Learning Development. Blockchain Development. Internet of Things (IoT) Development. Augmented Reality and Virtual Reality Development. Gaming Software Development",
      content:
        "Software developers utilize various programming languages, tools, and methodologies to craft reliable, efficient, and user-friendly applications for diverse industries and purposes. As technology continues to evolve, software development remains at the forefront of innovation, driving progress and shaping the way we interact with digital systems in our daily lives",
    },
    {
      image: a2,
      title: "Network Infrastructure",
      bullets:
        "Network infrastructure upgrade for a large enterprise. Cloud network migration for a small business. Network security audit and implementation for a financial institution. Wireless network implementation for a hospital. Network virtualization project for a government agency. Network consolidation and optimization for a multinational corporation. Network disaster recovery planning and implementation for a non-profit organization. Network monitoring and management implementation for a university. Network segmentation and access control implementation for a retail chain. Network performance optimization for a telecommunications company",
      content:
        "Network infrastructure refers to the foundation of interconnected hardware, software, and communication protocols that facilitate data exchange and connectivity within an organization or across the internet.",
    },
    {
      image: a3,
      title: "Data Management",
      bullets:
        "Data Warehousing and Business Intelligence. Master Data Management. Data Governance and Quality Management. Data Migration and Integration. Big Data Analytics and Management. Cloud Data Management. Data Security and Privacy Management. Data Visualization and Reporting. Data Science and Machine Learning. IoT Data Management and Analytics",
      content:
        "Data management refers to the process of collecting, storing, organizing, and utilizing data in a structured and secure manner. In today's data-driven world, businesses and organizations generate and accumulate vast amounts of information from various sources",
    },
    {
      image: a4,
      title: "Cyber Security",
      bullets:
        "Network Security Implementation. Endpoint Security Implementation. Cloud Security Implementation. Identity and Access Management Implementation. Data Loss Prevention Implementation. Security Information and Event Management Implementation. Vulnerability Management Implementation. Penetration Testing and Ethical Hacking Implementation. Incident Response and Disaster Recovery Implementation. Cybersecurity Awareness and Training Implementation",
      content:
        "Cybersecurity is the practice of protecting computer systems, networks, and data from unauthorized access, attacks, and damage. In an increasingly digitized world, where information is a valuable asset, cybersecurity plays a pivotal role in safeguarding individuals",
    },
    {
      image: a5,
      title: "ERP Implementation",
      bullets:
        "Project Charter. System Design. Business process mapping. Business policy optimization. Configuration. Thorough Testing. Quality machanism. Ongoing support",
      content:
        "Gaming software development is a dynamic and creative process that focuses on designing and creating interactive, entertaining, and immersive video games. Game developers use their expertise in programming, design, and storytelling to bring virtual worlds to life and engage players in captivating experiences",
    },
    {
      image: a8,
      title: "Event Management",
      bullets:
        "Venue selection. License and permit. Registration and ticketing process. Speaker selection. Marketing and promotion. Budget management.Event execution. Post-event analysis",
      content:
        "Gaming software development is a dynamic and creative process that focuses on designing and creating interactive, entertaining, and immersive video games. Game developers use their expertise in programming, design, and storytelling to bring virtual worlds to life and engage players in captivating experiences",
    },
    {
      image: a7,
      title: "Human Resource Services",
      bullets: "Recruitment and Selection. Employee visa and insurance services. Executive coaching. Training and Development. Performance Management. Employee Relations. Compensation and Benefits",
      content:
        "Gaming software development is a dynamic and creative process that focuses on designing and creating interactive, entertaining, and immersive video games. Game developers use their expertise in programming, design, and storytelling to bring virtual worlds to life and engage players in captivating experiences",
    },
  ];
  return (
    <Box p="50px">
      <Flex className={classes.title2}>
        <Title align="center">Our</Title>
        <Title color={theme.colors.cyan}>Services</Title>
      </Flex>
      <Text color="gray" align="center" fz={"xl"}>
        TechBridge providing services worldwide
      </Text>
      <Flex
        wrap={"wrap"}
        gap={isMobile ? "10px" : "80px"}
        justify={"center"}
        p={isMobile ? "20px" : "50px"}
      >
        {services.map((obj, ind) => (
          <ServiceCard obj={obj} key={ind} />
        ))}
      </Flex>
    </Box>
  );
};

export default Services;
