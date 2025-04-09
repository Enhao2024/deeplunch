import IconMenu from './IconMenu';

function Footer() {
  return (
    <footer className="footer footer-center p-10 text-base-content rounded border-t-2">
      <IconMenu topbar={false} />
      <a href="https://www.buymeacoffee.com/enhao2024" target="_blank" rel="noreferrer">
        <img className="h-14" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" />
      </a>
      <aside>
        <p className="text-xs m-2">Copyright © 2025 - All right reserved by DeepLunch</p>
        <div className="text-xs m-2">
          This site is protected by reCAPTCHA and the Google&nbsp;
          <a className="font-bold" href="https://policies.google.com/privacy">Privacy Policy</a>
          {' '}
          and&nbsp;
          <a className="font-bold" href="https://policies.google.com/terms">Terms of Service</a>
          {' '}
          apply.
        </div>
      </aside>
    </footer>
  );
}

export default Footer;
