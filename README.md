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

## Docker

You can use available Dockerfile to build containerized version of the self-service yourself.

There is also prebuilt container available at [Docker Hub](https://hub.docker.com/r/karlisvagalis/kratos-selfservice) at `karlisvagalis/kratos-selfservice` with only one tag
`latest`.

### Environment variables

`PUBLIC_KRATOS` - Publicly available Kratos instance URL, without trailing slash

`PUBLIC_ORGANIZATION` - Name of the organization/instance, used for page titles

`PUBLIC_TERMS_OF_SERVICE` - Link to the Terms of Service

`PUBLIC_PRIVACY_POLICY` - Link to the Privacy Policy

## Screenshots

![Login screen](./docs/images/login.png)
![Sign up screen](./docs/images/signup-dark.png)
![Session screen](./docs/images/session.png)
![Settings - Profile](./docs/images/settings-profile.png)
![Settings - TOTP](./docs/images/settings-totp.png)