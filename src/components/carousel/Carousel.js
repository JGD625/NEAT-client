import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './Carousel.css';

const imgUrls = [
  "http://jdbutisbauch.com/images/CarouselTwo.png",
  "http://jdbutisbauch.com/images/CarouselThree.png",
	"http://jdbutisbauch.com/images/CarouselOne.png", 
];

const articleUrls = [1,2,3];

const articleTitles = [
  "Japanese Distilleries: The Unsung Brands from the East",
  "Designing a Home Bar",
  "One Bottle to Rule Them All"
];


export default class Carousel extends Component {
  constructor (props) {
    super(props);

    this.state = {
      currentImageIndex: 0,
      currentArticleIndex: 0,
      currentTitleIndex: 0,
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide () {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

    const lastArticleIndex = articleUrls.length - 1;
    const { currentArticleIndex } = this.state;
    const shouldResetArticleIndex = currentArticleIndex === 0;
    const ArticleIndex =  shouldResetArticleIndex ? lastArticleIndex : currentArticleIndex - 1;

    const lastTitleIndex = articleTitles.length - 1;
    const { currentTitleIndex } = this.state;
    const shouldResetTitleIndex = currentTitleIndex === 0;
    const TitleIndex =  shouldResetTitleIndex ? lastTitleIndex : currentTitleIndex - 1;

    this.setState({
      currentImageIndex: index,
      currentArticleIndex: ArticleIndex,
      currentTitleIndex: TitleIndex,
    });
  }

  nextSlide () {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

    const lastArticleIndex = articleUrls.length - 1;
    const { currentArticleIndex } = this.state;
    const shouldResetArticleIndex = currentArticleIndex === lastArticleIndex;
    const ArticleIndex =  shouldResetArticleIndex ? 0 : currentArticleIndex + 1;

    const lastTitleIndex = articleTitles.length - 1;
    const { currentTitleIndex } = this.state;
    const shouldResetTitleIndex = currentTitleIndex === lastTitleIndex;
    const TitleIndex =  shouldResetTitleIndex ? 0 : currentTitleIndex + 1;

    this.setState({
      currentImageIndex: index,
      currentArticleIndex: ArticleIndex,
      currentTitleIndex: TitleIndex,
    });
  }




  render () {
		return (
			<div className="carousel">
				<Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
        <Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
        <Link to={{
          pathname: '/articlelist',
          state: {
              carouselId: articleUrls[this.state.currentArticleIndex],
                  }
          }}>
          <ImageTitle title={ articleTitles[this.state.currentTitleIndex] } />
        
          <ImageSlide url={ imgUrls[this.state.currentImageIndex] } />
          </Link>
			</div>
		);
	}
}


const Arrow = ({ direction, clickFunction, glyph }) => (
	<div 
		className={ `slide-arrow ${direction}` } 
		onClick={ clickFunction }>
		{ glyph } 
	</div>
);

const ImageTitle = ({ title }) => (
  
  <div className="image-title">
    { title } 
  </div>
);

const ImageSlide = ({ url }) => {
	const styles = {
		backgroundImage: `url(${url})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center'
  }; 
  
  return (
		<div className="image-slide" style={styles}> </div>
	);
}