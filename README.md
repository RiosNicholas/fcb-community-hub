# Web Development Project 1 - FC Barcelona Community Hub

Submitted by: Nicholas Rios

This web app: **Designed for FC Barcelona ⚽ fans who want to stay informed about the team's upcoming match fixtures.**

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **There is a unique theme for events or resources relevant to a specific community**
- [x] **At least 10 unique resources or events are displayed in a responsive card format**

The following **optional** features are implemented:

- [x] Buttons or links to a related resources are on each card component
- [x] The site is responsive for both desktop and mobile formats

The following **additional** features are implemented:

* [x] Dynamically renders opponent team logos using a hash map data structure 
* [x] Stored opponent team names using a ternary operator
* [x] Implements regex to convert team names into more easily parsible names
* [x] Utilized a CSS framework to expedite the styling process
* [x] Added a background image to the web app

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://imgur.com/a/qc1bDkH' title='Video Walkthrough' width='' alt='Video Walkthrough' />
<img src='2023-09-15 20-40-38.gif' width=''  alt='Video Walkthrough' />

## Notes

While building the application, I had issues with importing images to display team logos. I couldn't use string interpolation to dynamically create image paths based on prop values, so I opted for a lengthier approach using a hashmap to select imported images in my JSX component file. 

## License

    Copyright [2023] [Nicholas Rios]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
