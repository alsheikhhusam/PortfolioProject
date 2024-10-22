import { 
    Grid2, 
    Card, 
    CardContent, 
    Typography, 
    CardActions, 
    Button, 
    Container 
  } from '@mui/material';
  
  const projects = [
    { id: 1, title: 'Project 1', description: 'Description for project 1.' },
    { id: 2, title: 'Project 2', description: 'Description for project 2.' },
  ];
  
  export default function Projects() {
    return (
      <Container maxWidth="lg" sx={{ marginTop: '2rem' }}>
        <Typography variant="h3" gutterBottom>
            My Projects
        </Typography>
        <Grid2 container spacing={4}>
          {projects.map((project) => (
            <Grid2 item xs={12} md={6} key={project.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{project.title}</Typography>
                  <Typography variant="body2">{project.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    );
  }
  