import UserViewLayout from 'web/src/layouts/UserViewLayout/UserViewLayout'
import TinderCard from 'react-tinder-card'

const onSwipe = (direction) => {
  console.log('You swiped: ' + direction)
}

const onCardLeftScreen = (myIdentifier) => {
  console.log(myIdentifier + ' left the screen')
}

const SwipingPage = () => {
  return (
    <>
      <UserViewLayout>
        <div className="grid grid-cols-3 grid-rows-4">
          <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>Hello, World!</TinderCard>
        </div>
      </UserViewLayout>
    </>
  )
}

export default SwipingPage
