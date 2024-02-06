FROM node:18-alpine AS prepare
WORKDIR '/app'
COPY package.json package-lock.json ./
RUN npm install
COPY . .

FROM prepare as test
RUN npm run test:ci

FROM prepare as builder
RUN npm run build

FROM nginx AS server
COPY --from=builder /app/build/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 3000
