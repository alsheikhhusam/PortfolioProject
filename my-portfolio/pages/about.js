import React from "react";
import PropTypes from "prop-types";
import { Container, Typography, Box, Avatar, Chip } from "@mui/material";

const skills = [
    {
        category: "Cloud",
        items: ["Azure", "Google Cloud Platform"]
    },
    {
        category: "DevOps",
        items: ["Docker", "Kubernetes", "Git", "Terraform", "Jenkins", "Helm"]
    },
    {
        category: "Monitoring",
        items: ["Grafana", "Loki", "Prometheus", "Promtail"]
    },
    {
        category: "Languages",
        items: ["Java", "C++", "C#", "Kotlin"]
    },
    {
        category: "Spring",
        items: ["Spring Boot", "Spring MVC", "Spring Data", "Spring Data JPA", "REST"]
    },
    {
        category: "Web Technologies",
        items: ["React Native", "JavaScript", "NextJS"]
    },
    {
        category: "Databases",
        items: ["PostgreSQL", "MySQL"]
    },
];

// Utility to split the array into columns
const splitSkills = (skills) => {
  const leftColumn = skills.slice(0, Math.floor(skills.length / 2));
  const rightColumn = skills.slice(Math.floor(skills.length / 2), -1);
  const oddCategory = skills.length % 2 !== 0 ? skills[skills.length - 1] : null;
  return { leftColumn, rightColumn, oddCategory };
};

// Reusable component to render a skill column
const SkillColumn = ({ categories, align = "left" }) => (
    <Box
        sx={{
            flex: "1 1 45%",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            alignItems: align === "right" ? "flex-end" : "flex-start",
        }}
    >
        {categories.map((skillCategory, index) => (
            <Box key={index}>
                <Typography
                    variant="subtitle1"
                    sx={{
                        fontWeight: "bold",
                        mb: 2,
                        color: "text.secondary",
                        textTransform: "uppercase",
                        letterSpacing: 1,
                        textAlign: align,
                    }}
                >
                {skillCategory.category}
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        justifyContent: align === "right" ? "flex-end" : "flex-start",
                    }}
                >
                    {skillCategory.items.map((item, idx) => (
                        <Chip
                            key={idx}
                            label={item}
                            variant="outlined"
                            color="primary"
                            sx={{
                                fontSize: "0.9rem",
                                fontWeight: "bold",
                            }}
                        />
                    ))}
                </Box>
            </Box>
        ))}
    </Box>
);

SkillColumn.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
                category: PropTypes.string.isRequired,
                items: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
    ).isRequired,
    align: PropTypes.oneOf(["left", "right"]),
  };

// Reusable component for the odd category
const OddCategory = ({ category }) => category ? (
    <Box textAlign="center" sx={{ mt: 4 }}>
        <Typography
            variant="subtitle1"
            sx={{
                fontWeight: "bold",
                mb: 2,
                color: "text.secondary",
                textTransform: "uppercase",
                letterSpacing: 1,
            }}
        >
        {category.category}
        </Typography>
        <Box
            sx={{
                display: "inline-flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 1,
            }}
        >
            {category.items.map((item, idx) => (
                <Chip
                    key={idx}
                    label={item}
                    variant="outlined"
                    color="primary"
                    sx={{
                        fontSize: "0.9rem",
                        fontWeight: "bold",
                    }}
                />
            ))}
        </Box>
    </Box>
) : null;

OddCategory.propTypes = {
    category: PropTypes.shape({
        category: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
};

export default function About() {
  const { leftColumn, rightColumn, oddCategory } = splitSkills(skills);

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
        {/* Header */}
        <Box textAlign="center" sx={{ mb: 6 }}>
            <Avatar
                alt="Profile Picture"
                src="/TestPFP.png"
                sx={{
                    width: 120,
                    height: 120,
                    margin: "0 auto",
                    mb: 2
                }}
            />
            <Typography variant="h2" gutterBottom>
                Husam Alsheikh
            </Typography>
            <Typography variant="h6" color="text.secondary">
                Senior Cloud Engineer | Azure Specialist | Tech Enthusiast
            </Typography>
        </Box>

        {/* About Me */}
        <Box sx={{ mb: 6 }}>
            <Typography variant="h4" gutterBottom>
                About Me
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                I’m Husam Alsheikh, a Senior Cloud Engineer with a passion for all things cloud-based. With over 3
                years of experience, I specialize in Azure Cloud Engineering and helping businesses achieve scalable
                and secure cloud solutions.
            </Typography>
        </Box>

        {/* Skills */}
        <Box sx={{ mb: 6 }}>
            <Typography variant="h4" gutterBottom>
                My Skills
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 4,
                    flexWrap: "wrap",
                }}
            >
                <SkillColumn categories={leftColumn} align="left" />
                <SkillColumn categories={rightColumn} align="right" />
            </Box>
            <OddCategory category={oddCategory} />
        </Box>

        {/* Footer */}
        <Box>
            <Typography variant="h4" gutterBottom>
                Beyond Work
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                Outside of work, I enjoy exploring new technologies, gaming, and spending time with family. I am
                always eager to connect with like-minded individuals and collaborate on exciting ventures.
            </Typography>
        </Box>
    </Container>
  );
}
