import { useAuth } from '@redwoodjs/auth'

const UserViewLayout = ({ children }) => {
  const { loading, isAuthenticated, logIn, logOut } = useAuth()

  return (
    <>
      <header>
        <nav class="bg-green-500 flex py-4 px-4">
          <div class="pr-5">
            <button class="text-3xl font-bold no-underline text-grey-darkest  hover:text-blue-dark">Duet</button>
          </div>
          <ul class="flex flex-row text-xl ">

            <li class="pr-5">
              <button
                class="
                  font-semibold
                  px-3 py-1
                  border-b-4
                  border-green-500
                  transition duration-300 ease-in-out
                  hover:border-green-50">Profile</button>
            </li>
          </ul>

          <button onClick={logOut} class="px-3 py-1 bg-green-100 absolute right-16 ">Logout</button>

        </nav>
      </header>
      <main>

      {children}
      </main>
    </>
  )
}

export default UserViewLayout
