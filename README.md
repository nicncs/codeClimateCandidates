# kaodim-questionnaire-app

Kaodim Questionnaire Web Application built the latest versions of:

- [`react`](https://github.com/facebook/react) as the view layer, bootstrapped with [`create-react-app`](https://github.com/facebook/create-react-app)
- [`redux`](https://github.com/reduxjs/redux) as the state management
- [`redux-form`](https://github.com/erikras/redux-form) as the form state management
- [`semantic-ui-react`](https://github.com/semantic-org/semantic-ui-react) for presentational components
- [`semantic-ui-css`](https://github.com/semantic-org/semantic-ui-css) for presentational styles

-----
## Live Demo
You can view a running example here: https://kaodim-questionnaire-app.herokuappp.com

-----
## Installation & Usage

You'll need [Node](https://nodejs.org/en/download/), [Yarn](https://yarnpkg.com/lang/en/docs/install/) (or [NPM](https://www.npmjs.com/get-npm), although Yarn is preferred).

1. Clone the repository on your terminal and check into it.

    ```
    git clone https://andrewsantarin@bitbucket.org/andrewsantarin/kaodim-questionnaire-app.git
    cd kaodim-questionnaire-app
    ```
    
    Alternatively, download a copy from [the Downloads section](https://bitbucket.org/andrewsantarin/kaodim-questionnaire-app/downloads/), unzip the file into a folder and browse its contents on terminal / command prompt.
    
    ----

2. Install the dependencies.

    ```
    yarn
    ```
   
    or
  
    ```
    npm install
    ```

    ----

3. Start the application.

    ```
    yarn develop
    ```

    or


    ```
    npm run develop
    ```

-----
## Deployment

This application is configured to be hosted on [Heroku](http://heroku.com). In order to make it happen, a few tweaks to the boilerplate `create-react-app` script needed to be applied.

- `"develop": "react-scripts start"` replaces `"start": "react-scripts start"`
- `"start": "serve -s build"` for serving the app on the Heroku host in production mode.
- `"heroku-postbuild": "npm run build"` to create the distribution-ready files [after Heroku installs all dependencies](https://devcenter.heroku.com/articles/nodejs-support#heroku-specific-build-steps).

In order to run this application, you need to [create your own app with the Heroku CLI](https://devcenter.heroku.com/articles/creating-apps), then push the `master` branch to the `heroku` remote.

```
heroku apps:create <your-app-name>
git push heroku master
```

-----
## Usage Notes

- The application presents 3 scenarios to choose from, all of which are near 1-to-1 copies of the scenarios described in the storyboard. Pick any scenario to start answering.

- The ability to restart from the beginning is available at any time. Use it to wipe the form clean and choose another scenario.

- The application features 3 out of the 4 main inputs built-in as shown in the storyboard, namely `TextQuestion`, `CheckboxQuestion`, `RadioQuestion`. Samples of the data structure are available in [./src/api/questionnaire/data](https://bitbucket.org/andrewsantarin/kaodim-questionnaire-app/src/master/src/api/questionnaire/data). Change the data sets to change the questions presented on the form. Additional settings below:
    - All types can have **`is_required`**. Use this to force the user to input information here to proceed.
    - `TextQuestion` can have **`min_length`**, **`max_length`**. Use these to control how many characters can be provided by the input.
    - `CheckboxQuestion` and `RadioQuestion` should have **`options`**, or else the user will not be given any to choose form when answering.
    - You may also add more sets of questions directly on the source code if you wish. Check your copy of [./src/api/questionnaire/questionnaire.data.js](https://bitbucket.org/andrewsantarin/kaodim-questionnaire-app/src/master/src/api/questionnaire/questionnaire.data.js) and add more questionnaires there.

- Upon solving the question, a results screen will show all questions and their corresponding answers. "_You didn't provide an answer_." will be presented in place of an answer which hasn't been provided.


-----
## File Structure

This application was developed with [domain-driven design](http://marmelab.com/blog/2015/12/17/react-directory-structure.html) in mind instead (with some variations to the rule for modularity) of the usual nature-driven found in most communities.

The core concept is that all modules related to a certain business specification should be grouped not by what technical nature those modules bring, but by what business specification all of those modules serve. The perceived benefit is that features are easier to maintain, reducing the time consumed of jumping from folder to folder in search of files pertaining to that business requirement.

So, instead of...

```
kaodim-questionnaire-app
├── ...
├── src
│   ├── actions
│   │   ├── business-module-1.js
│   │   └── business-module-2.js
│   ├── components
│   │   ├── Business1.css
│   │   ├── Business1.js
│   │   ├── Business2.css
│   │   └── Business2.js
│   ├── containers
│   │   ├── Business1Container.js
│   │   └── Business2Container.js
│   ├── models
│   │   ├── business-module-1.js
│   │   └── business-module-2.js
│   └── reducers
│       ├── business-module-1.js
│       └── business-module-2.js
└── ...
```

...we have:

```
kaodim-questionnaire-app
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── api
│   │   ├── business-module-1
│   │   │   ├── business-module-1.actions.js
│   │   │   ├── business-module-1.data.js
│   │   │   ├── business-module-1.models.js
│   │   │   ├── business-module-1.reducer.js
│   │   │   └── business-module-1.service.js
│   │   └── business-module-2
│   │       ├── business-module-2.actions.js
│   │       ├── business-module-2.data.js
│   │       ├── business-module-2.models.js
│   │       ├── business-module-2.reducer.js
│   │       └── business-module-2.service.js
│   ├── app
│   │   ├── business-module-1
│   │   │   ├── Business1.css
│   │   │   ├── Business1.js
│   │   │   └── Business1Container.js
│   │   └── business-module-2
│   │       ├── Business2.css
│   │       ├── Business2.js
│   │       └── Business2Container.js
│   ├── lib
│   │   ├── helper-library-1
│   │   │   ├── helper-function-1.js
│   │   │   └── helper-function-2.js
│   │   └── helper-library-2
│   ├── index.css
│   ├── index.js
│   ├── root-reducer.js
│   ├── root-saga.js
│   ├── Root.js
│   ├── service-worker.js
│   └── store.js
├── .env
├── package.json
└── yarn.lock
```

### Main Directories And Why They Were Built The Way They Are Built

- `api`
    serves as to the core functionality provider of the application, of which the application will not run without. If needed, this entire directory can be shared with other applications as a published NPM private module or as [a common repository using Git Subtree](https://www.atlassian.com/blog/git/alternatives-to-git-submodule-git-subtree).

- `app`
    acts as the client code. React components (and Redux-connected React containers) specific to the client are stored here. Expected to not be shared with any other application outside of this repository.

- `lib`
    provides common libraries that can be used with any other application, even outside the context of the team that built it. Similar to `api`: if needed, it can be published as a preferably public NPM module.


-----
### Browsing The create-react-app Readme

The boilerplate readme of `create-react-app` is in [CREATE_REACT_APP_README.md](https://bitbucket.org/andrewsantarin/kaodim-questionnaire-app/src/master/CREATE_REACT_APP_README.md?at=feature%2Fc%2FLB9IQOoG) if you need to look back at that.
