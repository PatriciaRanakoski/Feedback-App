import PropTypes from 'prop-types'
import FeedBackItem from "./FeedBackItem"


function FeedbackList({ feedback, handleDelete }) {
   if(!feedback || feedback.length === 0) {
      return <p>No Feedbacks yet!!</p>
   }

  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
       <FeedBackItem key={item.id} item={item} 
       handleDelete= {handleDelete}/>
      ))}  
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
}

export default FeedbackList
