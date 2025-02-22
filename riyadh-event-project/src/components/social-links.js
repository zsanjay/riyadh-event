import { SocialIcon } from 'react-social-icons';

export default function SocialLinks() {
  const socialLinks = [
    {
      url: 'https://www.linkedin.com',
      network: 'linkedin',
      bgColor: '#ff000000',
      fgColor: '#66fcf1',
    },
    {
      url: 'https://x.com',
      network: 'twitter',
      bgColor: '#ff000000',
      fgColor: '#66fcf1',
    },
    {
      url: 'https://www.instagram.com',
      network: 'instagram',
      bgColor: '#ff000000',
      fgColor: '#66fcf1',
    },
  ];

  const bottomMarginSizes = {
    linkedin: 'bottom-[560px]',
    twitter: 'bottom-[480px]',
    instagram: 'bottom-[400px]',
  };

  return (
    <ul className="social-ul-list">
      {socialLinks.map((socialLink) => (
        <li
          key={socialLink.network}
          className={'social-list ' + bottomMarginSizes[socialLink.network]}
        >
          <SocialIcon
            className="custom-social-icon"
            url={socialLink.url}
            network={socialLink.network}
            bgColor={socialLink.bgColor}
            fgColor={socialLink.fgColor}
          />
        </li>
      ))}
    </ul>
  );
}
