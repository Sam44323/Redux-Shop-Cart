import './NavBar.css';

const NavBar = (props) => {
  return (
    <nav className='cart_navbar'>
      <div className='navitems'>
        <div className='nav_titleDiv'>
          <h1 className='nav_title'>Redux Shopping List</h1>
        </div>
        <div className='nav_cartDiv'>
          <p className='cart_details'>
            Cart:{' '}
            <span className='cart_total'>
              {props.cartTotal} items | Price:${props.price}
            </span>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
