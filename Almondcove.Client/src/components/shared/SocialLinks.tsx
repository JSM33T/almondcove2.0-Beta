import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";

export default function socialLinks({rounded}){
    const socialLinks = [
        {
            platform: 'Instagram',
            className: 'btn-instagram',
            iconComponent: () => <BsInstagram/>,
            url: 'https://instagram.com/jsm33t'
        },
        {
            platform: 'Facebook',
            className: 'btn-facebook',
            iconComponent: () => <BsFacebook/>,
            url: 'https://facebook.com/iamjsm33t'
        },
        {
            platform: 'YouTube',
            className: 'btn-youtube',
            iconComponent: () => <BsGithub/>,
            url: 'https://github.com/jsm33t'
        }
    ];
    return(
    <>
    {socialLinks.map((link,index)=>(
                                <a 
                                key={index}
                                className={`btn btn-outline-secondary btn-icon ${rounded ? 'rounded-circle' : ''} btn-sm ${link.className} me-3`}
                                target="_blank"
                                href={link.url}
                                >
                                    <link.iconComponent/>
                                </a>
                            )
                            )}
    </>
    );
}