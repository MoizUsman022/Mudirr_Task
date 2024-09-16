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
        lg: 'repeat(2, 1fr)',  
        base: 'repeat(1, 1fr)', 
        xl: 'repeat(3, 1fr)', 
        '2xl': 'repeat(4, 1fr)',
        '3xl': 'repeat(5, 1fr)',
      }}
      p={{ base:0, lg:2}}
      gap={6}
      width="100%"
      maxWidth="100vw"
      overflowX="hidden"
    >
      {projectcarditems.map((project, index) => (
        <GridItem
          key={index}
          width="100%"                     
          boxSizing="border-box"           
          overflow="hidden"                
        >
          <ProjectCardSingle {...project} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default ProjectGrid;
