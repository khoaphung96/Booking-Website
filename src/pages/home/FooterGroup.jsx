import "./FooterGroup.css";
import FooterItem from "./FooterItem";

function FooterGroup(props) {
  return (
    <div className={`footer-group ${props.colNumber}`}>
      {props.colValues.map((footerItem) => (
        <FooterItem footerItem={footerItem} key={footerItem} />
      ))}
    </div>
  );
}
export default FooterGroup;
