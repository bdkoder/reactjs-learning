import { Component } from 'react';
// import { Link, withRouter } from 'react-router-dom';

import { Link, useNavigate } from 'react-router-dom';

class Header extends Component {
  textInput = null;

  setTextInput = (element) => {
    this.textInput = element;
  }

  submitHandler = (event) => {
    const navigate = useNavigate();
    event.preventDefault();
    // let { history } = this.props;
    navigate("/movies?searchText=" + this.textInput.value);
  }

  render() {
    return (
      <div className="alert alert-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="d-flex align-items-center h-100">
                <h3 className="mb-0 mt-0">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    Movie Browser
                  </Link>
                </h3>
              </div>
            </div>
            <div className="col-md-8">
              <form onSubmit={this.submitHandler}>
                <input
                  type="search"
                  placeholder="Search Movie..."
                  className="form-control"
                  ref={this.setTextInput}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
// export default useNavigate(Header);
