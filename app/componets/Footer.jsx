import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className='container'>
        <div className='footer'>
        &#169; {currentYear} Created by Hector Munachi | Powered by Traversy Media. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
