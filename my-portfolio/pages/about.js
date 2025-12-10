import { Container, Typography, Box, Avatar, Chip, Button } from "@mui/material";
import { useRouter } from "next/router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const skills = [
    "Azure",
    "Google Cloud Platform",
    "Incident Management",
    "Release Management",
    "SRE",
    "Azure DevOps",
    "Docker",
    "Kubernetes",
    "Git", "Terraform",
    "Bicep",
    "CI/CD",
    "Datadog",
    "Grafana",
    "Loki",
    "Prometheus",
    "Promtail",
    "KQL",
    "PostgreSQL",
    "MySQL"
];

export default function About() {
    const startYear = 2022;
    const yearsExperience = new Date().getFullYear() - startYear;

    // Handle back button click
    const router = useRouter();
    const handleBackClick = () => {
        router.back();
    }

    return (
        <Container maxWidth="md" sx={{ py: 8 }}>
            {/* Back Button */}
            <Box sx={{ mb: 4 }}>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleBackClick}
                    startIcon={<ArrowBackIcon />}
                >
                </Button>
            </Box>

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
                <Typography variant="h1" gutterBottom>
                    Husam Alsheikh
                </Typography>
                <Typography variant="h5" color="text.secondary">
                    Senior Cloud Engineer | Azure Cloud Support | SRE | Incident Manager
                </Typography>
            </Box>

            {/* About Me */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h3" gutterBottom>
                    About Me
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    Senior Cloud Engineer with a passion for all things cloud-based. With over {yearsExperience}{" "}
                    years of experience, I specialize in Azure Cloud Engineering and helping businesses achieve scalable
                    and secure cloud solutions. I am also experienced in high-level incident management, ensuring rapid resolution and system reliability in critical situations.
                </Typography>
            </Box>

            {/* Skills */}
            <Box
                sx={{
                    mt: 10, // more spacing before footer
                    mb: 10,
                    p: 4,
                    borderRadius: 4,
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(4px)",
                }}
            >
                <Typography
                    variant="h3"
                    gutterBottom
                    sx={{
                        mb: 4,
                        fontWeight: "bold",
                        textAlign: "center",
                        letterSpacing: 1.5,
                    }}
                >
                    My Skills
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2,
                        justifyContent: "center",
                    }}
                >
                    {skills.map((skill) => (
                        <Chip
                            key={skill}
                            label={skill}
                            variant="outlined"
                            color="primary"
                            sx={{
                                fontSize: "1rem",
                                fontWeight: 500,
                                px: 2,
                                py: 1,
                                borderRadius: "20px",
                                transition: "all 0.2s ease-in-out",
                                "&:hover": {
                                    backgroundColor: "primary.main",
                                    color: "#fff",
                                    transform: "translateY(-3px)",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                                },
                            }}
                        />
                    ))}
                </Box>
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
