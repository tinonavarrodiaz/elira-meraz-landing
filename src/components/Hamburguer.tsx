type Props = {
  active: boolean;
  action: () => void;
}


const Hamburger = ({ active, action }: Props) => {
  return (
    <button
      onClick={action}
      className={`toggle-menu hamburger hamburger--squeeze ${
        active ? 'is-active' : ''
      } toggle-menu`}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};
export default Hamburger;
