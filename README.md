# Kratos Self-Service UI

This is my attempt at developing self-service UI for [Ory Kratos](https://github.com/ory/kratos) in SvelteKit. It uses [Melt UI](https://github.com/melt-ui/melt-ui) and TailwindCSS for styling and components.

![Showcase](./docs/images/showcase.gif)


## Features

- Mobile support
- Dark mode
- All flows supported: login, logout, signup, recovery, verification, settings
- Tested self-service methods: password, webauthn, code, totp
- Error, success and info messages

## Environment variables

```bash
# Publicly available Kratos instance URL, without trailing slash
PUBLIC_KRATOS=http://localhost:4433

# Name of the organization/instance, used for page titles
PUBLIC_ORGANIZATION=My Org
# Links to the Terms of Service and Privacy Policy, used for registration page
PUBLIC_TERMS_OF_SERVICE=http://localhost/terms-of-service
PUBLIC_PRIVACY_POLICY=http://localhost/privacy-policy
```

## Dockerfile

There is also a dockerfile to build containerized version of this self-service, but the
method used is not production ready as it uses Vite Preview and not proper Node.js server.
Why? Well, for whatever reason when running the build with `node build`, it does not work
and javascript runs out of memory or something.

## Screenshots

![Login screen](./docs/images/login.png)
![Sign up screen](./docs/images/signup-dark.png)
![Session screen](./docs/images/session.png)
![Settings - Profile](./docs/images/settings-profile.png)
![Settings - TOTP](./docs/images/settings-totp.png)