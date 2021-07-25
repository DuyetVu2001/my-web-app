> 1.  save token in local storage
> 1.  form sign in/ sign up
> 1.  transform nav and post when user login or admin log in
> 1.  responsive
> 1.  refactor all code, and deploy

# Components flow

```mermaid
graph TD;
    NavRightContext --> toggleNavRight

    toggleNavRight --> showNavRight
    toggleNavRight --> hideNavRight
```

```mermaid
graph TD;
    AuthContext --> user
    AuthContext --> handle_form_submit

    user --> signIn
    user --> signOut

    handle_form_submit  --> signInFormSubmit
    handle_form_submit  --> signUpFormSubmit
```

```mermaid
graph TD;
    App --> Header
    App --> NavRight
    App --> PostDetail

    NavRight --> SignInForm
    NavRight --> SignUpForm
```

```mermaid
graph TD;
    post --> img
    post --> title
    post --> desc
    post --> content
    post --> genre
    post --> time_read
```
