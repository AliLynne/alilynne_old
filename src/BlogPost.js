import React from 'react';
import screenshot1 from './assets/firstcolumn.png';
import screenshot2 from './assets/firstship.png';

function BlogPost() {
  return (
    <li className="BlogPost">
      <header>
        <h4>What Do I Do Now?</h4>
        <h5>Date Posted: June 3, 2019</h5>
      </header>
        <p>We've all seen this question: "I've done some tutorials and now I want to build something on my own. Where should I start?" Predictably, the answer is always 'Start small! Just pick a simple, little thing and make that!' As a beginner, I found this to be an incredibly frustrating answer. Not because I thought it was wrong. It's entirely correct, good, advice. But it's incomplete.</p>
        <p>One of my hobbies is crochet. When I was first starting to learn that, I made squares out of basic stitches. It's a bit like following a programming tutorial. Then I had the same question. What do I do now? Where do I go from here?</p>
        <p>That got the same answer. Start with something small. Pick something easy. Don't overwhelm yourself. Here though, it was a lot easier to find a good project. Most commercially published crochet patterns are labelled by their difficulty. The Craft Yarn Council has rough standards for how to decide where a pattern falls on the <a href="https://www.craftyarncouncil.com/standards/project-levels">difficulty scale.</a></p>
        <p>So I just went through until I found a pattern labeled "Easy" that was something I'd use and used yarn I liked to work with. These days, I can visually look at a crocheted item and easily know whether or not it would be suitable for a beginner or not. But it took me quite awhile to get to that stage.</p>
        <p>It's been more complicated with finding new programming projects. For months I would start a project and get completely bogged down in details. I would want to start perfectly so I didn't run into any issues down the line. I didn't know when in the stage of a project to make it available to the public. I'd try to break it down into small parts, but even then it felt like it was all too much to do and I couldn't figure out where to start.</p>
        <p>This weekend I sat down with a mentor to talk about break projects down into bite-sized bits and when to 'ship' i.e. share with the public. The first thing they asked me as 'What's the most important and immediate goal?' Which, frankly, wasn't something I'd asked myself. I had super long term goals. And I had medium term goals. My answer was pretty simple: 'I need a website I can send to people.' So they had me title the first column on my portfolio project page on GitHub with that.</p>
        <img className='BlogPost__Image' src={screenshot1} alt='First Column' />
        <p>Then we sat and talked about the absolute minimum of things I needed to have on the website before it went live. This list was pretty simple once I accepted that there wasn't going to be anything 'perfect' about this first version.</p>
        <p>The list: </p>
        <ul>
          <li>My Name</li>
          <li>A link to my github profile</li>
          <li>My email address so I could be contacted</li>
        </ul>
        <p>And that was it! I kept asking if they were sure I didn't need more than that. Turns out, I was just complicating things in my head. Once I knew what items I needed on my website I could break it all down into discrete tasks.</p>
        <p>Here's the list I came up with of the things that needed to be done before my site went live.</p>
        <ul>
          <li>Identify a host - I went with github pages</li>
          <li>Identify framework (if any) - I went with React and I'll explain why in a later post</li>
          <li>Run Create-React-App</li>
          <li>Set up git repo</li>
          <li>Push to git</li>
          <li>Add Name - Commit</li>
          <li>Add Contact Info - Commit</li>
          <li>Add GitHub Link - Commit</li>
          <li>Push to Git</li>
        </ul>
        <p>And just like that, I had a project and a plan. Because I used GitHub Pages, as soon as I pushed to Git after adding all of my items, my site was live! It took me far longer to sit and plan what I wanted to do than it did to sit down and actually do it. But I couldn't sit down and make a plan until I understood what everyone meant by 'small' or 'simple.' They literally meant 'the absolute smallest thing you can do and still have code to ship.' I could have pushed my site live with just my name. Since this was the beginning of the project and I'm working by myself, my mentor suggested I go ahead and do all of the things in my list before I went live. In future iterations I'll try to stick to small changes.</p>
        <p>Here's what I ended up shipping. It's super simple, doesn't even have much styling except to center things on the page.</p>
        <img className='BlogPost__Image' src={screenshot2} alt='First Column' />
    </li>
  );
}

export default BlogPost;