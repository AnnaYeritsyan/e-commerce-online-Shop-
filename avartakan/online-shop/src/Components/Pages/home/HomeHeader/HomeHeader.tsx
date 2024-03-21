
import skateText from '../../../accets/Img/textSkeyt.png'
import skayte from '../../../accets/Img/skeyt.png'
import { Box } from '@mui/material';  

const HomeHeader = () => {
    return (

 <Box sx={{
        backgroundImage: `url(${skateText})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'contain',
        height: '500px',
        border: "1px solid black",
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <Box
          sx={{
            width: "17rem",
            display: 'flex',
            alignItems: 'center',
          }}>
          Skate is your shop when comes to skateboarding. You can buy your new skateboard c ably online in our shop and get the necessary know-how about skateboarding.
        </Box>
        <Box>
          <img src={skayte} alt='skayte' width={600}
            style={{
              position: 'absolute',
              right: '0',
              top: '0',
              zIndex: '1',
            }}
          />
        </Box>
      </Box>

    );
};
export default HomeHeader;