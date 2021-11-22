import React from "react";

import {Grid} from "@material-ui/core";

import Videoitem from "./Videoitem";
const VideoList =({videos , onVideoSelect}) =>{
    const listOfVideos= videos.map((video,id) => <Videoitem onVideoSelect={onVideoSelect}key={id} video={video}/>)

    return (
        <Grid container spacing={10}>
           { listOfVideos}
        </Grid>
    
    )
}
export default VideoList;