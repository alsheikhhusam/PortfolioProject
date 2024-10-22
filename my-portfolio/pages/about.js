import { Container, Typography } from '@mui/material';


export default function Projects() {
    return (
        <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Typography variant="h2" gutterBottom>
                About Me
            </Typography>

            <Typography variant="body1" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend dapibus cursus. Sed sed varius justo. Suspendisse congue augue id tortor vulputate tempor. Proin quis ipsum in risus vulputate pulvinar. Nunc sagittis semper sapien, a consequat tortor bibendum ac. Aenean arcu nunc, finibus eu eleifend ac, dapibus sit amet urna. Aenean pretium interdum fermentum. Aenean id erat a nibh fermentum facilisis eu et turpis. Morbi eget accumsan leo. Quisque viverra dignissim quam vel pellentesque. Sed mattis nibh non congue scelerisque.
            </Typography>
        </Container>  
    );
}
