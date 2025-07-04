import { Link } from "react-router-dom";

export default function NavPage(props) {
  function search(event) {
    const val = event.target.value.toLowerCase();
    const filtered = props.items.filter((ele) =>
      ele.title.toLowerCase().startsWith(val)
    );
    props.getState(filtered);
  }

  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <nav className="navbar container">
      <Link className="navbar-brand fw-bold fs-3 text-danger" to="/">CARTIQ</Link>
      <input
        type="search"
        onKeyUp={search}
        placeholder="Search by Name"
        className="form-control w-50"
      />
      <div className="nav">
        <Link className="nav-link" to="#">About</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
        <Link className="nav-link" to="#">Blog</Link>
        <Link className="nav-link" to="/cart">🛒 Cart ({cartItems.length})</Link>
      </div>
    </nav>
  );
}
