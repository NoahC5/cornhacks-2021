import { Link, routes } from '@redwoodjs/router'

const ProfilePage = () => {
  return (
    <>
      <h1>ProfilePage</h1>
      <p>
        Find me in <code>./web/src/pages/ProfilePage/ProfilePage.js</code>
      </p>
      <p>
        My default route is named <code>profile</code>, link to me with `
        <Link to={routes.profile()}>Profile</Link>`
      </p>
    </>
  )
}

export default ProfilePage
