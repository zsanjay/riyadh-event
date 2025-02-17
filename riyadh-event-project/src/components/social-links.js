import { SocialIcon } from 'react-social-icons'

export default function SocialLinks() {

    let linkList = [{
        url : 'https://www.linkedin.com',
        network : 'linkedin',
        bgColor : '#ffffff',
        fgColor : '#66fcf1'
    }, {
        url : 'https://x.com',
        network : 'github',
        bgColor : '#ffffff',
        fgColor : '#66fcf1'
    },{
        url : 'https://www.instagram.com',
        network : 'instagram',
        bgColor : '#ffffff',
        fgColor : '#66fcf1'
    }];

    return (
        <ul>
            <li>
                <SocialIcon url={linkList[0].url} network={linkList[0].network} bgColor={linkList[0].bgColor} fgColor={linkList[0].fgColor} />
            </li>
            <li>
                <SocialIcon url={linkList[1].url} network={linkList[1].network} bgColor={linkList[1].bgColor} fgColor={linkList[1].fgColor} />
            </li>
            <li>
                <SocialIcon url={linkList[2].url} network={linkList[2].network} bgColor={linkList[2].bgColor} fgColor={linkList[2].fgColor} />
            </li>
        </ul>
    );
}
