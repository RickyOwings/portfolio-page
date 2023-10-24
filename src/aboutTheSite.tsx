import React from 'react';

export default function AboutTheSite() {
    return <div className='center-elements'> 
        <div className='content-width'>
            <h2>About This Website</h2>
            <p>
                This is my portfolio website (no duh!). It has gone through several different iterations as I have made it...
            </p>
            <h3>Orignal Site Conversion</h3>
            <p>
                The original site was made with just HTML, CSS, and Javascript. This was good and all, but it really limited some of the things that I wanted it to do. For example, in the projects page, I would have to remake the same section over and over that contains each game. They are all basically the same, it is just that the content is different. I could have just used a templating engine, but the issue with that is, to my knowledge, you would need a backend server in order for it to work, which this is a static website so that wouldn't do. I decided to learn React and I converted the site over to use that. In the process, I also converted all of the code from Javascript to Typescript because why not!
            </p>
            <h3>Features That I Think Are Cool</h3>
            <p>
                One thing that I found interesting was the way that I implemeneted the "theme changer". I essentially just have a "themes" object, and you essentially use that object to change different css properties that you define in the object. The cool thing is that it goes through all the key value pairs that you define in the object to chane different css variables that effect the styling. This makes it really easy to add new themes to the theme changer. I even added cookie support for it so that your machine can remember what theme you were using when you go back onto the website. There are probably a million better ways I could have done it, but it is cool and it works!
            </p>
            <p>
                In converting the website to React, I was able to make the site a single page application. When you click something in the navbar at the top, it does not reload the whole page over again. This was because I made the content of the website use a "useState". Part of me is saying that it is not a good thing to do that, but it works and it is cool! The only thing that I don't like about it currently is that I can't link a certain part of the website, like the music page for example... but I could easily do that... and I will... next thing I do!
            </p>
            <p>
                The website is hosting using Github Pages. What I really like, is that I have implemented a github action that compiles the website down into the build folder and pushes the build folder to a separate branch of the repository that contains the actual build down code that is served to the user. It really just makes it as easy as typing in "git push" inside the terminal in order to make any changes to the actual website!
            </p>
            <h3>Things to improve and I don't like</h3>
            <p>
                I don't like the way that I am working with styles. The styles are contained in the "public" folder. I would like to figure out how to use the react import styles syntax so that I can have the styles grouped together with their respective elements so that the code is more concise and easier to read. Currently, you have to sift through the css file to find the styling for different elements, which I do not like.
            </p>
            <p>
                When loading the website, the elements on the projects page are scaled down when loading. I would like to implement some loading element for them so that it looks cleaner while loading. Maybe even for the entire content page as well...
            </p>
        </div>
    </div>
}