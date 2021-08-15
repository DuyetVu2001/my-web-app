> 1.  form sign in/ sign up
> 1.  responsive

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
