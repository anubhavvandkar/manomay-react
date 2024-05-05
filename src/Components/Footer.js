import '../Styles/Footer.css';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Email, Phone } from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer(){
    return (
        <div className='footer'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container 
                    padding={2}
                    className='item'
                    sx={{
                        '--Grid-borderWidth': '2px',
                        borderLeft: 'var(--Grid-borderWidth) solid',
                        borderColor: 'divider',
                        '& > div': {
                          borderRight: 'var(--Grid-borderWidth) solid',
                          borderColor: 'divider',
                        },
                      }}>
                    <Grid item xs={12} sm={6} md={3}>
                        <div>
                            <h4>Contact Us:</h4>
                            <p><Email/> <b>Email</b><br/> <a className='Link' href="mailto:manomayhearingaid@gmail.com">manomayhearingaid@gmail.com</a></p>
                            <p><Phone/> <b>Phone</b><br/> +91 95917 96997</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <div>
                            <h4>Catch us on our socials here:</h4>
                            <p><InstagramIcon className='instagram'/>  @manomay.socials{"\n"}</p>
                            <p><FacebookIcon className='facebook'/>  Manomay Hearing{"\n"}</p>
                        </div>
                    </Grid>
                    <Grid container item xs={12} sm={12} md={6}
                    sx={{
                        '--Grid-borderWidth': '1px',
                        borderColor: 'divider',
                        '& > div': {
                          borderRight: 'var(--Grid-borderWidth) solid',
                          borderColor: 'divider',
                        },
                    }}>
                        <Grid item xs={12} sm={12} md={12}>
                            <div>
                                <h4>Our Locations:</h4>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}> 
                            <div>
                                <a className='Link' 
                                href="https://www.google.com/maps/dir/Current+Location/Manomay+Hearing+Aid+Center,+4th+Main+Road,+Malleshwara,+Bengaluru,+Karnataka/@13.0053198,77.5529969,15z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3bae3d7f588538c7:0xbc012ac70a8f5034!2m2!1d77.558921!2d13.0111474!1m5!1m1!1s0x3bae178763df6613:0x58c0261a1357a8c0!2m2!1d77.5681009!2d13.0018335?entry=ttu" 
                                target="_blank"
                                rel="noreferrer">Click for Malleswaram center</a>
                                <p></p>
                                <p>#95, 4th Main,11th Cross,<br/>
                                Malleswaram,<br/>
                                Bengaluru - 560003</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <div>
                                <a className='Link' 
                                href="https://www.google.com/maps/dir/Current+Location/Manomay+Hearing+Solutions,+2303;+21st+cross,+Krishna+Rajendra+Rd,+Bengaluru,+Karnataka+560070/@12.96704,77.5200182,13z/data=!3m1!4b1!4m18!1m7!3m6!1s0x3bae15f469fa236f:0xc610c4105ec7f2db!2sManomay+Hearing+Solutions!8m2!3d12.9245834!4d77.5733377!16s%2Fg%2F11kbpcz8_7!4m9!1m1!4e1!1m5!1m1!1s0x3bae15f469fa236f:0xc610c4105ec7f2db!2m2!1d77.5733377!2d12.9245834!3e0?entry=ttu" 
                                target="_blank"
                                rel="noreferrer">
                                    Click for Jayanagar center
                                </a>
                                <p></p>
                                <p>#2303, 1st Floor,<br/>
                                K.R.Road, 21st Cross,<br/>
                                Banashankari II-Stage,<br/>
                                Bangalore - 560070</p>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default Footer;