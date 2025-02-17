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
        <ul className='list-none p-0 m-0 flex flex-col gap-8 sm:gap-6 md:gap-4 lg:gap-8'>
            <li className='fixed bottom-[350px] right-[60px]  flex flex-col'>
                <SocialIcon className="w-20 h-20 border-2 border-[#66fcf1] p-2 rounded-full" url={socialLinks[0].url} network={socialLinks[0].network} bgColor={socialLinks[0].bgColor} fgColor={socialLinks[0].fgColor} />
            </li>
            <li className='fixed bottom-[270px] right-[60px] flex flex-col'>
                <SocialIcon className="w-20 h-20 border-2 border-[#66fcf1] rounded-full" url={socialLinks[1].url} network={socialLinks[1].network} bgColor={socialLinks[1].bgColor} fgColor={socialLinks[1].fgColor} />
            </li>
            <li className='fixed bottom-[190px] right-[60px] flex flex-col'>
                <SocialIcon className="w-20 h-20 border-2 border-[#66fcf1] rounded-full" url={socialLinks[2].url} network={socialLinks[2].network} bgColor={socialLinks[2].bgColor} fgColor={socialLinks[2].fgColor} />
            </li> 
        </ul>
    );
}


const styles = {
    list: {
      position: 'absolute',
      bottom: '250px',
      right: '60px',
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '30px', // Space between list items
    },
    listItem: {
      display: 'flex',
      alignItems: 'center',
    },
  };
