FROM node:12 as dev
WORKDIR /app
RUN apt-get update && apt-get install -y libglu1
CMD npm i && npm run dev


FROM node:12 as build
ARG ADMIN_PORT
ARG ADMIN_ENDPOINT
ARG ADMIN_ENDPOINT_WS
ARG ADMIN_AUTH_VK_URL

ENV ADMIN_PORT $ADMIN_PORT
ENV ADMIN_ENDPOINT $ADMIN_ENDPOINT
ENV ADMIN_ENDPOINT_WS $ADMIN_ENDPOINT_WS
ENV ADMIN_AUTH_VK_URL $ADMIN_AUTH_VK_URL
WORKDIR /app
COPY . .
RUN apt-get update && apt-get install -y libglu1
RUN npm i && npm run build


FROM mhart/alpine-node:12
WORKDIR /app
COPY --from=build /app/build /app/build
COPY --from=build /app/package.json /app/
COPY --from=build /app/package-lock.json /app/
#RUN apt-get update && apt-get install -y libglu1
RUN npm i --production
CMD npm run start

