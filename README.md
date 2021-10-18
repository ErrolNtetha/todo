# Overview
A Todo web appliaction that is built using MongDB, Express, React and Node (MERN). The application is aimed at making the user experience much more enjoyable
and rather a little different 'look and feel' than the ones you used to. 

# Key Takeaway
This project is aimed at developing my skills on the software development industry. I am just a beginner who aims to get better at developing application. 
I always believe that we all start somewhere. I am consistently looking for some improvements and therefore if at any case you see a bug or 
a better way i can improve my code, please feel free to send me a PR and i would gladly look into it.

# Using this project
If you wish to clone this project to your local system, you can do so. The project uses MongoDB to save user data, so that means you will need your unique secret key on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) to make use of the database intergration, or else modify the code to make use of your prefered database.

It is important to note that in order to make use of the repository, you are required to setup a SSH Key to connect to GitHub if you haven't already. See [GitHub documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh) for more information on doing this.

## Step 1: Cloning the Project
Copy and paste this to your terminal and press `Enter`:
```
git clone git@github.com:ErrolNtetha/todo.git
```

## Step 2: Navigating to Project Folder
After you have cloned this project you will have to go inside that folder by:
```
cd todo
```

## Step 3: Installing Project Dependencies
You will then have to install all the modules that are used in this project in order for it to work.
You will do this by typing this in your terminal, depending on your package manager you are using:
```
npm install
``` 
or
```
yarn install
```

## Step 4: Creating Environmental Variable
Before running this project with `npm start` or `yarn start`, it is advisable that you create an enviromental variable file (`.env`) in the `backend` folder where you will store your secret key in. Remember the secret key we spoke about in the **Using This project** section? Now is the perfect time to make use of it. The backend folder is found inside the `src/backend`.

However, I shouldn't have created backend folder here by the way, but relax, this doen't affect the functionality of the application anyway. It is just a matter of preferrance. You are free to modify the folder structure of this project to your own likings.

So now that you have created a `.env` file, in the first line, copy and paste this:
```
URL=mongodb+srv://username:<password>@cluster0.v8svw.azure.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

