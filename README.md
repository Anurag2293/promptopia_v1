## Promptopia V1

This is a Next.js project web application which can be used to create and share AI prompts to all users.


### Key Features
- Full Stack App
- Latest version of Next.js
- Tailwind CSS for Styling
- Google Authentication using Next Auth


### Run Locally
1. Download and unzip the zipped code
2. In the source directory run ```npm install```
3. Create a `.env` file and add the following keys:
    ````
    MONGODB_URI=mongodb://localhost:27017
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_URL_INTERNAL=http://localhost:3000

    NEXTAUTH_SECRET=
    GOOGLE_ID=
    GOOGLE_CLIENT_SECRET=
    ````
4. For `NEXTAUTH_SECRET` run `openssl rand -base64 32` in the command line to generate a random secret string
5. For `GOOGLE_ID` & `GOOGLE_CLIENT_SECRET`, go to [Google Cloud Console](https://console.cloud.google.com/welcome)
    1. Create a new project and name it `Promtopia_v1`
    2. In the Welcome screen go to `Navigation Menu` -> `APIs & Services` -> `OAuth consent screen`
    3. Click Create and then Enter **App information** & **Developer contact information**
    4. After this Navigate to **Credentials** tab click `CREATE CREDENTIALS` -> `OAUTH CLIENT ID`
    5. In **Applicaton type** dropdown, choose `Web Application`
    6. Now under **Authorized JavaScript origins**, enter `http://localhost:3000`
    7. Under **Authorized redirect URIs**, enter `http://localhost:3000` and `http://localhost:3000/api/auth/callback/google`
    8. Click `CREATE` and in the pop up you get the `Client ID` and `Client secret` corresponding to `GOOGLE_ID` & `GOOGLE_CLIENT_SECRET` respectively.
6. Now run `npm run dev` to start the App.
7. The App will be live on `http://localhost:3000`


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
