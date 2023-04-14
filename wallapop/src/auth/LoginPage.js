const LoginPage = () => {
    return (
        <div>
      <h1>Log in to Twitter</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={credentials.username}
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={credentials.password}
        />
        <Button type="submit" variant="primary" disabled={buttonDisabled}>
          Log in
        </Button>
        <input
          type="file"
          name="photo"
          onChange={event => {
            console.log(event.target.files[0]);
          }}
        />
      </form>
    </div>
  );
}
    )
};

export default LoginPage;