import "./FooterItem.css";

function FooterItem(props) {
  return (
    <a className="footer-item" href="#">
      {props.footerItem}
    </a>
  );
}

export default FooterItem;
