
https://youthful-roentgen-7e844b.netlify.app/
<br>

## Overview

An app designed to allow a user to catalog and display all of their current games they own but haven't played
\_**Project Title**
GamePiler

<br>

## MVP

-Full CRUD on both Front-end and Back-end
-Utilize RAILS and RESTful JSON API conventions
-Utilize React and consume custom built RAILS API
-Utilize sound CSS Design methodology
-Adhere to an AGILE workflow
<br>

#### Wireframes

![wireframes](https://github.com/GundamMerlin/GamePiler/blob/main/assets/Wireframe.png)

![moblile_tablet](https://github.com/GundamMerlin/GamePiler/blob/main/assets/Wireframe_Mobile_Tablet.png)

#### Component Hierarchy

![hierarchy](https://raw.githubusercontent.com/GundamMerlin/GamePiler/main/assets/Hierarchy.png)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like.

```structure
src
|__ components/
      |__Delete.jsx
      |__NavBar.jsx
      |__SignUp.jsx
      |__SignIn.jsx
      |__GameCard.jsx
      |__GalleryContainer.jsx
|__ services/
|__ screens/
      |__Landing.jsx
      |__Gallery.jsx
      |__Details.jsx
      |__Edit Backlog.jsx
      |__AddGame.jsx

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                          | Priority | Estimated Time | Actual Time |  Status  |
| ----------------------------- | :------: | :------------: | :---------: | :------: |
| Proposal/Concepting           |    H     |     2 hrs      |    2hrs     | Complete |
| Create Rails App              |    H     |     3 hrs      |    4hrs     | Complete |
| Create Models                 |    H     |     1 hrs      |    .5hrs    | Complete |
| Create Controllers            |    H     |     1 hrs      |   .75hrs    | Complete |
| Create Routes                 |    H     |     .5hrs      |    .5hrs    | Complete |
| Seed Data                     |    H     |     1 hrs      |    1hrs     | Complete |
| BackEnd Auth                  |    H     |     1 hrs      |    .5hrs    | Complete |
| BackEnd Deployment            |    H     |     1 hrs      |    1hrs     | Complete |
| Frontend Initialize           |    H     |    .25 hrs     |   .15hrs    | Complete |
| Landing (CSS/JSX)             |    H     |     2 hrs      |    4hrs     |  Active  |
| Gallery (CSS/JSX)             |    H     |     2 hrs      |    .5hrs    |  Active  |
| Add Game (CSS/JSX)            |    H     |     1 hrs      |    1hrs     | Complete |
| Add Console (CSS/JSX)         |    H     |     .5 hrs     |    .5hrs    | Complete |
| Add Backlog (CSS/JSX)         |    H     |     1 hrs      |    1hrs     | Complete |
| Edit Backlog Button (CSS/JSX) |    H     |     2 hrs      |    2hrs     | Complete |
| Delete Backlog                |    H     |     1 hrs      |    2hrs     | Complete |
| Post MVP Styling              |    H     |    4-6 hrs     |    6hrs     |  Active  |
| Linting                       |    H     |     2 hrs      |    2hrs     | Complete |
| ReadME                        |    H     |     2 hrs      |    2hrs     | Complete |

<br>

#### ERD Model

![hierarchy](https://github.com/GundamMerlin/GamePiler/blob/main/assets/GamePiler_ERD.png)

> <br>

---

## Post-MVP

> Ability to pull Game Covers from a third-party API to generate Gallery Images automatically
> Add a search feature
> Add filtering method to tie games to specific consoles
> Add AWS feature to add game cover images from local storage

## Code Showcase

> ```react
>   export default function Landing(props) {
>   const [newGame, setNewGame] = useState(false)
>   const [continueGame, setContinueGame] = useState(false)
>   const handleNew = () => {setNewGame(!newGame)}
>   const handleContinue = () => {
>      setContinueGame(!continueGame)
> }
> return (
> <div className="landing-page-container">
>      <BackGroundVideo />
>      <SignIn verify={props.verify} setCurrentUser={props.setCurrentUser} currentUser={props.currentUser} >continueGame={continueGame} handleContinue={handleContinue} />
>      <SignUp verify={props.verify} setCurrentUser={props.setCurrentUser} currentUser={props.currentUser} >newGame={newGame} handleNew={handleNew} />
>
>    </div>)}
> ```

```
return (
    <div className = "signin-form">
      <h1 onClick = {props.handleContinue}>Continue?</h1>
      {!props.continueGame ? "" : <form className= "signin-form-inner" onChange={handleChange} onSubmit={handleSubmit}>
        <label>Email</label>
        <input name="email" type="email"
          required />
        <label>Password</label>
        <input name="password" type="password"
          required />
        <button type="submit">Continue Game</button>
      </form>}
    </div>
  )
```

```
 const handleChange = async (e) => {
    if (e.target.checked) {
      await updateBacklog(props.backlog.id, {done:true})
    } else {
      await updateBacklog(props.backlog.id, {done:false})
    }
    props.setToggle(prevState =>!prevState)
  };

  if (props.backlog.user_id === props.currentUser.id)
  return (

    <div className="backlog-card">
      <img className={props.backlog.done ? "backlog_cover hidden":"backlog_cover"} src={props.backlog.game.cover_img} alt={props.backlog.game.title}/>
      <label>Complete?</label>
      <input id="checkbox" type="checkbox"
        name="done"
        value={props.backlog.done}
        checked={props.backlog.done}
        onChange={handleChange} >
      </input>
      <button onClick={handleDelete}>Delete Save</button>
      <Link to={`/games/${props.backlog.game.id}`}><button>Details</button></Link>
    </div>
```

>

## Code Issues & Resolutions

>
