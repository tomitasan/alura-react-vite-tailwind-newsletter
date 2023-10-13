import Header from "./components/header/header"
import ArticleList from "./components/articleList/articleList"
import { useState } from "react"
import Form from "./components/form/form"

const App = () => {

  const [user, setUser] = useState()
  const hasUser = Boolean(user)

  return (
    <div className="w-screen h-screen sm:px-5 flex flex-col justify-start items-center">
      <Header user = { user?.name }/>
      { hasUser && <ArticleList /> }
      { hasUser || <Form  onsubmit={ setUser }/> }
    </div>
  )
}

export default App