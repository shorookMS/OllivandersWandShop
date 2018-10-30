import React, { Component } from "react";
class WandItem extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card border-0 text-white bg-dark m-3 shadow-lg">
          <div className="image">
            <img
              className="card-img-top img-fluid"
              src={this.props.wand.imageUrl}
              alt={this.props.wand.core}
            />
          </div>
          <div className="card-body">
            <h3 className="card-title bg-success">
              <span>{this.props.wand.core}</span>
            </h3>
            <h5 className="card-text">
              <i class="fas fa-tree m-2" /> {" " + this.props.wand.wood + " "}
              <i class="fas fa-ruler m-2" /> {this.props.wand.length}
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
export default WandItem;
