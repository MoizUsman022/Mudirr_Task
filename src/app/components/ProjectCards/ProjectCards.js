import { Grid, GridItem } from '@chakra-ui/react';
import ProjectCardSingle from './ProjectCardSingle/ProjectCardSingle';

const ProjectGrid = () => {
  const projectcarditems = [
    { title: 'Make an E-Commerce Website for a Brand Store', progress: 75, status: 'Ongoing', milestone: 'Dec 5th' },
    { title: 'Website technical maintenance project', progress: 75, status: 'Ongoing', milestone: 'Jan 1st' },
    { title: 'WordPress website speed and SEO Optimization', progress: 75, status: 'Ongoing', milestone: 'In 3 days' },
    { title: 'WordPress website speed and SEO Optimization', progress: 75, status: 'Ongoing', milestone: 'Dec 5th' },
    { title: 'WordPress website speed and SEO Optimization', progress: 75, status: 'Ongoing', milestone: 'Jan 1st' },
    { title: 'WordPress website speed and SEO Optimization', progress: 75, status: 'Ongoing', milestone: 'In 3 days' },
  ];

  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',  
        md: 'repeat(2, 1fr)', 
        xl: 'repeat(3, 1fr)', 
        
      }}
      gap={6}
      p={5}
    >
      {projectcarditems.map((project, index) => (
        <GridItem key={index}>
          <ProjectCardSingle {...project} /> {/* Pass individual project data */}
        </GridItem>
      ))}
    </Grid>
  );
};

export default ProjectGrid;
