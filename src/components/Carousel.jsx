import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor(){
    super()

    this.state = {
      index : 0
    }
  }

  handleNext = () => {
    let indexOfImg = this.state.index;

    if(indexOfImg === images.length - 1){
      this.setState({index : 0})
    }else{
      this.setState({index : indexOfImg + 1})
    }
  }

  handlePrevious = () => {
    let indexOfImg = this.state.index;

    if(indexOfImg === 0){
      this.setState({ index : images.length - 1 })
    }else{
      this.setState({ index : indexOfImg - 1 })
    }
  }

  render(){
    let indexOfImg = this.state.index;
    let image = images[indexOfImg]

    return(
      <div className="flex">
        <ArrowBackIosIcon className="arrow" onClick={this.handlePrevious}/>
        <div>
          <h1>{image.title}</h1>
          <img src={image.img} alt="" />
          <p>{image.subtitle}</p>
        </div>
        <ArrowForwardIosIcon className="arrow" onClick={this.handleNext}/>
      </div>
    )
  }
}

export default Carousel;