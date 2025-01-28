import { Container, Typography, Card, CardContent, CardActions, Button, Box } from '@mui/material';

const projects = [
  { id: 1,
    title: 'My Portfolio Web App',
    description: 'This portfolio site is designed to showcase my technical skills and experience. Built with Next.js and deployed on Google Cloud Run, it highlights my expertise in modern web development and cloud engineering. The project leverages Git for version control, GitHub Actions for CI/CD, and Cloudflare for reverse proxy and domain management. Intentionally over-engineered, it demonstrates my ability to implement robust, scalable solutions while using tools like Docker, Terraform, and monitoring technologies such as Grafana and Prometheus.',
    link: "https://github.com/alsheikhhusam/PortfolioProject"
  },
  { id: 2,
    title: 'Expense Reimbursement System',
    description: 'The Expense Reimbursement System will manage the process of reimbursing employees for expenses incurred while on company time. All employees in the company can log in, submit requests for reimbursement, and view their past tickets and pending requests. Finance managers can log in and view all reimbursement requests and history for all employees in the company. Finance managers are authorized to approve and deny requests for expense reimbursement.',
    link: "https://github.com/alsheikhhusam/javasre-devops/tree/Husam_Alsheikh/Husam_Alsheikh/Projects/Expense%20Reimbursement%20System"
  },
  { id: 3,
    title: 'Advantage Movers Inventory Management App',
    description: 'Managing moving inventory can be a tedious and time-consuming task. Movers often struggle to keep track of boxes, furniture, and other equipment, which can lead to delays and lost items. This app aims to streamline the inventory management process, improve efficiency, and reduce losses. And as a result, this application has been developed in response to a specific contract request by the company Advantage Movers based in Canada.',
    link: null  //  No link for this project
  },
  { id: 4,
    title: 'Weather Widget',
    description: 'A weather API that allows users to receive weather notifications for locations they are subscribed to or search weather information for other locations, including 7-day weather forecasts.',
    link: "https://github.com/alsheikhhusam/javasre-devops-project2/tree/dev"
  },
];

export default function Projects() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h2"
        gutterBottom
        sx={{ textAlign: "center", mb: 4, color: "primary.main" }}
      >
        My Projects
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gap: 4,
        }}
      >
        {projects.map((project, index) => (
          <Card
            key={project.id}
            sx={{
              gridRow: index % 2 === 0 ? 'span 2' : 'span 1', // Staggered heights
              background: 'linear-gradient(145deg, #1e1e1e, #2a2a2a)',
              color: 'text.primary',
              borderRadius: '15px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                color="secondary.main"
                fontWeight="bold">
                  {project.title}
              </Typography>
              <Typography variant="body2">{project.description}</Typography>
            </CardContent>

            <CardActions sx={{ justifyContent: "center", mb: 2 }}>
              {project.link ? (
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    "&:hover": {
                      backgroundColor: "secondary.main",
                      color: "white",
                    },
                  }}
                >
                  View Details
                </Button>
              ) : (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontStyle="italic">
                    * Proprietary Source Code *
                </Typography>
              )}
            </CardActions>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
