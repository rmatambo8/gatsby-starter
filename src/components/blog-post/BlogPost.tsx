import React from 'react';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import { GatsbyImage } from 'gatsby-plugin-image';

import styles from './style';

interface BlogProps {
  classes: any;
  data: any;
}

const BlogPost = ({ classes, data }: BlogProps) => (
  <div className={classes.container}>
    {data.heroImage ? (
      <GatsbyImage
        alt={`the default image for hero of the starter`}
        image={data.heroImage.gatsbyImageData}
      />
    ) : null}
    <Typography variant='h2' color='textPrimary'>
      {data.title}
    </Typography>
    <Typography
      variant='body1'
      dangerouslySetInnerHTML={{
        __html: data.body.childMarkdownRemark.html,
      }}
    />
  </div>
);

export default withStyles(styles)(BlogPost);