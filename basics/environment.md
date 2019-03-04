# Electro Sounds: Basics

Follow the instructions below to setup a development environment for working with nodejs and javascript.

## Setup Development Environment

- Download and install the [Atom](https://atom.io/) text editor (alternatively you can try the [Sublime Text](http://sublimetext.com) editor)
- Open the Terminal and install the Command Line Tools [link](https://www.moncefbelyamani.com/how-to-install-xcode-homebrew-git-rvm-ruby-on-mac) and run `xcode-select --install` inside the Terminal
- Install [Homebrew](https://brew.sh/), the missing package manager for macOS
- After you have successfully installed brew, run `brew update`, then use brew to install [git]() with `brew install git`


## Install node

- Install [node](https://docs.npmjs.com/getting-started/installing-node) with `brew install node`.
- Inside the terminal type `node -v` and you should see node's version number, do the same for npm, the Node Package Manager, `npm -v`
- Lets install the first node package, [live-server](https://github.com/tapio/live-server), from the Terminal with `npm install -g live-server`. Live-server is a development http server with live reload capability.


## Make and serve an html file

- Now run the following commands line by line
  - `cd ~/Desktop`
  - `mkdir hello-world`
  - `cd hello-world`
  - `echo '<h1>Hello World</h1>' > index.html`
  - `cat index.html`
  - `live-server .`
- If a browser window opened and shows _Hello World_ in big black letters, you are all set. In case this failed, lets see if we can find the bug and fix it.

## Browser Development Setup

- Now that you have managed to run your first local http server, lets open the Developer Tools. If you are using the Chrome browser, the tools can be opened from the Menubar under _View → Developer → Developer Tools_
- You should see a side-view pop up at the bottom or on the right side of your browser window. Inside the Tab-bar you can find the following sections which can be very useful when developing your website/web-app:
  - Elements: shows you the source code of the HTML document
  - Console: shows you the JavaScript log
  - Sources: the files used to display the current page

### Links

- [Github](https://github.com/) is a development platform inspired by the way you work. From open source to business, you can host and review code, manage projects, and build software alongside millions of other developers.
- [Atom](https://atom.io/) a text editor.
- [nodejs](https://nodejs.org/) is a JavaScript runtime built on Chrome's V8 JavaScript engine. [npm](https://www.npmjs.com/) is Node.js' package ecosystem, it is the largest ecosystem of open source libraries in the world.
