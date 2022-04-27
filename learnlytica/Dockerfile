FROM node
WORKDIR /thbs-app
COPY . .
RUN npm install
RUN npm run build 


FROM base As prodbuild
FROM nginx:alpinc
COPY --form=prodbuild /thbs-app/dist/* /usr/share/nginx/html