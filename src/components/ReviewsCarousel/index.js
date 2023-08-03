// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {ActiveReviewListId: 0}

  onLeftArrowClick = () => {
    const {ActiveReviewListId} = this.state
    if (ActiveReviewListId > 0) {
      this.setState(prevState => ({
        ActiveReviewListId: prevState.ActiveReviewListId - 1,
      }))
    }
  }

  onRightArrowClick = () => {
    const {reviewsList} = this.props
    const {ActiveReviewListId} = this.state
    if (ActiveReviewListId < reviewsList.length - 1) {
      this.setState(prevState => ({
        ActiveReviewListId: prevState.ActiveReviewListId + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {ActiveReviewListId} = this.state
    const ActiveReviewList = reviewsList[ActiveReviewListId]
    const {imgUrl, username, companyName, description} = ActiveReviewList

    return (
      <div className="bg-container">
        <h1 className="title">Reviews</h1>
        <div className="review-buttons-container">
          <div className="left-button-container">
            <button
              type="button"
              className="button"
              onClick={this.onLeftArrowClick}
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
          </div>
          <div className="review-container">
            <img src={imgUrl} alt={username} />
            <p className="userName">{username}</p>
            <p>{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <div className="right-button-container">
            <button
              type="button"
              className="button"
              onClick={this.onRightArrowClick}
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
