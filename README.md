
## How to configure for use! 

- create the files `env.development` for local & `.env.production` for production
```sh
PORT=<PORT-NUMBER>
DB_URL=<MONGODB_URL>
SENDGRID_API_KEY=<SENDGRID_API_KEY>
JWT_SECRET=<JWT_SECRET>
SMTP_FROM_EMAIL=<SMTP_FROM_EMAIL>
```
GRAPHQl API's - 
1. Register (Create User)

```sh
    mutation {
		register (input: {
			email: "info@techyaura.com",
			password: "techyaura"
		}) {
			hashToken
			ok
		}
	}
```

2. Register Verification(Verify User)

```sh
    mutation {
    	  emailVerificationByOtp(input: { otp: "<OTP>", hashToken: "<hashToken>" }){
    	    message
    	  }
    }
```

3. Login (with registered User)

```sh
    query {
	  login(
		  input: {
			email: "info@techyaura.com", 
	  		password: "techyaura"
		  }){
	    message
	    token
	    user {
	      email
	      id
	    }
	  }
	}
```

4. TODOS (create) - Authenticated Request(Must sent Authorization HEADER - format: `Authorization: Bearer <Token>`)

```sh
    mutation {
	  addTodo (input: { title: "Hello World" }) {
	    message
    	ok
	  }
	}
```

5. TODOS (read) - Authenticated Request(Must sent Authorization HEADER - format: `Authorization: Bearer <Token>`)

```sh
   query {
		todoList (first:5, offset: 1, sort: {createdAt: ASC }, filter: {title_contains: "techyaura"}) {
			totalCount,
			data {
				createdAt
				title
				isCompleted
				user {
				email
				}
			}
		}
	}
```


6. TODOS (View) - Authenticated Request(Must sent Authorization HEADER - format: `Authorization: Bearer <Token>`)

```sh
    query {
	  todoView(id: "<<TODO-ID>>") {
	    title
	  }
	}
```


6. TODOS (update) - Authenticated Request(Must sent Authorization HEADER - format: `Authorization: Bearer <Token>`)

```sh
    mutation {
	  updateTodo (id: "<<TODO-ID>>", input: { title: "Hello World - 2" }) {
	    message
    	ok
	  }
	}
```

7. TODOS (delete)  - Authenticated Request(Must sent Authorization HEADER - format: `Authorization: Bearer <Token>`)

```sh
    mutation {
	  deleteTodo(id: "<TODO-ID>") {
	    message
    	ok
	  }
	}
```
