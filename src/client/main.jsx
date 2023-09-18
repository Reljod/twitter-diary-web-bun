export default function Login() {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;

    fetch("/api/v1/login", {
      method: form.method,
      headers: {
        Authorization: `Basic ${btoa(
          `${form.username.value}:${form.password.value}`,
        )}`,
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  return (
    <main className="flex h-screen items-center">
      <section
        id="login-form"
        className="mx-auto flex h-fit w-96 flex-col rounded-md bg-gray-100 px-6 py-12"
      >
        <h2 className="text-3xl">Sign in</h2>
        <form
          className="flex flex-col pt-4"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col pb-2">
            <label htmlFor="username" className="text-sm opacity-60">
              Username
            </label>
            <input id="username" className="rounded-xl px-2" />
          </div>
          <div className="flex flex-col pb-2">
            <label htmlFor="pasword" className="text-sm opacity-60">
              Password
            </label>
            <input type="password" id="password" className="rounded-xl px-2" />
          </div>
          <button
            id="login-form-btn"
            type="submit"
            className="mt-4 w-2/3 self-center rounded-3xl bg-blue-600 py-2 text-white"
          >
            Login
          </button>
        </form>
      </section>
    </main>
  );
}
