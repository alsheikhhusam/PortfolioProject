import React from "react";
import PropTypes from "prop-types";
import { Container, Typography, Box, Avatar, Chip } from "@mui/material";

const skills = [
    {
        category: "Cloud",
        items: ["Azure", "Google Cloud Platform", "Incident Management"]
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
        items: ["KQL", "PostgreSQL", "MySQL"]
    },
];

// Utility to split the array into columns dynamically and evenly
const splitSkills = (skills, numColumns = 2) => {
    const columns = Array.from({ length: numColumns }, () => []);

    skills.forEach((skill, index) => {
        columns[index % numColumns].push(skill);
    });

    // Ensure all columns have the same number of elements
    const minLength = Math.min(...columns.map((col) => col.length));
    columns.forEach((col, index) => {
        if (col.length > minLength) {
            col.pop(); // Remove the last element from the column if it's longer
        }
    });

    return columns;
};

// Reusable component to render a skill column
const SkillColumn = ({ categories, align = "left" }) => (
    <Box
        sx={{
            flex: "1 1 0",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            alignItems: align === "right" ? "flex-end" : "flex-start",
        }}
    >
        {categories.map((skillCategory) => (
            <Box key={skillCategory.category}>
                <Typography
                    variant="subtitle1"
                    sx={{
                        fontWeight: "bold",
                        mb: 2,
                        color: "text.secondary",
                        textTransform: "uppercase",
                        letterSpacing: 2,
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
                    {skillCategory.items.map((item) => (
                        <Chip
                            key={item}
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
            {category.items.map((item) => (
                <Chip
                    key={item}
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
    const numColumns = 2; // Adjust the number of columns as needed
    const columns = splitSkills(skills, numColumns);    // Split the skills into columns
    const oddCategory = skills.length % numColumns !== 0 ? skills[skills.length - 1] : null;    //  Get the odd category if it exists
    
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
                    Senior Cloud Engineer | Azure Cloud Support | SRE | Incident Manager
                </Typography>
            </Box>

            {/* About Me */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" gutterBottom>
                    About Me
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    Senior Cloud Engineer with a passion for all things cloud-based. With over 3
                    years of experience, I specialize in Azure Cloud Engineering and helping businesses achieve scalable
                    and secure cloud solutions. I am also experienced in high-level incident management, ensuring rapid resolution and system reliability in critical situations.
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
                    {columns.map((column, index) => (
                        <SkillColumn
                            key={column[0]?.category} // Use the category of the first skill in the column as the key   //  array indexes as keys in React can lead to problems
                            categories={column}
                            align={index % 2 === 0 ? "left" : "right"}
                    />
                    ))}
                </Box>
                {oddCategory && (
                    <Box textAlign="center" sx={{ mt: 4 }}>
                        <OddCategory category={oddCategory} />
                    </Box>
                )}
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
