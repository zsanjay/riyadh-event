import { SocialIcon } from 'react-social-icons'

export default function SocialLinks() {

    const socialLinks = [{
        url : 'https://www.linkedin.com',
        network : 'linkedin',
        bgColor : '#ff000000',
        fgColor : '#66fcf1'
    }, {
        url : 'https://x.com',
        network : 'twitter',
        bgColor : '#ff000000',
        fgColor : '#66fcf1'
    },{
        url : 'https://www.instagram.com',
        network : 'instagram',
        bgColor : '#ff000000',
        fgColor : '#66fcf1'
    }];

    return (
        <ul className="social-ul-list">
            <li className="social-list  bottom-[560px]">
                <SocialIcon className="custom-social-icon" url={socialLinks[0].url} network={socialLinks[0].network} bgColor={socialLinks[0].bgColor} fgColor={socialLinks[0].fgColor} />
            </li>
            <li className="social-list  bottom-[480px]">
                <SocialIcon className="custom-social-icon" url={socialLinks[1].url} network={socialLinks[1].network} bgColor={socialLinks[1].bgColor} fgColor={socialLinks[1].fgColor} />
            </li>
            <li className="social-list  bottom-[400px]">
                <SocialIcon className="custom-social-icon" url={socialLinks[2].url} network={socialLinks[2].network} bgColor={socialLinks[2].bgColor} fgColor={socialLinks[2].fgColor} />
            </li> 
        </ul>
    );
}
