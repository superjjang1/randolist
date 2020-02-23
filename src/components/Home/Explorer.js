import React from "react";
import PropTypes, { object } from "prop-types";
import CoverGrid from "./CoverGrid";
import TrackCard from "./TrackCard";
import Grid from "@material-ui/core/Grid";

const styles = {
  container: {
    paddingTop: "7.5px"
  }
};

const Explorer = props => (
  <div style={styles.container}>
    <Grid container>
      <Grid item xs={8}>
        <CoverGrid
          items={props.items}
          onMouseOver={props.onMouseOver}
          onMouseOut={props.onMouseOut}
        />
      </Grid>
      <Grid item xs={4}>
        {props.selectedTrack.id && <TrackCard track={props.selectedTrack} />}
      </Grid>
    </Grid>
  </div>
);

export default Explorer;

Explorer.propTypes = {
  items: PropTypes.arrayOf(object),
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
  selectedTrack: PropTypes.object
};