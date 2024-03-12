# Multistage build to reduce final size of the image

# 1st stage

FROM node:21-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN npm prune --omit=dev

# 2nd stage

FROM node:21-alpine

WORKDIR /app

COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .

EXPOSE 3000

ENV NODE_ENV=production

ENV PUBLIC_KRATOS="http://localhost:4433"
ENV PUBLIC_ORGANIZATION="Kratos"
ENV PUBLIC_TERMS_OF_SERVICE="http://localhost/terms-of-service"
ENV PUBLIC_PRIVACY_POLICY="https://localhost/privacy-policy"

CMD ["node", "build"]