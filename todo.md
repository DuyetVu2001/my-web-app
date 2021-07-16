>To day
>1. Check phone book
>1. Memory card recovery

>1. Use redux
>1. Code CRUD, server - client
>1. Unify Router client and server side

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

