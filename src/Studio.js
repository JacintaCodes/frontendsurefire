import React from "react";
import { Grid, GridColumn, Image } from 'semantic-ui-react'




// function Studio(){
//     <div>
//     return <img src="https://i.ibb.co/4jFmRD6/16123798-351499625234495-2989999035672166400-n-Copy.jpg" alt="studio image"/>
//     </div>
// }


 function Studio() {
   return (
       <Grid>
               <Grid.Row columns={3}>
                   <Grid.Column></Grid.Column>
        <Grid.Column >
            <Image src="https://i.ibb.co/8sbfcPW/Screen-Shot-2020-11-12-at-5-10-34-AM.png" />
</Grid.Column>
                   <Grid.Column></Grid.Column>
      </Grid.Row>
           <Grid.Row columns={3}>
      <Grid.Column>
        <Image src="https://i.ibb.co/4jFmRD6/16123798-351499625234495-2989999035672166400-n-Copy.jpg" />
      </Grid.Column>
      <Grid.Column>
        <Image src="https://i.ibb.co/sbYzW8X/blogeye.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="https://i.ibb.co/5nkdhjc/Screen-Shot-2020-11-12-at-4-59-08-AM.png" />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={3}>
      <Grid.Column>
        <Image src="https://i.ibb.co/5hVrYct/Screen-Shot-2020-11-12-at-5-00-09-AM.png" />
      </Grid.Column>
      <Grid.Column>
        <Image  src="https://i.ibb.co/zRHtj2Q/Screen-Shot-2020-11-12-at-5-09-27-AM.png" />
      </Grid.Column>
      <Grid.Column>
        <Image  src="https://i.ibb.co/KxK6Cd9/Screen-Shot-2020-11-12-at-5-09-57-AM.png" />
      </Grid.Column>
    </Grid.Row>

</Grid>
   )
 }


 

 export default Studio