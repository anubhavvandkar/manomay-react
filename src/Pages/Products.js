import { ImageList, ImageListItem, useMediaQuery, useTheme } from "@mui/material";

function Products(){

    const imagesPath = require.context('../Images/Products/', true);
    const productNames = imagesPath.keys();

    const theme = useTheme();
    const imageColumns = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div className="item">
            <h2>Products</h2>
            <p><b>Signia</b> is a world-renowned hearing aid brand, known for delivering innovative and cutting-edge technology to individuals with hearing loss. With a long and proud history, Signia has a well-established reputation for delivering high-quality, reliable and effective hearing solutions.</p>
            <p>The brand was founded in 2013, as a result of a collaboration between two of the world’s largest hearing aid manufacturers: Siemens and Sivantos. </p>
            <p>With a shared vision of providing better hearing to millions of people around the world, the two companies merged their expertise to form Signia. The brand has since grown to become one of the leading players in the hearing aid industry, with a reputation for quality and innovation.</p>
            <h4>Outstanding hearing aid choice and value!</h4>
            <p>
            For fully digital behind the ear to custom-made hearing aids to fit your ear size, here are some hearing aid styles:
            </p>
            <ImageList variant="masonry" cols={imageColumns ? 2:3} gap={8}>
                {productNames.map((item) => ( 
                    <ImageListItem key={item}>
                        <img
                        src={imagesPath(`${item}`)}
                        alt={item}
                        loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <p>
                For more information about our hearing aid brand Signia, visit <a className='Link' href="https://www.signiaindia.com/" target="_blank" rel="noreferrer">Signia's Website</a>
            </p>
            <p>
                And visit <a className='Link' href="https://www.signia.net/en-in/hearing-aids/" target="_blank" rel="noreferrer">Signia's Hearing Aids Page</a> to know about available hearing aid options from Signia
            </p>
        </div>
    );
}

export default Products;