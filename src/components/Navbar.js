const Navbar = ({ fliteritem, categoryList }) => {
  console.log(categoryList);
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {categoryList.map((elem) => {
           return( 
            <button
              className="btn-group__item"
              onClick={() => fliteritem(elem)}
            >
              {elem}
            </button>
            )
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
